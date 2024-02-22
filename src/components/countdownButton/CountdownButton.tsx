import React, { useEffect, useRef, useState } from "react";
import "./countdownButton.css";

const CountdownButton = () => {
	const [countdown, setCountdown] = useState(10);
	const [isPurchased, setIsPurchased] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		// Function 1: Automatic countdown
		intervalRef.current = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1000);

		// Cleanup interval on component unmount or when countdown reaches 0
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	//clear interval after 10s
	useEffect(() => {
		if (countdown <= 0) {
			clearInterval(intervalRef.current);
		}
	}, [countdown]);

	const handleBuyClick = async () => {
		if (countdown === 0 && !isPurchased) {
			setIsButtonDisabled(true);
			try {
				const response = await simulateApiRequest();
				if (response.success) {
					setIsPurchased(true);
				}
			} catch (error) {
				console.error("Error during API request:", error);
			}
		}
	};

	const simulateApiRequest = (): Promise<{ success: boolean }> => {
		return new Promise((resolve) => {
			resolve({ success: true });
		});
	};

	return (
		<div className="coupon-card">
			<h3 className="coupon-title">90% off</h3>
			<p className="coupon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			{countdown > 0 ? (
				<button
					className="countdown-button"
					disabled
				>
					{countdown}s
				</button>
			) : (
				<button
					className={`countdown-button buy-button ${isPurchased ? "purchased" : ""} ${
						isButtonDisabled ? "disabled" : ""
					}`}
					onClick={handleBuyClick}
					disabled={isButtonDisabled}
				>
					{isPurchased ? "Purchased" : "Buy"}
				</button>
			)}
		</div>
	);
};

export default CountdownButton;
