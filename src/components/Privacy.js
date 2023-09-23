import React from "react";
import { Link } from "react-router-dom";
import padlockMan from "../assets/privacy/padlockman.svg";

const Privacy = () => {
  return (
    <div className="privacy flex flex-col items-end justify-items-end md:flex-row w-11/12 mx-auto mt-12 gap-12">
      <div className="info w-full sm:w-1/2">
        <h3 className="font-title text-white font-bold text-xl text-center md:text-start md:text-[2rem] mb-4">
          Privacy Policy and
          <br /> <span className="text-[#D434FE]">Terms</span>
        </h3>
        <p className="font-sentence text-white text-xs md:text-sm text-center md:text-start mb-4">
          Last updated on September 12, 2023
        </p>
        <p className="w-4/5 md:w-full mx-auto font-sentence text-white text-xs md:text-sm text-center md:text-start mb-12">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="rounded border border-[#D434FE] text-center md:text-start px-4 py-12 md:p-20">
          <p className="text-white text-sm leading-[2.164]">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h3 className="font-bold font-sentence text-base text-[#D434FE]">
            Licensing Policy
          </h3>
          <p className="text-white text-sm font-bold leading-[2.164]">
            Here are terms of our Standard License:
          </p>
          <div className="mb-4 flex items-center">
            <input type="radio" className="mr-2" />
            <p className="text-white font-sentence text-sm leading-[2.164] inline">
              The Standard License grants you a non-exclusive right to
              <br />
              navigate and register for our event
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <input type="radio" className="mr-2" />
            <p className="text-white font-sentence text-sm leading-[2.164] inline">
              You are licensed to use the item available at any free source
              <br />
              sites, for your project developement
            </p>
          </div>
          <Link
            to="/register"
            className={`font-inter md:font-sentence text-white text-xs md:text-base md:mb-0 rounded bg-gradient-to-r from-[#FE34B9] to-[#903AFF] md:px-12 inline-block w-2/5 mx-auto py-3 mx-auto`}
          >
            Register
          </Link>
        </div>
      </div>
      <div className="img-container w-full sm:w-1/2">
        <img src={padlockMan} alt="" />
      </div>
    </div>
  );
};

export default Privacy;
