import React from "react";
import classes from "./SearchOption.module.css";

type Props = {
	selected: boolean;
	children: React.ReactNode;
};

const SearchOption: React.FC<Props> = (props) => {
	const title = props.children ? props.children.toString().split(" ").at(-1) : "";
	const selected = `${classes.searchOption} ${props.selected && classes.selected}`;

	return (
		<div className={classes.searchOptions}>
			<div className={selected}>
				<div className={classes.title}>{title}</div>
				<div className={classes.empty}>{props.children}</div>
			</div>
		</div>
	);
};

export default SearchOption;
