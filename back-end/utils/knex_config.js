const knex = require('knex')({
  client: 'mysql',
  connection: {
    user: 'root',
    host: '127.0.0.1',
    database: 'geongang',
    password: 'root',
    port: 3306
  }
});

module.exports = knex;
