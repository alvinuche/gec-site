import React from "react";
import Layout from "../Layout";
import ClientRelation from "../ClientRelation";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { containerVariants } from "../apiCore";

const Faq = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="page-faq-section page" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h1>FAQ</h1>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-contact-main" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header">
						<h2 className="page-header">Questions</h2>
					</div>
				</div>
			</Layout>
			<ClientRelation />
			<Footer />
		</motion.div>
	);
};

export default Faq;
