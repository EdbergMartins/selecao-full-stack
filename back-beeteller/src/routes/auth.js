const express = require('express');

const auth = express.Router();

auth.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.send(email)
})

module.exports = auth;