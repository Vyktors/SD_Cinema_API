import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FilmVedette from 'App/Models/FilmVedette'

export default class FilmVedetteSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await FilmVedette.updateOrCreateMany(
      ['film1_id', 'film2_id', 'film3_id', 'film4_id'],
      [
        {
          film1_id: 1,
          film2_id: 2,
          film3_id: 3,
          film4_id: 4,
        },
      ]
    )
  }
}
