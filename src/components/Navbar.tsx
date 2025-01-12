import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <nav className="fixed m-4 top-0 left-0 right-0 px-32 p-4 text-white flex justify-between z-50 bg-gray-800 bg-opacity-50 backdrop-blur-md">
        <div className='font-serif text-xl'>Sounak</div>
        <div className="hidden md:flex md:gap-5 text-gray-400 space-x-4 md:justify-center md:items-center">
          <Link to="/" className='hover:text-[var(--color-primary)]'>Home</Link>
          <Link to="/codingstats" className='hover:text-[var(--color-primary)]'>Coding Stats</Link>
          <button className='hover:text-[var(--color-primary)]' onClick={() => dispatch(toggleTheme())}><FaMoon/></button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 right-0 mt-[5rem] p-4 m-4 h-content bg-gray-800 bg-opacity-50 backdrop-blur-md z-40 flex flex-col items-start justify-center gap-5 text-gray-400"
          >
            <Link to="/" className='hover:text-blue-500'>Home</Link>
            <Link to="/codingstats" className='hover:text-blue-500'>Coding Stats</Link>
            <Link to="/projects" className='hover:text-blue-500'>Projects</Link>
            <Link to="/contact" className='hover:text-blue-500'>Contact me</Link>
            <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;