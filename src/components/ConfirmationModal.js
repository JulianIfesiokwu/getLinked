import React from "react";
import successful from "../assets/confirmation/successful.svg";

const ConfirmationModal = () => {
  return (
    <div className="">
      <div className="img-container">
        <img src={successful} alt="" />
      </div>
      <h3 className="font-sentence text-white font-semibold text-[2rem]">
        Congratulations
        <br /> you have successfully Registered!
      </h3>
      <p className="font-sentence text-white text-sm">
        Yes, it was easy and you did it!
        <br /> check your mail box for next step
      </p>
      <button
        to="/register"
        className={`font-inter md:font-sentence text-white text-base duration-500 mb-4 md:mb-0 rounded bg-gradient-to-r from-[#FE34B9] to-[#903AFF] px-12 py-3`}
      >
        Back
      </button>
    </div>
  );
};

export default ConfirmationModal;
