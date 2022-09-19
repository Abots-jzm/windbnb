import React from "react";
import classes from "./SearchButton.module.css";

type Props = {
	hidePanel: Function;
};

const SearchButton: React.FC<Props> = (props) => {
	function searchBtnClicked() {
		props.hidePanel();
	}

	return (
		<div className={classes.flex}>
			<div className={classes.search}>
				<div className={classes.searchBtn} onClick={() => searchBtnClicked()}>
					<span className="material-symbols-outlined">search</span>
					Search
				</div>
			</div>
		</div>
	);
};

export default SearchButton;