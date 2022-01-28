
import Store from "./app/Store"




export function TextBox() {  
    
  Store.subscribe(() => {
      var textAreaVal = document.getElementById("tweetTextBox")
      textAreaVal.value=Store.getState().tweet.value;

  })
  
  function handleEvent(event){
      console.log(event.target.value)
    Store.dispatch({type:"updated", payload:event.target.value })
  }



    return (
        <div>
             <textarea placeholder="Tweet something..." id="tweetTextBox" onChange={handleEvent}></textarea>
            
        </div>
    )
}











