import React from "react";
import manSitting from "../assets/faq assets/man sitting on cloud.svg";

const Faqs = () => {
  return (
    <div
      className="faqs flex flex-col md:flex-row items-center w-11/12 mx-auto mt-20 gap-20"
      id="faqs"
    >
      <div className="questions w-full md:w-1/2 ">
        <h3 className="font-title text-white leading-[1.33] text-center md:text-start text-xl md:text-[2rem] font-bold mb-4">
          Frequently Asked <br />
          <span className="text-[#D434FE]">Questions</span>
        </h3>
        <p className="font-sentence text-white text-sm text-center md:text-start">
          We got answers to the questions that you might want to ask about{" "}
          <span className="font-bold">getlinked Hackathon 1.0</span>
        </p>
        <div className="questions-container mt-12">
          <div className="one-question-container w-full md:w-4/5 flex items-center justify-between border-b border-b-[#D434FE] pb-2 mb-6 text-sm cursor-pointer">
            <p className="inline text-white">
              Can I work on a project I started before the hackathon?
            </p>
            <div className="">
              <p className="inline text-[#D434FE] text-xl">+</p>
            </div>
          </div>
          <div className="one-question-container md:w-4/5 flex items-center justify-between border-b border-b-[#D434FE] pb-2 mb-6 text-sm cursor-pointer">
            <p className="inline text-white">
              What happens if I need help during the hackathon?
            </p>
            <div className="">
              <p className="inline text-[#D434FE] text-xl">+</p>
            </div>
          </div>
          <div className="one-question-container md:w-4/5 flex items-center justify-between border-b border-b-[#D434FE] pb-2 mb-6 text-sm cursor-pointer">
            <p className="inline text-white">
              What happens if I don't have an idea for a project?
            </p>
            <div className="">
              <p className="inline text-[#D434FE] text-xl">+</p>
            </div>
          </div>
          <div className="one-question-container md:w-4/5 flex items-center justify-between border-b border-b-[#D434FE] pb-2 mb-6 text-sm cursor-pointer">
            <p className="inline text-white">
              Can I join a team or do I have to come with one?
            </p>
            <div className="">
              <p className="inline text-[#D434FE] text-xl">+</p>
            </div>
          </div>
          <div className="one-question-container md:w-4/5 flex items-center justify-between border-b border-b-[#D434FE] pb-2 mb-6 text-sm cursor-pointer">
            <p className="inline text-white">
              What happens after the hackathon ends
            </p>
            <div className="">
              <p className="inline text-[#D434FE] text-xl">+</p>
            </div>
          </div>
          <div className="one-question-container md:w-4/5 flex items-center justify-between border-b border-b-[#D434FE] pb-2 mb-6 text-sm cursor-pointer">
            <p className="inline text-white">
              Can I work on a project I started before the hackathon?
            </p>
            <div className="">
              <p className="inline text-[#D434FE] text-xl">+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container w-1/2">
        <img src={manSitting} alt="" />
      </div>
    </div>
  );
};

export default Faqs;
