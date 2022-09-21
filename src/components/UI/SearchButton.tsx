import React from "react";
import classes from "./SearchButton.module.css";

type Props = {
	hidePanel: () => void;
	onSearch: () => void;
};

const SearchButton: React.FC<Props> = (props) => {
	function searchBtnClicked() {
		props.hidePanel();
		props.onSearch();
	}

	return (
		<div className={classes.flex}>
			<div className={classes.search}>
				<div className={classes.searchBtn} onClick={searchBtnClicked}>
					<span className="material-symbols-outlined">search</span>
					Search
				</div>
			</div>
		</div>
	);
};

export default SearchButton;
