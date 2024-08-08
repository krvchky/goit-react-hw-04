import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from "./ImageGallery.module.css"

const ImageGallery = ({ photos, onPhotoClick }) => {
  return (
    <ul className={s.imageGallery}>
      {photos.map((photo) => (
        <ImageCard key={photo.id} photo={photo} onClick={onPhotoClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
