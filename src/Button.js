import { useState } from "react"
import { TextBox } from "./TextBox";

export function Button(props) {
    const [count, setCount] = useState(0);



    function callService() {
        var tweetVal = <getValueFromTextBox />
        fetch('http://localhost:3001/tweet/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweet: props.tweetVal
            })
        });
    }


    return (
        //    <div>
        //        <div>{count}</div>
        //        <button onClick={() => setCount(count + 1)}>{props.name1}</button>
        //    </div>
        <div>
            <div>{count}</div>
            <button onClick={callService}>{props.name}</button>
        </div>
    )

    
}



