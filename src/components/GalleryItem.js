import { NavLink } from "react-router-dom";

function GalleryItem(props) { 
  return(
    <NavLink to={props.name}>
      <article>
        <h3>{props.name}</h3>
        <img src={props.image} />
      </article>
    </NavLink>
  )
}

export default GalleryItem;