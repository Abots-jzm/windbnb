import React from "react";
import ReactDOM from "react-dom";
import classes from "./SearchPanel.module.css";
import SearchOption from "./SearchOption";
import Options from "./Options";

const element = document.getElementById("modal-overlay") as HTMLElement;

type Props = {
	hidden: boolean;
	hidePanel: Function;
};

const SearchPanelComponent: React.FC<Props> = (props) => {
	const containerClasses = `${classes.container} ${props.hidden && classes.hidden}`;
	const overlayClasses = `${classes.overlay} ${props.hidden && classes.hidden}`;

	return (
		<div className={overlayClasses} onClick={() => props.hidePanel()}>
			<div className={containerClasses}>
				<div className={classes.layout}>
					<div className={classes.searchOptions}>
						<SearchOption selected={true}>Add location</SearchOption>
						<SearchOption selected={false}>Add guests</SearchOption>
						<div className={classes.search}>
							<div className={classes.searchBtn}>
								<span className="material-symbols-outlined">search</span>
								Search
							</div>
						</div>
					</div>
					<Options />
				</div>
			</div>
		</div>
	);
};

const SearchPanel: React.FC<Props> = (props) => {
	return ReactDOM.createPortal(<SearchPanelComponent {...props} />, element);
};

export default SearchPanel;
