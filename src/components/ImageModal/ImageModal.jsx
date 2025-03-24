import css from "./ImageModal.module.css";

import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "black",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    objectFit: "contain",
    padding: "0",
    border: "none",
    backgroundColor: "black",
  },
};

export default function ImageModal({ modalIsOpen, closeModal, selectedImage }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button className={css.button} onClick={closeModal}>
        Close
      </button>
      {selectedImage && (
        <img className={css.modalImage} src={selectedImage} alt="selected" />
      )}
    </Modal>
  );
}
