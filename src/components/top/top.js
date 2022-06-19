import React from "react";
import NavBar from "./NavBar";
import History from "../history/History";

function Top(props) {
    console.log(props,'props')
	return (
		<div>
			<NavBar
				deleteStorage={props.deleteStorage}
				datas={props.datas}
				contents={
					<History
						datas={props.datas}
						deleteContent={props.deleteContent}
					/>
				}
			/>
		</div>
	);
};

export default Top;