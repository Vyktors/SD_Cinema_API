import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Billets extends BaseSchema {
  protected tableName = 'billets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('prix').defaultTo(10)

      table.integer('age_id').references('tarifages.id').defaultTo('1')

      table.integer('heure_id').references('tarifheures.id').defaultTo('1')

      table.integer('journee_id').references('tarifjournees.id').defaultTo('1')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign('age_id')
      table.dropForeign('heure_id')
      table.dropForeign('journee_id')
    })
    this.schema.dropTable(this.tableName)
  }
}
