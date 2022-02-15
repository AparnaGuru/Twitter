import Store from '../app/Store'

export function Button(props) {  


    
    function doAction() {
        if (props.name == "Tweet") {
            console.log(Store.getState().tweet.value)
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
        const uN = Store.getState().auth.userName; 
        console.log(uN)
        fetch('http://localhost:3001/tweet/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tweetValues: {tweet: tweet1,timeStamp:"", userName: uN}

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



