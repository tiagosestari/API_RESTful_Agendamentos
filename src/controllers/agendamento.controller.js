const db = require("../config/database");



exports.createAgendamento = async (req, res) => {
  const { destinatario, mensagem_texto, midia, data_agendamento } = req.body;
  const status = "agendado";
  const { rows } = await db.query(
    "INSERT INTO agendamentos (destinatario, mensagem_texto, midia, data_agendamento, status) VALUES ($1, $2, $3, $4, $5)",
    [destinatario, mensagem_texto, midia, data_agendamento, status]
  );

  //RESPONSE PARA TESTAR NO POSTMAN
  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: {destinatario, mensagem_texto, midia, data_agendamento, status}
    },
  });
};

//LISTA TODOS OS AGENDAMENTOS DO MAIS PRÓXIMO AO COM DATA MAIS LONGE NO FUTURO.
exports.listarAgendamentos = async (req, res) => {
    const response = await db.query('SELECT * FROM agendamentos ORDER BY data_agendamento');
    res.status(200).send(response.rows)

}


//DELETAR AGENDAMENTOS POR ID
exports.deletarAgendamentos = async (req, res) => {
    const idAgendamento = parseInt(req.params.id)
    await db.query('DELETE FROM agendamentos WHERE mensagemid = $1', [idAgendamento]);
    res.status(200).send({message: "Agendamento deletado", idAgendamento}) 
};