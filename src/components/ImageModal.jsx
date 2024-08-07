
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, photo }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="ReactModal__Overlay"
    >
      <div className="modal-body" onClick={onRequestClose}>
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </Modal>
  );
}
