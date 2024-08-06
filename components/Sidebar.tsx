"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  links: {
    name: string;
    url?: string;
    subLinks?: { name: string; url: string }[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const router = useRouter();

  function handleNav(input: string): void {
    router.push(input);
  }

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4 fixed top-0 left-0 pt-16">
      <ul>
        {links.map((link, index) => (
          <li key={index} className="my-4">
            {link.url ? (
              <a
                className="text-lg hover:underline cursor-pointer"
                onClick={() => handleNav(link.url!)}
              >
                {link.name}
              </a>
            ) : (
              <div>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-lg hover:underline w-full text-left"
                >
                  {link.name}
                </button>
                {openDropdown === index && link.subLinks && (
                  <ul className="pl-4">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex} className="my-2">
                        <a
                          className="text-base hover:underline cursor-pointer"
                          onClick={() => handleNav(subLink.url)}
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
