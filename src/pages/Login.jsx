import React, { useRef } from "react";
import { login } from "../services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await login({
				email: emailRef.current.value,
				password: passwordRef.current.value,
			});
			navigate("/");
		} catch (e) {
			toast.error(e.message);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="email"
					required
					ref={emailRef}
				/>
				<input
					type="text"
					placeholder="password"
					required
					ref={passwordRef}
				/>
				<input type="submit" value="log in" />
			</form>
		</div>
	);
};
