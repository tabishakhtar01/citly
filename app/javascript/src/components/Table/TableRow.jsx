import React from "react";

const TableRow = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.code}>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            {rowData.url}
          </td>
          <td
            className="px-6 py-4 text-sm font-medium
            leading-5 text-bb-gray whitespace-no-wrap"
          >
            <a href={rowData.short_url} target="_blank" rel="noreferrer">
              {rowData.short_url}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableRow;
