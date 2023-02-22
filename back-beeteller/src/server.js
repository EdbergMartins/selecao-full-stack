const express = require('express');
const auth = require('./routes/auth');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(auth)


const Users = require('./models/Users')


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});