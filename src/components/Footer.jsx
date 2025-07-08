import '/src/index.css';
import React from 'react';
import { PiInstagramLogoBold } from "react-icons/pi";
import { LiaGithub } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
    return (
            <footer className="bg-[#3d65bb] dark:bg-[#1c1c3d] text-white py-6 px-4 mt-0 transition-colors">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Abdannaufal. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="https://github.com/notblezflzzz" target="_blank" className="inline">GitHub</a>
                        <a href="https://www.instagram.com/abdannaf/" target="_blank" className="">Instagram</a>
                        <a href="mailto:abdannaufal1@gmail.com" className="">Email</a>
                    </div>
                </div>
            </footer>
    )
}

export default Footer;