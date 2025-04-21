import React from 'react';
import { Shield, Youtube, Twitch, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-800 relative">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-full absolute -left-4 -top-4 border-2 border-purple-500 rounded-xl opacity-50"></div>
              <img 
                src="https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Gaming team at work" 
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-900 p-4 rounded-lg shadow-xl z-20">
                <p className="text-purple-500 text-lg font-bold">EST. 2025</p>
                <p className="text-gray-400 text-sm">Founded by gamers, for gamers</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  About Us
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We're passionate gamers bringing you the latest in the world of gaming. Our mission is to create a community where gamers of all types can find valuable content, connect with others, and elevate their gaming experience.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Founded by a team of competitive gamers, game developers, and content creators, NexusGaming was born from our desire to build the ultimate resource hub that we wish existed when we started our gaming journeys.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300 text-sm">50,000+ Trusted Users</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                  <Youtube className="w-5 h-5 text-red-500" />
                  <span className="text-gray-300 text-sm">YouTube Creator</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                  <Twitch className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300 text-sm">Twitch Partner</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
                  <MessageSquare className="w-5 h-5 text-cyan-500" />
                  <span className="text-gray-300 text-sm">Discord Community</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-200">Our Mission</h3>
              <p className="text-gray-400 mb-0">
                "To build the most valuable and trustworthy gaming resource that empowers players to make informed decisions, discover new experiences, and connect with a vibrant community of fellow gamers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;