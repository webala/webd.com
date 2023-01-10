/** @format */

import React from "react";
import Project from "./Project";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";
import project4 from "../../assets/projects/project4.png";



const projects = [
   {
      name: "Wubalubadubdub",
      projectType: "Personal project",
      projectDescription:
         "Wubalubadubdub is an app that you can use to browse characters, epispdes and different locations that exist in the famous adult TV show Rick And Morty. The weird project name is a peculiar catch phrase that Rick Sanchez, the main character occasionally utters in the show.",
      tools: ["React", "TypeScript", "Sass"],
      links: {
         github: "https://github.com/webala/wubalubadubdub",
         url: "https://wubalubadubdub-mu.vercel.app/",
      },
      image: project1,
   },
   {
      name: "Veannes",
      projectType: "Freelance Project",
      projectDescription:
         "This is a fully functional ecommerce website complete with payment intergration using M-pesa Daraja API. It is provides a solution for people with small businesses operating in a paticular geographical location.",
      tools: ["Django", "Tailwind", "Html and Css", "JavaScript"],
      links: {
         github: "https://github.com/webala/ecom-classic",
      },
      image: project2,
   },
   {
      name: "Glitch Cloud Photography",
      projectType: "Freelance project",
      projectDescription:
         "A website designed to showcase and sell services by a photographer. It harneses the power of animations to capture the attention of users. This website is still a work in progress. The complete website provides clients the ability to book photoshoot sessions and make down payments seemlessly using M-Pesa Daraja API.",
      tools: ["React", "TypeScript", "Sass", "NextJS"],
      links: {
         github: "https://github.com/webala/glitch-cloud",
         url: "https://glitch-cloud.vercel.app/",
      },
      image: project3,
   },
   {
      name: "Space Cadet",
      projectType: "Frontend mentor",
      projectDescription:
         "This project shows information about space. It is a front end mentor challenge. The major take away from this project was the use of animations using `react-animation-on-scroll`. I aslo practiced my TypeScript.",
      tools: ["React", "TypeScript", "Sass", "NextJS"],
      links: {
         github: "https://github.com/webala/space-tourism-site",
         url: "https://space-tourism-site-beta.vercel.app/",
      },
      image: project4,
   },
];

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

         {projects.map((project, index) => (
            <Project key={index} project={project} />
         ))}

      </div>
   );
}

export default Projects;
