import React from "react";
import classes from "./Options.module.css";
import STAYS_DATA from "../../assets/stays.json";

enum Mode {
	ADULT,
	CHILDREN,
}

type CounterProps = {
	mode: number;
};

type OptionsProps = {
	isMobile: boolean;
};

const Counter: React.FC<CounterProps> = (props) => {
	return (
		<div>
			<div className={classes.title}>{props.mode === Mode.ADULT ? "Adults" : "Children"}</div>
			<div className={classes.description}>Ages {props.mode === Mode.ADULT ? "13 or above" : "2 - 12"}</div>
			<div className={classes.buttons}>
				<button className={classes.button}>-</button>
				<div>0</div>
				<button className={classes.button}>+</button>
			</div>
		</div>
	);
};

const locationSet: Set<string> = new Set();
STAYS_DATA.map((stay) => {
	locationSet.add(stay.city);
});

const Options: React.FC<OptionsProps> = (props) => {
	const locations: JSX.Element[] = [];
	locationSet.forEach((value, index) =>
		locations.push(
			<div key={index} className={classes.location}>
				<span className="material-symbols-outlined">location_on</span>
				{value}, Finland
			</div>
		)
	);

	return (
		<div className={classes.options}>
			<div>
				<div className={classes.locationOptions}>{locations}</div>
			</div>
			<div>
				<div className={classes.guestsOptions}>
					<Counter mode={Mode.ADULT} />
					<Counter mode={Mode.CHILDREN} />
				</div>
			</div>
			{!props.isMobile && <div></div>}
		</div>
	);
};

export default Options;
