// filepath: src/components/CodingStats.tsx
import React from 'react';
import { motion } from 'framer-motion';

const CodingStats: React.FC = () => {
  return (
    <motion.section
      className="p-4 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Coding Stats</h1>
      {/* Add coding stats here */}
    </motion.section>
  );
};

export default CodingStats;