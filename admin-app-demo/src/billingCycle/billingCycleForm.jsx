import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
// import ItemList from './itemList'
// import Summary from './summary'
import Row from '../common/layout/row'

class BillingCycleForm extends Component {

    selectBC = {}

    calculateSummary() {
        const sum = (t, v) => t + v
        let credits = this.props.credits || [{}]
        let debts = this.props.debts || [{}]
        return {
            sumOfCredits: credits.map((c) => +c.value || 0).reduce(sum),
            sumOfDebts: debts.map((d) => +d.value || 0).reduce(sum)
        }
    }

    componentDidMount() {
        
        this.selectBC = this.props.selectBC
        const userId = (this.props.selectBC.user ? { label: this.props.selectBC.user.name, value: this.props.selectBC.user.id } : null)
        const deviceId = (this.props.selectBC.device ? { label: this.props.selectBC.device.name, value: this.props.selectBC.device.id } : null)
        this.selectBC = { ...this.selectBC, userId, deviceId }
    }

    desativa() {
        
        document.getElementById('formsub_tt').disabled = true;
    }

    validaDataCriacao(value) {
        const hoje = new Date(Date.now() - (3 * 3600000)).toISOString()
        return (value > hoje ? 'Precisa ser menor ou igual data de hoje.' : undefined)
    }

    validaDataValidade(value) {
        const datavalida = document.getElementsByName('createAt')[0].value
        return (value < datavalida ? 'Precisa ser maior ou igual data de criação.' : undefined)
    }

    validaValorRecebido(value) {
        
        var temp = isNaN(+value)?0:+value
        
        return (temp <= document.getElementsByName('chargedValue')[0].value ? undefined : 'Não pode ser maior que o valor a receber.')
    }

    validaUser(value) {
        
        return (value === undefined) ? 'Selecione um usuário' : undefined
    }

    validaDevice(value) {
        
        return (value === undefined) ? 'Selecione um rastreador' : undefined
    }

    render() {
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <Form
                destroyOnUnmount={false}
                onSubmit={this.props.onSubmit}
                initialValues={this.selectBC}
            >
                {({ handleSubmit, pristine, form, submitting }) => (
                    <form role="form" onSubmit={handleSubmit}>
                        <div className="box-body">
                            <Row>
                                <Field name='createAt' validate={this.props.readOnly?null:this.validaDataCriacao} component={LabelAndInput} label='Cliente desde:' cols='12 2' placeholder='dd/MM/YYY' type='date' readOnly={this.props.readOnly} />
                                <Field name='expiresAt' validate={this.props.readOnly?null:this.validaDataValidade} component={LabelAndInput} label='Válido até:' cols='12 2' placeholder='dd/MM/YYY' type='date' readOnly={this.props.readOnly} />
                                <Field name='description' component={LabelAndInput} label='Descrição:' cols='12 8' placeholder='Insirea uma breve descrição' type='text' readOnly={this.props.readOnly} />
                            </Row>
                            <Row>
                                <Field name='chargedValue' component={LabelAndInput} label='Valor a receber:' cols='12 2' placeholder='39.99' type='number' readOnly={this.props.readOnly} />
                                <Field name='receivedValue' validate={this.props.readOnly?null:this.validaValorRecebido} component={LabelAndInput} label='Valor recebido:' cols='12 2' placeholder='0.00' type='number' readOnly={this.props.readOnly} />
                                <Field name='userId' validate={this.props.readOnly?null:this.validaUser} component={LabelAndInput} label='Cliente:' cols='12 4' placeholder='Selecione o cliente' type='autocomplete' optionslist={this.props.users} fieldKey='id' fieldText='name' readOnly={this.props.readOnly} />
                                <Field name='deviceId' validate={this.props.readOnly?null:this.validaDevice} component={LabelAndInput} label='Dispositivo:' cols='12 4' placeholder='Selecione o dispositivo' type='autocomplete' optionslist={this.props.devices} fieldKey='id' fieldText='name' readOnly={this.props.readOnly} />
                            </Row>
                            {/* <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' list={this.props.credits} readOnly={this.props.readOnly} field='credits' legend='Créditos' ></ItemList>
                    <ItemList cols='12 6' list={this.props.debts} readOnly={this.props.readOnly} field='debts' legend='Débitos' showStatus ></ItemList> */}
                        </div>
                        <div className="box-footer">
                            <div className="pull-right">
                                <button type='button' className="btn btn-warning spaced" onClick={() => { form.reset(); this.props.init(null); return null }} >Cancelar</button>
                                {/* disabled={pristine || submitting} */}
                                <button type='submit' id='formsub_tt' onClick={this.desativa} className={`btn btn-${this.props.submitClass} spaced`}>{this.props.submitLabel}</button>
                            </div>
                        </div>
                    </form>
                )}
            </Form>
        )
    }
}


// const selector = useFormState('billingCycleForm')
// const mapStateToProps = state => ({
//     credits: selector.values['credits'],
//     debts: selector.values['debts']
// })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
const mapStateToProps = state => ({ user: state.auth.user, selectBC: state.billingCycle.selectBC })

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)