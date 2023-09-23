import React from "react";
import introduction from "../assets/Introduction/Introduction.svg";
import star from "../assets/Introduction/big-purple-star.svg";

const Introduction = () => {
  return (
    <div className="intro flex flex-col sm:flex-row items-center justify-between w-11/12 mx-auto mt-24 gap-20">
      <div className="w-full md:1/2 img-container">
        <img src={introduction} alt="" />
      </div>
      <div className="information w-full md:w-1/2 relative">
        <h3 className="font-title text-white text-center md:text-start leading-[1.33] font-bold text-xl md:text-[2rem] mb-2">
          Introduction to getlinked
          <br />
          <span className="text-[#D434FE]">tech Hackathon 1.0</span>
        </h3>
        <img src={star} className="absolute right-0 bottom-48" alt="" />
        <p className="font-sentence text-center md:text-start text-white">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
