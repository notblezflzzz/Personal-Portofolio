import '/src/index.css'
import { PiInstagramLogoBold } from "react-icons/pi";
import { LiaGithub } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter';
import logoImg from "../assets/image.png";

function Intro() {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[70vh] w-full px-6 py-10 font-poppins scroll-smooth text-black dark:text-white transition-colors bg-white dark:bg-[#121212]">
      {/* Text Section */}
      <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
        <h5 className="text-[#4663ac] font-semibold italic mb-4 text-lg">
          <Typewriter
            words={["Hello, I'm a FrontEnd Developer"]}
            loop={1}
            cursor
            cursorStyle="/"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h5>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Abdan Naufal</h1>
        <p className="text-base md:text-lg leading-relaxed">
          I am a Front-End Developer who focuses on creating fast, responsive, and user-friendly websites.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6">
          <a
            href="#Project"
            className="flex items-center bg-[#4663ac] px-6 py-2 text-white rounded-md transition-all hover:bg-[#32477a] italic transform hover:scale-105 active:scale-90"
          >
            View My Project
          </a>
          <a href="https://github.com/notblezflzzz" target="_blank" rel="noopener noreferrer">
            <LiaGithub className="size-6 md:size-7 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/abdannaf/" target="_blank" rel="noopener noreferrer">
            <PiInstagramLogoBold className="size-6 md:size-7 cursor-pointer" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=6282124986289" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp className="size-6 md:size-7 cursor-pointer" />
          </a>
          <a href="mailto:abdannaufal@email.com" target="_blank" rel="noopener noreferrer">
            <TfiEmail className="size-6 md:size-7 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <img
          src={logoImg}
          alt="Abdan Naufal"
          className="rounded-full w-full max-w-[250px] border-2 border-[#4663ac] object-cover aspect-square"
        />
      </div>
    </main>
  );
}

export default Intro;