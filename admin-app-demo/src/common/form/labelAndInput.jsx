import React, { Component } from 'react'
import Select from 'react-select'

import Grid from '../layout/grid'

const inputElement = (props, classes) => {

    switch (props.input.type) {
        case 'date':
            return (
                <div className="input-group date" id="reservationdate" data-target-input="nearest">
                    <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate"  {...props.input}
                        className={`form-control datetime  ${classes ? 'is-' + classes : ''}`}
                        placeholder={props.placeholder}
                        readOnly={props.readOnly} />
                    <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                        <div className="input-group-text"><i className="fa fa-calendar" /></div>
                    </div>
                </div>
            )

        case 'number':
            return (
                <input
                    {...props.input}
                    type='number'
                    className={`form-control  ${classes ? 'is-' + classes : ''}`}
                    step='0.01'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                />
            )
        case 'select':
            return (
                <select className={`custom-select form-control  ${classes ? 'is-' + classes : ''}`} {...props.input}
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
                        className={`autocomplete-field  ${props.meta.error || props.meta.warning ? 'is-' + classes : ''}`}
                        isDisabled={props.readOnly}
                        isClearable={props.isClearable}
                        isSearchable={props.isSearchable}
                        {...props.input}
                        options={props.optionslist.map((e) => ({ label: e[props.fieldText], value: e[props.fieldKey] }))}
                    />
            )
        default:
            return (
                <input
                    {...props.input}
                    className={`form-control ${classes ? 'is-' + classes : ''}`}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.input.type} />
            )
    }

}

export default function LabelAndInput(props) {
    const classes = (props.meta.touched &&(props.meta.error ? 'invalid error' : props.meta.warning ? 'invalid warning' : ''))
    return props.label ? (
        <Grid cols={props.cols}>
            <div className="form-group">
                <label htmlFor={props.name} className={classes ? `${classes}-label` : ''}> {props.label}</label>
                {inputElement(props, classes)}
                <span className={classes ? `error invalid-feedback` : 'oculto'}>{props.meta.error || props.meta.warning}</span>
            </div>
        </Grid>
    ) : (
        inputElement(props)
    )
}