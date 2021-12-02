import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Billet extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public prix: number

  @column()
  public nom: string

  @column({ serializeAs: null })
  public extra: boolean

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
