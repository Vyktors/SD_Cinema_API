import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Genres extends BaseSchema {
  protected tableName = 'genres'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nom').defaultTo('Unnamed')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })

    this.schema.alterTable('films', (table) => {
      table.foreign('genre_id').references('genres.id')
    })
  }

  public async down() {
    this.schema.alterTable('films', (table) => {
      table.dropForeign('genre_id')
    })
    this.schema.dropTable(this.tableName)
  }
}
