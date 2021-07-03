import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

const Menu = (props) => {
    return (
        <ul className='sidebar-menu'>
            <MenuItem path='#' label='Dashboard' icon='dashboard' />
            <MenuTree label='Cadastro' icon='edit'>
                <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
            </MenuTree>
            <MenuItem label='Relatórios' icon='circle' path='#report'></MenuItem>
            <MenuItem label='Dispositivos' icon='circle' path='#device'></MenuItem>
        </ul>
    )

}
export default Menu