import React from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import worker from './assets/worker.png';
import client from './assets/client.png';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
    
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pt-8 pl-4">
        <Link to="/bluehat">
        <div className="flex items-center space-x-3">
          <img src={logo} className="h-10 w-28 md:h-15 md:w-40" alt="BlueHat Logo" />
        </div>
        </Link>
      </nav>

      <p className="text-center text-neutral-900 font-semibold pt-8 text-[20px] sm:text-[24px] md:text-3xl lg:text-4xl pt-4 opacity-80">
        Join as a Client or Worker
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-14 px-4">
        
        <Link to="/clientsignup" className="w-80 h-50 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:border-[#89A8B2] hover:border-2">
          <img className="w-10 h-10 text-gray-500 mx-auto mb-3"  src={client} alt="client" />
          <p className="text-[22px] font-medium text-gray-900">
            I’m a client, hiring for a project
          </p>
        </Link>

        <Link to="/workersignup" className="w-80 h-50 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:border-[#89A8B2] hover:border-2">
          <img className="w-10 h-10 text-gray-500 mx-auto mb-3"  src={worker} alt="worker" />
          <p className="text-[22px] font-medium text-gray-900">
            I’m a freelancer, looking for work
          </p>
        </Link>

      </div>
    </>
  );
}

export default Signup;
