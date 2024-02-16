import React, { useEffect, useState } from "react";
import LoadingSkeleton from "../../components/loadingSkeleton/loadingSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type postProps = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const LoadingSkeletonPage = () => {
	//fetch post
	const [posts, setPosts] = useState<postProps[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			//delay in fetching 3s
			await new Promise((resolve) => setTimeout(resolve, 3000));
			const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
			setPosts(response);
			setLoading(false);
		};

		fetchPosts();
	}, []);

	return (
		<SkeletonTheme
			baseColor="#ebebeb"
			highlightColor="#f5f5f5"
		>
			<div style={{ maxWidth: "800px", margin: "0px auto", padding: "50px 0" }}>
				<h2>Method 1: Show Skeleton if no data</h2>
				<div>
					<h3>{posts[0]?.title || <Skeleton />}</h3>
					<p>{posts[0]?.body || <Skeleton count={3} />}</p>
					<p>{posts[0]?.body}</p>
				</div>

				<hr style={{ margin: "50px 0" }} />

				<h2>Method 2: Using Loading State</h2>
				{loading ? (
					<LoadingSkeleton />
				) : (
					//map 3 posts
					posts.slice(0, 2).map((post) => (
						<div key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</div>
					))
				)}
			</div>
		</SkeletonTheme>
	);
};

export default LoadingSkeletonPage;
