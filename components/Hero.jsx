import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-36 py-6">
      <div className="w-2/6">
        <h1 className="text-4xl font-bold text-blue-900">
          Hi, I’m a <span className="text-blue-700">Frontend</span> Developer
          based on Bandung
        </h1>
        <p className="my-6">
          Hi, i’m Jason a freelancer web designer from Bandung. I help brands
          turn their ideas high quality products
        </p>
        <button className="px-6 py-2 rounded-full text-white bg-blue-900">
          Hire me
        </button>
      </div>
      <div className="flex">
        <img src="./hero-sample.png" alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
