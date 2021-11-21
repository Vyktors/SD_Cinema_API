import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Film from 'App/Models/Film'

export default class Representation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public filmId: number

  @column()
  public date: DateTime

  @column()
  public heure: DateTime

  @hasOne(() => Film, {
    foreignKey: 'id',
    localKey: 'filmId',
  })
  public film: HasOne<typeof Film>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
