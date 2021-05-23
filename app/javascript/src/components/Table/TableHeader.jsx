import React from "react";
import { compose, head, join, juxt, tail, toUpper } from "ramda";

const TableHeader = () => {
  return (
    <thead>
      <tr className="bg-blue-500">
        {/* <th className="w-1"></th> */}
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-white  uppercase"
        >
          Inserted Url
        </th>
        <th
          className="px-6 py-3 text-sm font-bold leading-4 tracking-wider
        text-left text-white uppercase"
        >
          Shorted Url
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
