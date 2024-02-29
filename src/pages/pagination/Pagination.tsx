import { useEffect, useState } from "react";
import PaginationTable from "../../components/pagination/PaginationTable";
import { cars } from "../../data/cars";

const Pagination = () => {
	//if fetch posts
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
			setPosts(response);
		};
		fetchPosts();
	}, []);

	//if use dummy data
	const car = cars;

	return (
		<div className="page-container">
			<p style={{ textAlign: "center", color: "royalblue" }}>THE STYLING OF THE PAGINATION USES A BIT OF TAILWIND</p>
			<PaginationTable posts={car} />
		</div>
	);
};

export default Pagination;
