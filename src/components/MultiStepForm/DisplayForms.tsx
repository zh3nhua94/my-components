import Billing from "./SubForms/BillingForm";
import OptIn from "./SubForms/OptInForm";
import Shipping from "./SubForms/ShippingForm";
import useFormContext from "./hooks/useFormContext";

const DisplayForms = () => {
	const { step } = useFormContext();

	const display: Record<number, JSX.Element> = {
		0: <Billing />,
		1: <Shipping />,
		2: <OptIn />,
	};

	const content = <div className="form-inputs flex-col">{display[step]}</div>;

	return content;
};

export default DisplayForms;
