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
      {
        nom: 'Fantastique',
      },
      {
        nom: 'Science-Fiction',
      },
    ])

    await Film.updateOrCreateMany('titre', [
      {
        titre: 'Encanto, la fantastique famille Madrigal',
        description:
          "En Colombie, une jeune femme doit faire face à la frustration d'être la seule de sa famille à ne pas avoir de pouvoirs magiques.",
        genre_id: 4,
        rating: 4,
        img: 'https://lumiere-a.akamaihd.net/v1/images/p_encanto_payoff_21512_e2c5d246.jpeg',
        acteur: 'Stephanie Beatriz',
        realisateur: 'Jared Bush',
        dureeMinutes: 102,
        dateSortie: DateTime.local(2021, 11, 24),
        dateFin: DateTime.local(2021, 12, 24),
      },
      {
        titre: "SOS fantômes : L'au-delà",
        description:
          "Lorsqu'une mère célibataire et ses deux enfants déménagent dans une nouvelle ville, ils découvrent rapidement qu'ils ont un lien avec les Ghostbusters originaux et l'héritage secret de leur grand-père.",
        genre_id: 5,
        rating: 2,
        img: 'http://photos.cine-sorties.com/files/9089.jpg',
        acteur: 'Carrie Coon',
        realisateur: 'Jason Reitman',
        dureeMinutes: 80,
        dateSortie: DateTime.local(2021, 11, 19),
        dateFin: DateTime.local(2021, 12, 19),
      },
      {
        titre: 'Clifford le gros chien rouge',
        description:
          "La jeune Emily Elizabeth reçoit en cadeau de la part d'un magicien un adorable petit chien rouge. Quelle n'est pas sa surprise quand elle se réveille le lendemain avec un chien géant de six pieds dans son petit appartement de New York.",
        genre_id: 4,
        rating: 5,
        img: 'https://www.themoviedb.org/t/p/w500/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg',
        acteur: 'Darby Champ',
        realisateur: 'Walt Becker',
        dureeMinutes: 96,
        dateSortie: DateTime.local(2021, 11, 10),
        dateFin: DateTime.local(2021, 12, 10),
      },
      {
        titre: 'Spider-Man: Sans Retour',
        description:
          "L'identité de Spider-Man étant désormais révélée, Peter demande de l'aide au docteur Strange. Lorsqu'un sort tourne mal, des ennemis commencent à apparaître, forçant Peter à découvrir ce que signifie vraiment être Spider-Man.",
        genre_id: 2,
        rating: 5,
        img: 'https://hereisthetake.com/wp-content/uploads/2021/06/7e450cc161c6595e3852daa0233f09d5.jpg',
        acteur: 'Tom Holland',
        realisateur: 'Jon Watts',
        dureeMinutes: 150,
        dateSortie: DateTime.local(2021, 12, 17),
        dateFin: DateTime.local(2022, 1, 17),
      },
      {
        titre: 'Resident Evil: Bienvenue à Raccoon City',
        description:
          "Autrefois en plein essor grâce au géant pharmaceutique Umbrella Corporation, Raccoon City est devenue une ville agonisante. L'exode de l'entreprise a laissé la ville en friche... avec un grand mal qui infuse sous la surface.",
        genre_id: 3,
        rating: 3,
        img: 'https://mb.com.ph/wp-content/uploads/2021/11/42909.jpeg',
        acteur: 'Robbie Amell',
        realisateur: 'Johannes Roberts',
        dureeMinutes: 108,
        dateSortie: DateTime.local(2021, 11, 24),
        dateFin: DateTime.local(2021, 12, 24),
      },
      {
        titre: "L'arracheuse de temps",
        description:
          'Bernadette, qui a toujours vécu à Saint-Élie-de-Caxton, raconte à son petit-fils une histoire de sa jeunesse.',
        genre_id: 7,
        rating: 4,
        img: 'https://img5.cdn.cinoche.com/images/86240c893305d72b1fda14fcd3896026.jpg',
        acteur: 'Robbie Amell',
        realisateur: 'Jade Charbonneau',
        dureeMinutes: 114,
        dateSortie: DateTime.local(2021, 11, 19),
        dateFin: DateTime.local(2021, 12, 19),
      },
      {
        titre: 'Mourrir peut attendre',
        description:
          "L'agent secret britannique 007 coule des jours heureux au côté de son amoureuse Madeleine Swann dans le magnifique décor bucolique italien.",
        genre_id: 2,
        rating: 5,
        img: 'https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg',
        acteur: 'Daniel Craig',
        realisateur: 'Barbara Broccoli',
        dureeMinutes: 163,
        dateSortie: DateTime.local(2021, 10, 8),
        dateFin: DateTime.local(2021, 12, 20),
      },
      {
        titre: 'Dune',
        description:
          'Dans un futur lointain, Leto Atreides, le duc de Caladan, est nommé au poste de gouverneur d’Arrakis, une planète désertique.',
        genre_id: 8,
        rating: 4,
        img: 'https://dunenewsnet.com/wp-content/uploads/2021/10/Dune-Movie-Dolby-Cinema-Poster-AMC.jpg',
        acteur: 'Timothée Chalamet',
        realisateur: 'Denis Villeneuve',
        dureeMinutes: 155,
        dateSortie: DateTime.local(2021, 10, 22),
        dateFin: DateTime.local(2021, 12, 22),
      },
      {
        titre: 'La matrice: Résurrection',
        description: 'Le quatrième épisode de la saga « The Matrix »',
        genre_id: 8,
        rating: 5,
        img: 'https://images.squarespace-cdn.com/content/v1/5947e07bff7c505f81b292ad/1631819552045-3L8LBWKNX8CQAPGKJ09A/matrix+resurrections+poster.jpg',
        acteur: 'Keanu Reaves',
        realisateur: 'Lana Wachowski',
        dureeMinutes: 148,
        dateSortie: DateTime.local(2021, 12, 22),
        dateFin: DateTime.local(2022, 1, 22),
      },
      {
        titre: 'Chantez! 2',
        description:
          'Buster Moon, le koala toujours optimiste, et ses célèbres artistes se préparent à lancer leur performance la plus épatante à ce jour... et le tout dans la capitale mondiale du divertissement.',
        genre_id: 4,
        rating: 5,
        img: 'https://m.media-amazon.com/images/M/MV5BOTgzYzA3NWItYzkxZC00OWQ2LTkxNTItODMyNmMxNTNkZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        acteur: 'Matthew McConaughey',
        realisateur: 'Garth Jennings',
        dureeMinutes: 112,
        dateSortie: DateTime.local(2021, 12, 22),
        dateFin: DateTime.local(2022, 1, 22),
      },
    ])
  }
}
