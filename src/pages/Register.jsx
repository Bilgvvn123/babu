import React, { useRef, useState } from "react";

import { register } from "../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		username: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await register(formData);
			navigate("/login");
		} catch (e) {
			toast.error(e.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Register</h1>
			<input
				type="text"
				placeholder="username"
				required
				onChange={(e) =>
					setFormData({ ...formData, username: e.target.value })
				}
			/>
			<input
				type="email"
				placeholder="email"
				required
				onChange={(e) =>
					setFormData({ ...formData, email: e.target.value })
				}
			/>
			<input
				type="text"
				placeholder="password"
				required
				onChange={(e) =>
					setFormData({ ...formData, password: e.target.value })
				}
			/>
			<button
				type="submit"
				disabled={
					!(
						formData.email !== "" &&
						formData.password !== "" &&
						formData.username !== ""
					)
				}
			>
				sign up
			</button>
		</form>
	);
};
