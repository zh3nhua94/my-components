import React, { useEffect, useState } from "react";

const styleProgressScrollOuter = {
	height: "15px",
	width: "100%",
	backgroundColor: "#d1d1d1",
	position: "fixed",
	top: "0",
	left: "0",
	right: "0",
} as React.CSSProperties;

const styleProgressScrollInner = {
	height: "100%",
	backgroundColor: "#53c28b",
} as React.CSSProperties;

const ProgressBarScroll = () => {
	const [progressWidth, setProgressWidth] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.body.scrollHeight;
			const scrollY = window.scrollY;

			const percentageScrolled = (scrollY / (documentHeight - windowHeight)) * 100;
			setProgressWidth(percentageScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div style={styleProgressScrollOuter}>
			<div style={{ ...styleProgressScrollInner, width: `${progressWidth}%` }}></div>
		</div>
	);
};

export default ProgressBarScroll;
