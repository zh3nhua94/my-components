import { useEffect, useState } from "react";

type Props = {
	showModal: boolean;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContent = ({ showModal, setShowModal }: Props) => {
	const [isVisible, setIsVisible] = useState(false);

	const closeModal = () => {
		setIsVisible(false);
		setTimeout(() => {
			setShowModal(false);
		}, 300);
	};

	useEffect(() => {
		if (showModal) {
			setIsVisible(true);
		}
	}, [showModal]);

	return (
		<>
			<div
				className={isVisible ? "overlay active" : "overlay"}
				onClick={closeModal}
			></div>
			<div className={isVisible ? "modal active" : "modal"}>
				<div className="modal-content">I'm a modal dialog</div>
				<button onClick={closeModal}>Close</button>
			</div>
		</>
	);
};

export default ModalContent;
