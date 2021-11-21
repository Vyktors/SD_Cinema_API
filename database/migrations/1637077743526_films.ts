import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Films extends BaseSchema {
  protected tableName = 'films'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('titre').defaultTo('')
      table.string('description').defaultTo('')
      //table.integer('genre_id').references('id').inTable('Genre')
      table.integer('genre_id').defaultTo(0)
      table.integer('rating').defaultTo(0)
      table.string('img', 511).defaultTo('')
      table.string('acteur').defaultTo('')
      table.string('realisateur').defaultTo('')
      table.integer('duree_minutes').defaultTo(0)
      table.date('date_sortie').defaultTo(this.now())
      table.date('date_fin').defaultTo(this.now())
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
