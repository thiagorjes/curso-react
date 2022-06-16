import React,{Component} from 'react'
import Grid from '../layout/grid'
import './dataTable.css'
import './dataTable.js'
import { initTable } from './dataTable.js'



class MyDataTable extends Component {
    componentDidMount(){
        console.log(this.props.columns)
        console.log(this.props.rows[1])
        
       // initTable(this.props.tableId, this.props.btn_container)
    }
    renderTitles(title_options){
        return (
            title_options.map(e => (<th className="sorting sorting_asc" key={e.name} >{e.label}</th>))
        )
    }
    
    renderRows(rows_data, columns){
        
        return (
            rows_data.map((e, idx) => (
                <tr role="row" key={idx} className={`${idx % 2 ? "odd" : "even"}`}>
                    {
                        columns.map( c => (
                       <td className="sorting_1 dtr-control">{e[c.name]}</td>))
                    }
                </tr>)
            )
        )
    }  
    render(){
        return (
            <Grid cols={this.props.cols} className={this.props.className}>
            <div className="row">
                <div className="col-12">
                    <table id={this.props.tableId} className="table table-bordered table-striped dataTable dtr-inline" role="grid"
                        >
                        <thead>
                            <tr role="row">
                                {this.renderTitles(this.props.columns)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows(this.props.rows,this.props.columns)}
                        </tbody>
                    </table>
                </div>
            </div>
        </Grid>
   
        )
    }
}

export default MyDataTable