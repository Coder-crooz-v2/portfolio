// filepath: src/pages/Home.tsx
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ParticlesComponent from '../components/ParticlesComponent';
import Footer from '../components/Footer';
import ProjectCards from '../components/ProjectCards';
import Skills from '../components/Skills';
import { skills } from "../constants/constants"

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <ParticlesComponent />
      <div className="flex justify-center items-center h-screen min-h-screen">
      <div className="grid grid-cols-2 gap-4 gap-x-[100px] p-20">
        <div className="flex flex-col justify-center items-start space-y-4 w-[400px]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold h-[50%]"
          >

            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('<span class="text-6xl text-white">Sounak</span><br/><span class="text-6xl color-primary">Bhawal</span>')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
              options={
                {
                  wrapperClassName: "text-white",
                  cursorClassName: "text-white",
                  loop: true,
                  cursor: "_",
                  autoStart: true,
                }
              }
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, visibility: "hidden" }}
            animate={{ y: 0, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl h-[50%] text-wrap flex flex-col justify-center items-start"
          >
            <span className='text-white'> Full stack developer, problem solver</span>
            <Link to="https://drive.google.com/file/d/1aNIxWpn79-XW5HWNwZCARDjokNgDhR6x/view?usp=sharing" target="_blank">
            <button className="border-2 border-gray-500 text-white px-4 py-2 rounded mt-5 hover:bg-white hover:text-black hover:border-white transition-all duration-500">
              View My Resume
            </button>
          </Link>
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 50, visibility: "hidden" }}
            animate={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <div className="w-64 h-64 border-4 rounded-lg overflow-hidden shadow-lg" style={{ borderColor: "var(--color-primary)" }}>
            <img
              src="path-to-your-photo.jpg"
              alt="Sounak Bhawal"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      </div>
      <div className="bg-[var(--color-background)] text-gray-300 min-h-screen p-8">
          <motion.section
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className = "flex flex-row h-[70px] justify-items-start gap-8 items-center">
            <div className='w-[5px] bg-[var(--color-primary)] h-full'></div>
            <h2 className="text-6xl h-content text-gray-300">Projects</h2>
          </div>
          
          <div className="mt-4">
            <ProjectCards/>
          </div>
        </motion.section>

          <motion.section
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className = "flex flex-row h-[70px] text-wrap justify-items-start gap-8 items-center">
            <div className='w-[5px] bg-[var(--color-primary)] h-full'></div>
            <h2 className="text-6xl h-content text-gray-300">Skills and technologies</h2>
          </div>
          
          <div className="mt-20 grid grid-cols-4 grid-rows-2">
              {
                skills.map((skill) => (
                  <Skills skill={skill} key={skill.name}/>
                ))
              }
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <h2 className="text-3xl text-blue-500">Achievements</h2>
          <ul className="mt-4 space-y-2">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
            <li>Achievement 3</li>
            {/* Add more achievements as needed */}
          </ul>
        </motion.div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;