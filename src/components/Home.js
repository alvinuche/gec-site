import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Services from "./Services";
import ClientRelation from "./ClientRelation";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<Header />
			<Intro />
			<Services />
			<ClientRelation />
			<Footer />
		</>
	);
};

export default Home;
