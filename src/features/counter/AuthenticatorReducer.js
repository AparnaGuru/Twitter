const initialState = { type: "", isAuth: false , token: "" }

function AuthenticatorReducer(state = initialState, action) {
    if (action.type === 'updated') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            isAuth: action.payload,
            token: action.tokenVal
        }
    }
    // otherwise return the existing state unchanged
    return state

}
export default AuthenticatorReducer;