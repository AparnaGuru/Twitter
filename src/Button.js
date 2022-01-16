import { useState } from "react"
import { useSelector } from "react-redux";
import { TextBox } from "./TextBox";
import { setTweet } from './features/counter/TweetSlice'
import Store from './app/Store'

export async function Button(props) {
    //const [count, setCount] = useState(0);
    const tweet1 = await Store.getState().tweet;    
    
    //const tweet2 = useSelector(state => state.tweet1.value )

    function callService() {
        
        alert("Hi")
        
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



