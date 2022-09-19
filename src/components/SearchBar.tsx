import React from "react";
import classes from "./SearchBar.module.css";

type Props = {
	showPanel: Function;
};

const SearchBar: React.FC<Props> = (props) => {
	return (
		<div className={classes["search-bar"]} onClick={() => props.showPanel()}>
			<div>Add Location</div>
			<div>Add guests</div>
			<div className={classes.search}>
				<span className="material-symbols-outlined">search</span>
			</div>
		</div>
	);
};

export default SearchBar;
