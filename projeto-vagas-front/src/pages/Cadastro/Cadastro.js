import React from 'react'
import './Cadastro.css';

const Cadastro = () => {

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const salario = evento.target.salario.value;
    const descricao = evento.target.descricao.value;
    const senioridade = evento.target.senioridade.value;

    const vaga = {
      titulo,
      salario: parseInt(salario),
      descricao,
      senioridade
    }

    const request = new Request(`http://localhost:3001/vagas`, {
      method: 'POST',
      body: JSON.stringify(vaga),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })

    const response = await fetch(request);
    const result = await response.json();
    alert(result.message);
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Vagas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="titulo" className="form-control" name="titulo" id="floatingInput" placeholder="Digite o Titulo"/>
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="salario" className="form-control" name="salario" id="floatingsalario" placeholder="Digite o Salario"/>
                  <label htmlFor="floatingsalario">Salario</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="descricao" className="form-control" name="descricao" id="floatingInput" placeholder="Digite a Descricao"/>
                  <label htmlFor="floatingInput">Descricao</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="senioridade" className="form-control" name="senioridade" id="floatingsenioridade" placeholder="Digite a Senioridade"/>
                  <label htmlFor="floatingsenioridade">Senioridade</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
