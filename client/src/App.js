import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import Reviews from './components/Reviews';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path = "/" element = { <Home/> } />
        <Route path = "About" element = {<About/>} />
        <Route path = "Booking" element = {<Booking/>} />
        <Route path = "Reviews" element = {<Reviews/>} />
        <Route path = "Logout" element = {<Logout/>} />
        
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
