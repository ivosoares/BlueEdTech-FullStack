// BACKEND CRUD DE VAGAS
// importar o express
const express = require('express');
// importa o cors
const cors = require('cors');
// inicializar o express e atribuir em uma constante
const app = express();


// falo pro express ultilizar um middleware()
// fala pro express trabalhar com JSON.
app.use(express.json())

// fala pro express ultilizar as configuracoes do cors
app.use(cors());

// estou importando as rotas das vagas
const VagasRouter = require('./routers/vagas.routes');
// estou inicializando a rota /vagas de acordo com as configuracoes do arquivo Vagas Router.
app.use('/vagas', VagasRouter);


app.get('/', (req, res) => {
  res.send('olá bluemers');
})

// vamos definir em qual porta iremos rodar a aplicacao
const port = 3000;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta http://localhost:${port}/`);
})