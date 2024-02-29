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
			<div className={isVisible ? "modal-wrapper active" : "modal-wrapper"}>
				<div className="modal-content">
					<div
						className="modal-close"
						onClick={closeModal}
					>
						X
					</div>
					<div>I'm a modal dialog</div>
					<button
						className="modal-button"
						onClick={closeModal}
					>
						Close
					</button>
				</div>
			</div>
		</>
	);
};

export default ModalContent;
