
exports.up = function(knex) {
    return knex.schema.createTable('cryptos', table => {
        table.increments('id')
        table.string('name')
        table.integer('image_id')
        table.foreign('image_id').references('images.id')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cryptos')
};
