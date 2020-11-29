const express = require('express');

const router = express.Router();


//REDIRECIONANDO ROOT PARA /API
router.get('/', (req, res) => {
  res.redirect('/api');
});


//TESTE DE FUNCIONAMENTO DO SERVER
router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'RESTful API Node.js com PostgreSQL para agendamentos',
    version: '1.0.0',
  });
});

module.exports = router;

