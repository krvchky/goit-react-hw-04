
import React from 'react';
import Modal from 'react-modal';
import s from "./ImageModal.module.css"

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, photo }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modalContent}
      overlayClassName="ReactModal__Overlay"
    >
      <div  onClick={onRequestClose}>
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </Modal>
  );
}
