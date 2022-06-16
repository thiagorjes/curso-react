import './auth.css'
import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login, signup } from './authActions'
import Grid from '../common/layout/grid'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {

    constructor(props) {
        super(props)
        this.state = { loginMode: true }
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeMode() {
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) {
        
        const { login, signup } = this.props
        this.state.loginMode ? login(values) : signup(values)
    }

    render() {
        const { loginMode } = this.state

        return (
            <div className="login-box">
                <div className="login-logo"><b> ARGO</b>VIX</div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Bem vindo!</p>
                        <Form
                        onSubmit={this.onSubmit}
                        >
                            {({ handleSubmit, pristine, form, submitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field component={Input} type="input" name="name"
                                        placeholder="Nome" icon='user' hide={loginMode} />
                                    <Field component={Input} type="email" name="email"
                                        placeholder="E-mail" icon='envelope' />
                                    <Field component={Input} type="password" name="password"
                                        placeholder="Senha" icon='lock' />
                                    <Field component={Input} type="password" name="confirm_password"
                                        placeholder="Confirmar Senha" icon='lock' hide={loginMode} />

                                    <Grid cols="4">
                                        <button type="submit"
                                            className="btn btn-primary btn-block">
                                            {loginMode ? 'Entrar' : 'Registrar'}
                                        </button>
                                    </Grid>

                                </form>

                            )}
                        </Form>
                        <br />
                        {/* <a onClick={() => this.changeMode()}>
                            {loginMode ? 'Novo usuário? Registrar aqui!' :
                                'Já é cadastrado? Entrar aqui!'}
                        </a> */}
                    </div>
                </div>
                <Messages />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)