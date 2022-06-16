import React, { Component } from 'react'
import NavBar from './navbar'
import {SideBarToggle} from '../../main/MenuTreeHelper'

export default class Header extends Component {
   
    render() {
        return (
            <div>
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="sidebar-toggle" data-enegle-remember="true" href="#" data-widget="pushmenu" role="button" ><i className="fas fa-bars" onClick={SideBarToggle}/></a>
                        </li>
                        {/* <li className="nav-item d-none d-sm-inline-block">
                            <a href="index3.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">Contact</a>
                        </li> */}
                    </ul>
                    {/* Right navbar links */}
                    <NavBar/>
                </nav>

            </div>
        )
    }
}
