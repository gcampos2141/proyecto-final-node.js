const mysql = require('mysql2');
const util = require('util');

// Configurar pool de conexión
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  connectionLimit: 5,                 // Clever Cloud Free
  queueLimit: 0,                      // No limitar las consultas
  waitForConnections: true,           // Esperar si las conexiones están ocupadas

  enableKeepAlive: true,              // Mantiene la conexión viva
  keepAliveInitialDelay: 0,           // Inicia keep-alive de inmediato

  connectTimeout: 10000,              // 10s para conectar
  idleTimeout: 30000                  // 30s antes de reciclar
});

pool.query = util.promisify(pool.query);
pool.getConnection = util.promisify(pool.getConnection);

// Evitar conexiones "muertas"
setInterval(() => {
  pool.query('SELECT 1').catch(() => {
    console.log("Ping falló, timeout de Clever Cloud");
  });
}, 10000); 



module.exports = pool;
