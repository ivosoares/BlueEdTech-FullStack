import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

const List = () => {
  const [vagas, setVagas] = useState([]);
  
  useEffect(() => {
    getVagas();
  }, []);
  
  const urlApi = 'http://localhost:3001/vagas';

  const getVagas = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    setVagas(data);
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {
        vagas.map((vaga, index) => (
          <Card data={vaga} key={index}/>
        ))
      }
    </div>
  )
}

export default List
