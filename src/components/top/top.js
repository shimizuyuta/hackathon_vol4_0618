import React from "react";
import NavBar from "./NavBar";
import History from "../history/History";

function Top(props) {
    console.log(props,'props')
	return (
		<div>
			<NavBar contents={<History datas={props.datas}/>}/>
		</div>
	);
};

export default Top;