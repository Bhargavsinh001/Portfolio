import React from 'react';
import './Nav.css';

function Nav() {
    return ( 
        <>
    {/* <ul className='nav'>
    <li className='nav1'>
      <a className='nav-link' href='/'>Contact Us</a>
    </li>

    <li className='nav1'>
      <a className='nav-link' href='/'>Professional</a>
    </li>

    <li className='nav1'>
      <a className='nav-link' href='/'>Education</a>
    </li>

    <li className='nav1'>
      <a className='nav-link' href='/'>Home</a>
    </li>  

    </ul> */}

<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#professional">Professional</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

    </>
     );
}

export default Nav;