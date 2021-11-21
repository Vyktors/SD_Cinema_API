import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Films extends BaseSchema {
  protected tableName = 'films'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('titre')
      table.string('description')
      //table.integer('genre_id').references('id').inTable('Genre')
      table.integer('genre_id')
      table.integer('rating')
      table.string('img', 511)
      table.string('acteur')
      table.string('realisateur')
      table.integer('duree_minutes')
      table.date('date_sortie')
      table.date('date_fin')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
