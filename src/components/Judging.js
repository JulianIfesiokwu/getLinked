import React from "react";
import { Link } from "react-router-dom";
import judging from "../assets/judging assets/judging.svg";

const Judging = () => {
  return (
    <div className="judging flex flex-col md:flex-row w-11/12 mx-auto mt-20 gap-12">
      <div className="img-container w-full md:w-1/2">
        <img src={judging} alt="" />
      </div>
      <div className="criteria w-full items-center text-center md:text-start md:w-1/2">
        <h3 className="font-title font-bold text-center md:text-start text-xl md:text-[2rem] text-white leading-[1.33]">
          Judging Criteria
        </h3>
        <h3 className="font-title font-bold text-center md:text-start text-xl md:text-[2rem] text-[#D434FE] leading-[1.33] mb-4">
          Key attributes
        </h3>
        <p className="text-[#FF26B9] text-center md:text-start text-[0.8125] md:text-base font-bold leading-[1.735] mb-4">
          Innovation and Creativity
          <span className="text-white text-xs md:text-sm font-normal font-sentence">
            : Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </span>
        </p>
        <p className="text-[#FF26B9] text-center md:text-start text-[0.8125] md:text-base font-bold leading-[1.735] mb-4">
          Functionality:{"  "}
          <span className="text-white text-xs md:text-sm font-normal font-sentence">
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </span>
        </p>
        <p className="text-[#FF26B9] text-center md:text-start text-[0.8125] md:text-base font-bold leading-[1.735] mb-4">
          Impact and Relevance:{"  "}
          <span className="text-white text-xs md:text-sm font-normal font-sentence">
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </span>
        </p>
        <p className="text-[#FF26B9] text-center md:text-start text-[0.8125] md:text-base font-bold leading-[1.735] mb-4">
          Technical Complexity: {"  "}
          <span className="text-white text-xs md:text-sm font-normal font-sentence">
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </span>
        </p>
        <p className="text-[#FF26B9] text-center md:text-start text-[0.8125] md:text-base font-bold leading-[1.735] mb-12">
          Adherence to Hackathon Rules:{"  "}
          <span className="text-white text-xs md:text-sm font-normal font-sentence">
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </span>
        </p>
        <Link
          to="/register"
          className={`font-inter md:font-sentence text-white text-xs md:text-base md:mb-0 rounded bg-gradient-to-r from-[#FE34B9] to-[#903AFF] px-12  py-3 mx-auto`}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Judging;
