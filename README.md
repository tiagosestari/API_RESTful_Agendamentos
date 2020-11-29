## RESTful API - Agendamentos de mensagem 

#### Tiago Sestari


### Ferramentas:
- Linguagem: Node.js
- Framework: Express
- DB: PostgreSQL
- Suite de testes: Mocha e Chai

### Estrutura: 

#### 1. Endpoints:
- /api - inicial, apenas para conferir que o servidor está online e funcionando (o GET no endpoint '/' é diretamente redirecionado para esse endpoint)
- /api/veragendamentos - trás via GET todos os agendamentos do banco de dados no formato JSON.
- /api/agendamentos - permite a criação de novos agendamentos via POST
- /deletaragendamento/:id - permite deletar agendamentos por id passado no parâmetro da URL via DELETE.

Os endpoints /agendamentos e /deletaragendamento/:id têm também uma requisição GET para interação via browser que envia respectivamente o /POST por forms, 
e o /DELETE pela Fetch API do javascript.

#### 2. Banco de Dados:
- mensagemid: Chave primária gerada automáticamente
- destinatario: destinatário como campo texto
- mensagem_texto: mensagem a ser enviada como campo texto
- status: o status inicial automático é agendado, podendo ser criados novos estados de acordo com as regras de negócio do uso da API
- midia: SMS, Email, Whatsapp, Push. É um campo texto validado no Front End por meio de Select Box
- data_atual: Marca a data em que o agendamento foi criado.
- data_agendamento: Data selecionada para o envio (validada no Front End por campo Date)
- hora_atual: Marca a hora em que o agendamento foi criado.
- hora_agendamento: Hora selecionada para o envio (validada no Front End por campo Time)

Obs: Embora os campos de data contenham horário, o campo Datetime no Front End não tem uma compatibilidade extensa com browsers. Desse modo, 
uma segunda variável de Hora foi criada.

### Como instalar e testar:
##### Há duas formas de testar a API

#### Forma 1:
- 1: Clone o repositório localmente
- 2: No caminho /api/queries está a Query necessária para criar a tabela corretamente no Admin do PostgreSQL
- 3: A conexão com o banco de dados é feita a partir da variável de ambiente. Como o arquivo .env não sobe junto com o repositório, é necessário 
  criá-lo e colocar nele a variável DATABASE_URL com a seguinte estrutura DATABASE_URL=postgres://{db_username}:{db_password}@{host}:{port}/{db_name}
  substituindo com as suas credenciais do servidor local do PostgreSQL.
- 4: Agora você pode usar o comando npm start para rodar o servidor e verificar o funcionamento dele.
  -  4.1: Para facilitar a visualização há um forms para fazer o POST de novos agendamentos e uma tela de confirmação para fazer o DELETE de agendamentos existentes.
  -  4.2: Também é possível testar enviando requests diretamente através de programas como o POSTMAN.
- 5: O comando npm test irá testar a conexão com todos os endpoints da API.

#### Forma 2:
- Você pode verificar uma versão live desse aplicativo no link: https://restful-api-agendamentos.herokuapp.com/api
- Conforme mencionado, os endpoints /agendamentos e /deletaragendamento/:id têm também uma requisição GET para interação via browser que envia respectivamente o 
  /POST por forms, e o /DELETE pela Fetch API do javascript.
