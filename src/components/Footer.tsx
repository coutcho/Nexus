import React from 'react';
import { Gamepad2, Twitch, Youtube, Twitter, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-purple-500 mb-6">
              <Gamepad2 className="h-8 w-8" />
              <span>Nexus<span className="text-cyan-400">Gaming</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Your ultimate destination for gaming news, reviews, giveaways, and connecting with fellow gamers.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.twitch.tv/coutcho" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-500 hover:bg-purple-500 hover:text-white transition-colors duration-300">
                <Twitch className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors duration-300">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Features</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} NexusGaming. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;