import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Store from "./app/Store"



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
            Store.dispatch({type:"updated",payload:event.target.value})
        }
        
     return (
        <div>
        <textarea placeholder="Tweet something..." id="tweetTextBox" onChange ={handleChange}></textarea>
        </div>
     )
   
}