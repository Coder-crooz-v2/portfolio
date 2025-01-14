import Skills from '../components/Skills'
import { skills } from '../constants/constants'
import { GrUserWorker } from 'react-icons/gr'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  return (
    <motion.section
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className = "flex flex-row h-[70px] text-wrap justify-items-start gap-8 items-center">
            <div className='w-[5px] bg-[var(--color-primary)] h-[50%] md:h-full'></div>
            <h2 className="text-5xl md:text-6xl h-content text-gray-300">Skills</h2>
            <GrUserWorker className='md:ml-5' size={window.innerWidth >= 800 ? 60 : 40} />
          </div>
          
          <div className={`mt-20 grid md:grid-cols-4 grid-cols-2 grid-rows-${Math.ceil(skills.length/2)} md:grid-rows-2`}>
              {
                skills.map((skill) => (
                  <Skills skill={skill} key={skill.name}/>
                ))
              }
          </div>
        </motion.section>
  )
}

export default SkillsSection
