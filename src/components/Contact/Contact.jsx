/** @format */

import React, { useState } from "react";
import "./Contact.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import {FiTwitter} from 'react-icons/fi'
import { GoLocation } from "react-icons/go";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Progress, useToast } from '@chakra-ui/react'
import { AnimationOnScroll } from "react-animation-on-scroll";


function Contact() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [message, setMessage] = useState();
	const [loading, setLoading] = useState(false)

	const toast = useToast()

	const handleSendMessage = async (e) => {
		e.preventDefault();
		setLoading(true)
		try {
			const docRef = await addDoc(collection(db, "messages"), {
				name,
				email,
				message
			});
			console.log("Document written with ID: ", docRef.id);
			setEmail('')
			setName('')
			setMessage('')
			setLoading(false)
			toast({
				title: "Success!",
				description: "Your message has been received. I will get back to you soon.",
				status: 'success',
				duration: 9000,
				isClosable: true,
				position: 'bottom-right',
			})
		} catch (e) {
			console.error("Error adding document: ", e);
			setLoading(false)
			toast({
				title: "Oops!",
				description: "Something went wrong, please try again later.",
				status: 'error',
				duration: 9000,
				isClosable: true,
				position: 'bottom-right',
			})
		}
	};
	return (
		<div className="contact-container" id="contact">
			<div className="title">
				<div>
					<span>03.</span>
					<h1>Contact me</h1>
				</div>
				<div className="line">
					{loading && <Progress size='xs' isIndeterminate colorScheme={`teal`} />}
				</div>
			</div>

			<div className="contact">
				<div className="contact_details">
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div>
							<AiOutlinePhone className="icon" />
							<p>+254791055897</p>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div>
							<HiOutlineMail className="icon" />
							<p>webd01@protonmail.com</p>
						</div>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div>
							<GoLocation className="icon" />
							<p>Nairobi</p>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div className="social">
							<a href="https://twitter.com/Webbie1001">
								<FiTwitter />
							</a>
						</div>
					</AnimationOnScroll>
				</div>
				<form action="#" onSubmit={handleSendMessage} className="form">
					<AnimationOnScroll animateIn="animate__fadeInRight">
						<p>Have a question? or Just want to say Hi?</p>
						<p>Drop a message</p>

						<div className="form_field">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								required
								value={name}
							/>
						</div>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__fadeInRight" delay={500}>
						<div className="form_field">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								onChange={(e) => setEmail(e.target.value)}
								required
								value={email}
							/>
						</div>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__fadeInRight">
						<div className="form_field">
							<label htmlFor="message">Message</label>
							<textarea
								onChange={(e) => setMessage(e.target.value)}
								required
								value={message}
							></textarea>
						</div>
						<div className="submit_btn">
							<button type="submit">Send Message</button>
						</div>
					</AnimationOnScroll>
				</form>
			</div>
		</div>
	);
}

export default Contact;
