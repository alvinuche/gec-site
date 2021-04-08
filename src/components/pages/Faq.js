import React from "react";
import Layout from "../Layout";
import ClientRelation from "../ClientRelation";
import { motion } from "framer-motion";
import { containerVariants } from "../apiCore";
import { Fade } from "react-awesome-reveal";
import Footer from "../Footer";

const Faq = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="page-faq-section page" reset="reset">
				<motion.div
					variants={containerVariants}
					className="page-container page--container"
				>
					<div className="page-container-header">
						<h1>FAQ</h1>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-contact-main" reset="reset">
				<Fade
					cascade={true}
					damping={0.3}
					duration={1000}
					direction={"up"}
					delay={1500}
					// fraction={1}
					triggerOnce={true}
				>
					<div className="page--container">
						<div className="page-contact-main-header">
							<h2 className="page-header">Questions</h2>
						</div>
					</div>
				</Fade>
			</Layout>
			<ClientRelation />
			<Footer />
		</motion.div>
	);
};

export default Faq;
