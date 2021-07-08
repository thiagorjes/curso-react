import React from 'react'
import Spacer from './spacer'

const MenuTree = (props)=>{
    return (
        <li className='treeview'>
            <a href='#'>
                <i className={`far fa-${props.icon}`} /> <span>{props.label}</span>
                <i className='fa fa-angle-left pull-right' />
            </a>
            <ul className='treeview-menu'>
                {props.children}
            </ul>
        </li>
    )
}

export default MenuTree