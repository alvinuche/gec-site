import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion";
import { PageCard } from "./Cards";
import { pageAboutData } from "../data";
import ClientRelation from "../ClientRelation";
import Footer from "../Footer";
import { containerVariants } from "../apiCore";

const About = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="page-about-section page" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h1>About GEC</h1>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-about-section-vision" reset="reset">
				<div className="page--container">
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
							between producers/manufacturers and the populace.
						</p>
					</div>
				</div>
			</Layout>

			<Layout section="page-about-section-values" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header values-header">
						<h2 className="page-header">Core Values</h2>
						<p>
							It's one thing to imagine a better Nigeria, GEC group was built to
							deliver it. Our core values define who we are, how we act and what
							we aspire to:
						</p>
					</div>
					<PageCard data={pageAboutData} />
				</div>
			</Layout>
			<ClientRelation clientPageStyle="client-section-page" />
			<Footer />
		</motion.div>
	);
};

export default About;
