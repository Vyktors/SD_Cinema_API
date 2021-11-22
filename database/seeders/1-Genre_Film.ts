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
      {
        nom: 'Enfant',
      },
      {
        nom: 'Comédie',
      },
      {
        nom: 'Romance',
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
      {
        titre: 'Titre romantique',
        description: 'Un film romantique',
        genre_id: 6,
        rating: 4,
        img: '',
        acteur: 'Une actrice romantique',
        realisateur: 'Un réalisateur amoureux',
        dureeMinutes: 75,
        dateSortie: DateTime.local(2021, 11, 20),
        dateFin: DateTime.local(2021, 12, 20),
      },
      {
        titre: 'Titre enfant',
        description: 'Un film pour enfants',
        genre_id: 4,
        rating: 3,
        img: '',
        acteur: 'Une actrice enfant',
        realisateur: 'Une réalisatrice pour enfant',
        dureeMinutes: 80,
        dateSortie: DateTime.local(2021, 11, 10),
        dateFin: DateTime.local(2021, 12, 10),
      },
    ])
  }
}
