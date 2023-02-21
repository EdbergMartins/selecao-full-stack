const Client = require('pg').Client

const client = new Client({
  user: "postgres",
  password: "1609",
  host: "localhost",
  port: "5432",
  database: "stonks"
})

client.connect()
  .then(() => {
    console.log('entrou')
  }).catch((err) => {
    console.log(err)
  })


module.exports = client;