import React, { useEffect, useState } from "react";
import classes from "./SearchPanel.module.css";
import Card from "../UI/Card";
import SearchOption, { SearchOptionsMode } from "./SearchOption";
import Options from "./Options";
import SearchButton from "../UI/SearchButton";

type Props = {
	hidden: boolean;
	hidePanel: Function;
	onSearch: Function;
};

const SearchPanel: React.FC<Props> = (props) => {
	const containerClasses = `${classes.container} ${props.hidden && classes.hidden}`;

	const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
	const [locationIsActive, setLocationIsActive] = useState(true);
	const [locationFilled, setLocationFilled] = useState(false);
	const [guestsFilled, setGuestsFilled] = useState(false);
	const [currentLocation, setCurrentLocation] = useState("Add location");
	const [currentGuests, setCurrentGuests] = useState("Add guests");
	const [currentGuestsNumber, setCurrentGuestsNumber] = useState(0);

	useEffect(() => {
		window.addEventListener("resize", () => setIsMobile(window.innerWidth < 600));

		return () => {
			window.removeEventListener("resize", () => setIsMobile(window.innerWidth < 600));
		};
	}, []);

	function fillLocation(location: string) {
		setLocationFilled(true);
		setCurrentLocation(location);
		showGuests();
	}

	function fillGuests(guests: number) {
		setGuestsFilled(true);
		let newCurrentGuest: string;
		if (guests === 0) {
			setGuestsFilled(false);
			newCurrentGuest = "Add guests";
		} else if (guests === 1) newCurrentGuest = "1 guest";
		else newCurrentGuest = `${guests} guests`;

		setCurrentGuests(newCurrentGuest);
		setCurrentGuestsNumber(guests);
	}

	function showLocation() {
		setLocationIsActive(true);
	}

	function showGuests() {
		setLocationIsActive(false);
	}

	function search() {
		props.onSearch(currentLocation, currentGuestsNumber);
	}

	return (
		<div className={containerClasses}>
			<button className={classes.cancel} onClick={() => props.hidePanel()}>
				<span className="material-symbols-outlined">close</span>
			</button>
			<div className={classes.layout}>
				<Card extra={classes.searchOptions} onClick={null}>
					<SearchOption mode={SearchOptionsMode.LOCATION} selected={locationIsActive} onClick={showLocation} filled={locationFilled}>
						{currentLocation}
					</SearchOption>
					<SearchOption mode={SearchOptionsMode.GUESTS} selected={!locationIsActive} onClick={showGuests} filled={guestsFilled}>
						{currentGuests}
					</SearchOption>
					{!isMobile && <SearchButton hidePanel={props.hidePanel} onSearch={search} />}
				</Card>
				<Options isMobile={isMobile} locationIsActive={locationIsActive} fillLocation={fillLocation} fillGuests={fillGuests} />
				{isMobile && <SearchButton hidePanel={props.hidePanel} onSearch={search} />}
			</div>
		</div>
	);
};

export default SearchPanel;
