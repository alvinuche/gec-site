import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
// import home_bg from "../assets/images/home-bg-lg.jpg";
import build_bg from "../assets/images/build-bg.jpg";
import estate_bg from "../assets/images/estate-bg-lg.jpg";
import construction_bg from "../assets/images/construction-bg-lg.jpg";
import { Fade } from "react-awesome-reveal";

const containerVariants = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			duration: 0.5,
			delay: 1.5,
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
};
const spanVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			// type: "tween",
			repeat: 2,
			repeatType: "mirror",
		},
	},
};

const itemVariants = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 30,
		},
	},
};

const btnVariants = {
	hidden: {
		x: "-5000px",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			damping: 25,
			mass: 2,
			delay: 2.5,
			stiffness: 100,
		},
	},
};

const Header = () => {
	return (
		<header className="carousel">
			<Carousel interval={null} controls={false}>
				<Carousel.Item interval={8000} className="carousel-item">
					<div
						className="carousel-bg"
						style={{
							background: `linear-gradient(rgba(4, 16, 16, 0.9), rgba(4, 16, 16, 0.5)), url(${build_bg}) center/cover no-repeat`,
							backgroundBlendMode: "multiply",
						}}
					></div>
					<Carousel.Caption className="carousel-caption container">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							<motion.span className="sub-header" variants={spanVariants}>
								Powering the wheels of Enterprise
							</motion.span>
							<motion.h1 variants={itemVariants} className="header-title">
								global entrepreneurship capital
							</motion.h1>
							<motion.div className="p-container" variants={itemVariants}>
								<p>
									GEC Group is all about creating mediums that serve the
									interests of clients and communities. We believe in
									establishing great services that are socially responsible to
									cater for people's needs.
								</p>
							</motion.div>
						</motion.div>
						<motion.div
							variants={btnVariants}
							initial="hidden"
							animate="visible"
						>
							<Link to="/contact" className="btn btn--lg">
								work with us
							</Link>
						</motion.div>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="carousel-item">
					<div
						className="carousel-bg"
						style={{
							background: `linear-gradient(rgba(4, 16, 16, 0.9), rgba(4, 16, 16, 0.3)), url(${estate_bg}) center/cover no-repeat`,
							backgroundBlendMode: "multiply",
						}}
					></div>
					<Carousel.Caption className="carousel-caption">
						<Fade
							// cascade={true}
							damping={0.1}
							duration={1000}
							direction={"left"}
							fraction={0.1}
							triggerOnce={true}
						>
							<h2 className="sub-heading">Real Estate</h2>
						</Fade>
						<div className="p-container">
							<Fade
								// cascade={true}
								damping={0.1}
								duration={1000}
								direction={"up"}
								fraction={0.1}
								triggerOnce={true}
							>
								<p>
									Know how to maximize the value of your property. our agents
									have the knowledge, skills, and experience to help maximize
									the value of your property.
								</p>
							</Fade>
						</div>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item className="carousel-item">
					<div
						className="carousel-bg"
						style={{
							background: `linear-gradient(rgba(4, 16, 16, 0.9), rgba(4, 16, 16, 0.3)), url(${construction_bg}) center/cover no-repeat`,
							backgroundBlendMode: "multiply",
						}}
					></div>
					<Carousel.Caption className="carousel-caption">
						<Fade
							damping={0.1}
							duration={1000}
							direction={"right"}
							fraction={0.1}
							triggerOnce={true}
						>
							<h2 className="sub-heading">Construction</h2>
						</Fade>
						<Fade
							damping={0.1}
							duration={1000}
							direction={"left"}
							fraction={0.1}
							triggerOnce={true}
						>
							<div className="p-container">
								<p>
									We are the major distributors of building materials (such as
									Cement: Dangote, BUA, Unicem). Rods: 12mm, 10mm, 8mm, ¼ rods,
									and binding wire.
								</p>
							</div>
						</Fade>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="chevron-wrapper">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="27"
					height="28"
					viewBox="0 0 27 28"
					fill="none"
					className="chevron"
				>
					<line
						x1="0.707107"
						y1="1.29289"
						x2="13.435"
						y2="14.0208"
						stroke="white"
						strokeWidth="2"
						className="top-chevron"
					/>
					<line
						y1="-1"
						x2="18"
						y2="-1"
						transform="matrix(-0.707107 0.707107 0.707107 0.707107 26.2132 2)"
						stroke="white"
						strokeWidth="2"
						className="top-chevron"
					/>
					<line
						x1="0.707107"
						y1="14.2929"
						x2="13.435"
						y2="27.0208"
						stroke="white"
						strokeWidth="2"
						className="bottom-chevron"
					/>
					<line
						y1="-1"
						x2="18"
						y2="-1"
						transform="matrix(-0.707107 0.707107 0.707107 0.707107 26.2132 15)"
						stroke="white"
						strokeWidth="2"
						className="bottom-chevron"
					/>
				</svg>
			</div>
		</header>
	);
};

export default Header;
