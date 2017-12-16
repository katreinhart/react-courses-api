
exports.up = knex => knex.schema
.createTable('students_classes', (table => {
  table.integer('student_id').notNullable().defaultsTo(0)
  table.integer('class_id').notNullable().defaultsTo(0)
  
  table.timestamps(true, true)
}))

exports.down = knex => knex.schema.dropTable('students_classes')
