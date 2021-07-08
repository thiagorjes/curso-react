import React from 'react'

// import DropdownList from 'react-widgets/DropdownList'
// import DatePicker from 'react-widgets/DatePicker'
// import NumberPicker from "react-widgets/NumberPicker";

import Grid from '../layout/grid'

import 'modules/admin-lte/dist/js/app.min.js'

// function renderUserList({ input, data, dataKey, textField }) {
//     return (
//         <DropdownList {...input}
//             data={data}
//             dataKey='id'
//             onChange={input.onChange}
//             textField={item => item.name + '(' + item.id + ')'}
//             defaultValue={input.value} />
//     )
// }

// function renderDeviceList({ input, data, dataKey, textField }) {
//     return (
//         <DropdownList {...input}
//             data={data}
//             dataKey='id'
//             onChange={input.onChange}
//             textField='name'
//             defaultValue={input.value} />
//     )
// }

// function renderTextArea({ input, placeholder }) {
//     return (<div className="input-group">
//         <input type="text" className="form-control" placeholder={placeholder} />
//         <span className="input-group-addon"><i className="fa fa-check"></i></span>
//     </div>)
// }



const inputElement = (props) => {
    switch (props.type) {
        case 'date':
            return (
                <div className="input-group date">
                        <div className="input-group-addon">
                            <i className="fa fa-calendar"></i>
                        </div>
                <input
                    {...props.input}
                    className='form-control datetime'
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
                        className='form-control'
                        step='0.01' 
                        placeholder={props.placeholder}
                        readOnly={props.readOnly}
                        /> 
                )
        case 'select':
            return (
                <select className="custom-select form-control" {...props.input} 
                disabled={props.readOnly}>
                                <option>{props.placeholder}</option>
                          {props.data.map((e)=>(
                              <option key={e.id} value={e[props.fieldKey||'id']}>{e[props.fieldText||'name']}</option>
                          ))}
                          
                        </select>
            )
        default:
            return (
                <input
                    {...props.input}
                    className='form-control'
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    type={props.type} />
            )
    }

}

export default props => (
    props.label? (
        <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}> {props.label}</label>
            {inputElement(props)}
        </div>
    </Grid>
    ) : (
        inputElement(props)
    )
    
)