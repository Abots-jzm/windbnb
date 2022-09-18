import React from "react";
import classes from "./Stays.module.css";
import STAYS_DATA from "../assets/stays.json";
import Stay from "./Stay";

const Stays: React.FC = () => {
	return (
		<div className={classes.stays}>
			{STAYS_DATA.map((stay, index) => (
				<Stay {...stay} key={index} />
			))}
		</div>
	);
};

export default Stays;
