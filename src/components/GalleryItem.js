import { NavLink } from "react-router-dom";
import './GalleryItem.css';

function GalleryItem(props) { 
  return(
    
      <NavLink className="gallery-item" to={props.name}>
        <h3 className="gallery-item-text">{props.name}</h3>
        <div className="gallery-item-image" style={{backgroundImage: `url(${process.env.PUBLIC_URL + props.image.url})`}}></div>
        {/* <img className="gallery-item-image" src={process.env.PUBLIC_URL + props.image.url} alt={props.image.alt} /> */}
      </NavLink> 
    
  )
}

export default GalleryItem;