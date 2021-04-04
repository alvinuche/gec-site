import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
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
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
