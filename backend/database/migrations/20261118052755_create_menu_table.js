/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('menu', (table) => {
    table.increments('id').primary();
    table.string('nama', 200).nullable();
    table.string('kategori', 50).nullable();
    table.integer('harga').nullable();
    table.string('gambar', 255).nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('menu');
};
