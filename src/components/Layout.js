import React from "react";

const Layout = ({
	children,
	section,
	reset,
	containerFluid,
	sectionReset = "footer",
}) => {
	return (
		<section className={`${section} ${sectionReset}`}>
			<div className={`container ${reset} ${containerFluid}`}>{children}</div>
		</section>
	);
};

export default Layout;
