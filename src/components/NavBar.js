import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <nav>
      <h1>Steve Riley Webdesign</h1>
      <ul>
        <li>
          <NavLink
            to='/'
            end
            >
              Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/portfolio'
            >
              Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            >
              About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            >
              Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;