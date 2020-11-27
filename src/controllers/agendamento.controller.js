const db = require("../config/database");



exports.createAgendamento = async (req, res) => {
  const { destinatario, mensagem_texto, midia, data_agendamento } = req.body;
  const status = "agendado";
  const { rows } = await db.query(
    "INSERT INTO agendamentos (destinatario, mensagem_texto, midia, data_agendamento, status) VALUES ($1, $2, $3, $4, $5)",
    [destinatario, mensagem_texto, midia, data_agendamento, status]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: {destinatario, mensagem_texto, midia, data_agendamento, status}
    },
  });
};