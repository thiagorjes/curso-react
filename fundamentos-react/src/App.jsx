import './App.css'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Surpresinha from './components/surpresinha/Surpresinha'

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards" >
            <Card titulo="#13 - Surpresinha" color="gray">    
                <Surpresinha qtd={6}></Surpresinha>
            </Card>
            <Card titulo="#12 - Contador" color="#2a4f5e">    
                <Contador numero={20} ></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado" color="var(--argovix-dark-blue)">    
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="var(--argovix-yellow)">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="var(--argovix-green)">
                <DiretaPai ></DiretaPai>
            </Card>
            <Card titulo="#08 - Condicional Par o Ímpar" color="var(--argovix-red)">
                <ParOuImpar numero={3}></ParOuImpar>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
                <UsuarioInfo usuario={{ nome: 'Thiago' }}></UsuarioInfo>
            </Card>
            <Card titulo="#07 - Produtos" color="#bb4d40">
                <TabelaProdutos></TabelaProdutos>
            </Card>
            <Card titulo="#06 - Repetição" color="#bb4d40">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - componente com filho" color="#7B68EE">
                <Familia sobrenome="Cavalcante">
                    <FamiliaMembro nome="Thiago" ></FamiliaMembro>
                    <FamiliaMembro nome="Eliene" sobrenome="Saar de Souza"></FamiliaMembro>
                    <FamiliaMembro nome="Anna Júlia" ></FamiliaMembro>
                    <FamiliaMembro nome="Arthur" ></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#19437f">
                <Random max={60} min={1}></Random>
            </Card>

            <Card titulo="#03 - Fragmento" color="#40aebb">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#FFC300">
                <ComParametro
                    titulo="Situação do Aluno:"
                    aluno="Thiago Cavalcante"
                    nota={8.8}
                />
            </Card>
            <Card titulo="#01 - Primeiro" color="#C70039">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="# Olá mundo" color="#3bc371">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div >
);
