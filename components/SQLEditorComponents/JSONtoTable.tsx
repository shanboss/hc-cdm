import React from "react";
import { JsonTableProps } from "./interfaces";

const JsonTable: React.FC<JsonTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  // Get table headers from keys of the first object
  const headers = Object.keys(data[0]);

  return (
    <table className="table-auto border-collapse border border-neutral-600 w-full text-sm mt-2 bg-neutral-900">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="border border-gray-600 px-4 py-2 rounded-md"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td
                key={colIndex}
                className="border border-neutral-600 px-4 py-2 font-normal rounded-md"
              >
                {row[header] !== undefined ? row[header].toString() : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JsonTable;
