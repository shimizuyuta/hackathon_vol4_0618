import React from "react";
import NavBar from "./NavBar";
import History from "../history/History";

function Top() {
	return (
		<div>
			<NavBar contents={<History />}/>
		</div>
	);
};

export default Top;