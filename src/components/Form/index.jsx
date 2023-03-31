import { useState } from "react";
import { Botao } from "../Botao";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Form.css";

const Form = (props) => {
 

  const aoSalvar = (e) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setTime('')
    setImagem('')
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          obrigatorio={true}
          // isso é props
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
         label="Imagem"
         placeholder="Digite o endereço da imagem" 
         valor={imagem}
         aoAlterado={valor => setImagem(valor)}
         />
        <ListaSuspensa 
            //isso aqui é a value={props.valor} 
            valor={time}
            // isso aqui é o onChange={e => props.aoAlterado(e.target.value)}
            // valor é o parâmetro recebido vindo da função acima.
            aoAlterado={valor => setTime(valor)}
            label="Time" 
            itens={props.times} 
            obrigatorio={true}
        />
        <Botao> Criar card </Botao>
      </form>
    </section>
  );
};
export default Form;
