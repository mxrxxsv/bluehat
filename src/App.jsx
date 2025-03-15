import { useState } from 'react';
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import logo from './assets/BlueHat_logo.png';
import './App.css';
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 pt-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-10 w-28 md:h-15 md:w-40" alt="Flowbite Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className='hidden md:block text-black mr-4 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center'>Log in</button>
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button> */}
            <Link
              to="/singnup"
              className="text-white bg-sky-500 hover:bg-[#ADD8F5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[10px] text-sm px-4 py-2"
            >
              Sign up
            </Link>


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
                <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-sky-500 md:p-0 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Worker</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Work</a>
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

      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute bg-[#b8def79e] rounded-full 
                w-[130vw] h-[130vw] -left-[45vw] -top-[10vw] 
                md:w-[72vw] md:h-[72vw] md:-left-[20vw] md:-top-[25vw] ">
        </div>

        <div className="absolute bg-[#81c5f39e] rounded-full z-0
                w-[80vw] h-[80vw] left-[52vw] -top-[10vw] rotate-[1.14deg] 
                md:w-[83vw] md:h-[83vw] md:left-[23vw] md:-top-[55vw] ">
        </div>

        <p className='text-start text-[#252525] opacity-85 absolute z-10 font-semibold
                  -top-[-55vw] pl-6  text-[38px] w-80
                  md:-top-[-17vw] md:pl-24 md:text-[64px]  md:w-150' >
          We connect skilled worker to help you
        </p>



        <p className='text-start text-[#252525] absolute font-light
                      -top-[-130vw] pl-6 w-80 text-[20px]
                      md:-top-[-30vw] md:left-[100vh] md:pl-24 md:w-120'>
          Find high quality talent or open jobs that keep you in control.
        </p>

        <p className='text-start text-[#252525] absolute font-light opacity-80
                      -top-[-150vw] pl-6 w-80 text-[18px]
                      md:-top-[-35vw] md:left-[100vh] md:pl-24 md:w-120'>
          I'm looking for
        </p>
        
        <Link className='absolute h-13 w-90 bg-[#FFFFFF] border-2 border-solid rounded-[20px] text-start pt-3 pl-4 shadow-md border-[#89A8B2] opacity-80
                           -top-[-160vw] left-[5vw]
                           md:-top-[-38vw] md:left-[53.5vw] '>
          Any Worker Field <span className='ml-45'>⋮</span>
        </Link>

      </div>

    </>
  )
}

export default App
