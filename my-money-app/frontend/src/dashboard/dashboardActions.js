import axios from 'axios'
const BASE_URL = 'http://localhost:5000/ControleDeDebitos'

export function getSummary(){
    const request = axios.get(`${BASE_URL}/ArgovixCobranca/summary`)
    
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

