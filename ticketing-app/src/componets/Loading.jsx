import React from "react";
import Logo from "../images/logo.jpeg";

const Loading = () => {
  return (
    <div className="w-[390px] mx-auto h-[600px]">
      <div className="w-full h-full mt-[200px] ">
        <div className="w-[80px] mx-auto h-[80px] animate-spin my-4">
          <img src={Logo} alt="" className="w-full h-full rounded-full" />
        </div>
        <h2 className="font-serif font-semibold  text-center text-xl pb-3">
          M365 Denim Party Registration Page
        </h2>
        <p className="text-lg text-center">
          {" "}
          <span className="text-red-400 font-semibold">Loading........ </span>Please Wait
        </p>
      </div>
    </div>
  );
};

export default Loading;
