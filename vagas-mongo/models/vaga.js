// Schemas --> é a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
// Documents --> sao como se fosse as linhas da nossa tabela .
// Model --> São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
// Collections --> são equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.

const mongoose = require('mongoose');

const vagaModel = new mongoose.Schema({
  titulo: { type: String, required: true},
  descricao: { type: String, required: true },
  salario: {type: Number, required: true },
  senioridade: {type: String, required: true},
  dataCriacao: {type: Date, default: Date.now}
})

// inicializo o meu model na collection vaga com o schema vagaModel
const Vaga = mongoose.model("vagas", vagaModel);

module.exports = Vaga;