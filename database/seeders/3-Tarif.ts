import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tarifjournee from 'App/Models/Tarifjournee'
import Tarifheure from 'App/Models/Tarifheure'
import Tarifage from 'App/Models/Tarifage'

export default class TarifSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Tarifjournee.updateOrCreateMany('nom', [
      {
        nom: 'Début de semaine',
        interval: 'Lundi au mercredi',
      },
      {
        nom: 'Début du week-end',
        interval: 'Vendredi et samedi',
      },
      {
        nom: 'Fin du week-end',
        interval: 'Dimanche',
      },
    ])

    await Tarifheure.updateOrCreateMany('nom', [
      {
        nom: 'Avant-midi',
        interval: '0h à 11h59',
      },
      {
        nom: 'Après-midi',
        interval: '12h à 17h59',
      },
      {
        nom: 'Soirée',
        interval: '18h à 23h59',
      },
    ])

    await Tarifage.updateOrCreateMany('nom', [
      {
        nom: 'Age d\'or',
        interval: '70 ans et plus',
      },
      {
        nom: 'Adulte',
        interval: '18 à 69 ans',
      },
      {
        nom: 'Jeune',
        interval: '10 à 17 ans',
      },
      {
        nom: 'Enfant',
        interval: '10 ans et moins',
      },
    ])
  }
  }
  }


}
