import React from "react";

export const PageCard = ({ data }) => {
	return (
		<div className="page-contact-center contact-center">
			{data.map(({ image, title, caption, secondCaption }) => (
				<article className="page-contact" key={title}>
					{image && (
						<div className="contact-img">
							<img src={image} alt={title} />
						</div>
					)}
					<h4>{title}</h4>
					<p>{caption}</p>
					{secondCaption && <p>{secondCaption}</p>}
				</article>
			))}
		</div>
	);
};
