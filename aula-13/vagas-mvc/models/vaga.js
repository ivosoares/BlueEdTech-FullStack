const mongoose = require('mongoose');

const VagaModel = new mongoose.Schema({
  titulo: { type: String, required: true},
  descricao: { type: String, required: true},
  salario: { type: Number, required: true},
  senioridade: { type: String, required: true},
  dataCriacao: { type: Date, default: Date.now }
})

const Vaga = mongoose.model("vagas", VagaModel);

module.exports = Vaga;
