import Image from "next/image";
import React from "react";
import ExtraLogos from "./ExtraLogos";

const Hero = () => {
  return (
    <section
      id="Home"
      className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
          <p className="text-4xl tracking-tight font-medium text-gray-900 text-center">
            Start Your Investment Journey Today With SmartVest
          </p>
          <p className="mt-6 text-lg text-gray-600">
            By tapping into the expertise of our network of industry
            professionals, you'll gain precise guidance on when to make
            strategic purchases for maximum profit and when to sell to safeguard
            against significant losses.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
            <Image
              src="/playStore.png"
              alt="playstore"
              className="w-32 h-auto"
              width={32}
              height={20}
              unoptimized
            />
          </div>
        </div>
        <div></div>
        <ExtraLogos />
      </div>
    </section>
  );
};

export default Hero;
