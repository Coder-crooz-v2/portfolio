// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/pages/home/sections/WelcomeSection.tsx
import React from 'react';
import Typewriter from 'typewriter-effect'; // Adjust the path to your photo
import { Link } from 'react-router-dom';
import portrait from '/self/self.jpg';

const resumeUrl = "https://drive.google.com/file/d/1i5tGM0jH2iKRJbPJkduxgX8P7Y3_8BN3/view?usp=drive_link"

const WelcomeSection: React.FC = () => {
  return (
    <div className="flex mt-20 md:mt-0 gap-10 md:gap-28 flex-col md:flex-row items-center justify-center h-screen text-center md:text-left">
      <div className="p-4 w-80">
      <div className='font-bold mb-4 h-48' style={{fontSize: '80px', lineHeight: '80px'}}>
      <Typewriter
      options={
        {
            autoStart: true,
            loop: true,
            cursor: '_',
        }
      }
        onInit={(typewriter) => {
            typewriter.typeString('<span style="color: white">Sounak</span><br/><span style="color: var(--color-primary)">Bhawal</span>')
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
                console.log('All strings were deleted');
            })
            .start();
        }}
        />
      </div>
        <p className='text-3xl'>Full stack developer</p>
        <Link to={resumeUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-transparent border text-white px-6 py-2 text-lg mt-4 hover:bg-white hover:text-black transition duration-300">
            View My Resume
          </button>
        </Link>
      </div>
      <div className="p-4 mt-8 md:mt-0 flex justify-end">
        <img src={portrait} alt="Sounak Bhawal" className="border-blue-500 border rounded-full w-48 h-48 md:w-64 md:h-64 object-cover" />
      </div>
    </div>
  );
};

export default WelcomeSection;