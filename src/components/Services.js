import React from "react";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Layout from "./Layout";
import Card from "./Card";
import { servicesData } from "./data";

// const containerVarient = {
// 	hidden: {
// 		y: "100vh",
// 	},
// 	visible: {
// 		y: 0,
// 		transition: {
// 			type: "spring",
// 			damping: 25,
// 			mass: 2.5,
// 			stiffness: 100,
// 		},
// 	},
// };

const Services = () => {
	// const { ref, inView, entry } = useInView({
	// 	threshold: 0.1,
	// 	rootMargin: "64px 0px",
	// 	triggerOnce: true,
	// });

	return (
		<Layout
			section="services-section"
			reset="reset"
			containerFluid="container--fluid"
		>
			<Fade
				cascade={true}
				damping={0.1}
				duration={1000}
				direction={"up"}
				// fraction={0.1}
				triggerOnce={true}
			>
				<div className="section-container">
					<div className="section-header">
						<h3>our services</h3>
						<p>
							From Real Estate and Construction, Executive transport, phone
							accessories, and POS services. These subsidiaries are the major
							parts that make up our global brand.
						</p>
					</div>

					{/* card */}
					<div className="row--container">
						{servicesData.map(({ url, img, caption }) => (
							<Card key={caption} url={url} img={img} caption={caption} />
						))}
					</div>
				</div>
			</Fade>
		</Layout>
	);
};

export default Services;
