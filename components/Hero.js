import React from "react";
import Pricing from "./../components/Pricing";


import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: `DevelDriven by experts with proven pedigree
      who are adept across the spectrum who deliver with proven resultsopers`,
      number: "Our Team",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: `Asset-light, Flexible Engagement, Price Sensitive, Customer Centric and Employee-led`,
      number: "Our Mission",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "State of Art practices which are Agile and fail fast to cut down time to market without compromise",
      number: "Technology",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Lets get you hired with <strong>Thinkify</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
          </p>
          <ButtonPrimary>Apply</ButtonPrimary>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <img
              src="/assets/one.svg"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <Pricing />
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex flex-col text-center">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500 mt-1">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
