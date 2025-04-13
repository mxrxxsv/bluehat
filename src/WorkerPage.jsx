import React, { useState, useRef, useEffect } from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";

const WorkerPage = () => {

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
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <div className="w-15 pt-1 md:pt-0 md:w-43 flex flex-row gap-2 md:gap-2">

                            <button className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#252525" className="size-7 md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                                </svg>
                            </button>

                            <button className="cursor-pointer">
                                <Link to="/chatpage">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#252525" className="size-7 md:size-6 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                </Link>
                            </button>


                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    <div className={`items-center h-0.5 pb-4 justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-regular border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row bg-[#f4f6f6]">
                            <li>
                                <Link to="/bluehat" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Home</Link>
                            </li>
                            <li>
                                <Link to="/findwork" className="block py-2 px-3 text-sky-500  rounded-sm md:bg-transparent md:text-sky-500 md:p-0" aria-current="page">Find Work</Link>
                            </li>
                            {/* <li>
                                <Link to="/findworker" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Worker</Link>
                            </li> */}
                            <li>
                                <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Advertisement</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <form className="mt-25 mx-5 md:mt-30 md:mx-80">
                <label htmlFor="default-search" className="sr-only">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block h-14 w-full md:w-full p-4 pl-4 border border-[#89A8B2] rounded-[30px] bg-white" placeholder="Search Jobs" required />
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
                                className="bg-white hover:bg-[#f6f6f6] rounded-[20px] px-5 py-2.5 border border-[#89A8B2] flex items-center h-10 md:h-12">
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

            <div className="mx-6 md:ml-80">
                <p className="mt-4 text-[24px]">Job's you might like</p>
            </div>

            <div className="mx-6 md:mx-80">
                <hr className="bg-white" />

                <p className="text-[14px] md:text-[14px] pt-2 font-light">1 day ago</p>
                <p className="text-[16px] md:text-[20px] font-normal">Shortage fuse causes power outage sala.</p>

                <p className="text-[12px] md:text-[14px] pt-2 md:pt-4 font-light">Per work: Php500 - Expert - Est. Time: 1 day</p>

                <p className="text-[16px] md:text-[20px] pt-2 md:pt-4 font-normal">I am looking for an electrician that can fix the shorted plug in my sala. </p>

                <div className="mt-2 md:mt-4">
                    <p className="h-6 w-22 md:h-7 md:w-23 bg-[#ADD8F5] text-center border rounded-[10px] border-[#89A8B2] text-[#252525] font-light text-[14px] md:text-[16px]">Electrician</p>
                </div>

                <div className="mt-2 md:mt-4">
                    <p className="text-[14px] font-light"> Kapitan Pepe, Cabanatuan City</p>
                </div>

                <hr className="bg-white mt-2 md:mt-4" />
            </div>

        </>
    );
}

export default WorkerPage;