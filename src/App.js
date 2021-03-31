import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
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
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
