import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genre from 'App/Models/Genre'
import Film from 'App/Models/Film'
import { DateTime } from 'luxon'

export default class GenreSeeder extends BaseSeeder {
  public async run() {
    await Genre.updateOrCreateMany('nom', [
      {
        nom: 'Unnamed',
      },
      {
        nom: 'Action',
      },
      {
        nom: 'Horreur',
      },
    ])

    await Film.updateOrCreateMany('titre', [
      {
        titre: 'Titre horreur',
        description: 'Un film très effrayant',
        genre_id: 3,
        rating: 5,
        img: '',
        acteur: 'Un acteur',
        realisateur: 'Un réalisateur',
        dureeMinutes: 90,
        dateSortie: DateTime.local(2021, 11, 1),
        dateFin: DateTime.local(2021, 12, 1),
      },
      {
        titre: 'Titre action',
        description: 'Un film cool',
        genre_id: 2,
        rating: 2,
        img: '',
        acteur: 'Une actrice',
        realisateur: 'Une réalisatrice',
        dureeMinutes: 80,
        dateSortie: DateTime.local(2021, 11, 15),
        dateFin: DateTime.local(2021, 12, 15),
      },
    ])
  }
}
