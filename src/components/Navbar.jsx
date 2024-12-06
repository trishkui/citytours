import React from 'react'
import logo from '../assets/logo.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <img src={ logo} alt="city tours logo" className='nav-bar-logo'
        />
        <ul className='nav-links'>
            <li>
              <a href="/" className="nav-link">
              home
              </a> 
            </li>
            <li>
              <a href="/" className="nav-link">
              about
              </a> 
            </li>
            <li>
              <a href="/" className="nav-link active">
              tours
              </a> 
            </li>
        </ul>
      </nav>
    </div>
  )
}
