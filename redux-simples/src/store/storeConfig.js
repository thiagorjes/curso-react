import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeros' 
import statusReducer from './reducers/status'

const reducers = combineReducers({
    numeros: numerosReducer,
    status: statusReducer
    
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig