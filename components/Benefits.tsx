'use client'

import React, { useEffect, useRef } from 'react';
import { Clock, DollarSign, TrendingUp, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

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

    const elements = benefitsRef.current?.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: 'Save 10+ Hours Weekly',
      description: 'Automate your content creation and scheduling process, freeing up time to focus on strategy and engagement.',
      stats: '95% time reduction',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: DollarSign,
      title: 'Reduce Marketing Costs',
      description: 'Cut down on expensive content agencies and freelancers while maintaining professional quality output.',
      stats: '$5,000+ saved monthly',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: TrendingUp,
      title: 'Boost Engagement by 300%',
      description: 'AI-optimized content performs better, leading to higher engagement rates and faster follower growth.',
      stats: '3x more engagement',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Shield,
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice and messaging across all platforms with AI-powered content guidelines.',
      stats: '100% brand aligned',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" ref={benefitsRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Nxt Post AI?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of creators and businesses who have transformed their 
            social media presence with our AI-powered platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'} group`}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
                <div className="flex items-start gap-6">
                  <div className={`${benefit.bgColor} ${benefit.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
                        {benefit.title}
                      </h3>
                      <span className={`${benefit.color} text-sm font-medium px-3 py-1 rounded-full ${benefit.bgColor} border border-current/20`}>
                        {benefit.stats}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="scroll-animate">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  50k+
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">Active Users</p>
              </div>
              
              <div className="group">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  2M+
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">Posts Created</p>
              </div>
              
              <div className="group">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  99.9%
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">Uptime</p>
              </div>
              
              <div className="group">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  4.9/5
                </div>
                <p className="text-gray-400 group-hover:text-white transition-colors">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;