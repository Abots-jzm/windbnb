import React from "react";
import classes from "./Counter.module.css";
import { Mode } from "./Options";

type SetterFunction = (prevState: number) => number;

type Props = {
	mode: number;
	currNumber: number;
	fillGuests: (setterFunction: SetterFunction) => void;
};

const Counter: React.FC<Props> = (props) => {
	function increase() {
		props.fillGuests((prevState) => prevState + 1);
	}

	function decrease() {
		props.fillGuests((prevState) => prevState - 1);
	}

	return (
		<div>
			<div className={classes.title}>{props.mode === Mode.ADULT ? "Adults" : "Children"}</div>
			<div className={classes.description}>Ages {props.mode === Mode.ADULT ? "13 or above" : "2 - 12"}</div>
			<div className={classes.buttons}>
				<button className={classes.button} onClick={decrease} disabled={!props.currNumber}>
					-
				</button>
				<div>{props.currNumber}</div>
				<button className={classes.button} onClick={increase}>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter;
