import {NUM_MAX_ALTERADO,NUM_MIN_ALTERADO} from '../actions/actionTypes'

const initialState = {
    min:7,
    max: 31
}

export default function numerosReducer (state = initialState, action) {
    console.log(state)
    console.log(action)
    switch(action.type){
        case NUM_MIN_ALTERADO:{
            return {
                ...state,
                min: action.payload
            }
        }
        case NUM_MAX_ALTERADO:{
            return {
                ...state,
                max:action.payload
            }
        }
        default:
            return state
    }
}