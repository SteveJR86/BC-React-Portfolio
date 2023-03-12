import { NavLink } from "react-router-dom";

function ProjectPage(props){
  return (
    <div>
      <NavLink to='/portfolio'>Back to Portfolio</NavLink>
      <h3>{props.projectDetails.Name}</h3>
    </div>
  )
}

export default ProjectPage;