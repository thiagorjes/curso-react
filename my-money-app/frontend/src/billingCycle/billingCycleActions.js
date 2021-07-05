import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabAction'

import {BILLING_CYCLES_FETCHED,GET_DEVICES,GET_USERS,CREATE_BILLING,SELECTED_DEVICE,SELECTED_USER} from './billingCycleActionTypes'

const BASE_URL = 'https://localhost:5001/ControleDeDebitos'
const INITIAL_VALUES = {
    chargedValue:39.99,
    receivedValue:0.00,
    expiresAt: new Date(Date.now()).toISOString().substring(0,10)
}

export function getList(){
    const request = axios.get(`${BASE_URL}/ArgovixCobranca`)
    
    return {
        type: BILLING_CYCLES_FETCHED,
        payload: request
    }
}

export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]
}

function submit(values,method){
    const id = (values.id? '/'+values.id: '')
    return dispatch => {
        axios[method](`${BASE_URL}/ArgovixCobranca${id}`,{ 
            "id": values.id,
            "userId": values.userId,
            "createAt": new Date(Date.now()).toISOString(),
            "expiresAt": new Date(values.expiresAt).toISOString(),
            "deviceId": values.deviceId,
            "description": values.description,
            "chargedValue": values.chargedValue,
            "receivedValue": values.receivedValue
        })
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com Sucesso.')
                dispatch(init())
            }).catch(e=>{
                toastr.error('Erro',e.response.data)
            })
    }
}

export function remove(values){
    return submit(values, "delete") 
}

export function update(values){
    return submit(values, "put") 
}

export function create(values){
    return submit(values, "post")
}

export function getUsers(){
    const request = axios.get(`${BASE_URL}/TcUser`)
    return {
        type: GET_USERS,
        payload: request
    }
}

export function getDevices(){
    const request = axios.get(`${BASE_URL}/TcDevice`)
    return {
        type: GET_DEVICES,
        payload: request
    }
}

export function selectDevice(device){
    
    return {
        type: SELECTED_DEVICE,
        payload: device
    }
}

export function selectUser(user){
    
    return {
        type: SELECTED_USER,
        payload: user
    }
}

export function showUpdate(billingCycle){
    let bc = billingCycle
    bc.expiresAt = new Date(billingCycle.expiresAt).toISOString().substring(0,10)
    bc.createAt = new Date(billingCycle.createAt).toISOString().substring(0,10)
    return [
        selectTab('tabUpdate'),
        showTabs('tabUpdate'),
        initialize('billingCycleForm',bc)
    ]
}

export function showDelete(billingCycle){
    let bc = billingCycle
    bc.expiresAt = new Date(billingCycle.expiresAt).toISOString().substring(0,10)
    bc.createAt = new Date(billingCycle.createAt).toISOString().substring(0,10)
    return [
        selectTab('tabDelete'),
        showTabs('tabDelete'),
        initialize('billingCycleForm',bc)
    ]
}