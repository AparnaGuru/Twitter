import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setTweet } from './features/counter/TweetSlice'



export function TextBox(props)   {
    //###### testing (calling Button from text typed)
    // const[tweet, setTweet] = useState("");
    
    // function handleChange(event){
    //     setTweet(event.target.value);
    // }

    // return (
    //     <div>
    //     <textarea placeholder="Tweet something..." id="tweetTextBox" onChange={handleChange}></textarea>
    //     <Button name="tweet" tweetVal={tweet}/>
    //     </div>
    // )
    //#####

        const dispatch = useDispatch()

        function handleChange(event) {
            dispatch(setTweet(event.target.value));
        }
        
     return (
        <div>
        <textarea placeholder="Tweet something..." id="tweetTextBox" onChange ={handleChange}></textarea>
        </div>
     )
   
}