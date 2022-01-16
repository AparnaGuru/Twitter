import {configureStore} from '@reduxjs/toolkit'
import { tweetSlice } from '../features/counter/TweetSlice'

export default configureStore({
    reducer: {tweet: tweetSlice}
  })