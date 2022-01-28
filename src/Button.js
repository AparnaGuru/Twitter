import Store from './app/Store'

export function Button(props) {  

    
    function doAction() {
        if (props.name == "Tweet") {
            callService()
        }
        else if (props.name == "Clear"){
            console.log("hi "+Store.getState().tweet.value)
            ClearTweet()
            console.log("hi "+Store.getState().tweet.value)
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
                tweet: tweet1
            })
        });
        ClearTweet()
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



