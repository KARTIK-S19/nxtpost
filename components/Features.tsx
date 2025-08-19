'use client'

import React, { useEffect, useRef } from 'react';
import { Brain, Calendar, Target, Zap, BarChart3, Users } from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const elements = featuresRef.current?.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create engaging posts, captions, and hashtags tailored to your brand voice and audience preferences.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically schedule posts at optimal times for maximum engagement across all social platforms.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Target,
      title: 'Audience Targeting',
      description: 'Leverage AI to identify and target the right audience segments for better reach and conversion.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Trend Analysis',
      description: 'Stay ahead with real-time trend analysis and content suggestions based on viral patterns.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track engagement, reach, and ROI with comprehensive analytics and actionable insights.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Multi-Platform Management',
      description: 'Manage all your social accounts from one dashboard with cross-platform optimization.',
      gradient: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <section className="py-24 bg-slate-800" ref={featuresRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Content Creators
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, schedule, and optimize your social media content 
            with the power of artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`scroll-animate-scale bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-slate-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;