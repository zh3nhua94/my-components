type postProps = {
	id: string;
	brand: string;
	model: string;
	color: string;
	createdAt: string;
	updatedAt: string;
};

const PaginationPosts = ({ records }: { records: postProps[] }) => {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{records?.map((post) => (
				<div
					key={post.id}
					style={{ padding: "20px", width: "33.33%" }}
				>
					<div>{post.brand}</div>
					<div>{post.model}</div>
					<div>{post.color}</div>
					<div>{post.createdAt}</div>
					<div>{post.updatedAt}</div>
				</div>
			))}
		</div>
	);
};

export default PaginationPosts;
