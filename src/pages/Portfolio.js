import { Route, Routes } from 'react-router-dom';
import ProjectLink from '../components/ProjectLink';
import ProjectPage from './ProjectPage';
import projectDetails from '../projects.json';

function Portfolio(){
  const listItems = projectDetails.map((project) => 
    <ProjectLink 
      key={project.Name}
      name={project.Name}
    />
    )

  return (
    <div>
      <h2>Portfolio</h2>
      <Routes>
        <Route
          path='/'
          element={
          <ul>
            {listItems}
          </ul>}
        />
        {projectDetails.map((project) => (
          <Route
            key={project.Name}
            path={project.Name}
            element={<ProjectPage projectDetails={project} />}
          />
        ))}          
      </Routes>
    </div>
  )
}

export default Portfolio;