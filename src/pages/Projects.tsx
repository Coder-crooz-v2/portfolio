// filepath: src/components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.section
      className="p-4 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Projects</h1>
      {/* Add projects here */}
    </motion.section>
  );
};

export default Projects;