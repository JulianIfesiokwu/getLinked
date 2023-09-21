import React from "react";
import { Link } from "react-router-dom";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-between py-4 md:px-16 px-7 md:mx-auto bg-[#150E28]">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col w-2/5">
          <h3 className="font-title font-bold text-white text-3xl mb-2">
            get<span className="text-[#D434FE]">linked</span>
          </h3>
          <p className="font-sentence text-xs text-white leading-[1.72] mb-8">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="font-sentence text-xs text-white">
            Terms of use <span className="text-[#D434FE]">|</span> Privacy
            Policy
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-sentence text-[#D434FE] text-sm font-semibold leading-[1.724] mb-2">
            Useful Links
          </p>
          <a
            href="/#timeline"
            className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
          >
            Timeline
          </a>
          <a
            href="/#overview"
            className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
          >
            Overview
          </a>
          <a
            href="/#faqs"
            className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
          >
            FAQs
          </a>
          <Link
            to="/contact"
            className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
          >
            Contact
          </Link>
          <Link
            to="/register"
            className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
          >
            Register
          </Link>
          <div className="flex items-center">
            <p className="font-sentence text-[#D434FE] text-xs mr-4 ">
              Follow us
            </p>
            <img className="mr-2" src={instagram} alt="instgram logo" />
            <img className="mr-2" src={x} alt="x logo" />
            <img className="mr-2" src={facebook} alt="facebook logo" />
            <img className="mr-2" src={linkedin} alt="linkedin logo" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-sentence text-[#D434FE] text-sm font-semibold leading-[1.724] mb-2">
            Contact Us
          </p>
          <div className="flex items-start">
            <img className="mr-4" src={phone} alt="" />
            <p className="font-inter md:font-sentence leading-[1.579] text-white text-xs mb-2">
              +234 679 81819
            </p>
          </div>
          <div className="flex items-start">
            <img className="mr-4" src={location} alt="" />
            <p className="font-inter md:font-sentence leading-[1.579] text-white text-xs mb-2">
              27,Alara Street
              <br /> Yaba 100012
              <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className=" font-sentence text-xs text-white">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
