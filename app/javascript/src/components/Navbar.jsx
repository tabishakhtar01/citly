import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-end">
            <a
              className="inline-flex items-center px-1 pt-1 text-2xl
             font-semibold leading-5 text-bb-gray-600 text-opacity-50
             transition duration-150 ease-in-out border-b-2
             border-transparent hover:text-bb-gray-600 focus:outline-none
             focus:text-bb-gray-700 cursor-pointer"
            >
              Citly
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
