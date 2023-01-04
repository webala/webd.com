import React from 'react'
import "./Projects.scss"
import { FiExternalLink, FiGithub } from "react-icons/fi";
import project_img from '../../assets/projects/project1.png'

function Project() {
  return (
     <div className="project">
        <div className="image">
           <div className="container">
              <img src={project_img} alt="project" />
           </div>
        </div>
        <div className="details">
           <h1>Wubalubadubdub</h1>
           <p className="project-type">Personal project</p>

           <div className="description">
              <p>
                 Wubalubadubdub is an app that you can use to browse characters,
                 epispdes and different locations that exist in the famous adult
                 TV show Rick And Morty. The weird project name is a peculiar
                 catch phrase that Rick Sanchez, the main character occasionally
                 utters in the show.
              </p>
           </div>
           <div className="tools">
              <p>React</p>
              <p>TypeScript</p>
              <p>Sass</p>
           </div>
           <div className="links">
              <a href="#">
                 <FiExternalLink />
              </a>
              <a href="#">
                 <FiGithub />
              </a>
           </div>
        </div>
     </div>
  );
}

export default Project