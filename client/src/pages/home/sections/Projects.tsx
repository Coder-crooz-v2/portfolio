import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { projects } from "../../../contstants/projects";
import { FaBook, FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt"
import { Link } from "react-router-dom";

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8"
            id="projects"
        >
            <div className='flex flex-row gap-5 justify-start items-end'>
                <div className='w-[5px] bg-[var(--color-primary)] h-[64px]' ></div>
                <div className="text-7xl font-bold mr-10">Projects</div>
                <FaBook size={60} />
            </div>
            <div className="w-full flex flex-col md:grid md:grid-rows-2 gap-5 mt-14 md:grid-cols-3 min-h-48">
                {
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="h-full"
                        >
                            <Link to={project.url} target={project.url !== "#" ? "_blank" : ""} className="w-full h-full">
                                <Tilt className="rounded-lg animate-rainbow p-1 h-full">
                                    <div className="flex flex-col gap-3 bg-[var(--color-card-background)] p-5 rounded-lg h-full">
                                        <img src={project.image} alt={project.title} className="rounded-lg" />
                                        <div className="text-xl font-bold">{project.title}</div>
                                        <div className="text-gray-300">{project.description}</div>
                                        <div className="flex justify-between h-full items-end">
                                            <div className="flex flex-row gap-2">
                                                {
                                                    project.tags.map((tag, index) => (
                                                        <span key={index} className="text-red-400 italic">{"#" + tag}</span>
                                                    ))
                                                }
                                            </div>
                                            <Link to={project.githubUrl} target="_blank">
                                                <FaGithub size={30} onClick={e => e.stopPropagation()} className="cursor-pointer hover:text-blue-600" />
                                            </Link>
                                        </div>
                                    </div>
                                </Tilt>
                            </Link>

                        </motion.div>
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Projects
