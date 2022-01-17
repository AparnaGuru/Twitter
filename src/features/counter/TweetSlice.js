const initialState = {type:"",value: ""}

function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'updated') {
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
    // export const { setTweet } = tweetSlice.actions;

    export default counterReducer;