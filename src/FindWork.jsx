import React from "react"
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";

const FindWork = () => {

    return (
        <>

             <nav className="fixed w-full z-20 top-0 start-0 pt-4">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 p-4">
                      <Link to="/bluehat" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-10 w-28 md:h-15 md:w-40" alt="Flowbite Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                      </Link>
                      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="w-42 h-10">

                        </div>
            
            
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                          </svg>
                        </button>
                      </div>
                      <div className="items-center h-10 pb-4 justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-regular border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row ">
                          <li>
                            <Link to="/bluehat" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Home</Link>
                          </li>
                          <li>
                            <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Worker</a>
                          </li>
                          <li>
                            <Link to="/findwork" className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-sky-500 md:p-0  " aria-current="page">Find Work</Link>
                          </li>
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


        </>
    );

}

export default FindWork