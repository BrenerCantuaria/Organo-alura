import './ListaSuspensa.css'
export const ListaSuspensa = (props) =>{
    
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                required={props.required} 
                value={props.valor} 
                // "e" é um parâmetro           aqui é passado o evento para a prop "aoAlterado" que por sua vez executa uma função arrow que tem como parâmetro "valor"
                onChange={e => props.aoAlterado(e.target.value)}
            >   
            <option value=""></option>
                {
                    props.itens.map( item => 
                    <option key={item}> 
                        {item}  
                    </option>)
                }
            </select>
        </div>
    )
}