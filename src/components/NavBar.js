import { NavLink } from "react-router-dom";

function NavBar(){
  return (
    <header>
      <h1>Steve Riley Webdesign</h1>
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
    </header>
  )
}

export default NavBar;