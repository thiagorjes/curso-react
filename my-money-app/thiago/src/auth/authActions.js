import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import consts from '../consts'

export function login(values) {
    const authdata = {username: values.email, password: values.password}
    return submit(authdata, `${consts.API_URL}/Users/authenticate`)
}

export function signup(values) {
    return submit(values, `${consts.API_URL}/signup`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                console.log(resp.data)
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

export function validateToken(jwtToken) {
    return dispatch => {
        if (jwtToken) {
            axios.post(`${consts.API_URL}/Users/validateToken`, { "jwtToken":jwtToken })
                .then(resp => {
                    console.log('erro aqui')
                    console.log(resp.data)
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            console.log('erro aqui????')
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}