CREATE TABLE agendamentos (
    mensagemid SERIAL PRIMARY KEY,
    destinatario VARCHAR(255) NOT NULL,
    mensagem_texto TEXT NOT NULL,
	status VARCHAR(100) NOT NULL,
	midia VARCHAR(100) NOT NULL,
	data_atual DATE NOT NULL DEFAULT CURRENT_DATE,
	data_agendamento DATE NOT NULL
);