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
                dispatch([
                    { type: 'USER_FETCHED', payload: resp.data }
                ])
            })
            .catch(e => {
               toastr.error('Erro', e)
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
                    
                    
                    dispatch({ type: 'TOKEN_VALIDATED', payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}