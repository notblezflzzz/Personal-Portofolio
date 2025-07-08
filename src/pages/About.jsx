import '/src/index.css'
import React from 'react';

function About() {
  return (
    <section className="bg-[#ebebeb] dark:bg-[#1e1e1e] dark:text-white font-inter py-16 px-6 md:px-20 scroll-mt-24 text-black" id="About">
      <div className="max-w-5xl mx-auto dark:text-white">
        <h2 className="font-poppins text-[#333] font-bold text-3xl md:text-4xl mb-6 dark:text-white">About Me</h2>
        <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-800 dark:text-white">
          My name is <strong>Abdannaufal</strong> and I live in Indonesia. I started learning HTML, CSS, and JavaScript in 2024,
          along with a strong interest in web penetration testing. Over time, I’ve expanded my skills into <strong>ReactJS</strong>,
          <strong> TailwindCSS</strong>, and <strong>Node.js</strong>, and I enjoy connecting the frontend to the backend to build full-featured web applications.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-white">
          Currently, I’m building my portfolio with projects like a Website Company Profile, and I’m open to <strong>freelance</strong> opportunities
          or <strong>remote work</strong>. I’m also passionate about learning web security to create safer and more reliable applications.
        </p>
      </div>
    </section>
  );
}

export default About;
