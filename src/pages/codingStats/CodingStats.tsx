// filepath: src/components/CodingStats.tsx
import React from 'react';
import { motion } from 'framer-motion';
import RatingsChart from './sections/RatingsChart';
import ProfileCard from './sections/ProfileCard';
import QuestionsChart from './sections/QuestionsChart';
import ContestInfo from './sections/ContestInfo';
import { user } from './data/data';

const CodingStats: React.FC = () => {
  return (
    <motion.section
      className="p-4 bg-[var(--color-background)] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <div 
      className="mt-24 border p-4 bg-[var(--color-background)] gap-4 grid grid-cols-5 grid-rows-[130px 1fr 1fr] min-h-screen"
    >
      <ProfileCard/>
      <div className='bg-[var(--color-card-background)] rounded-lg p-5 text-gray-400'>
        <div className='text-2xl text-center'>Total questions</div>
        <div className='text-center h-[92%] flex items-center justify-center text-gray-300' style={{fontSize: "100px", fontWeight: "bold"}}>{user?.matchedUser?.submitStats.acSubmissionNum[0].count}</div>
      </div>
      <QuestionsChart/>
      <RatingsChart />
      <ContestInfo/>
    </div>
    </motion.section>
  );
};

export default CodingStats;