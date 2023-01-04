import React, { useState } from 'react'
import "./Navbar.scss"
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";

function Navbar() {

   const [isActive, setIsActive] = useState(false)

  return (
     <div className="navbar">
        <div className="logo">
           <h1>webd.com</h1>
        </div>

        <div className={isActive ? "nav-items active" : "nav-items"}>
           <div className="item">
              <span>01.</span>
              <p>About</p>
           </div>
           <div className="item">
              <span>02.</span>
              <p>Experience</p>
           </div>
           <div className="item">
              <span>03.</span>
              <p>Work</p>
           </div>
           <div className="item">
              <span>04.</span>
              <p>Contact</p>
           </div>
           <div className="item">
              <button>Resume</button>
           </div>
        </div>

        <div className="menu">
           {isActive ? (
              <RiMenuUnfoldFill
                 className="icon"
                 onClick={() => setIsActive(false)}
              />
           ) : (
              <RiMenuFoldLine
                 className="icon"
                 onClick={() => setIsActive(true)}
              />
           )}
        </div>
     </div>
  );
}

export default Navbar