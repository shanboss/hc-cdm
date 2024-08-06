"use client";
import React from "react";

interface SqlInputProps {
  query: string;
  scriptName: string;
  onQueryChange: (query: string) => void;
  onScriptNameChange: (scriptName: string) => void;
  onRunQuery: () => void;
}

const SqlInput: React.FC<SqlInputProps> = ({
  query,
  scriptName,
  onQueryChange,
  onScriptNameChange,
  onRunQuery,
}) => {
  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onQueryChange(event.target.value);
  };

  const handleScriptNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onScriptNameChange(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          id="script-name"
          name="script-name"
          value={scriptName}
          onChange={handleScriptNameChange}
          className="block w-full p-2 font-mono text-sm border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
          placeholder="Untitled Script"
        />
      </div>
      <div className="mt-2 relative rounded-md shadow-sm">
        <textarea
          id="sql-input"
          name="sql-input"
          rows={10}
          className="block w-full p-3 font-mono text-sm border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm min-h-40"
          placeholder="Enter your SQL query here..."
          value={query}
          onChange={handleQueryChange}
        ></textarea>
      </div>
      <div className="flex justify-end mt-2 gap-x-2">
        <button
          type="button"
          onClick={onRunQuery}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-200"
        >
          Save to local
        </button>
        <button
          type="button"
          onClick={onRunQuery}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-200"
        >
          Run Query
        </button>
      </div>
    </div>
  );
};

export default SqlInput;
