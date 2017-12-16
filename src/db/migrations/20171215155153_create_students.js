
exports.up = knex => knex.schema
  .createTable('students', (table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.timestamps(true, true)
  }))

exports.down = knex => knex.schema.dropTable('students')
