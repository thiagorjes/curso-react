import {STATUS_ALTERADO} from '../actions/actionTypes'
const initialState = {
    ativo: false
}

export default (state = initialState,action) =>{
    console.log(state)
    switch(action.type){
        case STATUS_ALTERADO:{
            return {
                ...state,
                ativo: action.payload
            }
        }
        default:
            return state
    }
}