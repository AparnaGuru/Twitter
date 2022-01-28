import {configureStore} from '@reduxjs/toolkit'
import tweetReducer from '../features/counter/TweetSlice'
import AuthenticatorReducer from '../features/counter/AuthenticatorReducer'

export default configureStore({
    reducer: {tweet: tweetReducer,auth: AuthenticatorReducer}
  })