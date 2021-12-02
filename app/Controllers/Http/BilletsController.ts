// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Billet from 'App/Models/Billet'
export default class BilletsController {

  public async getBilletsSorted() {
    const extras = await Billet.query().where('extra', '=', true)
    const mains = await Billet.query().where('extra', '=', false)

    return {
      main: mains,
      extra: extras,
    }
  }

  public async getMainBillets() {
    return Billet.query().where('extra', '=', false)
  }

  public async getExtraBillets() {
    Billet.query().where('extra', '=', true)
  }
}
