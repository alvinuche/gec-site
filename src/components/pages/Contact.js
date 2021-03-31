import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 40,
			// delay: 0.5,
			duration: 1.5,
		},
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};

const Contact = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="page-contact-section" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h1>contact us</h1>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-contact-main" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header">
						<h2>How to find Us</h2>
						<p>
							If you have any questions or queries, a member of staff will
							always be there to help. Feel free to get in touch with Us by
							telephone or email and we will be sure to get back to you as soon
							as possible
						</p>
					</div>
				</div>
			</Layout>
		</motion.div>
	);
};

export default Contact;
