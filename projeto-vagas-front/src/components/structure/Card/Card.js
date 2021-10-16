import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ vaga.titulo }</h5>
          <span className="badge bg-primary">{ vaga.senioridade }</span>
          <span className="badge bg-light text-dark">R$ { vaga.salario }</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
