import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ dropdownContainer }) => {
	return (
		<ul className="dropdown-content" ref={dropdownContainer}>
			<li>
				<Link to="/services/construction">real estate</Link>
			</li>
			<li>
				<Link to="/services/construction">construction</Link>
			</li>
			<li>
				<Link to="/services/procurement">building materials</Link>
			</li>
			<li>
				<Link to="/services/transport">executive transport</Link>
			</li>
			<li>
				<Link to="/services/pos-phone">phone accessories</Link>
			</li>
			<li>
				<Link to="/services/pos-phone">POS servises</Link>
			</li>
		</ul>
	);
};

export default Dropdown;
