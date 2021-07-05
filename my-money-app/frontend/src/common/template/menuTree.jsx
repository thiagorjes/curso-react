import React from 'react'
import Spacer from './spacer'

const MenuTree = (props)=>{
    return (
        <li className='treeview'>
            <a href='#'>
                <i className={`far fa-${props.icon}`} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.label}
                <i className='fa fa-angle-left pull-right' />
            </a>
            <ul className='treeview-menu'>
                <Spacer>{props.children}</Spacer>
            </ul>
        </li>
    )
}

export default MenuTree