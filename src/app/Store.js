import {configureStore} from '@reduxjs/toolkit'
import tweetReducer from '../features/counter/TweetSlice'

export default configureStore({
    reducer: {tweet: tweetReducer}
  })