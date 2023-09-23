import React from "react";
import partners from "../assets/partners/partners.svg";

const Partners = () => {
  return (
    <div className="partners flex flex-col w-11/12 mx-auto mt-12">
      <h3 className="font-title font-bold text-white text-center text-xl md:text-[2rem]">
        Partners and Sponsors
      </h3>
      <p className="font-sentence text-white text-xs md:text-sm text-center mt-4 w-4/5 md:w-full mx-auto">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="flex items-center mt-8">
        <div className="">
          <img src={partners} alt="" className="mx-auto w-full md:w-11/12" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
