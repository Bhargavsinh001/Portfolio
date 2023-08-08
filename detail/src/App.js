import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';


function App() {
  return (
    <>
     
    <Nav />
    <Home />
   
    <ul className='nav'>
    <li className='nav1'>
      <a className='nav-link' href='/'>Home</a>
    </li>

    <li className='nav1'>
      <a className='nav-link' href='/'>Education</a>
    </li>

    <li className='nav1'>
      <a className='nav-link' href='/'>Professional</a>
    </li>

    <li className='nav1'>
      <a className='nav-link' href='/'>Contact Us</a>
    </li>  

    </ul>
    </>
  );
}

export default App;
