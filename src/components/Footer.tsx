import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="p-6 bg-black text-white font-poppins text-center">
      <div className="mb-4">
        <p className="text-lg">Follow me on social media</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="https://github.com/Coder-crooz-v2" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaGithub size={24} />
          </Link>
          <Link to="https://linkedin.com/in/sounak-bhawal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </Link>
          <Link to="https://www.facebook.com/share/1BiPPZZ2Gx/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </Link>
          <Link to="https://www.instagram.com/sounakbhawal?igsh=eGVrNWpxa2hmMGZt" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm">
          Hi, I'm Sounak, a passionate developer with a love for creating innovative solutions. Connect with me on social media to stay updated with my latest projects and activities.
        </p>
      </div>
      <div>
        <p>&copy; 2023 Sounak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;