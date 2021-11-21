import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Film extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titre: string

  @column()
  public descrption: string

  @column()
  public genre_id: number

  @column()
  public rating: number

  @column()
  public img: string

  @column()
  public acteur: string

  @column()
  public realisateur: string

  @column()
  public dureeMinute: number

  @column.date()
  public dateSortie: DateTime

  @column.date()
  public dateFin: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
