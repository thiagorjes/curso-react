import React from 'react'
import Produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default () => {
    const produto = Produtos[0]
    return (
        <div>
            Tabela de Produtos
            <table className="TabelaProdutos">
                <thead>
                    <tr>
                        {Object.keys(produto).map((key) => {
                            return (
                                <th>
                                    {key}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {Produtos.map((el,i) => {
                        return (
                            <tr key={el.id} className={i %2 === 0 ? 'Par': ''}>

                                <td>
                                    {el.id}
                                </td>
                                <td>
                                    {el.nome}
                                </td>
                                <td>
                                    R${el.preco}
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
