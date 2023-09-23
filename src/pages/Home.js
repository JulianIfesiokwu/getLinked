import React from "react";
import Landing from "../components/Landing";
import Introduction from "../components/Introduction";
import Rules from "../components/Rules";
import Judging from "../components/Judging";
import Faqs from "../components/Faqs";
import Partners from "../components/Partners";
import Timeline from "../components/Timeline";
import Prizes from "../components/Prizes";
import Privacy from "../components/Privacy";

const Home = () => {
  return (
    <section className={`px-7 md:py-24 md:px-0 md:pl-16 flex flex-col bg-home`}>
      <Landing />
      <Introduction />
      <Rules />
      <Judging />
      <Faqs />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
    </section>
  );
};

export default Home;
