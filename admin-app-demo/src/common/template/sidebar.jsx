import Menu from './menu'
import React, { Component } from 'react';

class SideBar extends Component {

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="assets/img/icone.png" alt="ARGOVIX" className="brand-image img " style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light"><b>ARGO</b>VIX</span>
                </a>
                
                {/* Sidebar */}
                <div className="sidebar">
                    <Menu>{this.props}</Menu>
                </div>
                {/* Sidebar */}
            </aside>
        );
    }
}

export default SideBar;