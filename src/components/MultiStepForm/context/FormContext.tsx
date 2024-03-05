import { createContext, useEffect, useState } from "react";

type FormData = {
	billFirstName: string;
	billLastName: string;
	billAddress1: string;
	billAddress2: string;
	billCity: string;
	billState: string;
	billZipCode: string;
	sameAsBilling: boolean;
	shipFirstName: string;
	shipLastName: string;
	shipAddress1: string;
	shipAddress2: string;
	shipCity: string;
	shipState: string;
	shipZipCode: string;
	optInNews: boolean;
};

const initialState: FormData = {
	billFirstName: "",
	billLastName: "",
	billAddress1: "",
	billAddress2: "",
	billCity: "",
	billState: "",
	billZipCode: "",
	sameAsBilling: false,
	shipFirstName: "",
	shipLastName: "",
	shipAddress1: "",
	shipAddress2: "",
	shipCity: "",
	shipState: "",
	shipZipCode: "",
	optInNews: false,
};

const titles: Record<number, string> = {
	0: "Billing Info",
	1: "Shipping Info",
	2: "Opt In",
};

interface IStepFormContext {
	titles: typeof titles;
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	data: FormData;
	setData: React.Dispatch<React.SetStateAction<FormData>>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	canSubmit: boolean;
	disablePrev: boolean;
	disableNext: boolean;
	prevHide: string;
	nextHide: string;
	submitHide: string;
}

const StepFormContext = createContext<IStepFormContext | undefined>(undefined);

export const StepFormProvider = ({ children }: { children: React.ReactNode }) => {
	const [step, setStep] = useState(0);
	const [data, setData] = useState<FormData>(initialState);

	//if sameAsBilling is checked, copy data from billing form to shipping form
	useEffect(() => {
		if (data.sameAsBilling) {
			setData((prevData) => ({
				...prevData,
				shipFirstName: prevData.billFirstName,
				shipLastName: prevData.billLastName,
				shipAddress1: prevData.billAddress1,
				shipAddress2: prevData.billAddress2,
				shipCity: prevData.billCity,
				shipState: prevData.billState,
				shipZipCode: prevData.billZipCode,
			}));
		} else {
			setData((prevData) => ({
				...prevData,
				shipFirstName: "",
				shipLastName: "",
				shipAddress1: "",
				shipAddress2: "",
				shipCity: "",
				shipState: "",
				shipZipCode: "",
			}));
		}
	}, [data.sameAsBilling]);

	//collect data from form
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const type = e.target.type;
		const name = e.target.name;
		const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;

		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Separate out fields that are not required
	const { billAddress2, sameAsBilling, shipAddress2, optInNews, ...requiredInputs } = data;
	// Check if all required values are truthy, and also page must equal to last page to be able to submit
	const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && step === Object.keys(titles).length - 1;

	// Check if first form is completed, then return true
	const canNextStep1 = Object.keys(data)
		.filter((key) => key.startsWith("bill") && key !== "billAddress2")
		.map((key) => data[key as keyof FormData])
		.every(Boolean);

	// Check if second form is completed, then return true
	const canNextStep2 = Object.keys(data)
		.filter((key) => key.startsWith("ship") && key !== "shipAddress2")
		.map((key) => data[key as keyof FormData])
		.every(Boolean);

	// Disable prev button if step is 0, Disable next button if step is last or forms are not completed
	const disablePrev = step === 0;
	const disableNext =
		step === Object.keys(titles).length - 1 || (step === 0 && !canNextStep1) || (step === 1 && !canNextStep2);

	//Hide buttons according to step
	const prevHide = step === 0 ? "remove-button" : "";
	const nextHide = step === Object.keys(titles).length - 1 ? "remove-button" : "";
	const submitHide = step !== Object.keys(titles).length - 1 ? "remove-button" : "";

	const StepFormContextValue: IStepFormContext = {
		titles,
		step,
		setStep,
		data,
		setData,
		handleChange,
		canSubmit,
		disablePrev,
		disableNext,
		prevHide,
		nextHide,
		submitHide,
	};

	return <StepFormContext.Provider value={StepFormContextValue}>{children}</StepFormContext.Provider>;
};

export default StepFormContext;
