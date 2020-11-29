const router = require('express-promise-router')();
const agendamentoController = require('../controllers/agendamento.controller');


//USANDO O MÉTODO POST, VAMOS CRIAR UM AGENDAMENTO NA ROTA /agendamentos
router.post('/agendamentos', agendamentoController.createAgendamento);
//METODO GET NO MESMO END POINT PARA TESTAR A INSERÇÂO DE AGENDAMENTOS
router.get('/agendamentos', agendamentoController.formAgendamento);

//USANDO O MÉTODO GET PARA LISTAR OS AGENDAMENTOS
//ESSA REQUISIÇÃO ACONTECE EM UM ENDPOINT SEPARADO DO POST PARA CRIAR AGENDAMENTOS
router.get('/veragendamentos', agendamentoController.listarAgendamentos)

//USANDO O MÉTODO DELETE PARA APAGAR AGENDAMENTOS
router.delete('/deletaragendamento/:id', agendamentoController.deletarAgendamentos)
router.get('/deletaragendamento/:id', agendamentoController.confirmarDelete)


module.exports = router;