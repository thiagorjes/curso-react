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
        const list = props.rows || [];
        return list.map(
            row => (
                <tr key={row.id}>
                    {
                        showList.map(
                            col => (
                                <th key={col}>
                                    {col != 'disabled' ? row[col] : (row[col] == true ? "Não" : "Sim")}
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

const MyDataTable = props => {
    return (
        <Grid cols={props.cols} className={props.className}>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="example1_length"><label>Show <select name="example1_length"
                        aria-controls="example1" className="custom-select custom-select-sm form-control form-control-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries</label></div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search"
                        className="form-control form-control-sm" placeholder="" aria-controls="example1"/></label></div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table id="example1" className="table table-bordered table-striped dataTable" role="grid"
                        aria-describedby="example1_info">
                        <thead>
                            <tr role="row">
                                <th className="sorting_asc"  aria-controls="example1"  
                                     aria-sort="ascending"
                                    aria-label="Rendering engine: activate to sort column descending">Rendering engine</th>
                                <th className="sorting"  aria-controls="example1"  
                                     aria-label="Browser: activate to sort column ascending">Browser</th>
                                <th className="sorting"  aria-controls="example1"  
                                     aria-label="Platform(s): activate to sort column ascending">
                                    Platform(s)</th>
                                <th className="sorting"  aria-controls="example1"  
                                     aria-label="Engine version: activate to sort column ascending">Engine
                                    version</th>
                                <th className="sorting"  aria-controls="example1"  
                                     aria-label="CSS grade: activate to sort column ascending">CSS grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td>Firefox 1.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.7</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td>Firefox 1.5</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td>Firefox 2.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td>Firefox 3.0</td>
                                <td>Win 2k+ / OSX.3+</td>
                                <td>1.9</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td>Camino 1.0</td>
                                <td>OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td>Camino 1.5</td>
                                <td>OSX.3+</td>
                                <td>1.8</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td>Netscape 7.2</td>
                                <td>Win 95+ / Mac OS 8.6-9.2</td>
                                <td>1.7</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td>Netscape Browser 8</td>
                                <td>Win 98SE+</td>
                                <td>1.7</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="odd">
                                <td className="sorting_1">Gecko</td>
                                <td>Netscape Navigator 9</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.8</td>
                                <td>A</td>
                            </tr>
                            <tr role="row" className="even">
                                <td className="sorting_1">Gecko</td>
                                <td>Mozilla 1.0</td>
                                <td>Win 95+ / OSX.1+</td>
                                <td>1</td>
                                <td>A</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th  >Rendering engine</th>
                                <th  >Browser</th>
                                <th  >Platform(s)</th>
                                <th  >Engine version</th>
                                <th  >CSS grade</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                        <ul className="pagination">
                            <li className="paginate_button page-item previous disabled" id="example1_previous"><a href="#"
                                aria-controls="example1" data-dt-idx="0"  className="page-link">Previous</a></li>
                            <li className="paginate_button page-item active"><a href="#" aria-controls="example1" data-dt-idx="1"
                                 className="page-link">1</a></li>
                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="2" 
                                className="page-link">2</a></li>
                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="3" 
                                className="page-link">3</a></li>
                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="4" 
                                className="page-link">4</a></li>
                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="5" 
                                className="page-link">5</a></li>
                            <li className="paginate_button page-item "><a href="#" aria-controls="example1" data-dt-idx="6" 
                                className="page-link">6</a></li>
                            <li className="paginate_button page-item next" id="example1_next"><a href="#" aria-controls="example1"
                                data-dt-idx="7"  className="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Grid>
    )
}


export {DataTable,MyDataTable}