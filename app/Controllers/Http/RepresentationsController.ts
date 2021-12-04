import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Representation from 'App/Models/Representation'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'
import Film from 'App/Models/Film'

export default class RepresentationsController {
  public async getFilmSchedule({ params, response }: HttpContextContract) {
    const filmId = params.id
    const horaire = await Representation.query()
      .where('date', '>=', DateTime.now().toISODate())
      .andWhere('date', '<=', DateTime.now().plus({ weeks: 1 }).toISODate())
      .andWhere('film_id', '=', filmId)

    const horaireJSON = horaire.map((representation) => {
      return representation.serialize({
        fields: {
          pick: ['date', 'heure'],
        },
      })
    })
    return horaireJSON
  }

  public async getWeekSchedule() {
    const test = await Database.rawQuery(
      "select distinct film_id from representations where date >= now()::date and date< (now() + interval '1 week')::date"
    )
    const filmIds = test.rows

    let filmInfo
    let filmSchedule
    const schedule: any[] = []
    for (let i = 0; i < filmIds.length; i++) {
      //Recupere les infos du info et horaire de la semaine du film
      filmInfo = await Film.query().where('id', '=', filmIds[i].film_id).first()
      filmSchedule = await Representation.query()
        .where('date', '>=', DateTime.now().toISODate())
        .andWhere('date', '<=', DateTime.now().plus({ weeks: 1 }).toISODate())
        .andWhere('film_id', '=', filmIds[i].film_id)
      //Serialize données et insere dans tableau
      schedule.push({
        film: filmInfo.serialize({ fields: { pick: ['id', 'titre', 'img'] } }),
        horaire: filmSchedule.map((representation) => {
          return representation.serialize({ fields: { pick: ['date', 'heure', 'film_id'] } })
        }),
      })
    }
    return schedule
  }
}
