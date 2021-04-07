import React, { useState, useRef, useEffect } from "react";

import upArrow from "../assets/images/up-arrow.svg";

export const layoutStructure = () => {
	if (typeof window !== "undefined") {
		return window.scrollTo(0, 0);
	}
};

//  back to top
export const TopLink = () => {
	const [scrollHeight, setScrollHeight] = useState(window.pageYOffset);
	const topLink = useRef(null);

	const handleScroll = () => {
		setScrollHeight(window.pageYOffset);
		if (scrollHeight > 500) {
			topLink.current.classList.add("show-link");
		} else {
			topLink.current.classList.remove("show-link");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<p
			class="scroll-link top-link"
			ref={topLink}
			onClick={() => {
				if (typeof window !== "undefined") {
					return window.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}
			}}
		>
			<img src={upArrow} alt="back to top" />
		</p>
	);
};

export const containerVariants = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 40,
			// delay: 0.5,
			duration: 1.5,
		},
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};
