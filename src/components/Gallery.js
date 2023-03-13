import GalleryItem from "./GalleryItem";

function Gallery(props){
  const style = {
    display: "flex", 
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center" 
  }

  return (
    <>
      <h2>Project Gallery</h2>
      <div style={style}>
        {props.projects.map((projectDetails) => (
          <GalleryItem key={projectDetails.name} name={projectDetails.name} image={projectDetails.image} />
        ))}
      </div>
    </>
  )
}

export default Gallery;