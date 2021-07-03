import React from 'react'
export default props => {
    return (
        <div>
            <div>Nome:{props.nome}</div>
            <div>Idade:<strong>{props.idade}</strong></div>
            <div>Nerd:{props.nerd? 'Verdadeiro' : 'Falso'}</div><br/>
        </div>
    )
}