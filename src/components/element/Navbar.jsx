import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const token = sessionStorage.getItem("token");
	const id = sessionStorage.getItem("uid");

	const searchRef = useRef();
	const navigate = useNavigate();

	const logout = () => {
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("uid");
		navigate("login");
	};

	const search = () => {
		navigate(`blogs?q=${searchRef.current.value}`);
	};

	return (
		<div style={{ display: "flex", gap: "50px" }}>
			<div>
				<input type="text" ref={searchRef} />
				<button onClick={search}>search</button>
			</div>
			<Link to={"/"}>home</Link>
			<Link to={"blogs"}>blogs</Link>
			{token ? (
				<>
					<Link to={"profile"}>profile</Link>
					<button onClick={logout}>logout</button>
				</>
			) : (
				<>
					<Link to={"register"}>register</Link>
					<Link to={"login"}>login</Link>
				</>
			)}
		</div>
	);
};

export default Navbar;
