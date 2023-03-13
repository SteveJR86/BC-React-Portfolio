import { Route, Routes } from 'react-router-dom';
import Gallery from '../components/Gallery';
import SpecificProject from '../components/SpecificProject';
import projects from '../projects.json';

function ProjectGallery(){
  return (
    <main>
      <Routes>
        <Route path='/' element={<Gallery projects={projects}/>} />
        {projects.map((projectDetails) => (
        <Route key={projectDetails.name} path={projectDetails.name} element={<SpecificProject projectDetails={projectDetails}/>} />
        ))}
      </Routes>
    </main>
  )
}

export default ProjectGallery;