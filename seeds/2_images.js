
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, crypto_id: 1, src: './Algorand.png'},
        {id: 2, crypto_id: 2, src: './Cardano.png'},
        {id: 3, crypto_id: 3, src: './Dogecoin.png'},
        {id: 4, crypto_id: 4, src: './Ethereum.png'},
        {id: 5, crypto_id: 5, src: './Litecoin.png'},
        {id: 6, crypto_id: 6, src: './Ripple.png'},
      ]);
    });
};
