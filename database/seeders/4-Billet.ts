import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Billet from 'App/Models/Billet'

export default class BilletSeeder extends BaseSeeder {
  public async run() {
    await Billet.updateOrCreateMany('nom', [
      {
        prix: 8.5,
        nom: 'Jeunes (2 à 17ans)',
        extra: false,
      },
      {
        prix: 12,
        nom: 'Adulte (18 à 65 ans)',
        extra: false,
      },
      {
        prix: 9.5,
        nom: "Âge d'or (66 ans et plus)",
        extra: false,
      },
      {
        prix: 7,
        nom: 'Mardi',
        extra: true,
      },
      {
        prix: 10,
        nom: 'Étudiants (Cégep et Université)',
        extra: true,
      },
    ])
  }
}
