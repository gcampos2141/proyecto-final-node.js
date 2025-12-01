const mysql = require('mysql2');
const util = require('util');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'taller_node_db'
});

pool.query = util.promisify(pool.query);
module.exports = pool;