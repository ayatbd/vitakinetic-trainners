"use client";
import { useState, useRef, useEffect } from "react";
import {
  MdSearch,
  MdMenu,
  MdEmail,
  MdNotifications,
  MdPerson,
  MdDashboard,
  MdArticle,
  MdSchedule,
  MdLogout,
} from "react-icons/md";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <header className="z-50 bg-[#f7f6f9] sticky top-0 px-6 pt-4">
      <div className="flex flex-wrap items-center px-6 py-2 bg-white shadow-md min-h-14 rounded-md w-full relative tracking-wide">
        {/* Mobile Toggle Button */}
        <button onClick={toggleSidebar} className="lg:hidden mr-4">
          <MdMenu size={26} />
        </button>

        <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full lg:w-auto flex-1">
          {/* Search Bar */}
          <div className="flex items-center gap-4 py-1 outline-none border-none flex-1 lg:max-w-md">
            <MdSearch size={22} className="text-gray-400 cursor-pointer" />
            <input
              type="text"
              placeholder="Search something..."
              className="w-full text-sm bg-transparent rounded outline-none"
            />
          </div>

          <div className="flex items-center gap-8 ml-auto">
            {/* Action Icons */}
            <div className="flex items-center space-x-6">
              <MdEmail
                size={20}
                className="cursor-pointer text-slate-800 hover:text-[#077bff] transition-colors"
              />
              <MdNotifications
                size={20}
                className="cursor-pointer text-slate-800 hover:text-[#077bff] transition-colors"
              />
              <MdPerson
                size={20}
                className="cursor-pointer text-slate-800 hover:text-[#077bff] transition-colors"
              />
            </div>

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <img
                src="https://readymadeui.com/team-1.webp"
                alt="profile-pic"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer object-cover"
              />

              {dropdownOpen && (
                <div className="shadow-md p-2 bg-white rounded-md absolute top-12 right-0 w-56 z-[100]">
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="#"
                        className="text-[15px] text-slate-800 font-medium flex items-center p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        <MdPerson className="mr-3 w-5 h-5" /> Account
                      </a>
                    </li>
                    <hr className="border-gray-200" />
                    <li>
                      <a
                        href="#"
                        className="text-[15px] text-slate-800 font-medium flex items-center p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        <MdDashboard className="mr-3 w-5 h-5" /> Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[15px] text-slate-800 font-medium flex items-center p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        <MdArticle className="mr-3 w-5 h-5" /> Posts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[15px] text-slate-800 font-medium flex items-center p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        <MdSchedule className="mr-3 w-5 h-5" /> Schedules
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[15px] text-slate-800 font-medium flex items-center p-2 rounded-md hover:bg-gray-100 transition"
                      >
                        <MdLogout className="mr-3 w-5 h-5" /> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
