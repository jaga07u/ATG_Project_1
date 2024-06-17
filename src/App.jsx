/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Section from "./Components/Section";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<div
				className="w-100 font-ibm-plex-sans"
				style={{ minHeight: "100vh", overflowX: "hidden" }}>
				<Nav />
				<Header />
				<Section />
			</div>
		</>
	);
}

export default App;
