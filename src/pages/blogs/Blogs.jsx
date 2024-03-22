import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";

import { getBlogs } from "../../services/blogService";
import { useFilter } from "../../context";

export const Blogs = () => {
	const [data, setData] = useState([]);

	const search = useLocation().search;
	const searchTerm = new URLSearchParams(search).get("q");

	const { a } = useFilter();
	console.log(a);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getBlogs(searchTerm ? searchTerm : "");
				setData(res.data.blogs);
			} catch (e) {
				toast.error(e.message);
			}
		};
		fetchData();
	}, [searchTerm]);

	return (
		<div>
			{data?.map((el) => (
				<div
					key={el._id}
					style={{
						borderBottom: "1px solid #ccc",
						marginBottom: "10px",
						fontSize: "20px",
					}}
				>
					<Link to={`/blogs/${el._id}`}>read more</Link>
					{JSON.stringify(el)}
				</div>
			))}
		</div>
	);
};
