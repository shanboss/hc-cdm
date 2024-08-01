import React from "react";

interface TableProps {
  resourceSpecificTables: string[];
  commonTables: string[];
}

const TableComponent: React.FC<TableProps> = ({
  resourceSpecificTables,
  commonTables,
}) => {
  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[80vh] max-w-full border border-gray-700 rounded-md shadow-md">
      <table className="min-w-full bg-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-700 bg-gray-800 text-left text-sm font-medium text-gray-100">
              Resource Specific Tables
            </th>
            <th className="px-4 py-2 border-b border-gray-700 bg-gray-800 text-left text-sm font-medium text-gray-100">
              Common Tables
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-top px-4 py-2 text-sm text-white">
              <ul>
                {resourceSpecificTables.map((table, index) => (
                  <li key={index} className="border-b py-2 border-gray-500">
                    {index + 1}. {table}
                  </li>
                ))}
              </ul>
            </td>
            <td className="align-top px-4 py-2 text-sm text-white">
              <ul>
                {commonTables.map((table, index) => (
                  <li className="border-b py-2 border-gray-500" key={index}>
                    {index + 1}. {table}
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
