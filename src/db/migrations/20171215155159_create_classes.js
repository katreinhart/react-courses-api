
exports.up = knex => knex.schema
.createTable('classes', (table => {
  table.increments()
  table.string('name').notNullable().defaultsTo('')
  table.string('instructor').notNullable().defaultsTo('')
  table.timestamps(true, true)
}))

exports.down = knex => knex.schema.dropTable('classes')
