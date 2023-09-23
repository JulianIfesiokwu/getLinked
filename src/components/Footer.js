import React from "react";
import { Link } from "react-router-dom";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram.svg";
import star1Mobile from "../assets/footer/mobile/star1.svg";
import star2Mobile from "../assets/footer/mobile/star2.svg";
import star3Mobile from "../assets/footer/mobile/star3.svg";
import star4Mobile from "../assets/footer/mobile/star4.svg";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-between px-12 py-8 md:px-16 md:mx-auto bg-[#150E28]">
      <div className="flex flex-col md:flex-row justify-between mb-8 w-full">
        <div className="flex flex-col md:flex-row w-full sm:w-full md:w-10/12 mx-auto justify-around">
          <div className="flex flex-col sm:w-3/5 relative">
            <h3 className="font-title font-bold text-white text-xl sm:text-3xl mb-2">
              get<span className="text-[#D434FE]">linked</span>
            </h3>
            <p className="font-sentence text-xs text-white leading-[1.72] mb-8">
              Getlinked Tech Hackathon is a technology innovation program
              <br />
              established by a group of organizations with the aim of showcasing
              <br />
              young and talented individuals in the field of technology
            </p>
            <img
              src={star1Mobile}
              alt=""
              className="absolute -left-5 top-20 sm:hidden"
            />
            <p className="font-sentence text-xs text-white mb-8">
              Terms of use <span className="text-[#D434FE]">|</span> Privacy
              Policy
            </p>
          </div>
          <div className="flex flex-col flex-1 mb-6 relative">
            <p className="font-sentence text-[#D434FE] text-sm font-semibold leading-[1.724] mb-2">
              Useful Links
            </p>
            <a
              href="/#overview"
              className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
            >
              Overview
            </a>
            <a
              href="/#timeline"
              className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
            >
              Timeline
            </a>
            <a
              href="/#faqs"
              className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
            >
              FAQs
            </a>
            <Link
              to="/register"
              className={`font-inter md:font-sentence leading-[1.724] text-white text-xs mb-2`}
            >
              Register
            </Link>
            <img
              src={star2Mobile}
              alt=""
              className="sm:hidden absolute right-40 bottom-20"
            />
            <div className="flex items-center">
              <p className="font-sentence text-[#D434FE] text-xs mr-4 ">
                Follow us
              </p>
              <img className="mr-4" src={instagram} alt="instgram logo" />
              <img className="mr-4" src={x} alt="x logo" />
              <img className="mr-4" src={facebook} alt="facebook logo" />
              <img className="mr-4" src={linkedin} alt="linkedin logo" />
            </div>
          </div>
          <div className="flex flex-col flex-1 mb-6 relative">
            <img
              src={star3Mobile}
              alt=""
              className="sm:hidden absolute right-10 top-20"
            />
            <p className="font-sentence text-[#D434FE] text-sm font-semibold leading-[1.724] mb-4">
              Contact Us
            </p>
            <div className="flex items-start">
              <img className="mr-4" src={phone} alt="" />
              <p className="font-inter md:font-sentence leading-[1.579] text-white text-xs mb-4">
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
      </div>
      <div className="text-center relative">
        <img
          src={star4Mobile}
          alt=""
          className="sm:hidden absolute bottom-10 left-10"
        />
        <p className=" font-sentence text-xs text-white">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
