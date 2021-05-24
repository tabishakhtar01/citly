import React from "react";

const TableRow = ({ data, starUrl, countClicks }) => {
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
              onClick={() => starUrl(rowData.code, rowData.status)}
            ></i>
          </td>
          <td className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs cursor-pointer">
            {rowData.url}
          </td>
          <td
            className="px-6 py-3 text-sm break-all font-medium leading-5 max-w-xs"
            onClick={countClicks}
          >
            <a
              href={rowData.short_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rowData.short_url}
            </a>
          </td>
          <td className="px-3 py-4 text-sm text-center font-medium leading-5 whitespace-no-wrap text-gray-600 bg-gray-100">
            {Math.ceil(rowData.count / 2)}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
