import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import List from './components/List/List';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = count;
  }, [count])

  const incrementa = () => {
    console.log('clicou');
    setCount(count + 1);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <h1>Olá Mundo !</h1>
      <p>{count}</p>
      <input type="text" value={text} onChange={handleChange}/>
      <p>{text}</p>
      <button onClick={incrementa}>Clique aqui</button>
      <Button texto="Incrementa" estilo="success"/>
      <Button texto="cancelar" estilo="danger"/>
      <Button texto="clique aqui" estilo="default"/>
      <Button texto="adicionar" estilo="success"/>
      <Button texto="sou um novo botao" estilo="danger"/>
      <List/>
    </div>
  );
}

export default App;
