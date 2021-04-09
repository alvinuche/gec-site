import React from "react";
import Layout from "../Layout";
import { PageCard } from "./Cards";
import { pageAboutData } from "../data";
import ClientRelation from "../ClientRelation";
import { motion } from "framer-motion";
import { containerVariants } from "../apiCore";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import Footer from "../Footer";

const About = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="page-about-section page" reset="reset">
				<div
					// variants={containerVariants}
					className="page-container page--container"
				>
					<motion.div
						// variants={containerVariants}
						className="page-container-header"
					>
						<h1>About GEC</h1>
					</motion.div>
				</div>
			</Layout>
			<Layout section="page-about-section-vision" reset="reset">
				<Fade
					cascade={true}
					damping={0.3}
					duration={1000}
					direction={"up"}
					delay={1500}
					// fraction={1}
					triggerOnce={true}
				>
					<div className="page--container">
						<div className="page-about-main-header">
							<p className="header-lead">our mission & vision</p>
							<h2>Bolstering a Vision</h2>
							<p>
								GEC Group continues to expand its vision of becoming the leading
								platform for essential services in Nigeria. Across the nation,
								our clients in the public and private sectors count on us to
								take on the most complex challenges and pioneer innovative
								solutions that push the limits of what’s possible.
							</p>
							<p>
								We continue to improve on our services in Real Estate,
								Construction, Transportation, and Building materials
								distribution. In line with our mission, we will continue to act
								as a medium between producers/manufacturers and the populace.
							</p>
						</div>
					</div>
				</Fade>
			</Layout>

			<Layout section="page-about-section-values" reset="reset">
				<div ref={ref}>
					{inView && (
						<Fade
							cascade={true}
							damping={0.3}
							duration={1000}
							direction={"up"}
							// delay={1500}
							// fraction={1}
							triggerOnce={true}
						>
							<div>
								<div className="page--container">
									<div className="page-contact-main-header values-header">
										<h2 className="page-header">Core Values</h2>
										<p>
											It's one thing to imagine a better Nigeria, GEC group was
											built to deliver it. Our core values define who we are,
											how we act and what we aspire to:
										</p>
									</div>
									<PageCard data={pageAboutData} />
								</div>
							</div>
						</Fade>
					)}
				</div>
			</Layout>
			<ClientRelation clientPageStyle="client-section-page" />
			<Footer />
		</motion.div>
	);
};

export default About;
