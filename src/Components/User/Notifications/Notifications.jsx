import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Notifications = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div class="h-screen grid place-items-center my-8 ">
        <div class="w-[80%]  mx-auto ">
          <div class="inline-flex items-center justify-between w-full">
            <h3 class="font-bold text-xl sm:text-2xl text-gray-800">
              Notifications
            </h3>
            
          </div>
          <p class="mt-8 font-medium text-gray-800 text-sm sm:text-base ">
            Today
          </p>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full shadow-md">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                  alt="Training Icon"
                  class="w-6 h-6 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">Training</h3>
              </div>
              <p class="text-xs text-gray-500">2 min ago</p>
            </div>
            <p class="mt-1 text-sm">
              Hey! Do you remember about choosing your training regime?
            </p>
          </div>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full shadow-md">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/893/893257.png"
                  alt="Messages Icon"
                  class="w-6 h-6 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">Messages</h3>
              </div>
              <p class="text-xs text-gray-500">1 hour ago</p>
            </div>
            <p class="mt-1 text-sm">You have a new message</p>
          </div>
          <p class="mt-8 font-medium text-gray-800  text-sm sm:text-base">
            Yesterday
          </p>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full shadow-md">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6863/6863272.png"
                  alt="Form Icon"
                  class="w-6 h-6 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">Forms</h3>
              </div>
              <p class="text-xs text-gray-500">12:47</p>
            </div>
            <p class="mt-1 text-sm">
              Remember about filling out the COVID-19 from before the next
              appointment tomorrow
            </p>
          </div>
          <div class="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full shadow-md">
            <div class=" inline-flex items-center justify-between w-full">
              <div class="inline-flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/763/763812.png"
                  alt="Training Icon"
                  class="w-6 h-6 mr-3"
                />
                <h3 class="font-bold text-base text-gray-800">Training</h3>
              </div>
              <p class="text-xs text-gray-500">12:43</p>
            </div>
            <p class="mt-1 text-sm">
              We're glad you've decided to use our training system! Let's now
              set a complete of things
            </p>
          </div>
         
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Notifications;
