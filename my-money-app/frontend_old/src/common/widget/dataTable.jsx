import React from 'react'
import Grid from '../layout/grid'
import './dataTable.css'

const DataTable = props => {

    const renderHeaders = () => {
        const list = props.headers || []
        return list.map(
            element => (
                <th key={element}> {element}</th>
            )
        )
    }

    const renderRows = () => {
        const showList = props.showCols || []
        const list = props.rows || [ ];
        return list.map(
            row => (
                <tr key={row.id}>
                    {
                        showList.map(
                            col => (
                                <th key={col}>
                                    {col!='disabled'?row[col]:(row[col]==true?"Não":"Sim")}
                                </th>
                            )
                        )
                    }
                </tr>
            )
        )
    }
    return (
    <Grid cols={props.cols} className={props.className}>
        <table >
            <thead>
                <tr>
                    {renderHeaders()}
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    </Grid>)
}


export default DataTable