import React, { useState} from "react";
import './App.css';
import logo from './assets/BlueHat_logo.png';
import { Link } from "react-router-dom";

const WorkerQuestion = () => {
    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("Anonymous!");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [workLocation, setWorkLocation] = useState("");
    const [skillCategory, setSkillCategory] = useState("");
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState("");
    const [certification, setCertification] = useState("");
    const [license, setLicense] = useState("");
    const [workType, setWorkType] = useState("");
    const [availability, setAvailability] = useState("");
    const [urgentRequests, setUrgentRequests] = useState("");
    const [tools, setTools] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [certifications, setCertifications] = useState(null);
    const [workSample, setWorkSample] = useState(null);

    const skillOptions = {
        "Plumbing": ["Pipe Installation", "Leak Repair", "Drain Cleaning", "Water Heater Installation"],
        "Electrical Work": ["Wiring Installation", "Circuit Breaker Repair", "Electrical Safety Inspection", "Appliance Repair"],
        "Carpentry": ["Cabinet Making", "Furniture Repair", "House Framing", "Wood Carving"],
        "Painting": ["Interior Painting", "Exterior Painting", "Spray Painting", "Wallpaper Installation"],
    };

    const handleNextStep = () => {
        if (step === 1 && name.trim() !== "") {
            setSubmittedName(name);
        }
        setStep((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        setStep((prev) => prev - 1);

    };

    const handleImageUpload = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <>
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pt-8 pl-4 mb-4">
                <Link to="/bluehat">
                    <div className="flex items-center space-x-3">
                        <img src={logo} className="h-15 w-28 md:h-20 md:w-40" alt="Flowbite Logo" />
                    </div>
                </Link>
            </nav>

            <div className="flex flex-col items-center justify-center h-screen mx-4">
                <div className="w-full max-w-lg rounded-lg p-6 mb-35 bg-white shadow-md rounded-lg">
                    <h2 className="text-[24px] text-[#252525] opacity-80 mb-4 text-center"> <span className="font-semibold">Worker Skill </span><br /> Application Questionnaire</h2>
                    <div className="w-full overflow-hidden">
                        <div className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}>

                            {/* Step 1 - Basic Information */}
                            <div className="w-full flex-shrink-0">
                                <label>Full Name:</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-[10px] mb-4" />

                                <label>Email Address:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-[10px] mb-4" />

                                <label>Phone Number:</label>
                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-[10px] mb-4" />

                                <label>Current Address:</label>
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-[10px] mb-4" />

                                <label>Preferred Work Location:</label>
                                <input type="text" value={workLocation} onChange={(e) => setWorkLocation(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-[10px] mb-6" />

                                <button onClick={handleNextStep} className="bg-sky-500 hover:bg-[#ADD8F5] text-white px-6 py-2 rounded-md cursor-pointer">Next Step</button>
                            </div>


                            <div className="w-full flex-shrink-0">
                                <label>Select Your Primary Skill Category:</label>
                                <select value={skillCategory} onChange={(e) => setSkillCategory(e.target.value)} className="w-full px-4 py-2 bg-[#FFFFFF]  bg-gray-50 border-1 border-gray-300 rounded-lg mb-4 cursor-pointer">
                                    <option value="">Select a category</option>
                                    {Object.keys(skillOptions).map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>

                                {skillCategory && (
                                    <>
                                        <label>Select Your Skills:</label>
                                        {skillOptions[skillCategory].map((skill) => (
                                            <div key={skill}>
                                                <input type="checkbox" value={skill} onChange={(e) => {
                                                    setSkills((prev) => e.target.checked ? [...prev, skill] : prev.filter(s => s !== skill));
                                                }} /> {skill}
                                            </div>
                                        ))}
                                    </>
                                )}

                                <button onClick={handlePrevStep} className="bg-neutral-700 hover:bg-gray-400 text-white px-6 py-2 rounded-md mr-2 cursor-pointer">Previous</button>
                                <button onClick={handleNextStep} className="bg-sky-500 hover:bg-[#ADD8F5] text-white px-6 py-2 rounded-md cursor-pointer">Next Step</button>
                            </div>

                            <div className="w-full flex-shrink-0">
                                <label>Years of Experience in This Skill:</label>
                                <select value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-lg mb-4 cursor-pointer">
                                    <option value="">Select experience level</option>
                                    <option value="Less than 1 year">Less than 1 year</option>
                                    <option value="1-3 years">1-3 years</option>
                                    <option value="4-7 years">4-7 years</option>
                                    <option value="8+ years">8+ years</option>
                                </select>

                                <label>Do you have professional certification or training in this skill?</label>
                                <input type="text" value={certification} onChange={(e) => setCertification(e.target.value)} placeholder="Specify if yes" className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-lg mb-4" />

                                <label>Do you have a valid license for this skill? (If applicable)</label>
                                <select value={license} onChange={(e) => setLicense(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-lg mb-4 cursor-pointer">
                                    <option value="">Select an option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                                <label>Have you worked for a company or as a freelancer in this skill?</label>
                                <input type="text" value={workType} onChange={(e) => setWorkType(e.target.value)} placeholder="Freelancer, Company (Specify), Both" className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-lg mb-4" />

                                <label>Provide a brief description of your work experience:</label>
                                <textarea value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border-1 border-gray-300 rounded-lg mb-4"></textarea>

                                <button onClick={handlePrevStep} className="bg-neutral-700 hover:bg-gray-400 text-white px-6 py-2 rounded-md mr-2 cursor-pointer">Previous</button>
                                <button onClick={handleNextStep} className="bg-sky-500 hover:bg-[#ADD8F5] text-white px-6 py-2 rounded-md cursor-pointer">Next Step</button>
                            </div>



                            <div className="w-full flex-shrink-0">
                                <label>Upload Profile Picture:</label>
                                <br />
                                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setProfileImage)} className="h-20 w-65 mb-4 bg-gray-50 text-center border-1 rounded-[12px] p-6" />
                                <br />
                                {profileImage && <img src={profileImage} alt="Profile Preview" className="w-24 h-24 rounded-full mt-2 mb-4" />}

                                <label>Upload Certifications (if any):</label>
                                <br />
                                <input type="file" accept="application/pdf" onChange={(e) => handleImageUpload(e, setCertifications)} className="h-20 w-65 mb-4 bg-gray-50 text-center border-1 rounded-[12px] p-6" />
                                <br />
                                <label>Upload Sample of Your Work:</label>
                                <br />
                                <input type="file" accept="image/*,application/pdf" onChange={(e) => handleImageUpload(e, setWorkSample)} className="h-20 w-65 mb-4 bg-gray-50 text-center border-1 rounded-[12px] p-6" />
                                <br />

                                <button onClick={handlePrevStep} className="bg-neutral-700 hover:bg-gray-400 text-white px-6 py-2 rounded-md mr-2 cursor-pointer">Previous</button>
                                <Link to="/workerpage" onClick={() => alert("Form Submitted!")} className="bg-sky-500 hover:bg-[#ADD8F5] text-white px-6 py-2 rounded-md cursor-pointer">Submit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkerQuestion;
