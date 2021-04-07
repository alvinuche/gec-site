import React from "react";
import Layout from "../../Layout";
import { motion } from "framer-motion";
import Footer from "../../Footer";
import { containerVariants } from "../../apiCore";

const Pos = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="service-page-pos page-service" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h2 className="service-page-title">phones & POS</h2>
					</div>
				</motion.div>
			</Layout>
			<Layout section="service-page-construction-main" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header page-part">
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
					</div>
				</div>
			</Layout>
			<Footer />
		</motion.div>
	);
};

export default Pos;
