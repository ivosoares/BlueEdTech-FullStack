import React, { useState, useEffect } from 'react';

const List = () => {
  const [dados, setDados] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async() => {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    const data = await result.json()
    setDados(data.results);
  }, [])

  return (
    <ul>
      {
        dados.map((pessoa) => (
          <li>
            <img src={pessoa.image} alt={pessoa.name}/>
            <p>
            {pessoa.name} 
            </p>
            <p>
            {pessoa.species}
            </p>  
          </li>
        ))
      }
    </ul>
  )
}


export default List;