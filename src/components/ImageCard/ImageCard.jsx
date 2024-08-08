import React from 'react';
import s from "./ImageCard.module.css";

const ImageCard = ({ photo, onClick }) => {
  return (
    <li className={s.imageCard} >
      <div className={s.imgCover}>
        <img src={photo.urls.small} alt={photo.alt_description} onClick={() => onClick(photo)} className="card-img" />
      </div>
    </li>
  );
};

export default ImageCard;
