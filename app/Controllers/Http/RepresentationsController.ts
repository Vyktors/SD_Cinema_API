import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Representation from 'App/Models/Representation'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'
import Film from 'App/Models/Film'

export default class RepresentationsController {
  public async getFilmSchedule({ params }: HttpContextContract) {
    const filmId = params.id
    const schedule: any[] = []
    let dailySchedule: any[] = []
    for (let i = 0; i < 7; i++) {
      dailySchedule = await Representation.query()
        .where('date', '=', DateTime.now().plus({ days: i }).toISODate())
        .andWhere('film_id', '=', filmId)
      schedule[i] = dailySchedule.map((representation) => {
        return representation.serialize({
          fields: {
            pick: ['date', 'heure'],
          },
        })
      })
    }
    return schedule
  }

  public async getWeekSchedule() {
    const test = await Database.rawQuery(
      "select distinct film_id from representations where date >= now()::date and date< (now() + interval '1 week')::date"
    )
    const filmIds = test.rows

    let filmInfo
    let filmDaySchedule
    const schedule: any[] = []
    let weeklySchedule: any[] = []
    for (let i = 0; i < filmIds.length; i++) {
      weeklySchedule = []
      //Recupere les infos du film
      filmInfo = await Film.query().where('id', '=', filmIds[i].film_id).first()
      //Recupere les infos pour les representations, un jour à la fois
      for (let j = 0; j < 7; j++) {
        weeklySchedule[j]
        filmDaySchedule = await Representation.query()
          .where('date', '=', DateTime.now().plus({ days: j }).toISODate())
          .andWhere('film_id', '=', filmIds[i].film_id)
        weeklySchedule[j] = filmDaySchedule.map((representation) => {
          return representation.serialize({ fields: { pick: ['date', 'heure', 'film_id'] } })
        })
      }
      //Serialize film info et insere les infos dans le tableau final
      schedule.push({
        film: filmInfo.serialize({ fields: { pick: ['id', 'titre', 'img'] } }),
        horaire: weeklySchedule,
      })
    }
    return schedule
  }
}
