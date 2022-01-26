import { useState } from 'react';
import './App.css';
import Store from './app/Store';
import { Button } from './Button';
import { TextBox } from './TextBox';
import { Tweets } from './Tweets';


function App() {
  return (
    <div className="App">
      <h1>Twitter!</h1>
      <div>
        <TextBox value1={Store.getState().tweet.value}/>
      </div>
      <div>
        <Button name="Tweet" />
      </div>
      <div>
        <Button name="Clear" />
      </div>
      <div>
        <Tweets />
      </div>
    </div>
  );
}
export default App;
