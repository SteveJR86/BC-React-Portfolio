import { NavLink } from "react-router-dom";

function ProjectPage(props){
  return (
    <div>
      <h2>{props.projectDetails.Name}</h2>
      <NavLink to='/portfolio'>Back to Portfolio</NavLink>
      <img src={props.projectDetails.Image} />
    </div>
  )
}

export default ProjectPage;