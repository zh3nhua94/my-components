import React, { useState } from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";

const ProgressBarPage = () => {
	const [progressValue, setProgressValue] = useState(0);

	return (
		<div style={{ maxWidth: "800px", margin: "0px auto", padding: "50px 0" }}>
			<ProgressBar value={progressValue} />
			<button
				style={{ padding: "10px", border: "1px solid black" }}
				onClick={() => setProgressValue(0)}
			>
				0
			</button>
			<button
				style={{ padding: "10px", border: "1px solid black" }}
				onClick={() => setProgressValue(25)}
			>
				25
			</button>
			<button
				style={{ padding: "10px", border: "1px solid black" }}
				onClick={() => setProgressValue(50)}
			>
				50
			</button>
			<button
				style={{ padding: "10px", border: "1px solid black" }}
				onClick={() => setProgressValue(100)}
			>
				100
			</button>
		</div>
	);
};

export default ProgressBarPage;
