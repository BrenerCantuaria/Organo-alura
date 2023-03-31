import { Colaborador } from '../Colaborador'
import './Time.css'

export const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return(
        /* Abaixo está uma avaliação que caso retorne true dentro do parenteses ele executa o cara da direita, se não ele não executa */
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>

            {props.colaboradores.map( colaborador => 
            <Colaborador 
            corDeFundo={props.corPrimaria} 
            key={colaborador.nome}
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            imagem={colaborador.imagem} 
            />)}

            </div>
        </section>
    )
    
}