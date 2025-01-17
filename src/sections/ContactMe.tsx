import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import Desktop from '../components/Desktop';

const ContactMe: React.FC = () => {

  return (
    <motion.section
      initial={{ opacity: 0, y: 50, visibility: 'hidden' }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
      transition={{ duration: 1 }}
      className="mt-16"
    >
      <div className="flex flex-row h-[70px] justify-items-start gap-8 items-center">
        <div className="w-[5px] bg-[var(--color-primary)] h-[50%] md:h-full"></div>
        <h2 className="text-5xl md:text-6xl h-content text-gray-300">Contact me</h2>
        <FaPhone className="md:ml-5" size={window.innerWidth >= 800 ? 60 : 40} />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full mt-10">
        <ContactForm/>
        <Desktop/>
      </div>
    </motion.section>
  );
};

export default ContactMe;