
import ProjectCards from '../components/ProjectCards'
import { FaBookOpen } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ProjectSection = () => {
  return (
    <motion.section
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className = "flex flex-row h-[70px] justify-items-start gap-8 items-center">
            <div className='w-[5px] bg-[var(--color-primary)] h-[50%] md:h-full'></div>
            <h2 className="text-5xl md:text-6xl h-content text-gray-300">Projects</h2>
            <FaBookOpen className='md:ml-5' size={window.innerWidth >= 800 ? 60 : 40}/>
          </div>
          
          <div className="mt-4">
            <ProjectCards/>
          </div>
        </motion.section>
  )
}

export default ProjectSection
