"use client";
import React, { useRef } from "react";
import TableComponent from "./tableComponent";

interface FilePreviewProps {
  description: string;
  tables: string[];
  referencedBy: string[];
  resourceName: string;
  source: string;
}

const FilePreview: React.FC<FilePreviewProps> = ({
  description,
  tables,
  referencedBy,
  resourceName,
  source,
}) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const tablesRef = useRef<HTMLDivElement>(null);
  const referencedByRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const resourceSpecificTables = tables.filter((table) =>
    table.toLowerCase().includes(resourceName.toLowerCase())
  );
  const commonTables = tables.filter(
    (table) => !table.toLowerCase().includes(resourceName.toLowerCase())
  );

  return (
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h1 className="font-bold text-xl border-b border-gray-300 text-white">
        {resourceName}
      </h1>
      <div className="sticky top-0 flex justify-between border-b border-gray-500 p-2 bg-black">
        <button
          onClick={() => scrollToSection(descriptionRef)}
          className="px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 rounded-md duration-200"
        >
          Description
        </button>

        <button
          onClick={() => scrollToSection(tablesRef)}
          className="px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 rounded-md duration-200"
        >
          Tables
        </button>
        <button
          onClick={() => scrollToSection(referencedByRef)}
          className="px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800 rounded-md duration-200"
        >
          Referenced By
        </button>
      </div>
      <div className="mt-4">
        <div>
          <h2
            className="text-lg font-semibold text-gray-200 "
            ref={descriptionRef}
          >
            Description
          </h2>
          <p className="mt-2 text-gray-400">{description}</p>
          <a
            href={source}
            className="mt-1 text-gray-500 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: {source}
          </a>
        </div>
        <div ref={tablesRef} className="mt-8">
          <h2 className="text-lg font-semibold text-gray-200">Tables</h2>
          <TableComponent
            resourceSpecificTables={resourceSpecificTables}
            commonTables={commonTables}
          />
        </div>
        <div ref={referencedByRef} className="mt-8">
          <h2 className="text-lg font-semibold text-gray-200">Referenced By</h2>
          <ul className="mt-2 text-gray-400 overflow-scroll">
            {referencedBy.map((ref, index) => (
              <li
                className="hover:underline hover:cursor-pointer hover:text-blue-500 duration-100"
                key={index}
              >
                {ref}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
