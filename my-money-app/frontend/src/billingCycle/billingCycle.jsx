import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { create, update, remove, getUsers, getDevices, selectDevice, selectUser , init} from './billingCycleActions'

import ContenHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContenHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List></List>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form submitLabel='Adicionar' submitClass='success' onSubmit={this.props.create} users={this.props.users || []} devices={this.props.devices || []} selectUser={this.props.selectUser} selectDevice={this.props.selectDevice} device={this.selectedDevice} user={this.selectedUser} />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form submitLabel='Atualizar' submitClass='info' onSubmit={this.props.update} users={this.props.users || []} devices={this.props.devices || []} selectUser={this.props.selectUser} selectDevice={this.props.selectDevice} device={this.selectedDevice} user={this.selectedUser} />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form submitLabel='Remover' submitClass='danger' onSubmit={this.props.remove} users={this.props.users || []} devices={this.props.devices || []} selectUser={this.props.selectUser} selectDevice={this.props.selectDevice} device={this.selectedDevice} user={this.selectedUser} readOnly/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapStateToProps = state => ({ users: state.billingCycle.users, devices: state.billingCycle.devices, selectedUser: state.billingCycle.selectedUser, selectedDevice: state.billingCycle.selectedDevice })
const mapDispatchToPros = dispatch => bindActionCreators({ init,create, update,remove, getUsers, getDevices, selectDevice, selectUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(BillingCycle)