import React from "react";

const TableRow = ({ data, starTask, countClicks, count }) => {
  return (
    <tbody className="bg-white divide-y divide-bb-gray-600">
      {data.map(rowData => (
        <tr key={rowData.code}>
          <td className="px-3 py-4 text-center cursor-pointer whitespace-no-wrap bg-gray-100">
            <i
              className={`transition duration-300 ease-in-out hover:text-blue-500 text-2xl ${
                rowData.status
                  ? "ri-pushpin-fill text-blue-500"
                  : "ri-pushpin-line"
              }`}
              onClick={() => starTask(rowData.code, rowData.status)}
            ></i>
          </td>
          <td className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs cursor-pointer">
            {rowData.url}
          </td>
          <td className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs">
            <a
              href={rowData.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => countClicks(rowData.code)}
            >
              {rowData.short_url}
            </a>
          </td>
          <td className="px-3 py-4 text-sm text-center font-medium leading-5 whitespace-no-wrap bg-gray-100">
            {count}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
