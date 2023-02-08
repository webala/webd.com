import React, { useState } from "react";
import "./Navbar.scss";
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";
import { SiGithub, SiTwitter } from 'react-icons/si'

function Navbar() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="navbar">
			<div className="logo">
				<a href="/"><h1>webd.com</h1></a>

				<a className="social" href="https://github.com/webala">
					<SiGithub />
				</a>
				<a className="social" href="https://twitter.com/Webbie1001">
					<SiTwitter />
				</a>
			</div>


			<div className={isActive ? "nav-items active" : "nav-items"}>
				<a className="item" href="#about">
					<span>01.</span>
					<p>About</p>
				</a>
				<a className="item" href="#projects">
					<span>02.</span>
					<p>Projects</p>
				</a>
				<a className="item" href="#contact">
					<span>03.</span>
					<p>Contact</p>
				</a>
				<a className="item">
					<button>Resume</button>
				</a>
			</div>

			<div className="menu">
				{isActive ? (
					<RiMenuUnfoldFill
						className="icon"
						onClick={() => setIsActive(false)}
					/>
				) : (
					<RiMenuFoldLine className="icon" onClick={() => setIsActive(true)} />
				)}
			</div>
		</div>
	);
}

export default Navbar;
