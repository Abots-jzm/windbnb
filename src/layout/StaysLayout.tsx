import React from "react";
import classes from "./StaysLayout.module.css";
import Stays from "../components/Stays";

const StaysLayout: React.FC = () => {
	return (
		<main>
			<div className={classes.top}>
				<div className={classes.title}>Stays in Finland</div>
				<div className={classes.stays}>12+ stays</div>
			</div>
			<Stays />
		</main>
	);
};

export default StaysLayout;
