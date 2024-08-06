import React from "react";

interface DataTableProps {
  data: string[][];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  const headers = data[0];
  const rows = data.slice(1);

  return (
    <div>
      <table className="table-auto border-collapse border border-gray-500 text-sm my-2">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
