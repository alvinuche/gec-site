import React from "react";
import Layout from "../Layout";
import CustomForm from "../CustomForm";
import { PageCard } from "./Cards";
import { motion } from "framer-motion";
import { containerVariants } from "../apiCore";
import { pageContactData } from "../data";
import { Fade } from "react-awesome-reveal";
import Footer from "../Footer";

const Contact = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="page-contact-section page" reset="reset">
				<motion.div
					variants={containerVariants}
					className="page-container page--container"
				>
					<div className="page-container-header">
						<h1>contact us</h1>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-contact-main" reset="reset">
				<div className="page--container">
					<Fade
						cascade={true}
						damping={0.3}
						duration={1000}
						direction={"up"}
						delay={1000}
						// fraction={1}
						triggerOnce={true}
					>
						<div className="page-contact-main-header">
							<h2 className="page-header">How to find Us</h2>
							<p>
								If you have any questions or queries, a member of staff will
								always be there to help. Feel free to get in touch with us by
								telephone or email and we will be sure to get back to you as
								soon as possible.
							</p>
						</div>
						<PageCard data={pageContactData} />

						<article className="contact-form">
							<h3>get in touch</h3>
							<hr />
							<CustomForm />
						</article>
					</Fade>
				</div>
			</Layout>
			<Footer />
		</motion.div>
	);
};

export default Contact;
