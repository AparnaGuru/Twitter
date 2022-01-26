import { useEffect } from "react"
import Store from "./app/Store"



// export function TextBox(props) { 

//     useEffect(() => {
//         console.log("hi2 " + Store.getState().tweet.value)
//         return () => {
//             console.log("hi2 " + Store.getState().tweet.value)
//         }
//     }, [props.value1])

//     return (
//         <div>
//             <textarea placeholder="Tweet something..." id="tweetTextBox" onChange={(event) => { Store.dispatch({ type: "updated", payload: event.target.value }) }}></textarea>
//         </div>
//     )
// }



export function TextBox(props) {  
    
        useEffect(() => {
           
        return (
            <div>
                <textarea placeholder="Tweet something..." id="tweetTextBox" value={Store.getState().tweet.value} onChange={(event) => { Store.dispatch({ type: "updated", payload: event.target.value }) }}></textarea>
            </div>
        )
            
    },[1,2,3])

    

    return (
        <div>
        </div>
    )
}











