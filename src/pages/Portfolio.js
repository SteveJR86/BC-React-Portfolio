import { Route, Routes } from 'react-router-dom';
import Project from '../components/Project';
import projectDetails from '../projects.json';

function Portfolio(){
  return (
    <main>
      <h2>Portfolio</h2>
        {projectDetails.map((project) => (
          <Project key={project.Name} name={project.Name}/>
        ))}          
    </main>
  )
}

export default Portfolio;