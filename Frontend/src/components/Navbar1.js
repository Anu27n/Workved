import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/managed-space-solution">Managed Space Solution</Link></li>
        <li><Link to="/partner">Partner with Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
