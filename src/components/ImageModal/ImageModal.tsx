import React from "react";
import Modal from "react-modal";

import style from "./ImageModal.module.css";

interface Image {
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: Image | null;
}

const ImageModal: React.FC<Props> = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <div>
      <Modal
        className={style.content}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Selected Image"
        ariaHideApp={false}
      >
        {selectedImage && (
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
            width={800}
            height={600}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;

