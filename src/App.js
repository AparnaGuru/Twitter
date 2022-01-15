import { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { TextBox } from './TextBox';


function App() {
  const[tweet, setTweet] = useState("")
  return (
    <div className="App">
      <h1>Twitter!</h1>
      <div>
        <TextBox value={tweet} functionTweet={setTweet}/>
      </div>
      <div>
        Hi my name is {tweet}
      </div>
      <div>
        <Button name="Dummy" tweetVal={tweet}/>
      </div>
    </div>
  );
}
export default App;
