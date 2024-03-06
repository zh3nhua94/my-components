import React, { useState } from "react";
import Billing from "./SubForms/BillingForm";
import "./MultiStepForm.css";
import useFormContext from "./hooks/useFormContext";
import DisplayForms from "./DisplayForms";

const MultiStepForm = () => {
	const { step, setStep, data, titles, canSubmit, disablePrev, disableNext, prevHide, nextHide, submitHide } =
		useFormContext();

	const handlePrev = () => {
		setStep((prev) => prev - 1);
	};
	const handleNext = () => {
		setStep((prev) => prev + 1);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(JSON.stringify(data));
		alert("Form submitted: \n\n" + JSON.stringify(data));
	};

	const content = (
		<form
			className="multi-step-form flex-col"
			onSubmit={handleSubmit}
		>
			<h2>{titles[step]}</h2>
			<div className="button-container">
				<button
					type="button"
					className={`button ${prevHide}`}
					onClick={handlePrev}
					disabled={disablePrev}
				>
					Prev
				</button>
				<button
					type="button"
					className={`button ${nextHide}`}
					onClick={handleNext}
					disabled={disableNext}
				>
					Next
				</button>
				<button
					type="submit"
					className={`button ${submitHide}`}
					disabled={!canSubmit}
				>
					Submit
				</button>
			</div>

			<DisplayForms />
		</form>
	);

	return content;
};

export default MultiStepForm;
