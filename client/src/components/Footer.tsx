// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's connect</h2>
        <p className="mb-4">I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications. Connect with me on social media!</p>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="https://github.com/Coder-crooz-v2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub size={24} />
          </Link>
          <Link to="https://linkedin.com/in/sounak-bhawal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://www.instagram.com/sounakbhawal/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaInstagram size={24} />
          </Link>
        </div>
        <p>Sounak Bhawal</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;