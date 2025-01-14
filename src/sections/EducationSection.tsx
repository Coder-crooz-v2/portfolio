import { motion } from 'framer-motion'
import { FaSchool } from 'react-icons/fa'

const EducationSection = () => {
  return (
    <motion.section
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <div className = "flex flex-row h-[70px] justify-items-start gap-8 items-center">
            <div className='w-[5px] bg-[var(--color-primary)] h-[50%] md:h-full'></div>
            <h2 className="text-5xl md:text-6xl h-content text-gray-300">
              Education
            </h2>
            <FaSchool className='md:ml-5' size={window.innerWidth >= 800 ? 60 : 40} />
          </div>
          <ul className='list-disc list-outside ml-5 mt-10'>
            <li className="mt-10">
              <h3 className="text-2xl text-gray-300">B.Tech in Electrical engineering</h3>
              <h4 className="text-xl text-gray-400">Indian Institute of Technology, Kharagpur</h4>
              <h5 className="text-lg text-gray-400">2022 - 2026 (Tentative)</h5>
              <ul className='list-none ml-5'>
                <li className="mt-4">
                  <h4 className="text-xl text-gray-300">Courses:
                    <ul className='list-disc ml-10'>
                        <li className='mt-2'>
                            <h4 className="text-lg text-gray-400"><span className="text-gray-300">Computer Science:</span> Programming and data structures, Supervised and unsupervised machine learning</h4>
                        </li>
                        <li className='mt-2'>
                            <h4 className="text-lg text-gray-400"><span className="text-gray-300">Mathematics:</span> Probability and statistics, transform calculus, advanced calculus, linear algebra, economics</h4>
                        </li>
                        <li className='mt-2'>
                            <h4 className="text-lg text-gray-400"><span className="text-gray-300">Core:</span> Signals and systems, analog electronics, digital electronics, electrical machines, network analysis</h4>
                        </li>
                    </ul>
                  </h4>
                </li>
              </ul>
            </li>
          </ul>
    </motion.section>
  )
}

export default EducationSection
