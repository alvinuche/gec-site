import React from "react";
import Layout from "../../Layout";
import { motion } from "framer-motion";
import { PageCard } from "../Cards";
import { pageTransportData } from "../../data";
import ClientRelation from "../../ClientRelation";
import CustomForm from "../../CustomForm";
import Footer from "../../Footer";
import { containerVariants } from "../../apiCore";

const Transport = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="service-page-transport page-service" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h2 className="service-page-title">executive transport</h2>
					</div>
				</motion.div>
			</Layout>
			<Layout section="page-about-section-vision" reset="reset">
				<div className="page--container">
					<div className="page-about-main-header">
						<h2>The Future of Mobility</h2>
						<p>
							This is the transportation subsidiary of GEC Group tasked to
							provide individuals with solutions to their transportation needs.
							The goal is to move people from various locations to their
							preferred destination safely.
						</p>
						<p>
							Transportation is experiencing some profound transformations, from
							changes in travel patterns and behaviors due to the global
							coronavirus pandemic to technological advances in-vehicle
							communication and automation. Changing travel patterns, increases
							in teleworking, connected and automated vehicles, and shared
							mobility are bringing new challenges and options to passenger and
							freight travel alike.
						</p>
						<p>
							Proactive planning is needed to understand how these changes will
							affect our cities, and how we can help provide transportation
							services and channel emerging technologies to safely meet
							community goals. We are helping our clients analyze these changes,
							their impacts and how they can respond now and best prepare to
							usher in a new era in transportation.
						</p>
					</div>
				</div>
			</Layout>
			<Layout section="page-about-section-values" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header values-header">
						<h2 className="page-header">Locations</h2>
					</div>
					<div className="transport-container">
						<PageCard data={pageTransportData} />
					</div>
				</div>
				<article className="contact-form">
					<h3>get in touch</h3>
					<hr />
					<CustomForm />
				</article>
			</Layout>
			<ClientRelation clientPageStyle="client-section-page" />

			<Footer />
		</motion.div>
	);
};

export default Transport;
