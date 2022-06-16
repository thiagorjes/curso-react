import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }
    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.props.user || {}
        return (

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown ">
                    <div className="nav-link dropdown-toggle user-panel " data-toggle="dropdown" href="#" aria-expanded="false">
                        <span className="hidden-xs"> {name}</span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" style={{ left: 'inherit', right: 0 }}>
                        <div className="dropdown-item">
                            <p>{name}<small>{email}</small></p>
                        </div >
                        <div className="dropdown-divider" />

                        <div className="pull-right dropdown-item">
                            <a href="#" onClick={this.props.logout}
                                className="btn btn-default btn-flat">Sair</a>
                        </div>
                    </div>
                </li>

            </ul>

        )
    }
}
const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)