import React from "react";
import Navbar from "../element/Navbar";

export const Header = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				gap: "50px",
				marginBottom: "100px",
			}}
		>
			Logo
			<Navbar />
		</div>
	);
};
