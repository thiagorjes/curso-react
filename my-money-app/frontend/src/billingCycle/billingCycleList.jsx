import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'


class BillingCycleList extends Component {
    componentWillMount() {
        this.props.getList()
    }
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc.id}>
                <td>{bc.id}</td>
                <td>
                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <input type="date" className="form-control datetime"  data-inputmask="'alias': 'dd/mm/yyyy'" data-mask="" value={bc.createAt.substring(0,10)}/>
                    </div>
                </td>
                <td>
                    <div class="input-group date">
                        <div class="input-group-addon">
                            <i class="fa fa-calendar"></i>
                        </div>
                        <input type="date" className="form-control datetime"  data-inputmask="'alias': 'dd/mm/yyyy'" data-mask="" value={bc.expiresAt.substring(0,10)}/>
                    </div>
                    </td>
                <td>{bc.description}</td>
                <td>{bc.chargedValue}</td>
                <td>{bc.receivedValue}</td>
                <td>{bc.user.name}</td>
                <td>{bc.device.name}</td>
            </tr>
        ))
    }

    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToPros = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToPros)(BillingCycleList)