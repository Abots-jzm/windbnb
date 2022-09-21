import React from "react";
import classes from "./SearchOption.module.css";

export enum SearchOptionsMode {
	LOCATION,
	GUESTS,
}

type Props = {
	selected: boolean;
	children: React.ReactNode;
	onClick: () => void;
	filled: boolean;
	mode: number;
};

const SearchOption: React.FC<Props> = (props) => {
	const title = props.mode === SearchOptionsMode.LOCATION ? "Location" : "Guests";
	const selected = `${classes.searchOption} ${props.selected && classes.selected}`;

	return (
		<div className={classes.searchOptions} onClick={props.onClick}>
			<div className={selected}>
				<div className={classes.title}>{title}</div>
				<div className={props.filled ? classes.filled : classes.empty}>{props.children}</div>
			</div>
		</div>
	);
};

export default SearchOption;
