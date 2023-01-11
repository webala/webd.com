/** @format */

import React from "react";
import "./Projects.scss";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Project({ project }) {
   return (
      <div className="project">
         <div className="image">
            <div className="container">
              
               <img src={project.image} alt="project" />
            </div>
         </div>
         <div className="details">
            <h1>{project.name}</h1>
            <p className="project-type">{project.projectType}</p>

            <div className="description">
               <p>{project.projectDescription}</p>
            </div>
            <div className="tools">
               {project.tools.map((tool, index) => (
                  <p key={index}>{tool}</p>
               ))}
            </div>
            <div className="links">
               {project.links.url && (
                  <a href={project.links.url} target="_blank">
                     <FiExternalLink />
                  </a>
               )}
               
               <a href={project.links.github} target="_blank">
                  <FiGithub />
               </a>
            </div>
         </div>
      </div>
   );
}

export default Project;
