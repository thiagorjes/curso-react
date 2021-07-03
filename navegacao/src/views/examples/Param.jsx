import React from 'react'
import {useParams} from 'react-router-dom'

const Param = props => {
    const { id } = useParams()
    return (

        <div classNam="Param" >
            <h1>Parametros</h1>
            <p>Valor:{id}</p>
        </div>
    
    
    )
}

export default Param