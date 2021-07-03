import React from 'react'

export default props => {
    
    //destructuring
    const { min, max } = props

    var tam = (max - min)
    var rand = Math.random()
    var ret = parseInt(rand * tam) + min
    
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> {min}
            </p>
            <p>
                <strong>Valor Máximo:</strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido:</strong> {ret}
            </p>
        </div>

    )
}


