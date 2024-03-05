import React from "react";
import MultiStepForm from "../../components/MultiStepForm/MultiStepForm";
import { StepFormProvider } from "../../components/MultiStepForm/context/FormContext";

const MultiStepFormPage = () => {
	return (
		<div className="page-container">
			<StepFormProvider>
				<MultiStepForm />
			</StepFormProvider>
		</div>
	);
};

export default MultiStepFormPage;
