"use client";
import React, { useState } from "react";
import { queries } from "./queries"; // Adjust the path as necessary
import { ArrowIcon } from "@/components/icons";
import SqlInput from "@/components/SQLEditorComponents/SQLEditorBox";
import JsonTable from "@/components/SQLEditorComponents/JSONtoTable";

const Page: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedQuery, setSelectedQuery] = useState<string>("");
  const [selectedTitle, setSelectedTitle] = useState<string>("Untitled Script");
  const [output, setOutput] = useState<Record<string, any>[]>([]);

  const handleQueryClick = (query: string, title: string) => {
    setSelectedQuery(query);
    setSelectedTitle(title);
  };

  const handleRunQuery = () => {
    const currentQuery = queries.find((q) => q.query === selectedQuery);
    if (currentQuery) {
      setOutput(currentQuery.queryOutput);
    }
  };

  return (
    <div>
      <div className="text-2xl mb-4 font-bold">Query Editor</div>
      {/* Row 1 */}
      <div className="flex flex-row gap-x-2">
        {/* Recent Queries */}
        <div className="text-xl font-bold bg-gray-800 p-4 rounded-md w-1/3">
          Recent Queries
          <ul className="rounded-lg p-2 mt-7 font-normal">
            {queries.map((item) => (
              <li
                key={item.id}
                className="mb-2 border-b border-gray-500 hover:bg-gray-500 duration-200 rounded-md p-3 flex items-center justify-between cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleQueryClick(item.query, item.name)}
              >
                <h2 className="text-lg">{item.name}</h2>
                {hoveredItem === item.id && <ArrowIcon />}
              </li>
            ))}
          </ul>
        </div>
        {/* Query Preview */}
        <div className="text-xl font-bold bg-gray-800 p-3 rounded-md w-2/3">
          <SqlInput
            query={selectedQuery}
            scriptName={selectedTitle}
            onQueryChange={setSelectedQuery}
            onScriptNameChange={setSelectedTitle}
            onRunQuery={handleRunQuery}
          />
        </div>
      </div>
      {/* Output */}
      <div className="text-xl font-bold bg-gray-800 p-4 rounded-md w-full mt-4">
        Output
        <JsonTable data={output} />
        Raw JSON Output
        <textarea
          id="sql-output"
          name="sql-output"
          rows={10}
          className="block w-full p-3 mt-4 font-mono text-sm border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm min-h-40"
          placeholder="Your Output will appear here"
          value={JSON.stringify(output, null, 2)}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default Page;
