import React from "react";
import Layout from "../../Layout";
import { motion } from "framer-motion";
import { containerVariants } from "../../apiCore";
import { Fade } from "react-awesome-reveal";
import Footer from "../../Footer";

const Pos = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="service-page-pos page-service" reset="reset">
				<motion.div
					variants={containerVariants}
					className="page-container page--container"
				>
					<div className="page-container-header">
						<h2 className="service-page-title">phones & POS</h2>
					</div>
				</motion.div>
			</Layout>
			<Layout section="service-page-construction-main" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header page-part">
						<Fade
							cascade={true}
							damping={0.3}
							duration={1000}
							direction={"up"}
							delay={1500}
							// fraction={1}
							triggerOnce={true}
						>
							<div className="page-part-container">
								<h2>Phone accessories</h2>
								<p>
									Importers and distributors. We deliver reliable asccesories:
									Android and iPhone.
								</p>
							</div>
							<div className="page-part-container">
								<h3 className="second-header">POS services</h3>
								<p>
									We offer the best mobile money agents. Send, receive, and pay
									bills. DStv, GOtv, and electrical bills We got you covered.
								</p>
							</div>
						</Fade>
					</div>
				</div>
			</Layout>
			<Footer />
		</motion.div>
	);
};

export default Pos;
