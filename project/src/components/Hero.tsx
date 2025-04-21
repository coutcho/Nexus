import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(17, 17, 27, 0.7), rgba(17, 17, 27, 0.9)), url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Level Up</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Your Game</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Discover the best games, tips, and gear to dominate your next play.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-md hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-lg"
            >
              Join The Squad
            </a>
            <a 
              href="#features" 
              className="px-8 py-4 bg-gray-800 border border-gray-700 text-gray-300 font-bold rounded-md hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-gray-700/20 text-lg"
            >
              Explore Features
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-purple-500 text-4xl font-bold">1000+</span>
              <span className="text-gray-400">Game Reviews</span>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-500 text-4xl font-bold">50K+</span>
              <span className="text-gray-400">Community</span>
            </div>
            <div className="h-12 w-px bg-gray-700"></div>
            <div className="flex flex-col items-center">
              <span className="text-red-500 text-4xl font-bold">200+</span>
              <span className="text-gray-400">Monthly Giveaways</span>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#features"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;