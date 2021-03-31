import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Layout from "./Layout";
import video from "../assets/videos/vid2.mp4";
import { Link } from "react-router-dom";
import arrow from "../assets/images/arrow.svg";

const aboutVariants = {
	hidden: {
		scale: 0,
		// origin: 0.5,
	},
	visible: {
		scale: 1,
		transition: {
			type: "tween",
			duration: 1,
		},
	},
};

const Intro = () => {
	const { ref, inView, entry } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<Layout reset="reset" section="intro-section">
			<div className="player-wrapper" ref={ref}>
				<video
					className="video-container"
					muted={true}
					autoPlay={true}
					loop={true}
				>
					<source src={video} type="video/mp4" />
				</video>
				{inView && (
					<motion.div
						className="about--intro"
						variants={aboutVariants}
						initial="hidden"
						animate="visible"
					>
						<h2>Welcome to the Fastest Rising company in Nigeria</h2>
						<p>
							We are a diversified and fully integrated company. The Group’s
							interests span a range of sectors Nationwide.
						</p>
						<p>
							The core business focus of the Group, which started operations in
							1988, is to act as a medium between the producers and the
							populace.
						</p>
						<div className="intro-link-container">
							<Link to="" className="intro-link">
								Read More
							</Link>
							<span className="arrow-container">
								<img src={arrow} alt="read more" />
							</span>
						</div>
					</motion.div>
				)}
			</div>
			<div className="direction"></div>
		</Layout>
	);
};

export default Intro;
