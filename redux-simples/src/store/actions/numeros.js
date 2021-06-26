import {NUM_MAX_ALTERADO,NUM_MIN_ALTERADO} from '../actions/actionTypes'
// Action Creator
export const alterarNumeroMin = (novoNumero) => {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

export const alterarNumeroMax = (novoNumero) => {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}

