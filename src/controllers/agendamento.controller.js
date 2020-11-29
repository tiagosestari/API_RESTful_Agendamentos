const db = require("../config/database");



exports.createAgendamento = async (req, res) => {
  const destinatario = req.body.destinatario;
  const mensagem_texto = req.body.mensagem_texto;
  const midia = req.body.midia;
  const data_agendamento = req.body.data_agendamento;
  const hora_agendamento = req.body.hora_agendamento;
  const status = "agendado";
  const { rows } = await db.query(
    "INSERT INTO agendamentos (destinatario, mensagem_texto, midia, data_agendamento, hora_agendamento, status) VALUES ($1, $2, $3, $4, $5, $6)",
    [destinatario, mensagem_texto, midia, data_agendamento, hora_agendamento, status]
  );

  //RESPONSE PARA TESTAR NO POSTMAN
  res.status(201).send({
    message: "agendamento realizado com sucesso!",
    body: {
      agendamento: {destinatario, mensagem_texto, midia, data_agendamento, hora_agendamento, status}
    },
  });
};

exports.formAgendamento = (req, res) => {
    res.sendFile(__dirname + '/views/criaragendamento.html');
};

//LISTA TODOS OS AGENDAMENTOS DO MAIS PRÓXIMO AO COM DATA MAIS LONGE NO FUTURO.
exports.listarAgendamentos = async (req, res) => {
    const response = await db.query('SELECT * FROM agendamentos ORDER BY data_agendamento');
    res.status(200).json(response.rows)
}


//DELETAR AGENDAMENTOS POR ID
exports.deletarAgendamentos = async (req, res) => {
    const idAgendamento = parseInt(req.params.id)
    await db.query('DELETE FROM agendamentos WHERE mensagemid = $1', [idAgendamento]);
    res.status(200).send({message: "Agendamento deletado", idAgendamento})
    
};

//INTERFACE PARA DELETAR NO BROWSER
exports.confirmarDelete = async (req, res) => {
  const idAgendamento = parseInt(req.params.id)
  const response = await db.query('SELECT * FROM agendamentos WHERE mensagemid = $1', [idAgendamento]);
  
  if (response.rows[0] !== undefined) {
  res.render(__dirname + "/views/deletaragendamento", {agendamento: response.rows[0]});
  } else {
    res.status(200).send({message: "Não há agendamento com esse id", idAgendamento})
  }
 
  //res.status(200).json(response.rows) 
};