const router = require('express-promise-router')();
const agendamentoController = require('../controllers/agendamento.controller');


//USANDO O MÉTODO POST, VAMOS CRIAR UM AGENDAMENTO NA ROTA /agendamentos
router.post('/agendamentos', agendamentoController.createAgendamento);

module.exports = router;