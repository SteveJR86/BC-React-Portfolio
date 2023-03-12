import { Route, Routes } from 'react-router-dom';
import Project from '../components/Project';
import projects from '../projects.json';

function ProjectGallery(){
  return (
    <main>
      <h2>Project Gallery</h2>
        {projects.map((projectDetails) => (
          <Project key={projectDetails.name} name={projectDetails.name} image={projectDetails.image} repo={projectDetails.repo} site={projectDetails.site} />
        ))}          
    </main>
  )
}

export default ProjectGallery;