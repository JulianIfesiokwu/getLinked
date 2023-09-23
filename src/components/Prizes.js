import React from "react";
import trophy from "../assets/prizes assets/trophy.svg";
import rewards from "../assets/prizes assets/rewards.svg";

const Prizes = () => {
  return (
    <div className="prizes flex items-center justify-center flex-col md:flex-row w-11/12 mx-auto mt-20 gap-20">
      <div className="about-prizes w-full md:w-1/2 sm:hidden">
        <h3 className="font-title text-center md:text-start text-white font-bold text-xl md:text-[2rem]">
          Prizes and
          <br />
          <span className="text-[#D434FE]">Rewards</span>
        </h3>
        <p className="text-center md:text-start text-white text-xs md:text-base leading-[1.709] font-sentence">
          Highlight of the prizes or rewards for winners and
          <br />
          for participants.
        </p>
      </div>
      <div className="img-container w-full md:w-1/2">
        <img src={trophy} alt="" />
      </div>
      <div className="about-prizes w-full md:w-1/2 mb-8 mt-[-2rem]">
        <h3 className="hidden sm:block font-title text-center md:text-start text-white font-bold text-xl md:text-[2rem]">
          Prizes and
          <br />
          <span className="text-[#D434FE]">Rewards</span>
        </h3>
        <p className="hidden sm:block text-center md:text-start text-white text-xs md:text-base leading-[1.709] font-sentence">
          Highlight of the prizes or rewards for winners and
          <br />
          for participants.
        </p>
        <div className="money flex gap-8">
          <div className="reward-money">
            <img src={rewards} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
