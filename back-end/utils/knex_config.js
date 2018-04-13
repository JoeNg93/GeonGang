const knex = require('knex')({
  client: 'mysql',
  connection: {
    user: process.env.DB_USER || 'root',
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_NAME || 'geongang',
    password: process.env.DB_PASSWORD || 'root',
    port: process.env.DB_PORT || 3306
  }
});

module.exports = knex;
