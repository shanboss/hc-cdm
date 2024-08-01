"use client";
import React, { useState } from "react";
import { FolderIcon, FileIcon, OpenFolderIcon } from "./icons";
import fileSystem from "@/app/fileSystem";
import FilePreview from "./FilePreview";
interface FileSystemItem {
  name: string;
  type: "folder" | "file";
  description?: string;
  tables?: string[];
  referencedBy?: string[];
  erd?: string;
  children?: FileSystemItem[];
}
interface FileNavigatorProps {}

const FileNavigator: React.FC<FileNavigatorProps> = () => {
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [selectedResource, setSelectedResource] =
    useState<FileSystemItem | null>(null);

  const handleToggle = (folderName: string) => {
    setOpenFolders((prevOpenFolders) => ({
      ...prevOpenFolders,
      [folderName]: !prevOpenFolders[folderName],
    }));
  };

  const handleFileSelect = (fileName: string, resource: FileSystemItem) => {
    setSelectedDocument(fileName);
    setSelectedResource(resource);
  };

  const renderItems = (items: FileSystemItem[]) => {
    return items.map((item, index) => {
      if (item.type === "folder") {
        return (
          <div key={index} className="ml-4">
            <div
              className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-900 transition"
              onClick={() => handleToggle(item.name)}
            >
              {openFolders[item.name] ? <OpenFolderIcon /> : <FolderIcon />}
              <span>{item.name}</span>
            </div>
            {openFolders[item.name] &&
              item.children &&
              renderItems(item.children)}
          </div>
        );
      } else {
        const isSelected = selectedDocument === item.name;
        return (
          <div
            key={index}
            className={`flex items-center p-2 pl-8 border-b border-gray-200 transition cursor-pointer ${
              isSelected ? "bg-gray-900" : "hover:bg-gray-900"
            }`}
            onClick={() => handleFileSelect(item.name, item)}
          >
            <FileIcon
              className={isSelected ? "fill-white stroke-gray-500" : ""}
            />
            <span>{item.name}</span>
          </div>
        );
      }
    });
  };

  return (
    <div className="flex w-full p-4 bg-black rounded-lg shadow-md">
      <div className="w-1/2 p-4">
        <h2 className="text-lg font-semibold text-gray-200">Projects</h2>
        <div className="mt-4">{renderItems(fileSystem)}</div>
      </div>
      <div className="w-1/2 p-4 bg-gray-800 rounded-lg shadow-inner">
        <h2 className="text-lg font-semibold text-gray-200">Document Viewer</h2>
        <div className="mt-4 text-gray-200">
          {selectedDocument ? (
            <FilePreview
              description={
                selectedResource?.description || "No description available."
              }
              tables={selectedResource?.tables || []}
              referencedBy={selectedResource?.referencedBy || []}
              resourceName={selectedDocument}
              erd={selectedResource?.erd || ""}
            />
          ) : (
            <h3>Select a document</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileNavigator;
