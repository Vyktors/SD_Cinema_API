import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Nourritures extends BaseSchema {
  protected tableName = 'nourritures'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nom').defaultTo('')

      table.float('prix').defaultTo(5.0)

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
