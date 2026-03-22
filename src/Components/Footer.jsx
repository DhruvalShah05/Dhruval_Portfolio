import React from 'react';
import { FaDiscord, FaLinkedin, FaInstagram, FaXTwitter, FaGithub, FaCode } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 ">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 text-2xl mb-3">
          
          <a href="https://www.linkedin.com/in/dhruval4-shah" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://www.instagram.com/dhruval_shah_0403" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-blue-300 transition" />
          </a>
          <a href="https://github.com/DhruvalShah05" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>

          <a href = "https://codolio.com/profile/dhruval4_shah"  target="_blank" rel="noopener noreferrer" >
            <FaCode  className="hover:text-white transition" />
          </a>
          <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="hover:text-blue-400 transition" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Dhruval's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
