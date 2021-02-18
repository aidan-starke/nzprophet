
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_crypto').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_crypto').insert([
        {id: 1, user_id: 1, crypto_id: 1, buy_price: 1.74, investment: 177.95 },
        {id: 2, user_id: 1, crypto_id: 3, buy_price: 0.0956, investment: 169.77 },
        {id: 3, user_id: 1, crypto_id: 5, buy_price: 258.7, investment: 177.42 },
        {id: 4, user_id: 1, crypto_id: 6, buy_price: 0.7267, investment: 365.63 },
        {id: 5, user_id: 2, crypto_id: 1, buy_price: 1, investment: 1 },
        {id: 6, user_id: 2, crypto_id: 3, buy_price: 1, investment: 1 },
        {id: 7, user_id: 2, crypto_id: 4, buy_price: 1, investment: 1 },
        {id: 8, user_id: 2, crypto_id: 6, buy_price: 1, investment: 1 }
      ]);
    });
};
