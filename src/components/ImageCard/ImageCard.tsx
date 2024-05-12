import React from "react";

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
}

const ImageCard: React.FC<Props> = ({ src, alt, onClick }) => {
  return (
    <li>
      <img src={src} alt={alt} onClick={onClick} width={400} height={300} />
    </li>
  );
};

export default ImageCard;
