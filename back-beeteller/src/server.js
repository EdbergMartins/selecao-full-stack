const express = require('express');
const auth = require('./routes/auth');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models/db');

app.use(auth)



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});