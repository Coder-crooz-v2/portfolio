import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../components/Timeline';
import { FaMedal } from 'react-icons/fa';

const AchievementsSection = () => {
  return (
    <motion.section
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className = "flex flex-row h-[70px] justify-items-start gap-8 items-center">
            <div className='w-[5px] bg-[var(--color-primary)] h-[50%] md:h-full'></div>
            <h2 className="text-4xl md:text-6xl h-content text-gray-300">
              Achievements
            </h2>
            <FaMedal className='md:ml-5' size={window.innerWidth >= 800 ? 60 : 40} />
          </div>
          
          <div className="mt-4">
            <Timeline/>
          </div>
        </motion.section>
  )
}

export default AchievementsSection
