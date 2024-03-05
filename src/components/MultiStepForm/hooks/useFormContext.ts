import { useContext } from "react";
import StepFormContext from "../context/FormContext";

const useFormContext = () => {
	const context = useContext(StepFormContext);
	if (context === undefined) {
		throw new Error("useFormContext must be used within a FormProvider");
	}
	return context;
};

export default useFormContext;
