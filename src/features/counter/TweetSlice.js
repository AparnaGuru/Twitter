const initialState = { type: "", value: "" }

function tweetReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'updated') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: action.payload
        }
    }

    else if (action.type === 'clear') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: action.payload
        }
    }
    // otherwise return the existing state unchanged
    return state
}
export default tweetReducer;