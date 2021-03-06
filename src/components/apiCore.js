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

	useEffect(() => {
		const handleScroll = () => {
			setScrollHeight(window.pageYOffset);
			if (scrollHeight > 400) {
				topLink.current.classList.add("show-link");
			} else {
				topLink.current.classList.remove("show-link");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollHeight]);

	return (
		<p
			className="scroll-link top-link"
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
			duration: 0.5,
			when: "beforeChildren",
			staggerChildren: 0.2,
		},
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};
