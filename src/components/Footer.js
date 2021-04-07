import React, { useState } from "react";
import Layout from "./Layout";
import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Phone, Email, SocialIcons } from "./Icons";
import logo from "../assets/images/logo.svg";

const Footer = () => {
	const [name, setName] = useState("");
	const { ref } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const handleChange = (event) => {
		setName((prevName) => {
			prevName = event.target.value;
			console.log(prevName);
		});
	};

	return (
		<footer className="footer-bottom">
			<Layout
				section="footer-section"
				reset="reset"
				containerFluid="container--fluid"
				sectionReset="section--reset"
			>
				<div className="footer-container">
					<div className="client-container-figure footer-container-figure">
						<Fade
							duration={500}
							direction={"up"}
							// delay={500}
							fraction={0.1}
							triggerOnce={true}
						>
							<div className="company">
								<h4>company</h4>
								<ul>
									<li>
										<Link to="/about-us">about us</Link>
									</li>
									<li>
										<Link to="">blog</Link>
									</li>
									<li>
										<Link to="">client relations</Link>
									</li>
								</ul>
							</div>
						</Fade>

						<Fade
							duration={500}
							direction={"up"}
							delay={300}
							fraction={0.1}
							triggerOnce={true}
						>
							<div className="services">
								<h4>services</h4>
								<ul>
									<li>
										<Link to="/services/construction">real estate</Link>
									</li>
									<li>
										<Link to="/services/construction">construction</Link>
									</li>
									<li>
										<Link to="/services/procurement">building materials</Link>
									</li>
									<li>
										<Link to="/services/transport">executive transport</Link>
									</li>
									<li>
										<Link to="/services/pos-phone">phone accessories</Link>
									</li>
									<li>
										<Link to="/services/pos-phone">POS services</Link>
									</li>
								</ul>
							</div>
						</Fade>

						<Fade
							duration={500}
							direction={"up"}
							delay={600}
							fraction={0.1}
							triggerOnce={true}
						>
							<div className="contact">
								<h4>contact</h4>
								<ul>
									<li>
										<Link to="">
											<span>
												<Phone />
											</span>{" "}
											Phone: +2348138585976
										</Link>
									</li>
									<li>
										<Link to="">
											<span>
												<Email />
											</span>{" "}
											Email: gecgroupng@gmail.com
										</Link>
									</li>
								</ul>
							</div>
						</Fade>

						<Fade
							duration={500}
							direction={"up"}
							delay={700}
							fraction={0.1}
							triggerOnce={true}
						>
							<div className="social-links">
								<form className="grocery-form">
									<h4>newsletter</h4>
									<p>Join our mailing list for news and articles.</p>
									<div className="form--control">
										<input
											type="email"
											value={name}
											id="grocery"
											placeholder="enter address"
											readOnly
											autoComplete="off"
											onChange={handleChange}
											// onfocus="this.removeAttribute('readonly')"
										/>
										<button
											type="submit"
											className="submit-btn"
											aria-label="submit"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
											>
												<path
													d="M7.856 0.0127999L8 4.44965e-08C8.18724 -6.23778e-05 8.36857 0.0655543 8.51241 0.185423C8.65626 0.305292 8.7535 0.471818 8.7872 0.656L8.8 0.8V7.2H15.2C15.3872 7.19994 15.5686 7.26555 15.7124 7.38542C15.8563 7.50529 15.9535 7.67182 15.9872 7.856L16 8C16.0001 8.18724 15.9344 8.36857 15.8146 8.51241C15.6947 8.65626 15.5282 8.7535 15.344 8.7872L15.2 8.8H8.8V15.2C8.80006 15.3872 8.73445 15.5686 8.61458 15.7124C8.49471 15.8563 8.32818 15.9535 8.144 15.9872L8 16C7.81276 16.0001 7.63143 15.9344 7.48759 15.8146C7.34374 15.6947 7.2465 15.5282 7.2128 15.344L7.2 15.2V8.8H0.8C0.612759 8.80006 0.431428 8.73445 0.287586 8.61458C0.143743 8.49471 0.0465032 8.32818 0.0127999 8.144L4.44965e-08 8C-6.23778e-05 7.81276 0.0655543 7.63143 0.185423 7.48759C0.305292 7.34374 0.471818 7.2465 0.656 7.2128L0.8 7.2H7.2V0.8C7.19994 0.612759 7.26555 0.431428 7.38542 0.287586C7.50529 0.143743 7.67182 0.0465032 7.856 0.0127999L8 4.44965e-08L7.856 0.0127999Z"
													fill="#fff"
												/>
											</svg>
										</button>
									</div>
								</form>
								<SocialIcons />
							</div>
						</Fade>
					</div>

					<div className="policy-container" ref={ref}>
						<footer className="policy-footer">
							<div
								initial={{ x: "-500" }}
								animate={{ x: 0 }}
								transition={{ type: "spring", stiffness: 120 }}
							>
								<Link to="/">
									<img src={logo} alt="logo" className="logo" />
								</Link>
								<p>&copy; Global Entrepreneurship Capital group {2021}</p>
							</div>
							<div
								initial={{ x: "500" }}
								animate={{ x: 0 }}
								transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
							>
								<ul>
									<li>
										<Link to="">terms & conditions</Link>
									</li>
									<li>
										<Link to="">privacy policy</Link>
									</li>
									<li>
										<Link to=""></Link>
									</li>
								</ul>
							</div>
						</footer>
					</div>
				</div>
			</Layout>
			<div className="scroll-up"></div>
		</footer>
	);
};

export default Footer;
