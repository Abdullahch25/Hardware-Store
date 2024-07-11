import React from "react";
import img from "../Assets/aboutimg.jpg";
const About = () => {
  return (
    <div>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img src={img} alt="" className="rounded-lg" />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
                Hardware Hub: Built Tough, Built to Last
              </h2>
              <p class="mt-6 text-gray-600">
                We're not your average hardware store. Since 2010, Hardware Hub
                has been the go-to destination for pros and DIY warriors alike.
                We've earned the title of #1 hardware store in Delaware for 3
                years straight, and that's no fluke.
              </p>
              <h2 class="text-lg text-gray-900 font-bold md:text-2xl">
                Here's the Hub difference:
              </h2>
              <p class="mt-4 text-gray-600">
                We stock the toughest tools and materials built to endure, so
                your project goes down in one round, not twelve. Our expert crew
                isn't just friendly faces; they're veterans ready to strategize
                and troubleshoot anything your project throws your way. Plus,
                our prices won't knock you out – they're competitive, so you can
                focus on getting the job done, not breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Testimonial Section */}
      <div class="container mx-auto px-6 mt-16 h-80vh  ">
        <h2 class="text-2xl text-gray-900 font-bold mb-6">
          What Our Customers Say
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Four Testimonial Components */}
          <div class="p-6 bg-gradient-to-tl from-blue-300 to-sky-500   hover:shadow-[9px_0px_14px_0px_#a0aec0] border rounded-lg   transition duration-200 ease-in-out">
            <p class="text-gray-600">
              "Hardware Hub is my go-to for all my DIY projects. They have
              everything I need and the staff is always super helpful!"
            </p>
            <p class="text-gray-900 font-bold mt-4">- John Smith</p>
          </div>
          <div class="p-6  bg-gradient-to-bl from-blue-300 to-sky-200 border rounded-lg hover:shadow-[9px_0px_14px_0px_#a0aec0] shadow-xl transition duration-200 ease-in-out">
            <p class="text-gray-600">
              "I highly recommend Hardware Hub! They saved the day when I needed
              a specific tool for my project."
            </p>
            <p class="text-gray-900 font-bold mt-4">- Jane Doe</p>
          </div>
          <div class="p-6 from bg-gradient-to-br from-blue-300 to-sky-200 border rounded-lg shadow-lg hover:shadow-[9px_0px_14px_0px_#a0aec0] transition duration-200 ease-in-out">
            <p class="text-gray-600">
              "The staff at Hardware Hub are incredibly knowledgeable and always
              willing to lend a helping hand. They helped me find the perfect
              tools for my renovation project."
            </p>
            <p class="text-gray-900 font-bold mt-4">- Michael Lee</p>
          </div>
          <div class="p-6 border from bg-gradient-to-tr from-blue-300 to-sky-500 rounded-lg shadow-lg hover:shadow-[9px_0px_14px_0px_#a0aec0] transition duration-200 ease-in-out">
            <p class="text-gray-600">
              "Hardware Hub has a wide selection of high-quality products at
              competitive prices. I won't shop anywhere else for my hardware
              needs."
            </p>
            <p class="text-gray-900 font-bold mt-4">- Sarah Jones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
