import React from 'react';

const ImageCard = ({ photo, onClick }) => {
  return (
    <li className="image-card" >
      <div className="img-cover">
        <img src={photo.urls.small} alt={photo.alt_description} onClick={() => onClick(photo)} className="card-img" />
      </div>
    </li>
  );
};

export default ImageCard;
