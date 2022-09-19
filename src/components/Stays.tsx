import React from "react";
import classes from "./Stays.module.css";
import Stay, { DataProps } from "./Stay";

type Props = {
	data: DataProps[];
};

const Stays: React.FC<Props> = (props) => {
	return (
		<div className={classes.stays}>
			{props.data.map((stay, index) => (
				<Stay {...stay} key={index} />
			))}
		</div>
	);
};

export default Stays;
