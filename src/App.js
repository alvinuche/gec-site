import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import SiteIntro from "./components/SiteIntro";
// import Maintenance from "./components/SiteIntroTwo";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Construction from "./components/pages/services/Construction";
import Materials from "./components/pages/services/Materials";
import Transport from "./components/pages/services/Transport";
import Pos from "./components/pages/services/Pos";
import Blog from "./components/pages/Blog";
import Faq from "./components/pages/Faq";
import { TopLink } from "./components/apiCore";
import { AnimatePresence } from "framer-motion";
import { layoutStructure } from "./components/apiCore";

function App() {
	const [isVisible, setIsVisible] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const interval = setInterval(() => setIsVisible(false), 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		layoutStructure();
	});
	return isVisible ? (
		// <Maintenance path="/" />
		<SiteIntro path="/" />
	) : (
		<>
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<TopLink key="topLink" />
				<Switch location={location} key={location.key}>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/about-us">
						<About />
					</Route>
					<Route path="/services/construction">
						<Construction />
					</Route>
					<Route path="/services/procurement">
						<Materials />
					</Route>
					<Route path="/services/transport">
						<Transport />
					</Route>
					<Route path="/services/pos-phone">
						<Pos />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/faq">
						<Faq />
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
