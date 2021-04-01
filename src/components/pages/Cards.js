import React from "react";
import { pageContactData } from "../data";

export const PageContactCard = () => {
	return (
		<div className="page-contact-center contact-center">
			{pageContactData.map(({ image, title, caption, secondCaption }) => (
				<article className="page-contact" key={title}>
					<div className="contact-img">
						<img src={image} alt={title} />
					</div>
					<h4>{title}</h4>
					<p>{caption}</p>
					{secondCaption && <p>{secondCaption}</p>}
				</article>
			))}
		</div>
	);
};
