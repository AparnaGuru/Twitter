import { useState } from "react"
import { Button } from "./Button"



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
        function handleChange(event) {
            props.functionTweet(event.target.value);
        }
        
     return (
        <div>
        <textarea placeholder="Tweet something..." id="tweetTextBox" onChange={handleChange}></textarea>
        </div>
     )
   
}