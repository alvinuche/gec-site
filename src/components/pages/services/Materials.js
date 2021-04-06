import React from "react";
import Layout from "../../Layout";
import { motion } from "framer-motion";

const Materials = () => {
	return (
		<div>
			<Layout section="service-page-material page-service" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h2 className="service-page-title">building materials</h2>
					</div>
				</motion.div>
			</Layout>
		</div>
	);
};

export default Materials;
