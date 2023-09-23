import React from "react";
import { Link } from "react-router-dom";
import bentBar from "../assets/bent-bar.svg";
import landing from "../assets/landing assets/landing-combined.svg";
import chain from "../assets/landing assets/chain.svg";
import yellowSpark from "../assets/landing assets/yellow-spark.svg";
import lightBulb from "../assets/landing assets/light-bulb.svg";

const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full  mt-24 md:mt-4">
      <div className="relative sm:hidden mb-8">
        <h3 className="text-white font-sentence text-base text-center font-bold italic">
          Igniting a Revolution in HR Innovation
        </h3>
        <img className="w-1/3 absolute right-[1rem]" src={bentBar} alt="" />
      </div>
      <div className="info md:mt-32">
        <h3 className="font-title font-bold text-[2rem] md:text-[5rem] text-center text-white leading-[0.975] mb-4">
          getlinked Te
          <span className="relative">
            c
            <img
              src={lightBulb}
              alt=""
              className="absolute bottom-[1.5rem] md:bottom-[4rem] left-0"
            />
          </span>
          h <br />
          Hackathon{" "}
          <span className="text-[#D434FE] relative">
            1.0
            <img
              src={chain}
              alt=""
              className="w-[32px] md:w-auto absolute top-0 left-[3rem] sm:left-[7rem]"
            />
            <img
              src={yellowSpark}
              alt=""
              className="w-[20px] md:w-auto absolute top-[0.5rem] md:top-[1rem] left-[4.5rem] md:right-[4rem]"
            />
          </span>
        </h3>
        <p className="font-sentence text-center sm:text-start text-white text-[0.8125rem] sm:text-xl mb-12">
          Participate in getlinked tech Hackathon 2023 stand
          <br /> a chance to win a Big prize
        </p>
        <div className="w-1/2 md:w-auto mx-auto text-center md:text-start">
          <Link
            to="/register"
            className={`font-inter md:font-sentence text-white text-xs text-center md:text-base md:mb-0 rounded bg-gradient-to-r from-[#FE34B9] to-[#903AFF] px-6 md:px-12 py-3 mx-auto`}
          >
            Register
          </Link>
        </div>
        <p className="font-unica text-[64px] text-center md:text-start text-white mt-8 md:mt-12">
          00<span className="font-sentence leading-[1.33] text-sm">H</span> 00
          <span className="font-sentence leading-[1.33] text-sm">M</span> 00
          <span className="font-sentence leading-[1.33] text-sm">S</span>
        </p>
      </div>
      <div className="relative h-full">
        <h3 className="text-white font-sentence text-4xl font-bold italic hidden sm:block">
          Igniting a Revolution in HR Innovation
        </h3>
        <img
          className="absolute right-[4rem] hidden sm:block"
          src={bentBar}
          alt=""
        />
        <div className="w-full">
          <img src={landing} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
