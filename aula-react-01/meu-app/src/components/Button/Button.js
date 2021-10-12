import React from 'react';
import './Button.css';

const Button = (props) => {
  const texto = props.texto;
  const estilo = props.estilo;
  return (
    <button className={'btn ' + estilo}>{texto}</button>
  )
}

export default Button;