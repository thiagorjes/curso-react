import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {ActiveMe} from '../../main/MenuTreeHelper'

class MenuTree extends Component {
   
    render() {
        return (
        <li className="nav-item " >
            <Link to="#" className="nav-link" onClick={(e)=>ActiveMe(e)} >
                <i className={`nav-icon far ${this.props.icon}`} />
                <p>
                    {this.props.label}
                    <i className="right fas fa-angle-left" />
                </p>
            </Link>
            <ul className="nav nav-treeview " >
                {this.props.children}
            </ul>
        </li>

    )}
}

export default MenuTree