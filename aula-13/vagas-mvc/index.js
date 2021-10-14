// imports
const express = require('express');
const cors = require('cors');

const VagasRoutes = require('./routes/vagas.routes');
const Conn = require('./conn/conn');

const app = express();
app.use(express.json());
app.use(cors());
Conn();

// falo pro express ultilizar as minhas rotas no endpoint /vagas
app.use('/vagas', VagasRoutes);

const port = 3001;
app.listen(port, () => console.log(`App rodando em htttp://localhost:${port}/`));

// MVC 
// MODEL = é responsavel pelos dados e funcoes do banco de dados
// VIEW = a visao do cliente ou seja html(react, angular, vue, html)
// CONTROLLER = é o responsavel por gerenciar os fluxos, define as regras
// Rotas = sao os responsaveis pelos metodos da API.
// servicos = responsaveis por se conectar com os nossos model (chamas as funcoes do banco de dados atraves do model)