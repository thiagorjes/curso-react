import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component{
    
    state = {
        numero: this.props.numero || 0,
        passo: this.props.passo || 5   
    }

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         numero: props.numero
    //     }
    // }

    inc = ()=> {
        this.setState({
            numero: this.state.numero+this.state.passo
        })
    }

    dec = ()=> {
        this.setState({
            numero: this.state.numero-this.state.passo
        })
    }

    setPasso = (novoPasso)=>{
        this.setState({
            passo: +novoPasso
        })
    }
    render(){
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador