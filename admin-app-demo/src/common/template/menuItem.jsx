import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ActiveMe} from '../../main/MenuTreeHelper'

class MenuItem extends Component {
  
    render() {
        return (
            <li className="nav-item">
                <Link to={this.props.path} className='nav-link' onClick={(e)=>ActiveMe(e)}  >
                    <i className={`nav-icon fas ${this.props.icon}`}></i>
                    <p>
                        {this.props.label}
                    </p>
                </Link>
            </li>
        )
    }
}

export default MenuItem