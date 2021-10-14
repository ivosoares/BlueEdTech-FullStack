import React from 'react'

const Card = (props) => {
  const vaga = props.data;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ vaga.titulo }</h5>
          <span className="badge bg-primary">{ vaga.senioridade }</span>
          <span className="badge bg-light text-dark">R$ { vaga.salario }</span>
          <p className="card-text">{ vaga.descricao }</p>
        </div>
      </div>
    </div>
  )
}

export default Card
