import React from "react";
import "./progressBar.css";

const ProgressBar = ({ value }: { value: number }) => {
	// Handle invalid values and convert them to be within [0, 100].
	const MIN = 0;
	const MAX = 100;
	const clampedValue = Math.min(Math.max(value, MIN), MAX);

	return (
		<div className="progressbar-outer">
			<div
				className="progressbar-inner"
				style={{ width: `${clampedValue}%` }}
				role="progressbar"
				aria-valuenow={clampedValue}
				aria-valuemin={MIN}
				aria-valuemax={MAX}
			>
				{clampedValue}%
			</div>
		</div>
	);
};

export default ProgressBar;
