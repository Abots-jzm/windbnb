import React from "react";
import classes from "./SearchPanelModal.module.css";
import ReactDOM from "react-dom";
import SearchPanel from "./SearchPanel";

const element = document.getElementById("modal-overlay") as HTMLElement;

type SearchPanelComponentProps = {
	hidden: boolean;
	hidePanel: () => void;
	onSearch: (location: string, currentGuests: number) => void;
};

type OverlayProps = {
	hidden: boolean;
	hidePanel: () => void;
};

const Overlay: React.FC<OverlayProps> = (props) => {
	const overlayClasses = `${classes.overlay} ${props.hidden && classes.hidden}`;
	return <div className={overlayClasses} onClick={() => props.hidePanel()}></div>;
};

const SearchPanelModal: React.FC<SearchPanelComponentProps> = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Overlay {...props} />, element)}
			{ReactDOM.createPortal(<SearchPanel {...props} />, element)}
		</>
	);
};

export default SearchPanelModal;
