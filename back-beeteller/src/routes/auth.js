const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = express.Router();
const db = require('../models/db');

auth.post('/singUp', async (req, res) => {
  const date = req.body;
  // criptografia da senha do usuário
  date.password = await bcrypt.hash(date.password, 8)

  const queryString = 'INSERT INTO users (email, password) VALUES ( $1, $2)';
  const values = [date.email.toLowerCase(), date.password]

  try {
    await db.query(queryString, values);

    return res.json({
      error: false,
      mensagem: 'Usuário cadastrado com sucesso'
    })
  } catch (error) {
    console.error(error)

    return res.status(400).json({
      error: true,
      mensagem: error.detail.includes('exists') ? 'Usuário já existe na base de dados' : 'Error:' + error
    })
  }
})

auth.post('/singIn', async (req, res) => {
  const { email, password } = req.body;
  const queryString = 'SELECT id, email, password FROM users WHERE email = $1';
  
  try {
    const result = await db.query(queryString, [email.toLowerCase()]);

    if (result.rowCount === 0) {
      return res.json({
        error: true,
        mensagem: 'Usuário não existe'
      })
    } else {
      const user = result.rows[0];
      const match = await bcrypt.compare(password, user.password);

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
    }
  } catch (error) {
    console.error(error);
  }
})

module.exports = auth;