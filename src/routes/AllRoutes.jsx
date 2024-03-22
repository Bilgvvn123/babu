import React from "react";
import { Route, Routes } from "react-router-dom";

import { Blogs, Blog, Register, Login, Profile } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<h1>IT IS HOME</h1>} />
			<Route path="blogs" element={<Blogs />} />
			<Route path="blogs/:id" element={<Blog />} />
			<Route
				path="profile"
				element={
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				}
			/>
			<Route path="register" element={<Register />} />
			<Route path="login" element={<Login />} />
		</Routes>
	);
};

export default AllRoutes;
