const express = require('express');
const auth = require('./routes/auth');
const app = express();
const cors = require('cors');
const populateDB = require('./models/populate');

app.use(express.json());
app.use(cors());
app.use(auth)

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

(async () => {
  await populateDB();
})();