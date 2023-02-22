const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "1609",
  host: "localhost",
  port: "5432",
  database: "beeteller"
})

module.exports = pool;