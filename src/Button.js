import { useState } from "react"
import { useSelector } from "react-redux";
import { TextBox } from "./TextBox";
import tweetSlice, { setTweet } from './features/counter/TweetSlice'
import Store from './app/Store'
import { createStore } from "@reduxjs/toolkit";

export function Button(props) {
    //const [count, setCount] = useState(0); 
    

    function callService() {
        const tweet1 = Store.getState().tweet.value;
    
        
        //var tweetVal = <getValueFromTextBox />

        fetch('http://localhost:3001/tweet/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: tweet1
            })
        });
    }


    return (
        //    <div>
        //        <div>{count}</div>
        //        <button onClick={() => setCount(count + 1)}>{props.name1}</button>
        //    </div>
        <div>
            <button onClick={callService}>{props.name}</button>
        </div>
    )

    
}



