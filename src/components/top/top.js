import React from "react";
import AppBar from "./NavBar";
import History from "../history/History";

function Top() {
	return (
		<div>
			<AppBar contents={<History />}/>
		</div>
	);
};

export default Top;