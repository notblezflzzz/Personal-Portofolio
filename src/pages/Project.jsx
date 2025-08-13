import React from "react";
import Project1 from "../assets/Project1.jpeg";
import Project2 from "../assets/Project2.jpeg";
import Project3 from "../assets/Project3.jpeg";
import Project4 from "../assets/landing-page-travel.png"
import Project5 from "../assets/weather-app.png"
import { title } from "framer-motion/client";

const projects = [
  {
    title: "Blog preview page",
    image: Project1,
    live: "https://notblezflzzz.github.io/blog-preview-project/",
    code: "https://github.com/notblezflzzz/blog-preview-project",
  },
  {
    title: "QR code component",
    image: Project2,
    live: "https://notblezflzzz.github.io/qr-code/",
    code: "https://github.com/notblezflzzz/qr-code",
  },
  {
    title: "Recipe Page",
    image: Project3,
    live: "https://notblezflzzz.github.io/recipe-page-project/",
    code: "https://github.com/notblezflzzz/recipe-page-project",
  },
  {
    title: "Landing Page Travel",
    image: Project4,
    live: "landing-page-travel-naufal.vercel.app",
    code: "https://github.com/notblezflzzz/landing-page-travel/",
  },
  {
    title: "WeatherApp",
    image: Project5,
    live: "https://notblezflzzz.github.io/Weather-App/",
    code: "https://github.com/notblezflzzz/Weather-App",
  },
];

export default function Project() {
  return (
    <section className="min-h-screen py-10 px-8 bg-[#ebebeb] dark:bg-[#1e1e1e] text-[#333] dark:text-white" id="Project">
      <h1 className="text-4xl font-bold text-center text-[#333] mb-10 dark:text-white">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#333] dark:text-white">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#ffffff] dark:bg-[#2a2a2a] rounded-lg shadow-lg overflow-hidden transition hover:scale-[1.02] hover:shadow-xl duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-3 dark:text-white">{project.title}</h2>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 rounded-full border border-black dark:border-white text-sm hover:bg-[#4663ac] hover:text-white transition"
                >
                  Live Site
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  className="px-4 py-2 rounded-full border border-black dark:border-white text-sm hover:bg-[#4663ac] hover:text-white transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
