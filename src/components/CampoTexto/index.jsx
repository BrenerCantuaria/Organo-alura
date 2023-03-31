import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

 

  const aoDigitado = (e) => {
    // aqui está sendo passado o valor digitado para "aoAlterado" que por usa vez recebe isso em uma arrow function que tem como parâmetro o nome "valor"
    props.aoAlterado(e.target.value)
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        type="text"
        placeholder={placeholderModificada}
        required={props.obrigatorio}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default CampoTexto;
