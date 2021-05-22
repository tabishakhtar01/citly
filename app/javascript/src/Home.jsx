import React from "react";

const Home = props => {
  return (
    <>
      <div className="m-20 realtive content-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <input
            className=" justify-center block w-full px-3 py-2 placeholder-gray-400
          transition duration-150 ease-in-out border
          border-gray-300 rounded-md appearance-none
          focus:outline-none focus:shadow-outline-blue
          focus:border-blue-300 sm:text-sm sm:leading-5"
            type="text"
            onChange={e => props.onChange(e.target.value)}
            placeholder="Enter The URL To Short.."
            autoComplete="off"
            value={props.data}
          />
          <button
            className="relative flex justify-center w-full px-4 py-2
        text-sm font-medium leading-5 text-white transition duration-150
         ease-in-out bg-bb-purple border border-transparent rounded-md
         group hover:bg-opacity-90 focus:outline-none"
            onClick={props.onClick}
          >
            Short My URL...
          </button>
          <p>{props.data}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
