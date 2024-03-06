import { Fragment } from "react";
import "./Stepper.css";

const Stepper = ({ currentStep, numberOfSteps }: { currentStep: number; numberOfSteps: number }) => {
	//determine the color of the circle based on steps
	const activeColor = (index: number) => {
		return currentStep - 1 >= index ? "stepper-active" : "stepper-gray";
	};

	//determine if the step is the final step
	const isFinalStep = (index: number) => index === numberOfSteps - 1;

	return (
		<div className="stepper-container">
			{Array.from({ length: numberOfSteps }).map((_, index) => (
				<Fragment key={index}>
					<div className={`stepper-circle ${activeColor(index)}`}></div>
					{!isFinalStep(index) && <div className={`stepper-bar ${activeColor(index + 1)}`}></div>}
				</Fragment>
			))}
		</div>
	);
};

export default Stepper;
