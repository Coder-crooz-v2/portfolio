import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSchool } from 'react-icons/fa';

const Education = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

  return (
    <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {opacity: 0, y: 50}}
        transition={{ duration: 0.5 }}
        className="p-4 md:p-8"
    >
        <div className='flex flex-row gap-5 justify-start items-end'>
            <div className='w-[5px] bg-[var(--color-primary)] h-[64px]' ></div>
            <div className="text-7xl font-bold mr-10">Education</div>
            <FaSchool size={60}/>
        </div>
        <div className='text-gray-300 text-2xl mt-14'>
            <p className='font-bold'>Indian Institute of Technology, Kharagpur</p>
            <p className='italic'>B.tech, electrical engineering - 2022-2026</p>
            <p className='mt-3'>Courses:</p>
            <ul className='list-disc'> 
                <li className='ml-20'><span className="font-bold">Computer Science:</span> Programming and data structures, Supervised and unsupervised machine learning</li>
                <li className='ml-20'><span className="font-bold">Mathematics:</span> Probability and statistics, transform calculus, advanced calculus, linear algebra, economics</li>
                <li className='ml-20'><span className="font-bold">Core:</span> Signals and systems, analog electronics, digital electronics, electrical machines, network analysis</li>
            </ul>
        </div>
    </motion.section>
  )
}

export default Education
