import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 bg-white flex justify-between items-center px-36 ">
      <img src="./Logo.svg" />
      <div className="flex justify-around items-center gap-x-9">
        <h3 className="cursor-pointer">About</h3>
        <h3 className="cursor-pointer">Skills</h3>
        <h3 className="cursor-pointer">Portofolio</h3>
        <h3 className="cursor-pointer">Contact</h3>
      </div>
    </div>
  );
};

export default Navbar;
