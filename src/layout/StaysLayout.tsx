import React from "react";
import classes from "./StaysLayout.module.css";
import Stays from "../components/Stays";
import { DataProps } from "../components/Stay";

type Props = {
	data: DataProps[];
};

const StaysLayout: React.FC<Props> = (props) => {
	return (
		<main>
			<div className={classes.top}>
				<div className={classes.title}>Stays in Finland</div>
				<div className={classes.stays}>
					{props.data.length > 12 ? "12+" : props.data.length} {props.data.length === 1 ? "stay" : "stays"}
				</div>
			</div>
			<Stays data={props.data} />
		</main>
	);
};

export default StaysLayout;
