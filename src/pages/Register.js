import React from "react";
import graphicDesigner from "../assets/graphic-designer.svg";
import partOfMove from "../assets/register page/part-of-move.svg";
import star1Mobile from "../assets/register page/mobile/star1.svg";
import star2Mobile from "../assets/register page/mobile/star2.svg";
import star3Mobile from "../assets/register page/mobile/star3.svg";
import star1 from "../assets/register page/star1.svg";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="px-12 py-8 md:p-16 mt-8 flex flex-col md:flex-row items-stretch justify-center bg-[#150E28]">
      <h3 className="font-title font-bold text-[0.9375rem] text-[#D434FE] sm:hidden">
        Register
      </h3>
      <div className="img-container relative">
        <img src={graphicDesigner} alt="" className="relative" />
        <img src={star1} alt="" className="absolute hidden sm:block top-0" />
        <img
          src={star1Mobile}
          alt=""
          className="absolute right-11 bottom-80 sm:hidden"
        />
      </div>
      <form
        className="flex flex-col md:w-1/2"
        onSubmit={handleSubmit(async (data) => {
          try {
            const res = await fetch(
              "https://backend.getlinked.ai/hackathon/registration",
              {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: data,
              }
            );

            const resData = await res.json();

            console.log(resData);
            console.log(errors);
            console.log("yes i ran successfully");
          } catch (err) {
            console.log(err.message);
          }
        })}
      >
        <h3 className="font-title font-semibold text-[2rem] text-[#D434FE] hidden sm:block">
          Register
        </h3>
        <img src={partOfMove} alt="" className="w-full mb-4 sm:hidden" />
        <p className="text-2xl font-sentence uppercase text-white mb-6">
          CREATE YOUR ACCOUNT
        </p>
        <div className="flex flex-wrap justify-between relative">
          <img
            src={star3Mobile}
            alt=""
            className="absolute bottom-40 -right-5 sm:hidden"
          />
          <div className="input-container relative flex flex-col w-full sm:w-2/5 mb-4">
            <img
              src={star2Mobile}
              alt=""
              className="sm:hidden absolute -left-5 top-5"
            />
            <label
              className="text-white text-[0.8125rem] sm:text-sm font-sentence mb-2"
              htmlFor="team-name"
            >
              Team's Name
            </label>
            <input
              id="team-name"
              {...register("team_name", { required: true })}
              type="text"
              className="py-2 px-6 rounded border-white"
              placeholder="Enter the name of your group"
            />
          </div>
          <div className="input-container flex flex-col w-full sm:w-2/5 mb-4">
            <label
              className="text-white text-[0.8125rem] sm:text-sm font-sentence mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              {...register("phone_number", { required: true })}
              type="numeric"
              className="py-2 px-6 rounded border-white"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="input-container flex flex-col w-full sm:w-2/5 mb-4">
            <label
              className="text-white text-[0.8125rem] sm:text-sm font-sentence mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              type="email"
              className="py-2 px-6 rounded border-white"
              placeholder="Enter your email address"
            />
          </div>
          <div className="input-container flex flex-col w-full sm:w-2/5 mb-4">
            <label
              className="text-white text-[0.8125rem] sm:text-sm font-sentence mb-2"
              htmlFor="project-topic"
            >
              Project Topic
            </label>
            <input
              id="project-topic"
              {...register("project-topic", { required: true })}
              type="text"
              className="py-2 px-6 rounded border-white"
              placeholder="What is your group project topic"
            />
          </div>
          <div className="input-container flex flex-col w-2/3 sm:w-2/5 mb-4">
            <label
              htmlFor="group size"
              className="mb-2 text-white text-[0.8125rem] sm:text-sm"
            >
              Select your category
            </label>
            <select
              id="category"
              {...register("category", { required: true })}
              className="p-2 rounded"
            >
              <option defaultValue>Select your category</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="input-container flex flex-col w-1/4 sm:w-2/5 mb-4">
            <label
              htmlFor="categories"
              className="mb-2 text-white text-[0.8125rem] sm:text-sm"
            >
              Group Size
            </label>
            <select
              id="categories"
              {...register("group_size", { required: true })}
              className="py-2 rounded"
            >
              <option defaultValue>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <p className="text-[#ff26b9] text-[0.5625rem] sm:text-xs font-sentence italic mb-4">
            Please review your registration details before submitting
          </p>
          <div className="mb-4 flex items-start sm:items-center">
            <input
              type="checkbox"
              {...register("privacy_policy", { required: true })}
              className="mr-2"
            />
            <p className="text-white font-sentence text-[0.625rem] sm:text-xs inline">
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <button
            className="w-2/4 sm:w-full mx-auto font-sentence text-base text-white bg-gradient-to-r from-[#FE34B9] to-[#903AFF] px-12 py-3 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
