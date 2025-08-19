'use client'

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const CTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ctaRef.current?.querySelectorAll('.scroll-animate, .scroll-animate-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    'No credit card required',
    '7-day free trial',
    'Cancel anytime',
    '24/7 support'
  ];

  return (
    <section className="py-24 bg-gradient-cosmic animate-gradient relative overflow-hidden" ref={ctaRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <div className="scroll-animate">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Your Content Game?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 50,000+ creators who are already using AI to create viral content 
            and grow their audience faster than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 border border-white/20 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Highlight */}
        <div className="scroll-animate-scale mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-md mx-auto hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">
                <span className="line-through text-gray-400 text-xl mr-2">$99</span>
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">$49</span>
                <span className="text-lg text-gray-300">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">50% off your first 3 months</p>
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full px-3 py-1 text-green-400 text-sm font-medium">
                Save $150 today!
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="scroll-animate mt-12">
          <p className="text-gray-400 text-sm mb-4">Join creators from these platforms:</p>
          <div className="flex justify-center items-center gap-6 opacity-60">
            {['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Facebook'].map((platform, index) => (
              <span key={index} className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;