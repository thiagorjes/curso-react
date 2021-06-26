
import {STATUS_ALTERADO} from '../actions/actionTypes'
export const alterarStatus = (novoStatus) => {
    return {
        type: STATUS_ALTERADO,
        payload: novoStatus
    }
}

