const chai = require("chai");
const assert = chai.assert;
const server = require("../src/app");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

suite("Integration tests with chai-http", function () {
    // #1
    test("Teste de rotas /GET - rota /api retorna 200", function (done) {
      chai
        .request(server)
        .get("/api")
        .end(function (err, res) {
          assert.equal(res.status, 200, "should be 200");
          done();
        });
    });

     // #2
     test("Teste de rotas /GET - rota /api/agendamentos retorna 200", function (done) {
      chai
        .request(server)
        .get("/api/agendamentos")
        .end(function (err, res) {
          assert.equal(res.status, 200, "should be 200");
          done();
        });
    });

    // #3
    test("Teste de rotas /GET - rota /api/veragendamentos retorna 200", function (done) {
      chai
        .request(server)
        .get("/api/veragendamentos")
        .end(function (err, res) {
          assert.equal(res.status, 200, "should be 200");
          done();
        });
    });

     // #4
     test("Teste de rota /POST - rota /api/agendamentos retorna 201", function (done) {
      chai
        .request(server)
        .post("/api/agendamentos")
        .send({mensagemid: 4, destinatario: "Teste ChaiMocha", mensagem_texto:"Mensagem teste ", status: "agendado", midia: "Email", data_agendamento:"2020-12-12", hora_agendamento:"17:20:00"})
        .end(function (err, res) {
          assert.equal(res.status, 201, "should be 201");
          done();
        });
    });

    // #5
    test("Teste de rota /DELETE - rota /api/deletaragendamento/:id retorna 200", function (done) {
      chai
        .request(server)
        .delete("/api/deletaragendamento/5")
        .end(function (err, res) {
          assert.equal(res.status, 200, "should be 200");
          done();
        });
    });


  });