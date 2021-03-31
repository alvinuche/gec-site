import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Services from "./Services";
import ClientRelation from "./ClientRelation";
import Footer from "./Footer";
import { motion } from "framer-motion";

const containerVarient = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1, duration: 1 },
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};

const Home = () => {
	return (
		<>
			<motion.div
				variants={containerVarient}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Header />
				<Intro />
				<Services />
				<ClientRelation />
				<Footer />
			</motion.div>
		</>
	);
};

export default Home;
