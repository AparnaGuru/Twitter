import { createSlice } from '@reduxjs/toolkit'
export const tweetSlice = createSlice(
    {
        name: 'tweet',
        initialState: {
            value: ""
        },
        reducers: {
            setTweet : (state,action) => {
                state.value = action.payload;
            }
        }
    }
) 
export const { setTweet } = tweetSlice.actions;
export default tweetSlice.reducer;