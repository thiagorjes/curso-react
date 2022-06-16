import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Field} from 'react-final-form'
// import arrayMutators from 'final-form-arrays'
// import { FieldArray } from 'react-final-form-arrays'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import If from '../common/operator/if'

class ItemList extends Component {
    add(index, item = {}) {
        if (!this.props.readOnly) {
           // this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    del(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            //this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (

            <tr key={index}>
                <td>
                    <Field name={`${this.props.field}[${index}].name`} component={Input} placeholder='Informe o nome' readOnly={this.props.readOnly} ></Field>
                </td>
                <td>
                    <Field name={`${this.props.field}[${index}].value`} component={Input} placeholder='Informe o valor' readOnly={this.props.readOnly}></Field>
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field name={`${this.props.field}[${index}].status`} component={Input} placeholder='Informe o status' readOnly={this.props.readOnly}></Field>
                    </td>
                </If>
                <td className='table-actions'>
                    <button type='button' className='btn btn-success fa fa-plus spaced' onClick={() => this.add(index + 1)} />
                    <button type='button' className='btn btn-warning fa fa-clone spaced' onClick={() => this.add(index + 1, item)} />
                    <button type='button' className='btn btn-danger fa fa-trash spaced' onClick={() => this.del(index)} />
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>

                    </table>
                </fieldset>
            </Grid>
        )
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
//export default connect(null, mapDispatchToProps)(ItemList)
export default ItemList
