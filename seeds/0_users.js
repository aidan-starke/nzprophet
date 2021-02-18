
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'el coacho', email: 'starke.aidan@gmail.com', password_hash: '', reset_password_key: '' },
        {id: 2, username: 'muthaphukknge', email: '19bradley97@gmail.com', password_hash: '', reset_password_key: ''}
      ]);
    });
};
