import React from "react";
import BackgroundDesign from "./BackgroundDesign";

const CallToAction = () => {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <BackgroundDesign />
      </div>
      <div className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <p className="text-3xl text-white sm:text-4xl">
            {" "}
            Get your first tips today
          </p>

          <p className="mt-4 text-lg text-gray-300">
            It takes 30 seconds to sign up. Download the app and create an
            account today and we will send you a tip guaranteed to double your
            first investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
