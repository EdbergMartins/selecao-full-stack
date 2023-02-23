const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: "5432",
});

const createDB = async () => {
    try {
        await client.query("CREATE DATABASE beeteller");
        console.log('Database criada com sucesso');
    } catch (err) {
        console.log('Database já existente')
    } finally {
        await client.end();
    }
}

module.exports = createDB
