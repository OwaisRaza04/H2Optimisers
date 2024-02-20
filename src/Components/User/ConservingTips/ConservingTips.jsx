import React from "react";
import './ConservingTips.css'

const ConservingTips = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="my-5 text-xl font-bold">Tips for Conserving Water</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[5rem]">
        <div className="sm:w-1/2">
          <h1 className="mb-2 font-semibold">1. Bathrooms</h1>
          <ul className="max-w-md space-y-1 italic text-justify list-disc list-inside opacity-70">
            <li>Never use your toilet as a waste basket.</li>
            <li>Do not let the water run while shaving or brushing teeth.</li>
            <li>
              Take short showers instead of tub baths. Turn off the water flow
              while soaping or shampooing.
            </li>
            <li>
              If you must use a tub, close the drain before turning on the water
              and fill the tub only half full. Bathe small children together.
            </li>
          </ul>
        </div>

        <img
          className="w-full sm:w-[25rem] rounded-md mt-5 sm:mt-0"
          src="https://waterworkplumbing.com/wp-content/uploads/2020/10/how-to-conserve-water.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[5rem] mt-10">
        <img
        
          className="w-full sm:w-[25rem] rounded-md showOn-Desk"
          src="https://media.istockphoto.com/id/1251302072/photo/woman-washing-up-at-home-using-eco-dish-brush-for-sustainable-lifestyle.jpg?s=612x612&w=0&k=20&c=MnG8Q7KamtJrwliYJOCuBc40PjNrZp0eKJzOTycPqBc="
          alt=""
        />
        <div className="sm:w-1/2">
          <h1 className="mb-2 font-semibold">2. Kitchen and Laundry</h1>
          <ul className="max-w-md space-y-1 italic text-justify list-disc list-inside opacity-70">
            <li>
              Keep drinking water in the refrigerator instead of letting the
              faucet run until the water is cool.
            </li>
            <li>
              Wash fruits and vegetables in a basin. Use a vegetable brush.
            </li>
            <li>
              Do not use water to defrost frozen foods, thaw in the refrigerator
              overnight.
            </li>
            <li>Use a dishpan for washing and rinsing dishes.</li>
            <li>
              Scrape, rather than rinse, dishes before loading into the
              dishwasher.
            </li>
          </ul>
        </div>
        <img
          className="w-full sm:w-[25rem] rounded-md showOn-Mob"
          src="https://media.istockphoto.com/id/1251302072/photo/woman-washing-up-at-home-using-eco-dish-brush-for-sustainable-lifestyle.jpg?s=612x612&w=0&k=20&c=MnG8Q7KamtJrwliYJOCuBc40PjNrZp0eKJzOTycPqBc="
          alt=""
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-[5rem] mt-10">
        <div className="sm:w-1/2">
          <h1 className="mb-2 font-semibold">3. Outside</h1>
          <ul className="max-w-md space-y-1 italic text-justify list-disc list-inside opacity-70">
            <li>
              Sweep driveways, sidewalks, and steps rather than hosing off.
            </li>
            <li>
              Wash the car with water from a bucket, or consider using a
              commercial car wash that recycles water.
            </li>
            <li>
              When using a hose, control the flow with an automatic shut-off
              nozzle.
            </li>
            <li>
              Avoid purchasing recreational water toys that require a constant
              stream of water.
            </li>
            <li>
              If you have a swimming pool, consider a new water-saving pool
              filter.
            </li>
          </ul>
        </div>
        <img
          className="w-full sm:w-[25rem] rounded-md mt-5 sm:mt-0"
          src="https://sensibledriver.com/uploads/articles/11-26b356dd168cf065ff94e3e47a63fe23.png"
          alt=""
        />
      </div>
      <a
        href="https://portal.ct.gov/DEEP/Water/Water-Quantity/Tips-for-Conserving-Water"
        target="_blank"
        className="mt-5 text-2xl text-gray-400 cursor-pointer opacity-70"
      >
        Read more
      </a>
    </div>
  );
};

export default ConservingTips;
