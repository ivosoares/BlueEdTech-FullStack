// importo o model
const Vaga = require('./../models/vaga');

// Retorna todas as vagas
class VagaService {
  // conecta com o modelo e retorna a lista de vagas
  findAll = async () => await Vaga.find();
  
  findById = async (id) => {
    return await Vaga.findById(id);
  }
  
  createVaga = async (vaga) => {
    return await Vaga.create(vaga);
  }

}


module.exports = VagaService;