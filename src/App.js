import { useState } from 'react';
import './App.css';
import Store from './app/Store';

import { Login } from './Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LandingPage } from './LandingPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Login />}></Route>
          <Route exact path='/Landing' element={< LandingPage />}></Route>
        </Routes>
      </div>
    </Router>

  );
}
export default App;
