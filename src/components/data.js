// OUR SERVICES DATA
import estate from "../assets/images/estate.jpg";
import construction from "../assets/images/construction.jpg";
import material from "../assets/images/material.jpg";
import transport from "../assets/images/transport.jpg";
import phone from "../assets/images/phone.jpg";
import pos from "../assets/images/pos.jpg";

// CLIENT RELATION DATA
import completed from "../assets/images/completed.svg";
import efficient from "../assets/images/efficient.svg";
import satisfaction from "../assets/images/satisfaction.svg";
import trust from "../assets/images/trust.svg";

// PAGE CONTACT DATA
import pin from "../assets/images/pages_images/pin.svg";
import telephone from "../assets/images/pages_images/telephone.svg";
import location from "../assets/images/pages_images/location.svg";

// PAGE ABOUT DATA
import integrity from "../assets/images/pages_images/integrity.svg";
import commitment from "../assets/images/pages_images/commitment.svg";
import quality from "../assets/images/pages_images/quality.svg";
import innovation from "../assets/images/pages_images/innovation.svg";

export const servicesData = [
	{
		url: "/services/construction",
		img: estate,
		caption: "real estate",
	},
	{
		url: "/services/construction",
		img: construction,
		caption: "construction",
	},
	{
		url: "/services/procurement",
		img: material,
		caption: "building materials",
	},
	{
		url: "",
		img: transport,
		caption: "executive transport",
	},
	{
		url: "",
		img: phone,
		caption: "phone accessories",
	},
	{
		url: "",
		img: pos,
		caption: "POS services",
	},
];

export const relationalData = [
	{
		url: completed,
		caption: "completed projects",
		num: "150+ ",
	},
	{
		url: trust,
		caption: "Trusted Clients",
		num: "",
	},
	{
		url: efficient,
		caption: "Efficient Delivery",
		num: "",
	},
	{
		url: satisfaction,
		caption: `customer satisfaction`,
		num: "100% ",
	},
];

export const pageContactData = [
	{
		image: pin,
		title: "head office",
		caption: "Amakaohia Uratta Layout Owerri, Imo state.",
		secondCaption: "",
	},
	{
		image: telephone,
		title: "hotlines",
		caption: "+234 803 379 7182",
		secondCaption: "+234 813 858 5976",
	},
	{
		image: location,
		title: "branch location",
		caption: "32 Nwaoriemkpu Ekwe Isu L.G.A Imo State.",
		secondCaption: "",
	},
];

export const pageAboutData = [
	{
		image: integrity,
		title: "integrity",
		caption:
			"We remain true to our founding values of quality, honesty and hard work. We have the highest ethical standards in the industry. We “do the right thing.” GEC is a business based on trust. GEC is consistently associated with the high standards of service, quality, personal attention to clients, and integrity.",
	},
	{
		image: commitment,
		title: "commitment",
		caption:
			"We are proactive in finding solutions for our clients that best achieve their goals. We understand that lasting relationships are the lifeblood of our business so we pay personal attention to our clients by focusing on them as individuals.",
	},
	{
		image: quality,
		title: "quality",
		caption:
			"We are passionate about excellence and doing our work right the first time. Our reputation depends on our delivered value in the eyes of every customer and community.",
	},
	{
		image: innovation,
		title: "innovation",
		caption:
			"We develop and apply world-class technology. We listen, learn, and seek out the best ideas. We attack complacency and continually improve.",
	},
];

export const pageEstateData = [
	{
		title: 50,
		caption: "Buildings Built",
	},
	{
		title: 15,
		caption: "States",
	},
	{
		title: 200,
		caption: "Customers",
	},
	{
		title: 20,
		caption: "Properties",
	},
];
