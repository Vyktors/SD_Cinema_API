import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Representation from 'App/Models/Representation'
import { DateTime } from 'luxon'

export default class RepresentationSeeder extends BaseSeeder {
  public async run() {
    await Representation.updateOrCreateMany(
      ['date', 'heure'],
      [
        {
          filmId: 1,
          date: DateTime.local(2021, 11, 20).toISODate(),
          heure: DateTime.local(2021, 11, 20, 8, 30).toISOTime(),
          //heure: DateTime.tim
        },
        {
          filmId: 2,
          date: DateTime.local(2021, 11, 20).toISODate(),
          heure: DateTime.local(2021, 11, 25, 10, 45).toISOTime(),
          //heure: DateTime.tim
        },
        {
          filmId: 3,
          date: DateTime.local(2021, 11, 2).toISODate(),
          heure: DateTime.local(2021, 11, 28, 12, 0).toISOTime(),
          //heure: DateTime.tim
        },
      ]
    )
  }
}
