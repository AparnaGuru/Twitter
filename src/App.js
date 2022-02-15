import { useState } from 'react';
import './App.css';
import Store from './app/Store';

import { Login } from './Components/Login';
import { SignUp } from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage'


function App() {
  const [auth, setAuth] = useState(false);
  Store.subscribe( () => {
   setAuth(Store.getState().auth.isAuth)
  })

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< SignUp />}></Route>
          <Route exact path='/Login' element={< Login />}></Route>
          {auth && <Route exact path='/Landing' element={< LandingPage />}></Route>}
        </Routes>
      </div>
    </Router>

  );
}
export default App;
