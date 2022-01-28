import { Button } from './Button';
import { TextBox } from './TextBox';
import { Tweets } from './Tweets';
export function LandingPage() {
    return (
        <div className="LandingPage">
        <h1>Home</h1>
          <div>
            <TextBox />
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