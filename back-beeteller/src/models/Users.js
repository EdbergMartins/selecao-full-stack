const db = require('./db');

const Users = db.query(`
  SELECT EXISTS (
    SELECT 1 FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_name = 'users'
  );
`).then((result) => {
  if (!result.rows[0].exists) {
    console.log('Table does not exist! Creating table...');
    return db.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);
  }
}).then(() => {
  console.log('All tables createds')
}).catch((err) => {
  console.error('Error creating/checking table:', err);
})

module.exports = Users