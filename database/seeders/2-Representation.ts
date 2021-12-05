import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Representation from 'App/Models/Representation'
import { DateTime } from 'luxon'
import RandomUtil from 'App/Utils/Random'

export default class RepresentationSeeder extends BaseSeeder {
  public async run() {
    // Constantes
    const rand = new RandomUtil(0, 2 ** 32, 1664525, 1013904223)
    const hoursRange = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    const minutesRange = [0, 15, 30, 45]
    const airingIds = [1, 2, 3, 5, 6, 7, 8]
    const baseDate = DateTime.now()
    // Variables itératives
    let date
    let day
    let month
    let year
    let heure
    let minute
    let currentId
    let toAdd
    //
    for (let i = 0; i < airingIds.length; i++) {
      currentId = airingIds[i]
      toAdd = []
      for (let j = 0; j < 14; j++) {
        //Calcule la date et récupère les champs
        date = baseDate.plus({ days: j })
        year = date.year
        month = date.month
        day = date.day
        for (let k = 0; k < Math.ceil(rand.getRandom2(0, 8) / 2); k++) {
          heure = hoursRange[rand.getRandom2(0, hoursRange.length)]
          minute = minutesRange[rand.getRandom2(0, minutesRange.length)]
          toAdd.push({
            filmId: currentId,
            date: DateTime.local(year, month, day).toISODate(),
            heure: DateTime.local(year, month, day, heure, minute).toISOTime(),
          })
        }
      }
      await Representation.updateOrCreateMany(['date', 'heure', 'filmId'], toAdd)
    }
  }
}
