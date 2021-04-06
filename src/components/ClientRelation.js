import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";

import completed from "../assets/images/completed.svg";
import trust from "../assets/images/trust.svg";
import efficient from "../assets/images/efficient.svg";
import satisfaction from "../assets/images/satisfaction.svg";

const containerVariants = {
	hidden: {
		x: "-100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			damping: 15,
			mass: 1,
			// delay: 1.5,
			stiffness: 100,
		},
	},
};

const ClientRelation = ({ clientPageStyle = "client-section" }) => {
	const [count, setCount] = useState(0);
	const [secondCount, setsecondCount] = useState(0);

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if (inView && count < 150) {
				setCount(count + 1);
			}
			if (inView && secondCount < 100) {
				setsecondCount(secondCount + 1);
			}
		}, 20);
		return () => clearInterval(interval);
	});

	return (
		<Layout
			section={`client-section ${clientPageStyle}`}
			reset="reset"
			containerFluid="container--fluid"
		>
			<div className="client-container" ref={ref}>
				{inView && (
					<motion.div
						className="client-header"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						<h3>client Relations</h3>
					</motion.div>
				)}

				<div className="client-container-figure">
					{/* {relationalData.map(({ url, caption, num }) => ( */}
					<Zoom
						duration={1000}
						direction={"down"}
						delay={500}
						fraction={0.1}
						triggerOnce={true}
					>
						<figure>
							<div className="client-card">
								<img src={efficient} alt={efficient} />
								<figcaption>
									<h4>Efficient Delivery</h4>
								</figcaption>
							</div>
						</figure>
					</Zoom>

					<Zoom
						duration={1000}
						direction={"down"}
						delay={700}
						fraction={0.1}
						triggerOnce={true}
					>
						<figure>
							<div className="client-card">
								<img src={trust} alt={trust} />
								<figcaption>
									<h4>Trusted Clients</h4>
								</figcaption>
							</div>
						</figure>
					</Zoom>

					<Zoom
						duration={1000}
						direction={"down"}
						delay={900}
						fraction={0.1}
						triggerOnce={true}
					>
						<figure className="figure-client-card">
							<div className="client-card">
								<img src={completed} alt={completed} />
								<figcaption>
									<h4>
										<span
											style={{ fontWeight: count === 150 ? 700 : "inherit" }}
										>
											{count}+
										</span>{" "}
										completed projects
									</h4>
								</figcaption>
							</div>
						</figure>
					</Zoom>

					<Zoom
						duration={1000}
						direction={"down"}
						delay={1100}
						fraction={0.1}
						triggerOnce={true}
					>
						<figure>
							<div className="client-card">
								<img src={satisfaction} alt={satisfaction} />
								<figcaption>
									<h4>
										<span
											style={{
												fontWeight: secondCount === 100 ? 700 : "inherit",
											}}
										>
											{secondCount}%
										</span>{" "}
										customer satisfaction
									</h4>
								</figcaption>
							</div>
						</figure>
					</Zoom>
					{/* ))} */}
				</div>
			</div>
		</Layout>
	);
};

export default ClientRelation;
