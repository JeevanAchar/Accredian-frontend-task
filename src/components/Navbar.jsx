import React from "react";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
    return (
        <section className="w-full min-h-[60px] 2xl:max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img src="https://shorturl.at/PWD8o" alt="Logo" className="max-w-32" />
                <div className="flex justify-between items-center max-w-28 bg-blue-600 text-white px-4 py-2 rounded-md font-medium" role="button">
                    <span>
                        Courses
                    </span>
                    <FaAngleDown />
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <div>
                    <ul className="flex items-center gap-4">
                        <li>Refer & Earn</li>
                        <li>Resources</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <button className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md font-medium">
                        Login
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 font-medium text-white px-5 py-2 rounded-md capitalize">
                        try for free
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
