import { NavLink } from "react-router-dom";

function SpecificProject(props){
  return (
    <>
      <h2>{props.projectDetails.name}</h2>
      <NavLink to='/projectgallery'>Back to Project Gallery</NavLink>
      <img src={props.projectDetails.image.url} alt={props.projectDetails.image.alt} />
      <p>{props.projectDetails.description}</p>
      <h3>Tech Stack</h3>
      <ul>
        {props.projectDetails.techStack.map((tech) => <li>{tech}</li>)}  
      </ul>
      <h3>GitHub Repo</h3>
      <a href={props.projectDetails.repo}>{props.projectDetails.repo}</a>
      <h3>Link to Live Site</h3>
      <a href={props.projectDetails.site}>{props.projectDetails.site}</a>
    </>
  )
}

export default SpecificProject;