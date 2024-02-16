import React from "react";
import './QualityTips.css'

const WaterQualityTips = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="my-5 text-xl font-bold">Tips for Ensuring Water Quality</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[5rem]">
        <div className="sm:w-1/2">
          <h1 className="mb-2 font-semibold">1. Monitoring</h1>
          <ul className="max-w-md space-y-1 italic text-justify list-disc list-inside opacity-70">
            <li>Regularly test water quality for pH, turbidity, and chlorine levels.</li>
            <li>Keep an eye on any changes in water color or odor.</li>
            <li>
              Ensure that water treatment equipment is well-maintained and functioning correctly.
            </li>
          </ul>
        </div>

        <img
          className="w-full sm:w-[25rem] rounded-md mt-5 sm:mt-0"
          src="https://yourimageurl.com"  // Replace with an appropriate image URL
          alt=""
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[5rem] mt-10">
        <img
          className="w-full sm:w-[25rem] rounded-md showOn-Desk"
          src="https://yourimageurl.com"  // Replace with an appropriate image URL
          alt=""
        />
        <div className="sm:w-1/2">
          <h1 className="mb-2 font-semibold">2. Treatment</h1>
          <ul className="max-w-md space-y-1 italic text-justify list-disc list-inside opacity-70">
            <li>
              Ensure that water treatment processes meet local regulations and standards.
            </li>
            <li>
              Regularly inspect and clean water filters and purification systems.
            </li>
            <li>
              Follow recommended procedures for adding and monitoring disinfectants.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[5rem] mt-10">
        <div className="sm:w-1/2">
          <h1 className="mb-2 font-semibold">3. Source Protection</h1>
          <ul className="max-w-md space-y-1 italic text-justify list-disc list-inside opacity-70">
            <li>
              Prevent contamination of water sources by keeping them free from pollutants.
            </li>
            <li>
              Be aware of potential sources of water pollution in your surroundings.
            </li>
            <li>
              Report any unusual changes in water quality to local authorities.
            </li>
          </ul>
        </div>
        <img
          className="w-full sm:w-[25rem] rounded-md mt-5 sm:mt-0"
          src="https://yourimageurl.com"  // Replace with an appropriate image URL
          alt=""
        />
      </div>
      <a
        href="https://youradditionallink.com"  // Replace with an appropriate external link
        target="_blank"
        className="mt-5 text-2xl text-gray-400 cursor-pointer opacity-70"
      >
        Read more
      </a>
    </div>
  );
};

export default WaterQualityTips;
