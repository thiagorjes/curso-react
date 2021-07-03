
export function numberReducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
        {
            return { ...state, number: state.number + 2 }
        }
        case 'numberMultiplyBy7':
        {
            return { ...state, number: state.number * 7 }
        }
        case 'numberDivideBy25':
        {
            return { ...state, number: state.number / 25 }
        }
        case 'numberParseInt':
        {
            return { ...state, number: parseInt(state.number) }
        }
        case 'numberAddN':
        {
            return { ...state, number: state.number + parseInt(action.payload) }
        }
        default:
            return state
    }
}
