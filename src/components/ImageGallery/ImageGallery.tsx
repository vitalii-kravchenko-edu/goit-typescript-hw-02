import React from "react";
import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

const ImageGallery: React.FC<{
  images: Image[] | null;
  openModal: (image: Image) => void;
}> = ({ images, openModal }) => {
  return (
    <ul className={style.list}>
      {Array.isArray(images) &&
        images.map(({ id, alt_description, urls }) => (
          <ImageCard
            key={id}
            src={urls.small}
            alt={alt_description}
            onClick={() => openModal({ id, urls, alt_description })}
          />
        ))}
    </ul>
  );
};

export default ImageGallery;
