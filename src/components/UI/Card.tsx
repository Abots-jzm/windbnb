import React from "react";
import classes from "./Card.module.css";

type Props = {
	children: React.ReactNode;
	extra?: string;
	onClick?: () => void;
};

const Card: React.FC<Props> = (props) => {
	const extraClasses = `${classes.card} ${props.extra}`;
	return (
		<div className={extraClasses} onClick={props.onClick}>
			{props.children}
		</div>
	);
};

export default Card;
