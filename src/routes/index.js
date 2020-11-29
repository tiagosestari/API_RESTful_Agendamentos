const express = require('express');

const router = express.Router();




//TESTE DE FUNCIONAMENTO DO SERVER
router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'RESTful API Node.js com PostgreSQL para agendamentos',
    version: '1.0.0',
  });
});

module.exports = router;

