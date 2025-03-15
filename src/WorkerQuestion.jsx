import React from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";


const WorkerQuestion = () => {

    return (

        <>

            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pt-8 pl-4">
                <Link to="/">
                    <div className="flex items-center space-x-3">
                        <img src={logo} className="h-10 w-28 md:h-15 md:w-40" alt="BlueHat Logo" />
                    </div>
                </Link>
            </nav>


        </>
    );

}

export default WorkerQuestion;