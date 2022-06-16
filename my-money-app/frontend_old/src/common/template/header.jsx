import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className="main-header">
        <a href='/#/' className='logo'>
            <img className="icone" src="assets/img/icone.png"/>
            <div className='texto'>
                <b>ARGO</b>VIX
            </div>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="/#/" className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)