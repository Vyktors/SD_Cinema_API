import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Nourriture from 'App/Models/Nourriture'
import Cadeau from 'App/Models/Cadeau'

export default class NourritureCadeauSeeder extends BaseSeeder {
  public async run() {
    await Nourriture.updateOrCreateMany('nom', [
      {
        nom: 'Hot-Dog',
        prix: 5,
      },
      {
        nom: 'Pop-corn',
        prix: 5,
      },
      {
        nom: 'Boisson en fontaine',
        prix: 3,
      },
      {
        nom: 'Sac de bonbons',
        prix: 5,
      },
      {
        nom: 'Trio',
        prix: 10,
      },
    ])

    await Cadeau.updateOrCreateMany('nom', [
      {
        nom: 'Carte cadeau 15$',
        prix: 15,
        img: 'https://cdn.shopify.com/s/files/1/0515/1978/3089/products/carte-ccn-15_250x250@2x.png?v=1606760163',
      },
      {
        nom: 'Carte cadeau 30$',
        prix: 30,
        img: 'https://cdn.shopify.com/s/files/1/0515/1978/3089/products/carte-ccn-30_715x.png?v=1606768725',
      },
      {
        nom: 'Carte cadeau 50$',
        prix: 50,
        img: 'https://cdn.shopify.com/s/files/1/0515/1978/3089/products/carte-cse-50_b3d9c29e-7b21-4725-80fe-6ebcea92f341_715x.png?v=1606765942',
      },
    ])
  }
}
