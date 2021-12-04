import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Imagecadeaus extends BaseSchema {
  protected tableName = 'cadeaus'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('img').defaultTo('')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('img')
    })
  }
}
