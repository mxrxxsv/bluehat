import React, { useState, useRef, useEffect } from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";

const FindWork = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const buttonRefs = useRef({});
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

    const toggleDropdown = (key) => {
        setDropdownOpen((prev) => (prev === key ? null : key));
    };

    useEffect(() => {
        if (dropdownOpen && buttonRefs.current[dropdownOpen]) {
            const rect = buttonRefs.current[dropdownOpen].getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + window.scrollY + 8,
                left: rect.left + window.scrollX,
            });
        }
    }, [dropdownOpen]);

    return (
        <>
            <nav className="fixed w-full z-20 top-0 start-0 pt-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 p-4">
                    <Link to="/bluehat" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-10 w-28 md:h-15 md:w-40" alt="Flowbite Logo" />
                    </Link>
                    <div className="flex md:items-center md:space-x-4 md:order-2">
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-end h-10 pb-1.5 justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 md:flex-row bg-[#f4f6f6]">
                            <li><Link to="/bluehat" className="block py-2 px-3 hover:text-sky-500">Home</Link></li>
                            <li><a href="#" className="block py-2 px-3 hover:text-sky-500">Find Worker</a></li>
                            <li><Link to="/findwork" className="block py-2 px-3 text-sky-500" aria-current="page">Find Work</Link></li>
                            <li><a href="#" className="block py-2 px-3 hover:text-sky-500">Advertisement</a></li>
                            <li><a href="#" className="block py-2 px-3 hover:text-sky-500">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <form className="mt-25 mx-5 md:mt-30 md:mx-80">
                <label htmlFor="default-search" className="sr-only">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 border border-[#89A8B2] rounded-[30px] bg-white" placeholder="Search Jobs" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#55b3f3] rounded-[20px] px-4 py-2">Search</button>
                </div>
            </form>

            <div className="relative">
                <div className="flex flex-row overflow-auto scrollbar-hide whitespace-nowrap snap-x snap-mandatory mx-5 mt-4 md:mx-80 md:my-8 gap-2">
                    {["Location", "Job Type", "Industry", "Requirement", "Salary"].map((filter) => (
                        <div key={filter} className="relative">
                            <button 
                                ref={(el) => (buttonRefs.current[filter] = el)}
                                onClick={() => toggleDropdown(filter)}
                                className="bg-white hover:bg-[#f6f6f6] rounded-[20px] px-5 py-2.5 border border-[#89A8B2] flex items-center">
                                {filter}
                                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {dropdownOpen && (
                    <div
                        className="fixed w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-50"
                        style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                    >
                        <ul className="py-2 text-sm">
                            {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                                <li key={index}>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">{option}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default FindWork;
