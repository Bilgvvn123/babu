import axios from "../axios";

export const getSession = () => {
	const token = sessionStorage.getItem("token");
	const uid = sessionStorage.getItem("uid");

	return { token, uid };
};

export const getBlogs = async (query) => {
	const blogs = await axios.get(
		`blogs?${query ? `title[$regex]=${query}` : ""}`
	);
	return blogs;
};

export const getBlog = async (id) => {
	const blog = await axios.get("blogs/" + id);
	return blog;
};

export const createBlog = async (blogData) => {
	const { token } = getSession();

	const res = await axios.post("blogs", blogData, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	return res;
};
