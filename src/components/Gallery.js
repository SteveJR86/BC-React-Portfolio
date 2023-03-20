import GalleryItem from "./GalleryItem";
import './Gallery.css';

function Gallery(props){
  return (
    <>
      <h2>Project Gallery</h2>
      <div className="gallery">
        {props.projects.map((projectDetails) => (
          <GalleryItem key={projectDetails.name} name={projectDetails.name} image={projectDetails.image} />
        ))}
      </div>
    </>
  )
}

export default Gallery;