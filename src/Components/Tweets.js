import { useEffect, useState } from "react";

export function Tweets() {
   

    const [tweets1, setTweet] = useState([])

    useEffect(() => {
        callService();
    }, []);

    function callService() {
        (fetch('http://localhost:3001/getTweet/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }))
        .then(response => response.json()).then(resp => setTweet(resp)).catch(err => console.log(err))

    }
    return (
        tweets1.map(singletweet =>(
            <div  key={singletweet._id}>
                {singletweet.tweetValues.tweet}                    
            </div>
        )))
}

