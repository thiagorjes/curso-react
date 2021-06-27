import React from 'react'

const MenuTree = (props)=>{
    return (
        <li className='treeview'>
            <a href='#'>
                <i className={`fa fa-${props.icon}`} /> &nbsp;&nbsp;&nbsp;{props.label}
                <i className='fa fa-angle-left pull-right' />
            </a>
            <ul className='treeview-menu'>
                {props.children}
            </ul>
        </li>
    )
}

export default MenuTree