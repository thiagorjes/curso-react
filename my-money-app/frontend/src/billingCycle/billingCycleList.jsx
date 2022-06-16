import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList,showDelete, showUpdate } from './billingCycleActions'
import If from '../common/operator/if'
import {MyDataTable,DataTable} from '../common/widget/dataTable'


class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList(this.props.user)
    }

    adicionaZero(numero){
        if (numero <= 9) 
            return "0" + numero;
        else
            return numero; 
    }

    retornaDataBR(data){
        let dataAtual = new Date(data)
        return (this.adicionaZero(dataAtual.getDate().toString()) + "/" + (this.adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
    }    

    renderRows() {
        const list = this.props.list || null
        console.log(this.props.list)
        return !list?null:list.map(bc => (
            <tr key={bc.id} className={bc.receivedValue-bc.chargedValue>=0?'bg-green alpha20':'bg-red alpha20'}>
                <td>
                    <div className='btn '>
                        <i className={`fa fa-${bc.receivedValue-bc.chargedValue>=0?'thumbs-up green':'thumbs-down red'}`}/>
                    </div>                    
                </td>
                <td>
                    { this.retornaDataBR(bc.createAt) }
                    
                </td>
                <td>
                    {this.retornaDataBR(bc.expiresAt)}
                </td>
                <td>{bc.description}</td>
                <td className={bc.receivedValue-bc.chargedValue>=0?'done':''}>&nbsp;&nbsp;R$&nbsp;{bc.chargedValue}&nbsp;&nbsp;</td>
                <td>R$&nbsp;{bc.receivedValue}</td>
                <td>{bc.user.name}</td>
                <td>{bc.device.name}</td>
                <If test={this.props.user.tcUser.attributes['gestor']=="true"}>
                <td>
                    <button className="btn-success spaced btn" onClick={()=>this.props.showUpdate(bc)} >
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn-danger spaced btn" onClick={()=>this.props.showDelete(bc)} >
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
                </If>
            </tr>
        ))
    }

    render() {

        return (
            <div>
                <table className="dataTable table table-hover ">
                    <thead>
                        <tr role='row'>
                            <th className="sorting_asc">
                                Status
                            </th >
                            <th className="sorting_asc">
                                Criado Em:
                            </th>
                            <th>
                                Válido até:
                            </th>
                            <th>
                                Descrição
                            </th>
                            <th>
                                Valor<br />Cobrado
                            </th>
                            <th>
                                Valor<br />Recebido
                            </th>
                            <th>
                                Cliente
                            </th>
                            <th>
                                Dispositivo
                            </th>
                            <If test={this.props.user.tcUser.attributes != undefined && this.props.user.tcUser.attributes['gestor']=="true"}>
                            <th className='table-actions'>
                                Ações
                            </th>
                            </If>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

                <MyDataTable></MyDataTable>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list ,user: state.auth.user })
const mapDispatchToPros = dispatch => bindActionCreators({ getList,showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToPros)(BillingCycleList)