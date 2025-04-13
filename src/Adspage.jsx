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


            <div className='mt-25 ml-5 md:mt-40 md:ml-30 w-75 md:w-100 mb-8'>
                <h1 className='text-[24px] md:text-[32px] font-medium text-[#252525] opacity-80' >Free Government Training
                    and Certification</h1>
            </div>


                <a href="https://www.facebook.com/photo/?fbid=1040524924762206&set=a.447560497391988" class="flex flex-col md:mx-auto items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-4 ml-6 mr-6">
                    <img class="object-cover w-60 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/490142786_1063920839089281_5365773960001663986_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEt1D9JViaDdIymqS3cVKT4DNL4QsTJXcQM0vhCxMldxAxibp-ob0LZMnXi1ywiQ_fBgZZrDFpdeBHaGOT7pl__&_nc_ohc=I5hk2AR7GW0Q7kNvwHRfBmi&_nc_oc=Adk22R7ngBaPes_hpX7v7LZpcvWe8c3jeaGgSkztst_3MWDHkxrmb3Y2ONT8J5p-6eI&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=U5J6H0ZnajXyns9QSxI8aw&oh=00_AfEg8CNojiO23QQjx_7t7FeUYF0VQoWk6AjP17hfTiLC8w&oe=6801AB6A" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#252525] opacity-80">FREE TESDA TRAINING ALERT</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Concordia College, Inc.
                        offers Free Training, Assessment, and with Allowance</p>
                    </div>
                </a>

                <a href="https://www.facebook.com/photo/?fbid=1070893761724048&set=a.456274649852632" class="flex flex-col md:mx-auto items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 mt-8 mb-10 ml-6 mr-6">
                    <img class="object-cover w-60 rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/484951009_1070237201789704_2141881598104639452_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLCcX8Jk9rTJfE4B9-EfZ0KBmZRmpDH9QoGZlGakMf1BsNT036zZs8ES7d9l667FUFnGkUD4cO72X5FAwvWMG8&_nc_ohc=oDlM7IzhshkQ7kNvwHGKqXs&_nc_oc=AdmwWXGoq3G3SB0SM1RzG0jWjoZBKCQjsBX8lmqtKsKl7Vsn2pxbJDWaqvmmW89GXCM&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&_nc_gid=m7_kI_ReRcjFNxetuEywHg&oh=00_AfFG9dmhcR8KppuegkBqA5RsbJeFfpKW2OV_6JIBIpipvg&oe=6801A656" alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#252525] opacity-80">FREE CAREGIVING NCII SCHOLARSHIP – 25 SLOTS ONLY</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dreaming of becoming a certified caregiver? Da Vinci is now accepting enrollees for a TESDA-Accredited Caregiving NCII Scholarship with FREE tuition!</p>
                    </div>
                </a>
        

        </>
    );
}

export default AdsPage;

