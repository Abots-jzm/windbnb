import React from "react";
import Header from "./layout/Header";
import classes from "./App.module.css";
import StaysLayout from "./layout/StaysLayout";
import Footer from "./layout/Footer";

function App() {
	return (
		<div className={classes.app}>
			<Header />
			<StaysLayout />
			<Footer />
		</div>
	);
}

export default App;
