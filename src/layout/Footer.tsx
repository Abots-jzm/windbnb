import React from "react";
import classes from "./Footer.module.css";

const Footer: React.FC = () => {
	return (
		<div className={classes.footer}>
			Created by{" "}
			<a href="https://twitter.com/The_Jazzmann?t=CS6W0TjkvvkOUv5ckEiAiQ&s=09" target="_blank">
				Abots
			</a>{" "}
			- devChallenges.io
		</div>
	);
};

export default Footer;
