const userKey = 's00p3r_s3cr3t!'
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validToken: false
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOKEN_VALIDATED':
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case 'USER_FETCHED':
            var user = action.payload
            user.tcUser = JSON.parse(user.tcUser)
            localStorage.setItem(userKey, JSON.stringify(user))
            return { ...state, user: action.payload, validToken: true }
        default:
            return state
    }
}

export default AuthReducer