import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SideHeader from "./Sidebar";
import Dropdown from "./Dropdown";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";

const Nav = () => {
	const [windowWidth, setWindowWidth] = useState(window.outerWidth);
	const slideContainer = useRef(null);
	const linksContainer = useRef(null);
	const dropdownContainer = useRef(null);

	const init = () => {
		setWindowWidth(window.outerWidth);
	};

	const navigationHandle = () => {
		if (windowWidth < 768) {
			if (linksContainer.current.classList.contains("links-container-show")) {
				linksContainer.current.classList.remove("links-container-show");
				setTimeout(() => {
					slideContainer.current.classList.remove("slide-show");
				}, 500);
			} else {
				slideContainer.current.classList.add("slide-show");
				linksContainer.current.classList.add("links-container-show");
			}
		}
	};

	const dropdownHandle = () => {
		dropdownContainer.current.classList.toggle("dropdown-content-show");
	};

	const windowResize = () => {
		linksContainer.current.classList.remove("links-container-show");
		setTimeout(() => {
			slideContainer.current.classList.remove("slide-show");
		}, 500);
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		const node = dropdownContainer.current;
		window.addEventListener("resize", windowResize);
		init();

		node.addEventListener("click", navigationHandle);
		return () => {
			node.removeEventListener("click", navigationHandle);
			window.removeEventListener("resize", windowResize);
		};
	});

	return (
		<motion.nav
			id="nav"
			initial={{ y: -200 }}
			animate={{ y: 0 }}
			transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
		>
			<div
				className="slider"
				ref={slideContainer}
				onClick={navigationHandle}
			></div>
			<div className="container nav--container">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={logo} alt="logo" className="logo" />
						</Link>
						<button
							className="nav-toggle"
							type="button"
							aria-label="hamburger"
							onClick={navigationHandle}
						>
							<img src={hamburger} alt="hamburger" />
						</button>
					</div>

					{/* links */}
					<div className="links-container" ref={linksContainer}>
						<SideHeader navigationHandle={navigationHandle} />
						<ul className="links">
							<li onClick={navigationHandle}>
								<Link to="/about-us" className="link-item">
									about
								</Link>
							</li>
							<li className="dropdown reset" onClick={dropdownHandle}>
								<div className="dropdown--container">
									<Link className="link-item">services</Link>
									<span className="dropdown-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="12"
											height="12"
											viewBox="0 0 27 28"
											fill="none"
										>
											<line
												className="dropdown-svg"
												x1="0.707107"
												y1="1.29289"
												x2="13.435"
												y2="14.0208"
												stroke="white"
												strokeWidth="2.5"
											/>
											<line
												className="dropdown-svg"
												y1="-1"
												x2="18"
												y2="-1"
												transform="matrix(-0.707107 0.707107 0.707107 0.707107 26.2132 2)"
												stroke="white"
												strokeWidth="2.5"
											/>
										</svg>
									</span>
								</div>
								<Dropdown dropdownContainer={dropdownContainer} />
							</li>
							<li onClick={navigationHandle}>
								<Link to="/contact" className="link-item">
									contact
								</Link>
							</li>
							<li onClick={navigationHandle}>
								<Link to="/" className="link-item">
									insights
								</Link>
							</li>
							<li onClick={navigationHandle}>
								<Link to="/" className="link-item">
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* call to action button */}
					<div className="call--action">
						<Link role="button" className="btn" to="/contact">
							work with us
						</Link>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Nav;
