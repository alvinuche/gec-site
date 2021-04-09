import React, { useState, useEffect } from "react";
import Layout from "../../Layout";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { containerVariants } from "../../apiCore";
import { Fade } from "react-awesome-reveal";
// import { pageEstateData } from "../../data";
import { Link } from "react-router-dom";
import Footer from "../../Footer";

const Construction = () => {
	const [count, setCount] = useState(0);
	const [secondCount, setsecondCount] = useState(0);
	const [thirdCount, setThirdCount] = useState(0);
	const [fouthCount, setFouthCount] = useState(0);

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if (inView && count < 50) {
				setCount(count + 1);
			}
			if (inView && secondCount < 15) {
				setsecondCount(secondCount + 1);
			}
			if (inView && thirdCount < 200) {
				setThirdCount(thirdCount + 1);
			}
			if (inView && fouthCount < 20) {
				setFouthCount(fouthCount + 1);
			}
		}, 20);
		return () => clearInterval(interval);
	});
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="service-page-construction page-service" reset="reset">
				<motion.div
					variants={containerVariants}
					className="page-container page--container"
				>
					<div className="page-container-header">
						<h2 className="service-page-title">construction & real estate</h2>
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
								<p className="header-lead">creating access & opportunity</p>
								<h2>
									GEC Group Construction Management is built to modernize,
									expand and deliver the most amazing structures
								</h2>
								<p>
									GEC homes and shelters is the Real Estate and Construction
									branch of GEC Group. Great infrastructure transforms
									communities. Our customers’ projects have a higher purpose –
									their buildings, roads, and estates projects projects are a
									gateway to a modern prosperous world.
								</p>
								<p>
									We are inspired by our customers whose projects have a greater
									purpose, and motivated to help you tackle Nigeria's greatest
									challenges and turn your ambitions into a reality.
								</p>
							</div>

							<div className="page-part-container">
								<p className="header-lead">housing</p>
								<h3>Real Estate</h3>
								<p>
									We know how to maximize the value of your property. Our agents
									have the knowledge skills and experience to help maximize the
									value of your property. It's the reason we've sold more
									properties in Nigeria than any other real estate agency. GEC
									Group has evolved into the most successful real estate
									business, made up of nearly 300 passionate property
									professionals and 201 franchises in Nigeria.
								</p>
								<p>
									<Link to="/contact">Work with us</Link>
								</p>
							</div>
						</Fade>
					</div>
					<div className="key-figure-container" ref={ref}>
						<div>
							<h2>Key figures</h2>
						</div>
						<div className="page-estate-data">
							{/* {pageEstateData.map(({ title, caption }) => ( */}
							{inView && (
								<>
									<div>
										<h2>{thirdCount}+</h2>
										<h3>Customers</h3>
									</div>
									<div>
										<h2>{count}+</h2>
										<h3>Buildings Built</h3>
									</div>
									<div>
										<h2>{secondCount}+</h2>
										<h3>States</h3>
									</div>
									<div>
										<h2>{fouthCount}+</h2>
										<h3>Properties</h3>
									</div>
								</>
							)}
							{/* ))} */}
						</div>
					</div>
				</div>
			</Layout>
			<Footer />
		</motion.div>
	);
};

export default Construction;
