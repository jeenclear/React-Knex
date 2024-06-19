/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function (table) {
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('password', 255).notNullable();
  })
  .createTable('products', table => {
    table.increments('id');
    table.string('name', 1000).notNullable;
    table.decimal('price').notNullable();
    table.string('seller_email').notNullable().unique();
    table.timestamp(true, true);
  }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users').dropTable('products');
};
