import { useState } from "react";
import Stepper from "../../components/Stepper/Stepper";

const StepperPage = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const NUMBER_OF_STEPS = 5;

	//stepper handlers
	const goToNextStep = () => setCurrentStep((prev) => (prev === NUMBER_OF_STEPS ? prev : prev + 1));
	const goToPreviousStep = () => setCurrentStep((prev) => (prev <= 1 ? prev : prev - 1));

	return (
		<div className="page-container">
			<Stepper
				currentStep={currentStep}
				numberOfSteps={NUMBER_OF_STEPS}
			/>
			<div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
				<button onClick={goToPreviousStep}>Previous step</button>
				<button onClick={goToNextStep}>Next step</button>
			</div>
		</div>
	);
};

export default StepperPage;
