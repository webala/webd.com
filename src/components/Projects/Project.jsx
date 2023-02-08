/** @format */

import React from "react";
import "./Projects.scss";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Project({ project }) {
   return (
      <div className="project">
         <div className="image">
            <div className="container">
               <img src={project.image} alt="project" />
            </div>
         </div>
         <div className="details">
            <AnimationOnScroll animateIn="animate__heartBeat">
               <h1>{project.name}</h1>
            </AnimationOnScroll>

            <p className="project-type">{project.projectType}</p>

            <div className="description">
               <p>{project.projectDescription}</p>
            </div>
            <div className="tools">
               {project.tools.map((tool, index) => (
                  <AnimationOnScroll animateIn="animate__fadeInBottomRight">
                     <p key={index}>{tool}</p>
                  </AnimationOnScroll>
               ))}
            </div>
            <div className="links">
               {project.links.url && (
                  <a href={project.links.url} target="_blank">
                     <AnimationOnScroll animateIn="animate__rubberBand" delay={1000}>
                        <FiExternalLink />
                     </AnimationOnScroll>
                  </a>
               )}

               <a href={project.links.github} target="_blank">
                  <AnimationOnScroll animateIn="animate__rubberBand" delay={1000}>
                     <FiGithub />
                  </AnimationOnScroll>
               </a>
            </div>
         </div>
      </div>
   );
}

export default Project;
