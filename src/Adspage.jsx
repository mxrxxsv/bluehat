import { useState } from 'react';
import logo from './assets/BlueHat_logo.png';
import './App.css';
import { Link } from "react-router-dom";


const AdsPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <nav className="fixed w-full z-20 top-0 start-0 pt-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 p-2">
                    <Link to="/bluehat" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-15 w-28 md:h-20 md:w-40" alt="Flowbite Logo" />
                    </Link>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        <div className="w-0 md:w-43">

                        </div>
                    </div>

                        <div className={`items-center h-0.5 pb-4 justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-regular border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row bg-[#f4f6f6]">
                                <li>
                                    <Link to="/bluehat" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Home</Link>
                                </li>
                                <li>
                                    <Link to="/findwork" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Work</Link>
                                </li>
                                <li>
                                    <Link to="/findworker" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Worker</Link>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-sky-500  rounded-sm md:bg-transparent md:text-sky-500 md:p-0" aria-current="page">Advertisement</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>

        </>
    );
}

export default AdsPage;

