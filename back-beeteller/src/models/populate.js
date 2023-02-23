const db = require('./db');

const populateDB = async () => {
  try {
    await db.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL
        );
      `);
  } catch(error) {
    console.error(`error creating the table: ${error}`);
  }
}

module.exports = populateDB