import React, { useState } from "react";
import "./Navbar.scss";
import { RiMenuFoldLine, RiMenuUnfoldFill } from "react-icons/ri";

function Navbar() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="navbar">
			<a className="logo" href="/">
				<h1>webd.com</h1>
			</a>

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
