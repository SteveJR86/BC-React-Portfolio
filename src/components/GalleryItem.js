import { NavLink } from "react-router-dom";

function GalleryItem(props) { 
  const style={
    backgroundColor: "#cccccc",
    minWidth: "280px",
    maxWidth: "400px",
    justifyContent: "center",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative"
  }

  return(
    <article style={style}>
      <NavLink style={{position: "absolute", top: "5px", left: "5px", backgroundColor: "#cccccc", padding: "10px"}} to={props.name}>{props.name}</NavLink>
      <img style={{maxHeight: "100%", maxWidth: "100%"}} src={props.image.url} alt={props.image.alt} />
    </article>
  )
}

export default GalleryItem;