import React,{Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Report extends Component {
    render(){
        return (
            <div>
                <ContentHeader title='Relatórios' small='Crie e exporte relatórios de seus dispositivos' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='1000' text='Total de Dispositivos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value='R$ 10000' text='Receita de Dispositivos' />
                        <ValueBox cols='12 4' color='blue' icon='money' value='R$ 3000' text='Lucro dos Dispositivos' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Report