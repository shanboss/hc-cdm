"use client";
import React, { useState } from "react";

const SqlInput: React.FC = () => {
  const [query, setQuery] = useState("");
  const [scriptName, setScriptName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScriptName(event.target.value);
  };

  const handleRunQuery = () => {
    // Placeholder for running the query
    console.log("Running query:", query);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          id="script-name"
          name="script-name"
          value={scriptName}
          onChange={handleNameChange}
          className="block w-full p-2 font-mono text-sm border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
          placeholder="Untitled Script"
          style={{ resize: "none" }}
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
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="flex justify-end mt-2 gap-x-2">
        <button
          type="button"
          onClick={handleRunQuery}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-200"
        >
          Save to local
        </button>
        <button
          type="button"
          onClick={handleRunQuery}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 duration-200"
        >
          Run Query
        </button>
      </div>
    </div>
  );
};

export default SqlInput;
