import React, { Component } from 'react'
import Select from 'react-select'
// import DropdownList from 'react-widgets/DropdownList'
// import DatePicker from 'react-widgets/DatePicker'
// import NumberPicker from "react-widgets/NumberPicker";

import Grid from '../layout/grid'

// import 'modules/admin-lte/dist/js/app.min.js'

// "admin-lte": "^2.3.6",


import 'modules/admin-lte/dist/js/adminlte.min.js'

const inputElement = (props, classes) => {
    switch (props.type) {
        case 'date':
            return (
                <div className="input-group date">
                    <div className="input-group-addon">
                        <i className="fa fa-calendar"></i>
                    </div>
                    <input
                        {...props.input}
                        className={`form-control datetime ${classes ? classes + '-input' : ''}`}
                        type='date'
                        placeholder={props.placeholder}
                        readOnly={props.readOnly}
                    />
                </div>
            )

        case 'number':
            return (
                <input
                    {...props.input}
                    type='number'
                    className={`form-control ${classes ? classes + '-input' : ''}`}
                    step='0.01'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                />
            )
        case 'select':
            return (
                <select className={`custom-select form-control ${classes ? classes + '-input' : ''}`} {...props.input}
                    disabled={props.readOnly}>
                    <option>{props.placeholder}</option>
                    {props.data.map((e) => (
                        <option key={e.id} value={e[props.fieldKey || 'id']}>{e[props.fieldText || 'name']}</option>
                    ))}

                </select>
            )
        case 'autocomplete':
            return (
                <Select
                    name={props.name}
                    classNamePrefix={props.name}
                    placeholder={props.placeholder}
                    className={`autocomplete-field ${classes ? classes + '-input' : ''}`}
                    isDisabled={props.readOnly}
                    isClearable={props.isClearable}
                    isSearchable={props.isSearchable}
                    options={props.data.map((e)=>({label:e[props.fieldText],value:e[props.fieldKey]}))}
                />
            )
        default:
            return (
                <input
                    {...props.input}
                    className={`form-control ${classes ? classes + '-input' : ''}`}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type} />
            )
    }

}

export default function LabelAndInput(props) {
    const classes = (props.meta.touched && (props.meta.error ? 'error invalid' : props.meta.warning ? 'warning invalid' : ''))
    return props.label ? (
        <Grid cols={props.cols}>
            <div className="form-group">
                <label htmlFor={props.name} className={classes ? `${classes}-label` : ''}> {props.label}</label>
                {inputElement(props, classes)}
                <span className={classes ? `${classes}-feedback` : 'oculto'}>{props.meta.error || props.meta.warning}</span>
                {/* {props.meta.touched && 
                    (
                        (props.meta.error &&  {props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>)
                    )} */}
            </div>
        </Grid>
    ) : (
        inputElement(props)
    )
}