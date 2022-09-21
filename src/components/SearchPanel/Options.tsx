import React, { useEffect, useState } from "react";
import classes from "./Options.module.css";
import STAYS_DATA from "../../assets/stays.json";
import Counter from "./Counter";
import Location from "./Location";

export enum Mode {
	ADULT,
	CHILDREN,
}

type Props = {
	isMobile: boolean;
	locationIsActive: boolean;
	fillLocation: (location: string) => void;
	fillGuests: (guests: number) => void;
};

const locationSet: Set<string> = new Set();
STAYS_DATA.forEach((stay) => {
	locationSet.add(stay.city);
});

const Options: React.FC<Props> = (props) => {
	const [noOfAdults, setNoOfAdults] = useState(0);
	const [noOfChildren, setNoOfChildren] = useState(0);

	useEffect(() => {
		props.fillGuests(noOfAdults + noOfChildren);
	}, [noOfAdults, noOfChildren, props]);

	const locations: JSX.Element[] = [];
	locationSet.forEach((value, index) =>
		locations.push(
			<Location fillLocation={props.fillLocation} key={index}>
				{value}
			</Location>
		)
	);

	return (
		<div className={classes.options}>
			{!props.isMobile && <div>{props.locationIsActive && <div className={classes.locationOptions}>{locations}</div>}</div>}
			{props.isMobile && props.locationIsActive && <div className={classes.locationOptions}>{locations}</div>}
			{!props.isMobile && (
				<div>
					{!props.locationIsActive && (
						<div className={classes.guestsOptions}>
							<Counter currNumber={noOfAdults} fillGuests={setNoOfAdults} mode={Mode.ADULT} />
							<Counter currNumber={noOfChildren} fillGuests={setNoOfChildren} mode={Mode.CHILDREN} />
						</div>
					)}
				</div>
			)}
			{props.isMobile && !props.locationIsActive && (
				<div className={classes.guestsOptions}>
					<Counter currNumber={noOfAdults} fillGuests={setNoOfAdults} mode={Mode.ADULT} />
					<Counter currNumber={noOfChildren} fillGuests={setNoOfChildren} mode={Mode.CHILDREN} />
				</div>
			)}
			{!props.isMobile && <div></div>}
		</div>
	);
};

export default Options;
