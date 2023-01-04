import React from 'react'
import Project from './Project'

function Projects() {
  return (
     <div className="projects">
        <div className="title">
           <div>
              <span>02.</span>
              <h1>Some things i've built</h1>
           </div>
           <div className="line"></div>
        </div>
        <Project />
     </div>
  );
}

export default Projects