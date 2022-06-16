import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import If from '../operator/if'

const Menu = (props) => {
    return (

      <nav className="mt-2">
        <ul className='nav nav-pills nav-sidebar flex-column'>
            <If test={(props.user.tcUser.attributes!=undefined && props.user.tcUser.attributes['gestor']=="true")}>
            <MenuItem path='/' label='Dashboard' icon='dashboard' />
            <MenuTree label='Cadastro' icon='edit'>
                <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='usd' />
            </MenuTree>
            </If>
            <If test={(props.user.tcUser.attributes==undefined || props.user.tcUser.attributes['gestor']!="true")}>
                <MenuItem path='/' label='Dashboard' icon='dashboard' />
                <MenuTree label='Cadastro' icon='edit'>
                    <MenuItem path='billingCycles' label='Meus de Boletos' icon='usd' />
                </MenuTree>
            </If>   
            {/* <MenuItem label='Relatórios' icon='circle' path='report'></MenuItem>
            <MenuItem label='Dispositivos' icon='circle' path='device'></MenuItem> */}
        </ul>
        </nav>
    )

}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps)(Menu)