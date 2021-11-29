import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FilmVedettes extends BaseSchema {
  protected tableName = 'film_vedettes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('film1_id').references('films.id').defaultTo(0)
      table.integer('film2_id').references('films.id').defaultTo(0)
      table.integer('film3_id').references('films.id').defaultTo(0)
      table.integer('film4_id').references('films.id').defaultTo(0)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
