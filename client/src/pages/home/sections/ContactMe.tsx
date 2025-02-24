import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { submitForm } from '../../../redux/slices/formSlice';
import Desktop from '../components/Desktop';

const ContactMe: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const { isSending, isSent, error } = useSelector((state: RootState) => state.form);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitForm(formData));
    }

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8 z-5"
        >
            <div className='flex flex-row gap-5 justify-start items-end'>
                <div className='w-[5px] bg-[var(--color-primary)] h-[64px]' ></div>
                <div className="text-7xl font-bold mr-10">Contact me</div>
                <FaPhone size={60} />
            </div>
            <div className='mt-14 w-full px-8 flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-2/5'>
                    <div className='p-1 animate-primary rounded-lg'>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 bg-[var(--color-card-background)] p-5 rounded-lg'>
                            <label htmlFor="name" className='pl-2 text-lg'>Name</label>
                            <input onChange={handleChange} name="name" type='text' placeholder='John Doe' className='w-full bg-[var(--color-backgorund-secondary)] p-3 rounded-lg' />
                            <label htmlFor="email" className='pl-2 text-lg'>Email</label>
                            <input onChange={handleChange} name="email" type='email' placeholder='johndoe@example.com' className='w-full p-3 bg-[var(--color-backgorund-secondary)] rounded-lg' />
                            <label htmlFor="message" className='pl-2 text-lg'>Message</label>
                            <textarea onChange={handleChange} name="message" placeholder='Write your message here...' className='w-full bg-[var(--color-backgorund-secondary)] p-3 rounded-lg h-40'></textarea>
                            <button type='submit' disabled={isSending} className='w-full bg-[var(--color-primary)] text-white p-2 text-xl rounded-lg'>
                                {
                                    isSending ? 'Sending...' : 'Send'
                                }
                            </button>
                            {isSent && <p className="text-green-500">Message sent successfully!</p>}
                            {error && <p className="text-red-500">Failed to send message: {error}</p>}
                        </form>
                    </div>
                </div>
                <div className='w-full md:w-3/5'>
                    <Desktop />
                </div>
            </div>
        </motion.div>
    )
}

export default ContactMe
