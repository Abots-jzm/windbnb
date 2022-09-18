import React from "react";
import LogoSVG from "../assets/logo.svg";
import classes from "./Header.module.css";
import SearchBar from "../components/SearchBar";

const Header: React.FC = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src={LogoSVG} alt="Logo" />
			</div>
			<SearchBar />
		</header>
	);
};

export default Header;
