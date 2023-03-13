import GalleryItem from "./GalleryItem";

function Gallery(props){
  return (
    <>
      <h2>Project Gallery</h2>
      {props.projects.map((projectDetails) => (
        <GalleryItem key={projectDetails.name} name={projectDetails.name} image={projectDetails.image} />
      ))}
    </>
  )
}

export default Gallery;