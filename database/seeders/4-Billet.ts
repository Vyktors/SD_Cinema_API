import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Billet from 'App/Models/Billet'

export default class BilletSeeder extends BaseSeeder {
  public async run() {
    await Billet.updateOrCreateMany('nom', [
      {
        prix: 10.5,
        nom: '2 à 17 ans',
        extra: false,
      },
    ])
  }
}
