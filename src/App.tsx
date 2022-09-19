import React, { useState } from "react";
import Header from "./layout/Header";
import classes from "./App.module.css";
import StaysLayout from "./layout/StaysLayout";
import Footer from "./layout/Footer";
import STAYS_DATA from "./assets/stays.json";

function App() {
	const [data, setData] = useState(STAYS_DATA);

	function search(location: string, currentGuests: number) {
		if (location === "Add location") location = "";
		setData(STAYS_DATA.filter((value) => `${value.city}, Finland`.includes(location) && value.maxGuests > currentGuests));
	}

	return (
		<div className={classes.app}>
			<Header onSearch={search} />
			<StaysLayout data={data} />
			<Footer />
		</div>
	);
}

export default App;
