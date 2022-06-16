import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import If from '../operator/if'

const Menu = (props) => {
    return (

        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <If test={(props.user.tcUser.attributes != undefined && props.user.tcUser.attributes['gestor'] == "true")}>
                <MenuItem path='/' label='Dashboard' icon='fa-tachometer-alt' />
                <MenuTree label='Cadastro' icon='fa-edit'>
                    <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='fa-dollar-sign' />
                </MenuTree>
                </If>
                <If test={(props.user.tcUser.attributes == undefined || props.user.tcUser.attributes['gestor'] != "true")}>
                    <MenuItem path='/' label='Dashboard' icon='fa-tachometer-alt' />
                    <MenuTree label='Cadastro' icon='fa-edit'>
                        <MenuItem path='billingCycles' label='Meus de Boletos' icon='fa-dollar-sign' />
                    </MenuTree>
                </If>
            </ul>
        </nav>

    )

}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(Menu)