import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</>
	);
}

export default App;
