'use client'

import React, { useEffect, useState } from 'react';
import { ChevronRight, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-cosmic animate-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} mt-8 mb-14`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">AI-Powered Content Generation</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-bold mt-4 mb-10 leading-tighter tracking-tight">
            Create Viral
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient tracking-tighter">
              Social Content
            </span>
            in Seconds
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your social media presence with AI that understands trending topics, 
            creates engaging content, and schedules posts across all platforms automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              Start Creating Now
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 border border-white/20 hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-400 mr-2" />
                <span className="text-3xl font-bold">10x</span>
              </div>
              <p className="text-gray-400 group-hover:text-white transition-colors">Faster Content Creation</p>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-yellow-400 mr-2" />
                <span className="text-3xl font-bold">95%</span>
              </div>
              <p className="text-gray-400 group-hover:text-white transition-colors">Time Saved Weekly</p>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-purple-400 mr-2" />
                <span className="text-3xl font-bold">50k+</span>
              </div>
              <p className="text-gray-400 group-hover:text-white transition-colors">Posts Generated</p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg rotate-12 opacity-80"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;