import React from "react";

const TailwindTrial = () => {
  return (
    <>
      <div className="grid grid-cols-5 divide-x divide-yellow-500 text-center">
        <h1 className="">My name is Tabish Akhtar</h1>
        <h1 className="font-sans">My name is Tabish Akhtar</h1>
        <h1 className="font-serif">My name is Tabish Akhtar</h1>
        <h1 className="tracking-tighter">My name is Tabish Akhtar</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className=" border placeholder-gray-500"
        />
      </div>
    </>
  );
};

export default TailwindTrial;

//tracking-tighter : for tighting the letter spacing
//leading-snug : for line heights
//
