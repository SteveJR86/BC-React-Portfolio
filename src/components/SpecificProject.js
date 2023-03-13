import { NavLink } from "react-router-dom";

function SpecificProject(props){
  return (
    <>
      <h2>{props.projectDetails.name}</h2>
      <NavLink to='/projectgallery'>Back to Project Gallery</NavLink>
    </>
  )
}

export default SpecificProject;