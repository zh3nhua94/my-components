import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import "./Modal.css";

const Modal = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
			<button
				className="modal-button"
				onClick={() => setShowModal(true)}
			>
				Show modal using a portal
			</button>
			{showModal &&
				createPortal(
					<ModalContent
						showModal={showModal}
						setShowModal={setShowModal}
					/>,
					document.body
				)}
		</div>
	);
};

export default Modal;
