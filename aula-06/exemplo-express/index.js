// SERVER
// importei o express
const express = require('express');

// inicializar o express;
const app = express();

// API - criar as nossas APIS - Endpoints
// REST = GET/POST/PUT/DELETE

// rota raiz que rotorna o hello world
app.get('/', (req, res) => {
  // req = request(requisicao que vem) esta relacionado a requisicao que vem do client
  // res = response (resposta que vai) esta relacionado a resposta do servidor para o cliente
  res.send('hello World!');
})

// rota que rotorna informacoes da blue
app.get('/blue', (req, res) => {
  res.send('Welcome, Bluemers!');
})

const port = 3000

app.listen(port);
console.log('Aplicacao rodando na porta 3000');

