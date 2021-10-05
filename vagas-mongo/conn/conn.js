// importa o mongoose
const mongoose = require('mongoose');
// url de conexao = mongodb://servidor/porta/nomedobanco
// useNewUrlParser = fala pro mongoose usar o novo sistema de url
// useUnifiedTopology = Mecanismo de monitoramento do banco de dados
const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/vagas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB CONECTADO!')
  }).catch((err) => console.log(err));
}

module.exports = Conn;