import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdownContainer }) => {
	return (
		<ul className="dropdown-content" ref={dropdownContainer}>
			<li>
				<Link to="">real estate</Link>
			</li>
			<li>
				<Link to="">construction</Link>
			</li>
			<li>
				<Link to="">building materials</Link>
			</li>
			<li>
				<Link to="">executive transport</Link>
			</li>
			<li>
				<Link to="">phone accessories</Link>
			</li>
			<li>
				<Link to="">POS servises</Link>
			</li>
		</ul>
	);
};

export default Dropdown;
