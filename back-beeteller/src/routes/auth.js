


const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const auth = express.Router();
const User = require('../models/db')


auth.post('/singUp', async (req, res) => {
  const date = req.body;
  // criptografia da senha do usuário
  date.password = await bcrypt.hash(date.password, 8)

  const queryString = 'INSERT INTO users (email, password) VALUES ( $1, $2)';
  const values = [date.email.toLowerCase(), date.password]


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
    })
})

auth.post('/singIn', async (req, res) => {
  const { email, password } = req.body;
  const queryString = 'SELECT id, email, password FROM users WHERE email = $1';
  User.connect()
  await User.query(queryString, [email.toLowerCase()])
    .then((result) => {
      if (result.rowCount === 0) {
        return res.json({
          error: true,
          mensagem: 'Usuário não existe'
        })
      } else {
        const user = result.rows[0];
        bcrypt.compare(password, user.password)
          .then((match) => {
            if (!match) {
              res.json({
                error: true,
                mensagem: 'Usuário ou senha incorretos'
              })
            } else {
              const token = jwt.sign({ userId: user.id }, 'sua_chave_secreta', { expiresIn: '1h' });
              res.json({
                email: user.email,
                token: token
              })
            }
          });
      }
    }).catch((err) => {
      console.error(err);
    })
})





module.exports = auth;