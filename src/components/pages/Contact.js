import React from "react";
import Layout from "../Layout";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		x: 1000,
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 120,
			delay: 0.3,
			duration: 1.5,
		},
	},
};

const Contact = () => {
	return (
		// <Layout>
		<div style={{ paddingTop: "5rem", backgroundColor: "hsl(210, 22%, 49%)" }}>
			<Layout>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
						inventore dolore doloremque ea pariatur accusamus laboriosam nisi,
						nostrum assumenda numquam sunt dignissimos asperiores eaque, neque
						modi. Eius et ratione nulla eveniet. Ab fuga officia atque quae
						ratione minus, doloremque accusamus dolore, optio nam ea architecto
						odit molestiae quidem sapiente temporibus?
					</p>
				</motion.div>
			</Layout>
		</div>
		// </Layout>
	);
};

export default Contact;
