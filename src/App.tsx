import React from "react";
import Header from "./layout/Header";
import classes from "./App.module.css";
import StaysLayout from "./layout/StaysLayout";

function App() {
	return (
		<div className={classes.app}>
			<Header />
			<StaysLayout />
		</div>
	);
}

export default App;
