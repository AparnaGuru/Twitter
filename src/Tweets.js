import { useEffect,useState } from "react";

export function Tweets() {

    const[tweets, setTweet] = useState("");

    useEffect(() => {
        // Update the document title using the browser API
        callService();
      });

    async function callService() {
        setTweet(JSON.stringify(await fetch('http://localhost:3001/getTweet/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })));
    }

    return (
        <div>
            {tweets}
        </div>
    )
}

