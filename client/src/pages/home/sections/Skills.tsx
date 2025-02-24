import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaGears } from "react-icons/fa6";
import Balls from "../components/Balls";
import { skillIcons } from "../../../contstants/skills";

const Skills = () => {
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
          <div className="text-7xl font-bold mr-10">Skills</div>
          <FaGears size={60}/>
      </div>
      <div className="mt-14 grid grid-rows-4 md:grid-rows-2 grid-cols-2 md:grid-cols-4 gap-3">
        {
          skillIcons.map((skill, index) => (
            <div className="h-[200px]" key={index}>
              <Balls key={index} skill={skill}/>
            </div>
          ))
        }
      </div>
    </motion.section>
  )
}

export default Skills
