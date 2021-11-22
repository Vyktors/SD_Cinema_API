import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Billet from 'App/Models/Billet'

export default class BilletSeeder extends BaseSeeder {
  public async run() {
    await Billet.updateOrCreateMany(
      ['ageId', 'heureId', 'journeeId'],
      [
        {
          ageId: 1,
          heureId: 1,
          journeeId: 1,
          prix: 10,
        },
      ]
    )
  }
}
