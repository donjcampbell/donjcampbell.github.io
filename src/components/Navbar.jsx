import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          Don Campbell
        </NavLink>
        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
