import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion";
// import Footer from "../Footer";

const About = () => {
	return (
		<div>
			<Layout section="page-about-section page" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h1>About GEC</h1>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-about-section-vision" reset="reset">
				<div className="page-container">
					<div className="page-about-main-header">
						<p className="header-lead">our mission & vision</p>
						<h2>Bolstering a Vision</h2>
						<p>
							GEC Group continues to expand its vision of becoming the leading
							platform for essential services in Nigeria. Across the nation, our
							clients in the public and private sectors count on us to take on
							the most complex challenges and pioneer innovative solutions that
							push the limits of what’s possible.
						</p>
						<p>
							We continue to improve on our services in Real Estate,
							Construction, Transportation and Building materials distribution.
							In line with our mission, we will continue to act as a medium
							between producers/manufacturers and Nigerians
						</p>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default About;
