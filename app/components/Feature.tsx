import React from "react";
import DesktopView, { FeatureMobile } from "./DesktopView";

const Feature = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-32  ">
      <div className="max-w-screen-xl mx-auto px-4   sm:px-6 lg:px-8 ">
        <div>
          <p className="text-2xl tracking-tight font-medium text-white ">
            All the tools you need to succeed. Experience it firsthand and see
            the difference for yourself.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            SmartVest was designed for bold investors like you who carve their
            own path and refuse to let traditional barriers stand in the way of
            success. If others shy away from creating it, Investa delivers it.
          </p>
        </div>
        <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
          <DesktopView />
        </div>
        <div className="mt-16 md:hidden">
          <FeatureMobile />
        </div>
      </div>
    </section>
  );
};

export default Feature;
