import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Tarifage from './Tarifage'
import Tarifheure from './Tarifheure'
import Tarifjournee from './Tarifjournee'

export default class Billet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public prix: number

  @column()
  public ageId: number

  @column()
  public journeeId: number

  @column()
  public heureId: number

  @hasOne(() => Tarifage, {
    foreignKey: 'id',
    localKey: 'ageId',
  })
  public tarifAge: HasOne<typeof Tarifage>

  @hasOne(() => Tarifheure, {
    foreignKey: 'id',
    localKey: 'heureId',
  })
  public tarifHeure: HasOne<typeof Tarifheure>

  @hasOne(() => Tarifjournee, {
    foreignKey: 'id',
    localKey: 'journeeId',
  })
  public tarifjournee: HasOne<typeof Tarifjournee>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
