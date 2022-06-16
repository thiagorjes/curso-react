const userKey = 'm1nh4s3nh4f0rt3!'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            console.log('teste:')
            console.log(action.payload)
            console.log('fim teste:')
            if (action.payload) {
                console.log('manteve')
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                console.log('removeu')
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            console.log('user_fetched')
            console.log(action.payload)
            console.log('user_fetched')
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}