import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Film from 'App/Models/Film'
import { DateTime } from 'luxon'
import Database from '@ioc:Adonis/Lucid/Database'
import FilmVedette from 'App/Models/FilmVedette'
import Films from 'Database/migrations/1637077743526_films'

export default class FilmsController {
  public async getAiringFilmThumbnails() {
    //recupere les ids des featureds
    const featuredFilms = await FilmVedette.query().orderBy('id', 'desc').first()
    const featIds: number[] = []
    if (featuredFilms?.film1_id) {
      featIds.push(featuredFilms?.film1_id)
    }
    if (featuredFilms?.film2_id) {
      featIds.push(featuredFilms?.film2_id)
    }
    if (featuredFilms?.film3_id) {
      featIds.push(featuredFilms?.film3_id)
    }
    if (featuredFilms?.film4_id) {
      featIds.push(featuredFilms?.film4_id)
    }

    //Films reguliers
    const regulars = await Film.query()
      .where('dateSortie', '<=', DateTime.now().toISODate())
      .andWhere('dateFin', '>=', DateTime.now().toISODate())
      .preload('genre')
    const regularsJSON = regulars.map((film) => {
      return film.serialize({
        fields: {
          pick: ['id', 'titre', 'img', 'date_sortie', 'date_fin'],
        },
      })
    })

    //Films featured
    const featureds = await Film.query()
      .where('dateSortie', '<=', DateTime.now().toISODate())
      .andWhere('dateFin', '>=', DateTime.now().toISODate())
      .andWhereIn(['id'], featIds)
      .preload('genre')
    const featuredsJSON = await featureds.map((film) => {
      return film.serialize({
        fields: {
          pick: ['id', 'titre', 'img', 'date_sortie', 'date_fin'],
        },
      })
    })

    return {
      regular: regularsJSON,
      featured: featuredsJSON,
    }
  }

  public async getComingFilmThumbnails() {
    const comingFilms = await Film.query()
      .where('dateSortie', '>=', DateTime.now().plus({ days: 1 }).toISODate())
      .andWhere('dateSortie', '<=', DateTime.now().plus({ months: 1 }).toISODate())
      .orderBy('dateSortie', 'asc')
      .limit(4)
      .preload('genre')
    const comingFilmsJSON = comingFilms.map((film) => {
      return film.serialize({
        fields: {
          pick: ['id', 'titre', 'img', 'date_sortie', 'date_fin'],
        },
      })
    })
    return comingFilmsJSON
  }

  public async getFilm({ params, response }: HttpContextContract) {
    const film = await Film.query().where('id', '=', params.id).preload('genre').first()

    const filmJSON = film?.serialize()

    return filmJSON
  }

  public async getFilm2(id) {
    try {
      const film = await Film.query().where('id', '=', id).firstOrFail()
      return film
    } catch (e) {
      return null
    }
  }
}
