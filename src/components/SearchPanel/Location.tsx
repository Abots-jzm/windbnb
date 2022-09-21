import React from "react";
import classes from "./Location.module.css";

type Props = {
	children: React.ReactNode;
	fillLocation: (location: string) => void;
};

const Location: React.FC<Props> = (props) => {
	const content = `${props.children}, Finland`;

	function setChosenLocation() {
		props.fillLocation(content);
	}

	return (
		<div className={classes.location} onClick={setChosenLocation}>
			<span className="material-symbols-outlined">location_on</span>
			{content}
		</div>
	);
};

export default Location;
