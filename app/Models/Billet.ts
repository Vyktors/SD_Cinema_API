import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

export default class Billet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public prix: number

  @column()
  public condition: string

  @column()
  public extra: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
