import React from 'react'


export default props => (

    <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0 text-dark"> {props.title}</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item active">{props.small}</li>
                    </ol>
                </div>{/* /.col */}
            </div>{/* /.row */}
        </div>{/* /.container-fluid */}
    </div>

)