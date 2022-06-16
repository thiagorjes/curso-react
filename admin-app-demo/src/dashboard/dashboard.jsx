import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentDidMount() {
        this.props.getSummary(this.props.user)
    }

    render() {
        const { credit, debt } = this.props.summary
        let creditd = parseFloat((credit)).toFixed(2)
        let debtd = parseFloat((debt)).toFixed(2)
        let total = (creditd - debtd).toFixed(2)
        return (
            <div>                   
                <ContentHeader title='ARGOVIX - Gestão' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='thumbs-up' value={`R$ ${creditd}`}  text='Total Recebido' />
                        <ValueBox cols='12 4' color='red' icon='thumbs-down' value={`R$ ${debtd}`} text='Total Pendente' />
                        <ValueBox cols='12 4' color='blue' icon={(credit-debt)>0?'grin':'sad-cry'} value={`R$ ${total}`} text='Total Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}


const mapStateToProps = state => ({ summary: state.dashboard.summary, user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)