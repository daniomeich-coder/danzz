import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">VELOCITY MOTORS</NavLink>
        <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink onClick={() => setOpen(false)} className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink onClick={() => setOpen(false)} className="nav-link" to="/models">Models</NavLink></li>
            <li className="nav-item"><NavLink onClick={() => setOpen(false)} className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink onClick={() => setOpen(false)} className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
