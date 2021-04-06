export const layoutStructure = () => {
	if (typeof window !== "undefined") {
		return window.scrollTo(0, 0);
	}
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
