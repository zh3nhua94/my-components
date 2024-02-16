import React from "react";
import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = () => {
	return (
		<div style={{ display: "flex", gap: "20px" }}>
			<div>
				<Skeleton
					circle
					width={50}
					height={50}
				/>
			</div>
			<div style={{ flex: 1 }}>
				<Skeleton count={5} />
			</div>
		</div>
	);
};

export default LoadingSkeleton;
