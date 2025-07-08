import '/src/index.css'
import React from 'react';
import Html from "../assets/html-5-svgrepo-com.svg";
import Css from "../assets/css-3-svgrepo-com.svg";
import Js from "../assets/js-official-svgrepo-com.svg";
import ReactIcon from "../assets/react.svg";
import Tailwind from "../assets/Tailwind CSS.svg";
import Git from "../assets/git-svgrepo-com.svg";

function Skill() {
    const skills = [
        {
            name: "HTML",
            image: Html,
            desc: "Used to build the basic structure and layout of a webpage.",
        },
        {
            name: "CSS",
            image: Css,
            desc: "Handles the styling and visual design to make the website look clean and responsive.",
        },
        {
            name: "Javascript",
            image: Js,
            desc: "Adds interactivity and functionality, making websites more dynamic and user-friendly.",
        },
        {
            name: "ReactJS",
            image: ReactIcon,
            desc: "A modern JavaScript library for creating reusable and efficient user interfaces.",
        },
        {
            name: "TailwindCSS",
            image: Tailwind,
            desc: "A utility-first CSS framework that allows fast and consistent UI development.",
        },
        {
            name: "Git",
            image: Git,
            desc: "Version control system for tracking code changes and collaborating on projects.",
        },
    ];

    return (
        <section className="bg-white dark:bg-[#121212] font-inter py-20 px-6 md:px-12 lg:px-24 scroll-mt-24" id="Skills">
            <h2 className="text-center text-3xl md:text-4xl font-poppins font-semibold text-[#333] mb-12 dark:text-white">
                Tech Stack / Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-[#ebebeb] dark:bg-[#2c2c2c] text-black dark:text-white w-full max-w-[250px] min-h-[250px] p-6 rounded-md shadow-sm hover:shadow-lg hover:scale-[1.02] transition duration-300"
                    >
                        <img src={skill.image} alt={skill.name} className="w-14 h-14 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">{skill.name}</h3>
                        <p className="text-center text-sm text-gray-700 dark:text-white">{skill.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;
