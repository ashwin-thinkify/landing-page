import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Huge Global Network of Fast VPN{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
          <div className="py-12 w-full px-8 mt-16">
            {/* <img src={Maps} className="w-full h-auto" /> */}
          </div>
          <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            {/* <Netflix className="h-18 w-auto" /> */}
            <img
              src="/assets/appsmith.png"
              className="h-14 w-32 mt-4 lg:mt-2 object-contain"
              alt=""
            />
            <img
              src="/assets/swiggy.jpeg"
              className="h-14 w-32 mt-2 lg:mt-0  object-contain"
              alt=""
            />
            <img
              src="/assets/thoughtSpot.png"
              className="h-12 w-32 mt-2 lg:mt-0  object-contain"
              alt=""
            />
            <img
              src="/assets/nestaway.png"
              className="h-14 w-32 mt-2 lg:mt-0  object-contain"
              alt=""
            />
            <img
              src="/assets/meesho.png"
              className="h-12 w-32 mt-2 lg:mt-0  object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Trusted by Thousands of Happy Customer{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Apply for <br /> Multiple companies!
                </h5>
                <p>Let's help you reach better companies.</p>
              </div>
              <ButtonPrimary>Apply with us</ButtonPrimary>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
