import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
	return (
		<div className={classes["search-bar"]}>
			<div>Add Location</div>
			<div>Add guests</div>
			<div className={classes.search}>
				<span className="material-symbols-outlined">search</span>
			</div>
		</div>
	);
};

export default SearchBar;
