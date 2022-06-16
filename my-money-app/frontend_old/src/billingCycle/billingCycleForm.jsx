import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {
    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: 123,//this.props.credits.map((c) => +c.value || 0).reduce(sum),
            sumOfDebts: 12//this.props.debts.map((d) => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, users, devices, readOnly, credits, debts } = this.props
        const {sumOfCredits,sumOfDebts} = this.calculateSummary()

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='expiresAt' component={LabelAndInput} label='Válido até:' cols='12 4' placeholder='dd/MM/YYY' type='date' readOnly={readOnly} />
                    <Field name='description' component={LabelAndInput} label='Descrição:' cols='12 8' placeholder='Insirea uma breve descrição' type='text' readOnly={readOnly} />
                    <Field name='chargedValue' component={LabelAndInput} label='Valor a receber:' cols='12 2' placeholder='39.99' type='number' readOnly={readOnly} />
                    <Field name='receivedValue' component={LabelAndInput} label='Valor recebido:' cols='12 2' placeholder='0.00' type='number' readOnly={readOnly} />
                    <Field name='userId' component={LabelAndInput} label='Cliente:' cols='12 4' placeholder='Selecione o cliente' type='select' data={users} fieldKey='id' fieldText='name' readOnly={readOnly} />
                    <Field name='deviceId' component={LabelAndInput} label='Dispositivo:' cols='12 4' placeholder='Selecione o dispositivo' type='select' data={devices} fieldKey='id' fieldText='name' readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos' ></ItemList>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus ></ItemList>
                </div>
                <div className="box-footer">
                    <div className="pull-right">
                        <button type='button' className="btn btn-warning spaced" onClick={this.props.init} >Cancelar</button>
                        <button type='submit' className={`btn btn-${this.props.submitClass} spaced`}>{this.props.submitLabel}</button>
                    </div>
                </div>
            </form>
        )
    }
}



BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)