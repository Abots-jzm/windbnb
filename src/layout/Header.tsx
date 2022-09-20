import React, { useState } from "react";
import LogoSVG from "../assets/logo.svg";
import classes from "./Header.module.css";
import SearchBar from "../components/SearchBar";
import SearchPanelModal from "../components/SearchPanel/SearchPanelModal";

type Props = {
	onSearch: Function;
};

const Header: React.FC<Props> = (props) => {
	const [panelIsHidden, setPanelIsHidden] = useState(true);

	function showPanel() {
		setPanelIsHidden(false);
		document.body.style.overflow = "hidden";
	}

	function hidePanel() {
		setPanelIsHidden(true);
		document.body.style.overflow = "auto";
	}

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src={LogoSVG} alt="Logo" />
			</div>
			<SearchBar showPanel={showPanel} />
			<SearchPanelModal onSearch={props.onSearch} hidden={panelIsHidden} hidePanel={hidePanel} />
		</header>
	);
};

export default Header;
