import axios from "../axios";

export const register = async (authData) => {
	return await axios.post("auth", authData, {
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const login = async (authData) => {
	const res = await axios.post("auth/login", authData, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (res.statusText === "OK") {
		sessionStorage.setItem("token", res.data.token);
		sessionStorage.setItem("uid", res.data.user._id);
	}
	console.log(res);
};
