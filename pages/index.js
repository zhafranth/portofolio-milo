import React from "react";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";

const Navbar = dynamic(() => import("../components/Navbar"));

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default index;
