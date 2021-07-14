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
        let credits=this.props.credits||[{}]
        let debts = this.props.debts||[{}]
        return {
            sumOfCredits: credits.map((c) => +c.value || 0).reduce(sum),
            sumOfDebts: debts.map((d) => +d.value || 0).reduce(sum)
        }
    }

    desativa(){
        console.log('desativa: formsub_tt')
        document.getElementById('formsub_tt').disabled=true;
    }
    
    validaDataCriacao(value){
        const hoje = new Date(Date.now()-(3*3600000)).toISOString()
        console.log("hoje"+hoje)
        return(value>hoje?'Precisa ser menor ou igual data de hoje.':undefined)
    }
    
    validaDataValidade(value){
        const datavalida = document.getElementsByName('createAt')[0].value
        return(value<datavalida?'Precisa ser maior ou igual data de criação.':undefined)
    }
    
    validaValorRecebido(value){
        return(value<=document.getElementsByName('chargedValue')[0].value?undefined:'Não pode ser maior que o valor a receber.')
    }
    
    validaUser(value){
        return isNaN(value/1000)?'Selecione um usuário':undefined
    }
    
    validaDevice(value){
        return isNaN(value/1000)?'Selecione um rastreador':undefined
    }

    render() {
        const { handleSubmit, users, devices, readOnly, credits, debts,submitId } = this.props
        const {sumOfCredits,sumOfDebts} = this.calculateSummary()

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='createAt' validate={this.validaDataCriacao} component={LabelAndInput} label='Cliente desde:' cols='12 2' placeholder='dd/MM/YYY' type='date' readOnly={readOnly} />
                    <Field name='expiresAt' validate={this.validaDataValidade} component={LabelAndInput} label='Válido até:' cols='12 2' placeholder='dd/MM/YYY' type='date' readOnly={readOnly} />
                    <Field name='description' component={LabelAndInput} label='Descrição:' cols='12 8' placeholder='Insirea uma breve descrição' type='text' readOnly={readOnly} />
                    <Field name='chargedValue' component={LabelAndInput} label='Valor a receber:' cols='12 2' placeholder='39.99' type='number' readOnly={readOnly} />
                    <Field name='receivedValue' validate={this.validaValorRecebido} component={LabelAndInput} label='Valor recebido:' cols='12 2' placeholder='0.00' type='number' readOnly={readOnly} />
                    <Field name='userId' validate={this.validaUser} component={LabelAndInput} label='Cliente:' cols='12 4' placeholder='Selecione o cliente' type='autocomplete' data={users} fieldKey='id' fieldText='name' readOnly={readOnly} />
                    <Field name='deviceId' validate={this.validaDevice} component={LabelAndInput} label='Dispositivo:' cols='12 4' placeholder='Selecione o dispositivo' type='autocomplete' data={devices} fieldKey='id' fieldText='name' readOnly={readOnly} />
                    {/* <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos' ></ItemList>
                    <ItemList cols='12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus ></ItemList> */}
                </div>
                <div className="box-footer">
                    <div className="pull-right">
                        <button type='button' className="btn btn-warning spaced" onClick={this.props.init} >Cancelar</button>
                        <button type='submit' id='formsub_tt' onClick={this.desativa} className={`btn btn-${this.props.submitClass} spaced`}>{this.props.submitLabel}</button>
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