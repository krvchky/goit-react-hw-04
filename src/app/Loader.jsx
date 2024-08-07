import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = ({ small }) => {
  return (
    <div className={`loader ${small ? 'loader-small' : ''}`}>
      <TailSpin
        height={small ? "20" : "40"}
        width={small ? "20" : "40"}
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
