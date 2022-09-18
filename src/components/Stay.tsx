import React from "react";
import classes from "./Stay.module.css";

type Props = {
	superHost: boolean;
	title: string;
	rating: number;
	type: string;
	beds: number | null;
	photo: string;
};

const Stay: React.FC<Props> = (props) => {
	let details: string | undefined;

	if (props.beds) details = props.beds === 1 ? " bed" : " beds";

	return (
		<div>
			<div className={classes.photo}>
				<img src={props.photo} alt={props.title} />
			</div>
			<div className={classes.details}>
				{props.superHost && <div className={classes.superHost}>SUPER HOST</div>}
				<div className={classes.type}>
					{props.type}
					{props.beds && ". "}
					{props.beds}
					{details}
				</div>
				<div className={classes.rating}>
					<span className="material-symbols-outlined">star</span> {props.rating}
				</div>
			</div>
			<div className={classes.title}>{props.title}</div>
		</div>
	);
};

export default Stay;
