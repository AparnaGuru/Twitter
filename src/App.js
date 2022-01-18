import { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { TextBox } from './TextBox';
import { Tweets } from './Tweets';


function App() {

  //#####
  // const[tweet, setTweet] = useState("")
  // return (
  //   <div className="App">
  //     <h1>Twitter!</h1>
  //     <div>
  //       <TextBox value={tweet} functionTweet={setTweet}/>
  //     </div>
  //     <div>
  //       Hi my name is {tweet}
  //     </div>
  //     <div>
  //       <Button name="Dummy" tweetVal={tweet}/>
  //     </div>
  //   </div>
  // );
  //#####


  return (
    <div className="App">
      <h1>Twitter!</h1>
      <div>
        <TextBox />
      </div>
      <div>
        <Button name="Tweet" />
      </div>
      <div>
        <Tweets />
      </div>
    </div>
  );
}
export default App;
