import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <nav>
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
            to='/projectgallery'
            >
              Project Gallery
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