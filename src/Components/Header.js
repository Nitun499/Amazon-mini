import React from 'react';
import './Header.css';
import Logo from './Images/logo.png'
function Header() {
  return (
  <div className='mynavbar'>
    <div className="logo">
      <img src={Logo} width="300px" height="300px" alt="" />
    </div>
    <div className="main-nav">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
        <a href="#about">About</a>
        </li>
        <li>
        <a href="#">Contact Us</a>
        </li>
        <li>
        <a href="#">Blogs</a>
        </li>
      </ul>
    </div>
    <div className="right-nav">
      <ul>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
      </ul>
    </div>

  </div>
  
  );
}

export default Header;
