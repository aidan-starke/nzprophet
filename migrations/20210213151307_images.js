
exports.up = function(knex) {
    return knex.schema.createTable('images', table => {
        table.increments('id')
        table.string('crypto_id')
        table.foreign('crypto_id').references('crypto.id')
        table.string('src')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('images')
};
