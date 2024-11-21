 "use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const DropdownMenu: React.FC<{ isOpen: boolean; toggleDropdown: () => void }> = ({ isOpen, toggleDropdown }) => (
  <div className="relative">
    <button
      className="text-black md:text-white hover:text-gray-300 focus:outline-none"
      onClick={toggleDropdown}
    >
      채용
      <svg
        className="w-4 h-4 inline ml-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {isOpen && (
      <div className="absolute mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-10 text-sm">
        <ul>
          <li>
            <Link href="#" className="block px-4 py-2 text-black hover:bg-gray-100 font-medium">
              채용
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              해외 개발자 원격 채용
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              외국인 원격 채용 (비개발 직군)
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              한국어 가능 외국인 채용
            </Link>
          </li>
        </ul>
      </div>
    )}
  </div>
);

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex shrink-0 items-center">
            <Image src="/images/logo.png" alt="Logo" width="114" height="21" />
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} block w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Dropdown Button */}
          <div className="hidden sm:flex flex-1 justify-center sm:items-stretch sm:justify-center">
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex md:items-center md:space-x-4 bg-white shadow-lg p-4 rounded-md md:bg-transparent md:shadow-none md:p-0 md:relative`}
              ref={dropdownRef}
            >
              <DropdownMenu isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
              <div className="text-black mt-4 md:mt-0 md:text-white">해외 개발자 활용 서비스</div>
            </div>
          </div>

          {/* Right-most Button */}
          <div className="hidden sm:flex absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
            <button className="bg-white hover:bg-slate-200 font-bold text-blue-500 py-1 px-4 rounded hidden md:block">
              문의하기
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-white mx-2">
          <DropdownMenu isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
          <button className="bg-white hover:bg-slate-200 font-bold text-blue-500 py-1 px-4 rounded hidden md:block">
            문의하기
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
