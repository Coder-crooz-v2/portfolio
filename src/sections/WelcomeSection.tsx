import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import pfp from '../assets/personal/pfp.jpg';

const WelcomeSection = () => {
  return (
    <div className=" grid grid-rows-2 items-center md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-x-[100px] p-16">
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold h-[50%]"
          >

            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('<span class="text-6xl text-white">Sounak</span><br/><span class="text-6xl color-primary">Bhawal</span>')
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
              options={
                {
                  wrapperClassName: "text-white",
                  cursorClassName: "text-white",
                  loop: true,
                  cursor: "_",
                  autoStart: true,
                }
              }
            />
          </motion.div>
          <motion.div
            initial={{ y: 50, visibility: "hidden" }}
            animate={{ y: 0, visibility: "visible" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl h-[50%] text-wrap flex flex-col justify-center items-center md:items-start"
          >
            <span className='text-white text-center md:text-left'> Full stack developer, problem solver</span>
            <Link to="https://drive.google.com/file/d/1aNIxWpn79-XW5HWNwZCARDjokNgDhR6x/view?usp=sharing" target="_blank">
            <button className="border-2 border-gray-500 text-white px-4 py-2 rounded mt-5 hover:bg-white hover:text-black hover:border-white transition-all duration-500">
              View My Resume
            </button>
          </Link>
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 50, visibility: "hidden" }}
            animate={{ opacity: 1, y: 0 , visibility: "visible" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <div className="w-64 h-64 border-4 rounded-lg overflow-hidden shadow-lg" style={{ borderColor: "var(--color-primary)" }}>
            <img
              src={pfp}
              alt="Sounak Bhawal"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
  )
}

export default WelcomeSection
