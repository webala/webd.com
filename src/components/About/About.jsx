/** @format */

import React from "react";
import "./About.scss";
import { BiRightArrow } from "react-icons/bi";
import dp from "../../assets/dp.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll';


function About() {

   const tools = [
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>JavaScript (ES6+)</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>TypeScript</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Python</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>C++</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Solidity</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>HTML & CSS</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Sass</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Django</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>React</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Tailwind</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Bootstrap</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Django Rest Framework</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>React Query</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Redux</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Redux Toolkit</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Firebase</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Express</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>Postgresql</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>MongoDB</p>
      </div>),
      (<div className="tool">
         <BiRightArrow className="icon" />
         <p>NodeJs</p>
      </div>)
   ]
   return (
      <div className="about" id="about">
         <div className="title">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
               <div>
                  <span>01.</span>
                  <h1>About me</h1>
               </div>
            </AnimationOnScroll>

            <div className="line"></div>

         </div>

         <div className="details">
            <div>
               <div className="text">
                  <p>
                     My name is <span>Daniel Webala.</span> I am a software
                     engineer based in Nairobi, KE.{" "}
                  </p>

                  <p>
                     My greatest strength is creativity and programming has
                     provided the perfect platform to express myself. I spend
                     most of my time looking for ways to perfect my skill and
                     while they say that you can't be perfect, I can try to get
                     as close to perfection as possible.
                  </p>

                  <p>
                     In my time as a programmer, I have worked in the freelance
                     market building various projects for different clients from
                     all over the world thanks to the internet and how it
                     has brought us all together.
                  </p>
                  <p>
                     I am also a big fan of contributing to open source
                     software, something that has taken my skills to levels that
                     I could never have imagined.
                  </p>
                  <p>
                     Below are some of the technologies I have used in my
                     journey:{" "}
                  </p>
               </div>
               <div className="tools">
                  {tools.map((tool, index) => (
                     <AnimationOnScroll animateIn="animate__fadeInBottomLeft">
                        {tool}
                     </AnimationOnScroll>
                  ))}
               </div>
            </div>
            <div className="image">
               <div className="container">
                  <AnimationOnScroll animateIn="animate__fadeInRight">
                     <img src={dp} alt="picture" />
                  </AnimationOnScroll>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
