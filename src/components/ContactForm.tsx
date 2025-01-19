import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { submitForm } from '../redux/slices/formSlice';

const ContactForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { isSending, isSent, error } = useSelector((state: RootState) => state.form);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitForm(formData));
    };

    return (
        <div className="animate-form-border w-full md:w-2/5 rounded-lg p-1 mx-6">
            <form className="p-7 rounded-lg bg-[var(--color-timeline-background)] h-full" onSubmit={handleSubmit}>
                <div className="flex-col gap-4">
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="name" className="text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="John Doe"
                            className="outline-none mt-2 w-full p-2 rounded-md bg-[var(--color-background)] text-gray-300"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="email" className="text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="johndoe@example.com"
                            className="outline-none mt-2 w-full p-2 rounded-md bg-[var(--color-background)] text-gray-300"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="message" className="text-gray-300">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            placeholder="Write something here..."
                            className="outline-none mt-2 w-full p-2 rounded-md bg-[var(--color-background)] text-gray-300"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-4">
                        <div>
                            {isSent &&
                                <p className="text-green-500">Message sent successfully!</p>
                            }
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <button type="submit" className="bg-[var(--color-primary)] text-gray-300 p-2 rounded-md" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send'}
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default ContactForm;