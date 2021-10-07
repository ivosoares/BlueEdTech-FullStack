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

const port = 3000;
app.listen(port, () => console.log(`App rodando em htttp://localhost:${port}/`));