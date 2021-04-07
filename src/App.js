import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Construction from "./components/pages/services/Construction";
import Materials from "./components/pages/services/Materials";
import Transport from "./components/pages/services/Transport";
import Pos from "./components/pages/services/Pos";
import { TopLink } from "./components/apiCore";
import { AnimatePresence } from "framer-motion";
import { layoutStructure } from "./components/apiCore";

function App() {
	const location = useLocation();

	useEffect(() => {
		layoutStructure();
	});
	return (
		<>
			<Nav />
			<TopLink />
			<AnimatePresence exitBeforeEnter>
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
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
