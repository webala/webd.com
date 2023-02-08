/** @format */

import React from "react";
import "./Hero.scss";
import {
	IoLogoJavascript,
	IoLogoPython,
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
	SiTwitter,
	SiGithub
} from "react-icons/si";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Hero() {

	const icons = [
		<IoLogoJavascript className="icon" />,
		<SiTypescript className="icon" />,
		<IoLogoPython className="icon" />,
		<SiSolidity className="icon" />,
		<SiCplusplus className="icon" />,
		<IoLogoSass className="icon" />,
		<IoLogoHtml5 className="icon" />,
		<IoLogoCss3 className="icon" />,
		<SiReact className="icon" />,
		<SiNextdotjs className="icon" />,
		<SiDjango className="icon" />,
		<SiExpress className="icon" />,
		<SiPostgresql className="icon" />,
		<SiMongodb className="icon" />,
		<SiTailwindcss className="icon" />,
		<SiBootstrap className="icon" />,
		<SiFirebase className="icon" />,
		<SiVisualstudiocode className="icon" />,
		<SiLinux className="icon" />,
	]
	return (
		<div className="hero">
			<p>Hello, my name is</p>
			<h1>Daniel Webala.</h1>
			<h2>I build things for the web.</h2>
			<p>
				I am a software engineer based in Nairobi, KE specializing in building
				exceptional high quality websites and applications.
			</p>

			<a href="#contact">
				<button>Get in touch</button>
			</a>


			<div className="stak-icons">

				{icons.map((icon, index) => (
					<AnimationOnScroll key={index} animateIn="animate__rubberBand" animateOut="animate__fadeOutUpBig" initiallyVisible={true}>
						{icon}
					</AnimationOnScroll>
				))}
			</div>
		</div>
	);
}

export default Hero;
