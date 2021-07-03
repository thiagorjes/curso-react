import React, { Component } from 'react'
import Display from '../contador/Display'
import Botao from './Botao'


class Surpresinha extends Component {

    state = {
        qtd: this.props.qtd || 6,
        lista: this.props.lista || [0, 0, 0, 0, 0, 0]
    }

    qtd = () => {
        this.setState({
            qtd: this.state.qtd
        })
    }

    onNova = (novaSurpresa) => {
        this.setState({
            qtd: +novaSurpresa
        })
        const local = this.gerarNumeros()
        this.setState({
            qtd: +novaSurpresa,
            lista:local
        })
    }

    gerarNumeroNaoContido = (min, max, array) => {
        const aleatorio = parseInt(Math.random() * (max - min) + min)
        return array.includes(aleatorio) ? this.gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    gerarNumeros = () => {
        let qtde = this.state.qtd
        const numeros = new Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = this.gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)


        this.setState({ qtd: qtde, lista: numeros })
        return numeros
    }

    constructor(props) {
        super(props)
        this.state = {
            qtd: 6
        }
        const inicial = this.gerarNumeros()
        this.state = {
            qtd:6,
            lista: inicial
        }
    }

    render() {

        return (
            <div >
                <h2>MegaSenna</h2>
                <label for="num">Quantidade:</label>
                <input id="num" min="6" max="15" value={this.state.qtd} onChange={(e) => {this.onNova(+e.target.value); }} type="number" style={{ width: '50px' }}></input>

                <div>{this.state.lista.join(' ')}</div>

                <Botao onNova={this.gerarNumeros} ></Botao>
            </div>
        )
    }
}


export default Surpresinha
