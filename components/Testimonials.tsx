'use client'

import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

    const elements = testimonialsRef.current?.querySelectorAll('.scroll-animate, .scroll-animate-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Social Media Manager',
      company: 'TechStart Inc.',
      content: 'Post Pilot AI has completely transformed our social media strategy. We\'ve seen a 400% increase in engagement and saved countless hours of content creation time.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Content Creator',
      company: '1.2M Followers',
      content: 'The AI understands my brand voice perfectly. It\'s like having a professional copywriter who knows exactly what my audience wants to hear.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GrowthLab',
      content: 'The ROI has been incredible. We\'ve reduced our content creation costs by 80% while improving quality and consistency across all platforms.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'CEO',
      company: 'InnovateNow',
      content: 'Post Pilot AI doesn\'t just create content, it creates content that converts. Our social media leads have increased by 250% since we started using it.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Influencer',
      company: '500K Followers',
      content: 'I was skeptical about AI content at first, but Post Pilot AI creates posts that feel authentically me. My engagement rates have never been higher.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Digital Marketer',
      company: 'MarketPro Agency',
      content: 'We manage 50+ client accounts, and Post Pilot AI has made it possible to scale our content creation without compromising quality. It\'s a game-changer.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden" ref={testimonialsRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonial-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              50,000+ Creators
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See why content creators and businesses worldwide choose Post Pilot AI 
            to transform their social media presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="scroll-animate-scale bg-slate-700/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-indigo-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="scroll-animate">
          <div className="text-center">
            <p className="text-gray-400 mb-8">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Google', 'Microsoft', 'Adobe', 'Shopify', 'Stripe', 'Slack'].map((company, index) => (
                <div 
                  key={index}
                  className="text-2xl font-bold text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;