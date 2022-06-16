import {BILLING_CYCLES_FETCHED,GET_DEVICES,GET_USERS,CREATE_BILLING,SELECTED_DEVICE,SELECTED_USER,SELECTED_BC} from './billingCycleActionTypes'
const INITIAL_STATE = {list:[]}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case BILLING_CYCLES_FETCHED: {
            return { ...state,list: action.payload.data}
        }
        case GET_DEVICES:{
            return {...state, devices: action.payload.data}
        }
        case GET_USERS:{
            return {...state, users: action.payload.data}
        }
        case SELECTED_DEVICE:{
            return {...state, selectedDevice: action.payload}
        }
        case SELECTED_USER:{
            return {...state, selectedUser: action.payload}
        }
        case SELECTED_BC:{
            return {...state, selectBC: action.payload}
        }
        default:
            return state
    }
}