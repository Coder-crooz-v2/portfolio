// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleMenu } from '../redux/slices/menuSlice';

const Navbar: React.FC = () => {
const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="m-6 text-gray-400 fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="px-24 py-4 flex justify-between backdrop-blur-md items-center">
      <div className="text-xl font-bold">Sounak</div>
      <div className="hidden md:flex space-x-10 text-lg">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#achievements" className="hover:text-blue-500">Achievements</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleToggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 260 }}
          transition={{ duration: 0.5 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 backdrop-blur-md bg-opacity-50 p-4"
        >
          <div className="flex flex-col space-y-4">
            <motion.div variants={menuVariants} initial="hidden" animate="visible" transition={{ duration: 0.3 }}>
              <Link to="/" className="hover:text-blue-500" onClick={handleToggleMenu}>Home</Link>
            </motion.div>
            <motion.div variants={menuVariants} initial="hidden" animate="visible" transition={{ duration: 0.3, delay: 0.1 }}>
              <a href="#education" className="hover:text-blue-500" onClick={handleToggleMenu}>Education</a>
            </motion.div>
            <motion.div variants={menuVariants} initial="hidden" animate="visible" transition={{ duration: 0.3, delay: 0.2 }}>
              <a href="#projects" className="hover:text-blue-500" onClick={handleToggleMenu}>Projects</a>
            </motion.div>
            <motion.div variants={menuVariants} initial="hidden" animate="visible" transition={{ duration: 0.3, delay: 0.3 }}>
              <a href="#skills" className="hover:text-blue-500" onClick={handleToggleMenu}>Skills</a>
            </motion.div>
            <motion.div variants={menuVariants} initial="hidden" animate="visible" transition={{ duration: 0.3, delay: 0.4 }}>
              <a href="#achievements" className="hover:text-blue-500" onClick={handleToggleMenu}>Achievements</a>
            </motion.div>
            <motion.div variants={menuVariants} initial="hidden" animate="visible" transition={{ duration: 0.3, delay: 0.5 }}>
              <a href="#contact" className="hover:text-blue-500" onClick={handleToggleMenu}>Contact</a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;