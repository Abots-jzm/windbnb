import React from "react";
import classes from "./SearchBar.module.css";
import Card from "./UI/Card";

type Props = {
	showPanel: Function;
};

const SearchBar: React.FC<Props> = (props) => {
	return (
		<Card extra={classes["search-bar"]} onClick={() => props.showPanel()}>
			<div>Add Location</div>
			<div>Add guests</div>
			<div className={classes.search}>
				<span className="material-symbols-outlined">search</span>
			</div>
		</Card>
	);
};

export default SearchBar;
