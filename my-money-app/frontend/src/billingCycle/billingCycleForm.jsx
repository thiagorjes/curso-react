import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {init} from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput';
import CreditList from './creditList'

class BillingCycleForm extends Component {


    render() {
        const { handleSubmit, users, devices, readOnly } = this.props
       
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='expiresAt' component={LabelAndInput} label='Válido até:' cols='12 4' placeholder='dd/MM/YYY' type='date' readOnly={readOnly}/>
                    <Field name='description' component={LabelAndInput} label='Descrição:' cols='12 8' placeholder='Insirea uma breve descrição' type='text'  readOnly={readOnly}/>
                    <Field name='chargedValue' component={LabelAndInput} label='Valor a receber:' cols='12 2' placeholder='39.99' type='number'  readOnly={readOnly}/>
                    <Field name='receivedValue' component={LabelAndInput} label='Valor recebido:' cols='12 2' placeholder='0.00' type='number'  readOnly={readOnly}/>
                    <Field name='userId' component={LabelAndInput} label='Cliente:' cols='12 4' placeholder='Selecione o cliente' type='select' data={users} fieldKey='id' fieldText='name'  readOnly={readOnly}/>
                    <Field name='deviceId' component={LabelAndInput} label='Dispositivo:' cols='12 4' placeholder='Selecione o dispositivo' type='select' data={devices} fieldKey='id' fieldText='name'  readOnly={readOnly}/>
                    {/* <CreditList cols='12 6' readOnly={readOnly}></CreditList> */}
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
const mapDispatchToProps = dispatch => bindActionCreators({init},dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)