
import React from 'react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-indigo-700 h-[600px] flex items-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Stay, Anywhere in the World
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Discover amazing hotels, unique experiences and strategic vacation rentals
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-in" style={{animationDelay: "0.2s"}}>
          <SearchBar />
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 text-white animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span>500K+ Hotels</span>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>24/7 Support</span>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-3 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Best Price</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
