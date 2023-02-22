


const express = require('express');
const bcrypt = require('bcrypt');


const auth = express.Router();
const User = require('../models/db')

auth.post('/singUp', async (req, res) => {
  const date = req.body;
  // criptografia da senha do usuário
  date.password = await bcrypt.hash(date.password, 8)

  const queryString = 'INSERT INTO users (email, password) VALUES ( $1, $2)';
  const values = [date.email, date.password]


  await User.query(queryString, values)
    .then(() => {
      return res.json({
        error: false,
        mensagem: 'Usuário cadastrado com sucesso'
      })
    }).catch((err) => {
      return res.status(400).json({
        error: true,
        mensagem: err.detail.includes('exists') ? 'Usuário já existe na base de dados' : 'Error:' + err
      })
      console.error(err)
    }).finally(() => User.end());
})




module.exports = auth;