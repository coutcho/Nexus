import React, { useState } from 'react';
import { Gamepad2, Gift, Users, DollarSign } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Features: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const features: Feature[] = [
    {
      icon: <Gamepad2 className="w-10 h-10" />,
      title: "Game Reviews",
      description: "Detailed reviews of the latest AAA and indie games across all platforms with honest ratings and gameplay insights.",
      color: "purple",
    },
    {
      icon: <Gift className="w-10 h-10" />,
      title: "Giveaways",
      description: "Monthly game codes, gaming gear, and exclusive perks for our community members through our partnered publishers.",
      color: "cyan",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Gaming Community",
      description: "Join thousands of gamers in our Discord server for game nights, tournaments, and discussions about your favorite titles.",
      color: "red",
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Exclusive Deals",
      description: "Special discounts on games, hardware, and merchandise through our affiliate partnerships with major gaming brands.",
      color: "green",
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              What We Offer
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium gaming content and exclusive perks designed for passionate gamers of all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden`}
              style={{
                boxShadow: hovered === index ? `0 10px 25px -5px ${feature.color === 'purple' ? 'rgba(168, 85, 247, 0.4)' : feature.color === 'cyan' ? 'rgba(34, 211, 238, 0.4)' : feature.color === 'red' ? 'rgba(248, 113, 113, 0.4)' : 'rgba(74, 222, 128, 0.4)'}` : ''
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 rounded-full -mr-10 -mt-10 ${
                feature.color === 'purple' ? 'bg-purple-500' :
                feature.color === 'cyan' ? 'bg-cyan-500' :
                feature.color === 'red' ? 'bg-red-500' : 'bg-green-500'
              }`}></div>

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                feature.color === 'purple' ? 'text-purple-500' :
                feature.color === 'cyan' ? 'text-cyan-500' :
                feature.color === 'red' ? 'text-red-500' : 'text-green-500'
              }`}>
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>

              {/* Removed the "Learn More" link */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;