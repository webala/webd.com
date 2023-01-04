/** @format */

import React from "react";
import "./Contact.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

function Contact() {
   return (
      <div className="contact-container">
         <div className="title">
            <div>
               <span>03.</span>
               <h1>Contact me</h1>
            </div>
            <div className="line"></div>
         </div>

         <div className="contact">
            <div className="contact_details">
               {/* <AnimationOnScroll animateIn="animate__fadeInBottomLeft"> */}
               <div>
                  <AiOutlinePhone className="icon" />
                  <p>+254791055897</p>
               </div>
               {/* </AnimationOnScroll> */}
               {/* <AnimationOnScroll animateIn="animate__fadeInBottomLeft"> */}
               <div>
                  <HiOutlineMail className="icon" />
                  <p>webd01@protonmail.com</p>
               </div>
               {/* </AnimationOnScroll> */}

               {/* <AnimationOnScroll animateIn="animate__fadeInBottomLeft"> */}
               <div>
                  <GoLocation className="icon" />
                  <p>Nairobi</p>
               </div>
               {/* </AnimationOnScroll> */}
            </div>
            <form
               action="#"
               onSubmit={(e) => e.preventDefault()}
               className="form"
            >
               {/* <AnimationOnScroll animateIn="animate__fadeInRight"> */}
               <p>Have a question? or Just want to say Hi?</p>
               <p>Drop a message</p>

               <div className="form_field">
                  <label htmlFor="name">Name</label>
                  <input type="text" />
               </div>
               {/* </AnimationOnScroll> */}

               {/* <AnimationOnScroll animateIn="animate__fadeInRight" delay={500}> */}
               <div className="form_field">
                  <label htmlFor="email">Email</label>
                  <input type="email" />
               </div>
               {/* </AnimationOnScroll> */}

               {/* <AnimationOnScroll animateIn="animate__fadeInRight"> */}
               <div className="form_field">
                  <label htmlFor="message">Message</label>
                  <textarea></textarea>
               </div>
               <div className="submit_btn">
                  <button type="submit">Send Message</button>
               </div>
               {/* </AnimationOnScroll> */}
            </form>
         </div>
      </div>
   );
}

export default Contact;
