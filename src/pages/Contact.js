import React from "react";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import x from "../assets/x.svg";
import instagram from "../assets/instagram.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="px-7 pt-16 md:p-24 mt-16 flex flex-col md:flex-row items-center justify-center bg-[#150E28]">
      <div className="info hidden md:block w-2/5">
        <h3 className="font-title font-semibold text-[#D434FE] text-xl md:text-[2rem] mb-2">
          Get in touch
        </h3>
        <p className="font-sentence text-base text-white mb-2">
          Contact
          <br /> Information
        </p>
        <p className="font-sentence text-base text-white mb-2">
          27,Alara Street
          <br /> Yaba 100012
          <br /> Lagos State
        </p>
        <p className="font-sentence text-base text-white mb-2">
          Call Us: 07067981819
        </p>
        <p className="font-sentence text-base text-white mb-2">
          we are open from Monday-Friday
          <br /> 08:00am - 05:00pm
        </p>
        <p className="font-sentence text-base text-[#D434FE]">Share on</p>
        <div className="flex">
          <img className="mr-2" src={instagram} alt="instgram logo" />
          <img className="mr-2" src={x} alt="x logo" />
          <img className="mr-2" src={facebook} alt="facebook logo" />
          <img className="mr-2" src={linkedin} alt="linkedin logo" />
        </div>
      </div>
      <form
        className="form flex flex-col md:p-12 pt-0 w-full md:w-2/5 rounded"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <p className="font-title font-semibold text-[#D434FE] mb-4">
          Questions or need assistance?
          <br />
          Let us know about it!
        </p>
        <p className="font-sentence text-xs text-white mb-4">
          Email us below to any question related to our event
        </p>
        <input
          {...register("First Name", { required: true })}
          type="text"
          className="w-full mb-4 p-2 rounded"
          placeholder="First Name"
        />
        <input
          {...register("mail", { required: true })}
          type="text"
          className="w-full mb-4 p-2 rounded"
          placeholder="Mail"
        />
        <textarea
          {...register("message", { required: true })}
          className="w-full mb-4 p-2 rounded"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button
          className="text-white bg-gradient-to-r from-[#FE34B9] to-[#903AFF] px-12 py-3 rounded w-2/5 mx-auto"
          type="submit"
        >
          Submit
        </button>
        <div className="md:hidden text-center flex flex-col mt-12">
          <p className="font-sentence text-base text-[#D434FE] mb-8">
            Share on
          </p>
          <div className="flex items-center justify-between w-1/2 text-center mx-auto">
            <img className="" src={instagram} alt="instgram logo" />
            <img className="" src={x} alt="x logo" />
            <img className="" src={facebook} alt="facebook logo" />
            <img className="" src={linkedin} alt="linkedin logo" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
