import React, { useEffect, useState } from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";

const WorkerSignup = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCreateAccount = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pt-8 pl-4">
                <Link to="/bluehat">
                    <div className="flex items-center space-x-3">
                        <img src={logo} className="h-15 w-28 md:h-20 md:w-40" alt="Flowbite Logo" />
                    </div>
                </Link>
            </nav>

            <form onSubmit={handleCreateAccount} className="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
                <p className="text-center text-xl md:text-2xl font-medium mb-6 opacity-80">Sign up as a worker</p>

                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                        <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Work Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="john.doe@company.com" />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" />
                </div>

                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                    <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="•••••••••" />
                </div>

                <div className="flex items-center mb-6">
                    <input id="remember" type="checkbox" className="w-4 h-4 text-sky-600 bg-gray-100 border-gray-300 rounded focus:ring-sky-500"/>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                        Yes, I understand and agree to the <a href="#" className="text-blue-600 hover:underline">BlueHat Terms of Service</a>.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                    Create account
                </button>
            </form>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-80">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md text-center">
                        <h2 className="text-xl font-semibold mb-4">Verify Account</h2>
                        <p className="mb-6 text-gray-600">Do you want to verifiy your profile now?</p>
                        <div className="flex justify-center gap-4">
                            <Link to="/workerquestion">
                                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg shadow-sm">
                                    Yes
                                </button>
                            </Link>
                            <Link to="/workerpage" >
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg shadow-sm"
                            >
                                Later
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WorkerSignup;
