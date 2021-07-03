import React from 'react'
import { useReducer,useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {initialState,reducer} from '../../store'

import {numberAdd2,login} from '../../store/action'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [n,setN] = useState(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Faça Login</span>
                }
                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn" onClick={()=>{login(dispatch,'Thiago Gonçalves Cavalcante')}}>Login</button>
                    <button className="btn" onClick={()=>{numberAdd2(dispatch)}}>+2</button>
                    <button className="btn" onClick={()=>{dispatch({type:'numberMultiplyBy7'})}}>*7</button>
                    <button className="btn" onClick={()=>{dispatch({type:'numberDivideBy25'})}}>/25</button>
                    <button className="btn" onClick={()=>{dispatch({type:'numberParseInt'})}}>inteiro</button>
                    <input type="number" className="input" value={n} onChange={(e)=>{setN(e.target.value)}}/>
                    <button className="btn" onClick={()=>{dispatch({type:'numberAddN', payload:n})}}>addN</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
