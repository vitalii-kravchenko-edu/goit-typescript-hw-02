import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height={80}
        width={80}
        color="black"
        radius={9}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        // wrapperClassName=""
      />
    </div>
  );
};

export default Loader;
