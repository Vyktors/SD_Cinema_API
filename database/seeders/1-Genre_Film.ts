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
    ])

    await Film.updateOrCreateMany('titre', [
      {
        titre: 'Encanto, la fantastique famille Madrigal',
        description:
          "En Colombie, une jeune femme doit faire face à la frustration d'être la seule de sa famille à ne pas avoir de pouvoirs magiques.",
        genre_id: 4,
        rating: 4,
        img: 'https://static.wikia.nocookie.net/lemondededisney/images/7/78/Encanto_-_La_fantastique_famille_Madrigal_03.jpg/revision/latest?cb=20211002165842&path-prefix=fr',
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
        img: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1d/Spider-Man_No_Way_Home_JP_Poster.jpg/revision/latest?cb=20211125071618',
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
    ])
  }
}
