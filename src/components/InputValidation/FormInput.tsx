import React, { useState } from "react";
import "./FormInput.scss";

interface FormInputProps {
	id: number;
	name: string;
	type: string;
	placeholder: string;
	errorMessage?: string;
	label?: string;
	pattern?: string;
	required?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
	const [focused, setFocused] = useState(false);
	const { label, errorMessage, onChange, id, ...inputProps } = props;

	const handleFocus = () => {
		setFocused(true);
	};

	return (
		<div className="formInput">
			<label htmlFor={inputProps.name}>{label}</label>
			<input
				id={inputProps.name}
				{...inputProps}
				onChange={onChange}
				onBlur={handleFocus}
				// onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
				data-focused={focused.toString()}
			/>
			{focused && <span className="errorMessage">{errorMessage}</span>}
		</div>
	);
};

export default FormInput;
