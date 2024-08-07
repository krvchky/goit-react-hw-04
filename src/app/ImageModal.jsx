import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const ImageModal = ({ isOpen, onRequestClose, photo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '90%',
          maxHeight: '90%',
          padding: 0,
          border: 'none',
          borderRadius: '10px',
        },
      }}
    >
      <div className="modal-content" onClick={onRequestClose}>
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onClick={(e) => e.stopPropagation()}  
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
