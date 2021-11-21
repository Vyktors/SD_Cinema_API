import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Representations extends BaseSchema {
  protected tableName = 'representations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('film_id').references('films.id')
      table.date('date').defaultTo(this.now())
      table.time('heure').defaultTo(this.now())
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.alterTable('representations', (table) => {
      table.dropForeign('film_id')
    })
    this.schema.dropTable(this.tableName)
  }
}
