import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
  return (
      <div>
    <nav className="navbar">
      <ul className="ul">
        <li><Link to="/">Password Manager</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/manage">Manage</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </div>
  )
}