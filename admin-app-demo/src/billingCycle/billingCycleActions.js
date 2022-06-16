import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import { showTabs, selectTab } from '../common/tab/tabAction'
import consts from '../consts'

import {BILLING_CYCLES_FETCHED,GET_DEVICES,GET_USERS,SELECTED_DEVICE,SELECTED_USER,SELECTED_BC} from './billingCycleActionTypes'

const BASE_URL = `${consts.API_URL}/ControleDeDebitos`
const INITIAL_VALUES = {
    chargedValue:39.99,
    receivedValue:0.00,
    createAt: new Date(Date.now()).toISOString().substring(0,10),
    expiresAt: new Date(Date.now()).toISOString().substring(0,10),
    credits: [{}],
    debts: [{}]
}

export function getList(user){
    const id = (user===null || (user.tcUser!==undefined && user.tcUser.attributes!==undefined && user.tcUser.attributes['gestor']==="true"))?null:user.id
    const byUser = (id? '/TcUser/'+id:'')
    
    const request = axios.get(`${BASE_URL}/ArgovixCobranca${byUser}`)
    return {
        type: BILLING_CYCLES_FETCHED,
        payload: request
    }
}

export function init(user){
    const mostrar = (user===null || (user.tcUser!==undefined && user.tcUser.attributes!==undefined && user.tcUser.attributes['gestor']==="true"))?null:user.id
    const tabs = mostrar!=null?['tabList']:['tabList','tabCreate']
    return [
        selectBC(INITIAL_VALUES),
        showTabs(...tabs),
        selectTab('tabList'),
        getList(user),
        getDevices(),
        getUsers(user)
    ]
}

function submit(values,method){
    const id = (values.id? '/'+values.id: '')
    return dispatch => {
        axios[method](`${BASE_URL}/ArgovixCobranca${id}`,{ 
            "id": values.id,
            "userId": values.userId.value,
            "createAt": new Date(values.createAt).toISOString(),
            "expiresAt": new Date(values.expiresAt).toISOString(),
            "deviceId": values.deviceId.value,
            "description": values.description,
            "chargedValue": values.chargedValue,
            "receivedValue": values.receivedValue
        })
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com Sucesso.')
                dispatch(init(null))
            }).catch(e=>{
                document.getElementById('formsub_tt').disabled=false;
                e.response.data.messages.forEach(element => {
                    toastr.error('Erro',element) 
                });
                
            })
    }
}

export function selectBC(bc) {
    
    return {
        type: SELECTED_BC,
        payload: bc
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

export function getUsers(user){
    const id = (user===null || (user.tcUser!==undefined && user.tcUser.attributes!==undefined && user.tcUser.attributes['gestor']==="true"))?null:user.id
    const myId = id? '/'+id:''
    const request = axios.get(`${BASE_URL}/TcUser${myId}`)
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
        getDevices(),
        getUsers(null),
        selectBC(bc)
    ]
}

export function showDelete(billingCycle){
    let bc = billingCycle
    bc.expiresAt = new Date(billingCycle.expiresAt).toISOString().substring(0,10)
    bc.createAt = new Date(billingCycle.createAt).toISOString().substring(0,10)
    return [
        selectTab('tabDelete'),
        showTabs('tabDelete'),
        getDevices(),
        getUsers(null),
        selectBC(bc)
    ]
}