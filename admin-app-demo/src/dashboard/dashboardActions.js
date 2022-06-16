import axios from 'axios'
import consts from '../consts'

const BASE_URL = `${consts.API_URL}/ControleDeDebitos`

export function getSummary(user){
    const myId = (user==null || user.tcUser.attributes!=undefined && user.tcUser.attributes['gestor']=="true")?null:user.id
    const byId = (myId?'/'+myId:'')
    
    const request = axios.get(`${BASE_URL}/ArgovixCobranca/summary${byId}`)
    
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

