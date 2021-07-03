import React,{Component} from 'react'
import Grid from '../common/layout/grid'
import DataTable from 'react-data-table-component'

const DeviceList = (props) => {
    console.log("entrei no devicelist")    
    console.log(props)
    return (
        <Grid cols={props.cols} className={props.className}>
            <DataTable
                title={props.title}
                className={props.className}
                columns={props.headers}
                data={props.devices}
                selectableRows // add for checkbox selection
                Clicked
            />
        </Grid>
        
    )

}

export default DeviceList

