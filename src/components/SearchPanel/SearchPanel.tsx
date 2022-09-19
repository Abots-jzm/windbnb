import React, { useEffect, useState } from "react";
import classes from "./SearchPanel.module.css";
import Card from "../UI/Card";
import SearchOption from "./SearchOption";
import Options from "./Options";
import SearchButton from "../UI/SearchButton";

type SearchPanelComponentProps = {
	hidden: boolean;
	hidePanel: Function;
};

const SearchPanel: React.FC<SearchPanelComponentProps> = (props) => {
	const containerClasses = `${classes.container} ${props.hidden && classes.hidden}`;

	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

	useEffect(() => {
		window.addEventListener("resize", () => setIsMobile(window.innerWidth < 600));

		return () => {
			window.removeEventListener("resize", () => setIsMobile(window.innerWidth < 600));
		};
	}, []);

	return (
		<div className={containerClasses}>
			<button className={classes.cancel} onClick={() => props.hidePanel()}>
				<span className="material-symbols-outlined">close</span>
			</button>
			<div className={classes.layout}>
				<Card extra={classes.searchOptions} onClick={null}>
					<SearchOption selected={true}>Add location</SearchOption>
					<SearchOption selected={false}>Add guests</SearchOption>
					{!isMobile && <SearchButton hidePanel={props.hidePanel} />}
				</Card>
				<Options isMobile={isMobile} />
				{isMobile && <SearchButton hidePanel={props.hidePanel} />}
			</div>
		</div>
	);
};

export default SearchPanel;
