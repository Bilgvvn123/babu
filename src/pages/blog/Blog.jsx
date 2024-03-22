import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useParams } from "react-router-dom";
import { getBlog } from "../../services/blogService";

export const Blog = () => {
	const { id } = useParams();
	const [blog, setBlog] = useState({});

	useEffect(() => {
		async function fetchBlog() {
			try {
				const res = await getBlog(id);
				setBlog(res.data.blog);
			} catch (e) {
				toast.error(e.message);
			}
		}
		fetchBlog();
	});

	return <div>{blog && JSON.stringify(blog)}</div>;
};
