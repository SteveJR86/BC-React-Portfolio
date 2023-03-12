import { NavLink } from "react-router-dom";

function ProjectLink(props) { 
  return(
  <li>
    <NavLink to={props.name}>{props.name}</NavLink>
  </li>
)
}

export default ProjectLink;