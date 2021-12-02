// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Billet from 'App/Models/Billet'
import Nourriture from 'App/Models/Nourriture'
import Cadeau from 'App/Models/Cadeau'

export default class InformationController {
  public async getBilletsSorted() {
    const extras = await Billet.query().where('extra', '=', true)
    const mains = await Billet.query().where('extra', '=', false)

    return {
      main: mains,
      extra: extras,
    }
  }

  public async getNourriture() {
    return await Nourriture.query()
  }

  public async getCadeau() {
    return await Cadeau.query()
  }
}
