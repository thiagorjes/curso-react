import axios from 'axios'
const BASE_URL = 'http://localhost:5000/ControleDeDebitos'

export function getList(){
    const request = axios.get(`${BASE_URL}/ArgovixCobranca`)
    
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

