
import { numberReducer } from './number'
import { userReducer } from './user'

function reducer(state, action) {
    let newState = numberReducer(state,action)
    return userReducer(newState,action)
    
}


export {
    reducer
}