import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  tag: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Rodriguez",
      tag: "FPS Enthusiast",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "NexusGaming has completely transformed my gaming experience. Their detailed guides helped me improve my K/D ratio by 40% in just two weeks. Plus, I won a mechanical keyboard from one of their giveaways!",
      rating: 5
    },
    {
      id: 2,
      name: "Samantha Chen",
      tag: "RPG Veteran",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "The community here is incredible. I've found a group of friends who share my love for open-world RPGs, and the exclusive deals saved me over $200 on my gaming setup last year. Couldn't recommend it more!",
      rating: 5
    },
    {
      id: 3,
      name: "Marcus Johnson",
      tag: "Indie Game Developer",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      quote: "As a developer, the feedback I've received from the NexusGaming community has been invaluable. They provide thoughtful reviews and have helped us improve our game in ways we never imagined.",
      rating: 4
    }
  ];
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
    setAutoplay(false);
  };
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
    setAutoplay(false);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, autoplay, testimonials.length]);
  
  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              What Gamers Say
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our community members have experienced with NexusGaming.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden relative rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-800/70 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-700 shadow-xl flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3 flex flex-col items-center text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-purple-500 p-1 mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                      <p className="text-cyan-500 mb-3">{testimonial.tag}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <svg className="text-purple-500 w-10 h-10 mb-4 opacity-60" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                      </svg>
                      <p className="text-gray-300 text-lg italic mb-0">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-purple-500' : 'bg-gray-600'}`}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoplay(false);
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-12 bg-gray-800/80 rounded-full p-2 text-white hover:bg-purple-500 transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-12 bg-gray-800/80 rounded-full p-2 text-white hover:bg-purple-500 transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;