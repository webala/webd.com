/** @format */

import React from "react";
import "./Hero.scss";
import {
   IoLogoJavascript,
   IoLogoPython,
   // IoLogoReact,
   IoLogoSass,
   IoLogoHtml5,
   IoLogoCss3,
} from "react-icons/io";
import {
   SiTypescript,
   SiDjango,
   SiPostgresql,
   SiNextdotjs,
   SiMongodb,
   SiTailwindcss,
   SiBootstrap,
   SiFirebase,
   SiVisualstudiocode,
   SiLinux,
   SiSolidity,
   SiReact,
   SiCplusplus,
   SiExpress,
} from "react-icons/si";

function Hero() {
   return (
      <div className="hero">
         <p>Hello, my name is</p>
         <h1>Daniel Webala.</h1>
         <h2>I build things for the web.</h2>
         <p>
            I am a software engineer based in Nairobi, KE specializing in
            building exceptional high quality websites and applications.
         </p>
         <button>Get in touch</button>
         <div className="stak-icons">
            <IoLogoJavascript className="icon" />
            <SiTypescript className="icon" />
            <IoLogoPython className="icon" />
            <SiSolidity className="icon" />
            <SiCplusplus className="icon" />
            <IoLogoSass className="icon" />
            <IoLogoHtml5 className="icon" />
            <IoLogoCss3 className="icon" />
            <SiReact className="icon" />
            <SiNextdotjs className="icon" />
            <SiDjango className="icon" />
            <SiExpress className="icon" />
            <SiPostgresql className="icon" />
            <SiMongodb className="icon" />
            <SiTailwindcss className="icon" />
            <SiBootstrap className="icon" />
            <SiFirebase className="icon" />
            <SiVisualstudiocode className="icon" />
            <SiLinux className="icon" />
         </div>
      </div>
   );
}

export default Hero;
