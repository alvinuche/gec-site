import React from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../Footer";
import { containerVariants } from "../../apiCore";

const Materials = () => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Layout section="service-page-material page-service" reset="reset">
				<motion.div className="page-container page--container">
					<div className="page-container-header">
						<h2 className="service-page-title">building materials</h2>
					</div>
				</motion.div>
			</Layout>
			<Layout section="service-page-construction-main" reset="reset">
				<div className="page--container">
					<div className="page-contact-main-header page-part">
						<div className="page-part-container">
							<h2>
								Procurement and contract specialists providing end-to-end supply
								chain management
							</h2>
							<p>
								GEC Group’s supply chain organization provides our customers
								with national procurement and contracts services that are
								unsurpassed in the industry.
							</p>
							<p>
								We have the right processes, automation tools, volume, and
								skilled professionals to meet our commitment to our customers:
								the responsible purchase and safe delivery of quality goods and
								services, from reliable and diverse suppliers and
								subcontractors, where they are needed, on time, and at the
								lowest total cost of ownership.
							</p>
						</div>
						<div className="page-part-container">
							<h3 className="second-header">We deliver</h3>
							<ul>
								<li>
									<p>Innovative supply chain solutions to complex execution.</p>
								</li>
								<li>
									<p>
										Building materials: We are the major distributors of
										building materials (such as Cements: Dangote,
										BUA,Unicem)Rods: 12mm, 10mm, 8mm, ¼ rods and binding wire.
									</p>
								</li>
								<li>
									<p>
										Electrical materials: all materials (chandelier lights,
										wires and bulbs, pipes and sockets). With our 33years
										experience and business flow. We offer the best and deliver
										to your doorstep. "We have distributed materials to the
										Government of IMO State and other prominent State Government
										in Nigeria. For easy flow of work and supply chain.
									</p>
								</li>
								<li>
									<p>
										Long-term, senior-level relationships with key manufacturing
										and contractor organizations to promote collaboration and
										innovation to reduce costs.
									</p>
								</li>
							</ul>
							<h3>Expertise</h3>
							<ul>
								<li>
									<p>Inventory and warehouse management</p>
								</li>
								<li>
									<p>Materials management </p>
								</li>
								<li>
									<p>Property management</p>
								</li>
								<li>
									<p>Supplier diversity</p>
								</li>
								<li>
									<p>Travel management</p>
								</li>
							</ul>
							<p>
								<Link to="/contact">Contact us</Link>
							</p>
						</div>
					</div>
				</div>
			</Layout>
			<Footer />
		</motion.div>
	);
};

export default Materials;
