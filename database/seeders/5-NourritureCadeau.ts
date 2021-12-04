import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Nourriture from 'App/Models/Nourriture'
import Cadeau from 'App/Models/Cadeau'

export default class NourritureCadeauSeeder extends BaseSeeder {
  public async run() {
    await Nourriture.updateOrCreateMany('nom', [
      {
        nom: 'hot-dog',
        prix: 3,
      },
    ])

    await Cadeau.updateOrCreateMany('nom', [
      {
        nom: 'Carte cadeau 15$',
        prix: 15,
        img: '',
      },
    ])
  }
}
