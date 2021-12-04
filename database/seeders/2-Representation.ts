import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Representation from 'App/Models/Representation'
import { DateTime } from 'luxon'

export default class RepresentationSeeder extends BaseSeeder {
  public async run() {
    let fId = 1
    await Representation.updateOrCreateMany(
      ['date', 'heure'],
      [
        //5 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 12, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 21, 0).toISOTime(),
        },
        //6 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 15, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 21, 30).toISOTime(),
        },
        //7 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 22, 0).toISOTime(),
        },
        //8 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 21, 45).toISOTime(),
        },
        //9 dec met rien?
        //10 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 13, 45).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 19, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 22, 30).toISOTime(),
        },
        //11dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 16, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 20, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 23, 30).toISOTime(),
        },
      ]
    )

    fId = 2
    await Representation.updateOrCreateMany(
      ['date', 'heure'],
      [
        //5 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 12, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 21, 0).toISOTime(),
        },
        //6 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 15, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 21, 30).toISOTime(),
        },
        //7 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 22, 0).toISOTime(),
        },
        //8 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 21, 45).toISOTime(),
        },
        //9 dec met rien?
        //10 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 13, 45).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 19, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 22, 30).toISOTime(),
        },
        //11dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 16, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 20, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 23, 30).toISOTime(),
        },
      ]
    )

    fId = 3
    await Representation.updateOrCreateMany(
      ['date', 'heure'],
      [
        //5 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 12, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 21, 0).toISOTime(),
        },
        //6 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 15, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 21, 30).toISOTime(),
        },
        //7 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 22, 0).toISOTime(),
        },
        //8 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 21, 45).toISOTime(),
        },
        //9 dec met rien?
        //10 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 13, 45).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 19, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 22, 30).toISOTime(),
        },
        //11dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 16, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 20, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 23, 30).toISOTime(),
        },
      ]
    )

    fId = 5
    await Representation.updateOrCreateMany(
      ['date', 'heure'],
      [
        //5 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 12, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 5).toISODate(),
          heure: DateTime.local(2021, 12, 5, 21, 0).toISOTime(),
        },
        //6 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 15, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 18, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 6).toISODate(),
          heure: DateTime.local(2021, 12, 6, 21, 30).toISOTime(),
        },
        //7 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 15, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 7).toISODate(),
          heure: DateTime.local(2021, 12, 7, 22, 0).toISOTime(),
        },
        //8 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 12, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 8).toISODate(),
          heure: DateTime.local(2021, 12, 8, 21, 45).toISOTime(),
        },
        //9 dec met rien?
        //10 dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 13, 45).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 16, 15).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 19, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 10).toISODate(),
          heure: DateTime.local(2021, 12, 10, 22, 30).toISOTime(),
        },
        //11dec
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 16, 0).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 20, 30).toISOTime(),
        },
        {
          filmId: fId,
          date: DateTime.local(2021, 12, 11).toISODate(),
          heure: DateTime.local(2021, 12, 11, 23, 30).toISOTime(),
        },
      ]
    )
  }
}
