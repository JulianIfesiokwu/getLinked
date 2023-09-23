import React from "react";
import girlSitting from "../assets/rules assets/girl-sitting.svg";

const Rules = () => {
  return (
    <div className="rules flex flex-col-reverse sm:flex-row items-center justify-between w-11/12 mx-auto mt-12 gap-4">
      <div className="w-full md:w-1/2">
        <h3 className="font-title text-center md:text-start text-white text-xl md:text-[2rem]">
          Rules and
          <br /> <span className="text-[#D434FE]">Guidelines</span>
        </h3>
        <p className="font-sentence text-center md:text-start text-white mt-4">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="img-container">
        <img src={girlSitting} alt="" />
      </div>
    </div>
  );
};

export default Rules;
