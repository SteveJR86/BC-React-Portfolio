import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar(){
  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <li>
          <NavLink
            to='/'
            end
            className="navbar-navlink"
            >
              Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/projectgallery'
            className="navbar-navlink"
            >
              Project Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className="navbar-navlink"
            >
              Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;