function Project(props) { 
  return(
    <article>
      <h3>{props.name}</h3>
      <img src={props.image} />
      <p>GitHub Repo: <a href={props.repo}>{props.repo}</a></p>
      <p>Live Site: <a href={props.site}>{props.site}</a></p>
    </article>
  )
}

export default Project;