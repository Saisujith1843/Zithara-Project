const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '::1',
  database: 'postgres',
  password: 'Sujith_1843',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
