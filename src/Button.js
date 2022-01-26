import Store from './app/Store'
import EventEmitter from 'EventEmitter'
import { TextBox } from './TextBox'

export function Button(props) {  

    
    function doAction() {
        if (props.name == "Tweet") {
            callService()
        }
        else if (props.name == "Clear"){
            console.log("hi "+Store.getState().tweet.value)
            ClearTweet()
            console.log("hi "+Store.getState().tweet.value)
            let x = new EventEmitter();
            x.emit("cleared")
        }
    }

    function callService() {
        const tweet1 = Store.getState().tweet.value;        
        fetch('http://localhost:3001/tweet/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usename: 'Aparna',
                tweet: tweet1
            })
        });
    }

    function ClearTweet() {
        
        Store.dispatch({type: "clear", payload: ""})

        
    }


    return (
        <div>
            <button onClick={doAction}>{props.name}</button>
        </div>
    )

    
}



