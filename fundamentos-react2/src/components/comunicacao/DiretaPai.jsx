import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Thiago Cavalcante" idade={37} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Eliene Saar" idade={36} nerd={false}></DiretaFilho>
        </div>
    )
}