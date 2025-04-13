import React, { useState, useRef, useEffect } from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";


const ChatPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const buttonRefs = useRef({});
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
    const [showModal, setShowModal] = useState(false);

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

    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false);
                setDropdownOpen(false);
            }
        };
        

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const messages = [
        {
            name: 'Bonnie Green',
            time: '11:46',
            content: 'Hello',
            status: 'Delivered',
            sender: "other",
        },
        {
            name: 'Bonnie Green',
            time: '11:56',
            content: 'Pwede ka ba gumawa ng april 12? ipapagawa ko sana TV ko ayaw gumana.',
            status: 'Delivered',
            sender: "other",
        },
        {
            name: 'You',
            time: '12:23',
            content: 'Hi',
            status: 'Sent',
            sender: "me",
        },
        {
            name: 'You',
            time: '12:23',
            content: 'Sure! I’m available on April 12.',
            status: 'Sent',
            sender: "me",
        },
        {
            name: 'You',
            time: '12:23',
            content: 'ano po ba sira ng TV niyo?',
            status: 'Sent',
            sender: "me",
        }

    ];

    const handleToggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };



    return (
        <>

            <nav className="fixed w-full z-20 top-0 start-0 pt-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 p-2">
                    <Link to="/bluehat" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-15 w-28 md:h-20 md:w-40" alt="Flowbite Logo" />
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
                                <Link to="/workerpage" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Find Work</Link>
                            </li>
                            <li>
                                <Link to="/workerprofile" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Profile</Link>
                            </li>
                            <li>
                                <Link to="/adspage" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">Advertisement</Link>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-neutral-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-500 md:p-0 ">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="mt-25 md:mt-32 ml-6 md:ml-15 ,w-70 md:w-400 flex flex-row">
                <p className="text-[32px] font-medium text-sky-500">Message</p>

                <button className="ml-32 md:ml-300 p-3 bg-sky-500 rounded-[12px] text-[#f6f6f6] cursor-pointer shadow-sm"
                onClick={openModal}
                >Hire Now</button>
            </div>


            <button
                ref={buttonRef}
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>


            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`absolute top-48 md:top-48 left-0 z-40 w-full md:w-65 h-134 transition-transform bg-white md:bg-[#f4f6f6] md:opacity-100 opacity-98 shadow-md ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0 overflow-clip`}
                aria-label="Sidebar"
            >
                <div class="h-full px-3 py-4 overflow-y-auto">
                    <ul class="space-y-2 font-medium">

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-blue-200 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <span class="flex-1 ms-3 whitespace-nowrap">Bonnie Green</span>
                                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">2</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-blue-200 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <span class="flex-1 ms-3 whitespace-nowrap">Mike</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-blue-200 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <span class="flex-1 ms-3 whitespace-nowrap">Kenneth</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-dark hover:bg-blue-200 group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <span class="flex-1 ms-3 whitespace-nowrap">Paul</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </aside>


            <div class="p-4 sm:ml-64">
                <div class="p-4]">

                    <div className="h-[400px] md:h-[400px] overflow-y-auto px-4">

                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start gap-2.5 mb-4 relative ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                                <div className="flex flex-col gap-1 w-full max-w-[320px]">
                                    <div className={`flex items-center space-x-2 rtl:space-x-reverse ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                                        <span className={`text-sm font-semibold ${msg.sender === 'me' ? 'text-black' : 'text-gray-900'}`}>
                                            {msg.sender === 'me' ? 'You' : msg.name}
                                        </span>
                                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{msg.time}</span>
                                    </div>
                                    <div className={`flex flex-col leading-1.5 p-4 border-gray-200 ${msg.sender === 'me' ? 'bg-gray-200 rounded-s-xl rounded-ee-xl' : 'bg-sky-500 rounded-e-xl rounded-es-xl'}`}>
                                        <p className={`text-sm font-normal ${msg.sender === 'me' ? 'text-gray-900 dark:text-black' : 'text-white'}`}>{msg.content}</p>
                                    </div>
                                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{msg.status}</span>
                                </div>

                                <button
                                    onClick={() => handleToggleDropdown(index)}
                                    className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg"
                                    type="button"
                                >
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 4 15">
                                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                    </svg>
                                </button>

                                {dropdownOpen === index && (
                                    <div ref={dropdownRef} className={`absolute ${msg.sender === 'me' ? 'md:left-150' : ''} right-10 top-5 md:right-160 md:top-5 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            {['Reply', 'Forward', 'Copy', 'Report', 'Delete'].map((action, i) => (
                                                <li key={i}>
                                                    <button
                                                        onClick={() => {
                                                            console.log(`${action} clicked for message index ${index}`);
                                                            setDropdownOpen(null);
                                                        }}
                                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        {action}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}


                        {/*  */}

                    </div>

                </div>

                <div className="bg-white h-16 md:w-240 p-2 m-2 rounded-[30px] shadow-md md:mx-0">

                    <form class="flex items-center max-w-sm">
                        <div class="relative w-full">
                            <input type="text" id="simple-search" class="bg-gray-50 text-gray-900 text-sm block w-full md:w-220 ps-10 p-2.5 text-[16px] rounded-[20px]" placeholder="Write your message" required />
                        </div>
                        <button type="submit" class="md:ml-125 p-2.5 ms-2 text-sm font-medium text-white bg-sky-600 rounded-[100px] border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>

                </div>
            </div>


            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-80">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-md text-center">
                        <h2 className="text-xl font-semibold mb-4">Hire this worker?</h2>
                        <p className="mb-6 text-gray-600">A confirmation from the worker is needed to complete the hiring process.</p>
                        <div className="flex justify-center gap-4">
                            
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg shadow-sm"
                                >
                                    Not now
                                </button>

                                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg shadow-sm">
                                    Yes
                                </button>
                          
                        </div>
                    </div>
                </div>
            )}





        </>
    );

}

export default ChatPage;