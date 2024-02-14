import React from "react";
import ProgressBarScroll from "../../components/progressBar/ProgressBarScroll";

const ProgressBarScrollPage = () => {
	return (
		<div style={{ height: "2000px", position: "relative" }}>
			<ProgressBarScroll />
			<div style={{ margin: "50px auto", textAlign: "center" }}>Scroll Down to see Scroll Progress Bar Animation!</div>
		</div>
	);
};

export default ProgressBarScrollPage;
