import { Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion';
import Navbar from "./components/Nav";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project"
import Footer from "./components/Footer"
import './index.css'

function HomePage() {
  return (
    <>
      <div className="scroll-smooth">
      <Intro />
      <About />
      <Skill />
      <Project />
      </div>
    </>
  );
}

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </motion.div>
  );
}

export default App;