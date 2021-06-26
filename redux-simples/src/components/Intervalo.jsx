import './Intervalo.css'
import Switch from 'react-switch'
import { alterarNumeroMin, alterarNumeroMax } from '../store/actions/numeros'
import { alterarStatus} from '../store/actions/status'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
const Intervalo = props => {
    const { ativo, min, max } = props
    
    console.log(ativo)
    return (
        <Card title="Intervalo de Números" red >
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} readOnly={ativo} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}  onChange={e => props.alterarMaximo(+e.target.value)} readOnly={ativo} />
                </span>
                            <Switch checked={ativo}   onChange={e => props.alteraStatus(e)}/>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
        ativo: state.status.ativo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            //action creator -> action
            const action = alterarNumeroMin(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero) {
            //action creator -> action
            const action = alterarNumeroMax(novoNumero)
            dispatch(action)
        },
        alteraStatus(novoStatus){
            const action = alterarStatus(novoStatus)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intervalo)