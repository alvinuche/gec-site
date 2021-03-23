import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Card = ({ url, img, caption }) => {
	return (
		<Fade
			cascade={true}
			damping={0.8}
			duration={1000}
			direction={"up"}
			fraction={0.1}
			triggerOnce={true}
			delay={300}
		>
			<figure className="figure-card">
				<Link to={url}>
					<div className="business-card">
						<img src={img} alt={img} />
						<figcaption>{caption}</figcaption>
					</div>
				</Link>
			</figure>
		</Fade>
	);
};

export default Card;
