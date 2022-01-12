import './App.css';
import { Button } from './Button';
import { TextBox } from './TextBox';

function App() {
  return (
    <div className="App">
      <h1>Twitter!</h1>
      <div>
        <TextBox />
      </div>
      <div>
        <Button name="Tweet"/>
      </div>
    </div>
  );
}

export default App;
