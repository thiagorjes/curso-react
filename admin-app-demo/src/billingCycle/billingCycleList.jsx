import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showDelete, showUpdate } from './billingCycleActions'
import If from '../common/operator/if'
import Grid from '../common/layout/grid'
//import MyDataTable from '../common/widget/dataTable'
import '../common/widget/dataTable.js'
//import { initTable } from '../common/widget/dataTable.js'


class BillingCycleList extends Component {

    componentDidMount() {
        this.props.getList(this.props.user, this.props.tableId)
    }

    adicionaZero(numero) {
        if (numero <= 9)
            return "0" + numero;
        else
            return numero;
    }

    retornaDataBR(data) {
        let dataAtual = new Date(data)
        return (this.adicionaZero(dataAtual.getDate().toString()) + "/" + (this.adicionaZero(dataAtual.getMonth() + 1).toString()) + "/" + dataAtual.getFullYear());
    }

    componentDidUpdate() {
        //initTable(this.props.tableId, null)
    }

    renderRows() {
        const list = this.props.list || null
        this.initialized = false
        var i = 0;
        return !list ? null : list.map(bc => (
            <tr key={bc.id} className={bc.receivedValue - bc.chargedValue >= 0 ? `bg-green alpha20 ${++i % 2 ? ' odd' : ' even'}` : `bg-red alpha20 ${bc.id % 2 ? ' odd' : ' even'}`}>
                <td className="sorting_1 dtr-control">
                    <div className='btn '>
                        <i className={`fa fa-${bc.receivedValue - bc.chargedValue >= 0 ? 'thumbs-up green' : 'thumbs-down red'}`} />
                    </div>
                </td>
                <td className="sorting_1 dtr-control">
                    {this.retornaDataBR(bc.createAt)}

                </td>
                <td>
                    {this.retornaDataBR(bc.expiresAt)}
                </td>
                <td>{bc.description}</td>
                <td className={bc.receivedValue - bc.chargedValue >= 0 ? 'done' : ''}>&nbsp;&nbsp;R$&nbsp;{bc.chargedValue}&nbsp;&nbsp;</td>
                <td>R$&nbsp;{bc.receivedValue}</td>
                <td>{bc.user.name}</td>
                <td>{bc.device.name}</td>
                <If test={this.props.user.tcUser.attributes['gestor'] == "true"}>
                    <td>
                        <button className="btn-success spaced btn" onClick={() => this.props.showUpdate(bc)} >
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn-danger spaced btn" onClick={() => this.props.showDelete(bc)} >
                            <i className="fas fa-trash"></i>
                        </button>
                    </td>
                </If>
            </tr>
        ))
    }

    render() {
        const list = this.props.list || null
        return (
            <div className="row">
                <div className="col-12">
                    <table id={this.props.tableId} className="table table-bordered table-striped dataTable dtr-inline" role="grid"
                    >
                        <thead>
                            <tr role="row">
                                <th className="sorting sorting_asc">
                                    Status
                                </th >
                                <th className="sorting sorting_asc">
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
                                <If test={this.props.user.tcUser.attributes != undefined && this.props.user.tcUser.attributes['gestor'] == "true"}>
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
<Grid>
                        <div className="col-6">
                            <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                        </div>
                        <div className="col-6">
                                <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx={0} tabIndex={0} className="page-link">Previous</a></li>
                                    <li className="paginate_button page-item active"><a href="#" aria-controls="example1" data-dt-idx={1} tabIndex={0} className="page-link">1</a></li>
                                    <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx={2} tabIndex={0} className="page-link">2</a></li>
                                    <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx={3} tabIndex={0} className="page-link">3</a></li>
                                    <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx={4} tabIndex={0} className="page-link">4</a></li>
                                    <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx={5} tabIndex={0} className="page-link">5</a></li>
                                    <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx={6} tabIndex={0} className="page-link">6</a></li>
                                    <li className="paginate_button page-item next" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx={7} tabIndex={0} className="page-link">Next</a></li>
                                </ul>
                        </div>
      
</Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list, user: state.auth.user })
const mapDispatchToPros = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToPros)(BillingCycleList)