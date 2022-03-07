import React from "react";

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <img
              src="/assets/two.svg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-full">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Acceletate with Technology.
          </h3>
          <ul className="text-black-500 self-center list-inside ml-8 text-center mt-4">
            <li className="relative circle-check custom-list">
              Managed services.
            </li>
            <li className="relative circle-check custom-list">
              Staff augmentation.
            </li>
            <li className="relative circle-check custom-list">
              Interview as a Service.
            </li>
            <li className="relative circle-check custom-list">
               India office Setup.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
