import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Film from 'App/Models/Film'

export default class FilmVedette extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public film1_id: number

  @column()
  public film2_id: number

  @column()
  public film3_id: number

  @column()
  public film4_id: number

  @hasOne(() => Film, {
    foreignKey: 'id',
    localKey: 'film1_id',
  })
  public film1: HasOne<typeof Film>

  @hasOne(() => Film, {
    foreignKey: 'id',
    localKey: 'film2_id',
  })
  public film2: HasOne<typeof Film>

  @hasOne(() => Film, {
    foreignKey: 'id',
    localKey: 'film3_id',
  })
  public film3: HasOne<typeof Film>

  @hasOne(() => Film, {
    foreignKey: 'id',
    localKey: 'film4_id',
  })
  public film4: HasOne<typeof Film>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
