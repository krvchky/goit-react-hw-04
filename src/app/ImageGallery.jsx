import React from 'react';
import ImageCard from './ImageCard';

const ImageGallery = ({ photos, onPhotoClick }) => {
  return (
    <ul className="image-gallery">
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} onClick={onPhotoClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
