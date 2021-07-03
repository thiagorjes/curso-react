import React from 'react'
import Grid from '../layout/grid'
import Column from '../layout/column'
import Row from '../layout/row'
import './panel.css'

const Panel = props => {
    
    return (
            <Grid cols={props.cols}>
                <Column>
                    <Row >
                        <div className='argovixPanel'>
                            <div className="argovixPanelTitle">{props.title}</div>
                            <div className="argovixPanelContent">    
                                {props.children}
                            </div>
                        </div>     
                    </Row>      
                </Column>
            </Grid>
)}

export default Panel