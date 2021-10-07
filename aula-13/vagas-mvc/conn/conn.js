// importar o mongoose
const mongoose = require('mongoose');
// url de conexao = mongodb://servidor:porta/banco
const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/vagas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro no mongo', err))
}

module.exports = Conn;