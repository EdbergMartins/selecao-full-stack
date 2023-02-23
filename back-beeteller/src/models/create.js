const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    password: "1609",
    host: "localhost",
    port: "5432",
});

const createDB = async () => {
    try {
        await client.connect();
        await client.query("CREATE DATABASE beeteller");
        console.log('Database criada com sucesso');
    } catch (err) {
        console.log('Database já existente')
    } finally {
        await client.end();
    }
}

module.exports = createDB
