const knex = require('knex')
const config = require('../knexfile').development
const database = knex(config)

function getUsers(db = database) {
  return db('users')
    .select('name')
}

function getUsername(name, db = database) {
  return db('users')
    .where('name', name)
    .select('username')
}

function getCrypto(name, db = database) {
  return db('users')
    .where('users.name', name)
    .join('user_crypto', {'users.id': 'user_id'})
    .join('cryptos', {'cryptos.id': 'user_crypto.crypto_id'})
    .join('images', {'images.id': 'image_id'})
    .select('cryptos.name', 'src', 'buy_price as buyPrice', 'investment')
}


module.exports = {
  getUsers,
  getUsername,
  getCrypto
}