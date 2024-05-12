import React from "react";

interface Props {
  onAddPage: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onAddPage }) => {
  return (
    <div>
      <button onClick={onAddPage}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
