'use client'
import React, { useEffect, useState } from 'react';
import { Play, Heart, Sparkles, MessageCircle, Share, Verified } from 'lucide-react';
import Image from 'next/image';

interface CreatorContent {
  id: number;
  creator: string;
  avatar: string;
  content: string;
  likes: string;
  comments: string;
  platform: 'instagram' | 'tiktok' | 'twitter' | 'youtube';
  verified?: boolean;
}

const AnimatedHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sample creator content data
  const creatorContent: CreatorContent[] = [
    {
      id: 1,
      creator: '@sarahcreates',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'Just launched my new product line! The response has been incredible 🚀',
      likes: '12.5K',
      comments: '234',
      platform: 'instagram',
      verified: true
    },
    {
      id: 2,
      creator: '@techguru',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'AI is revolutionizing content creation. Here\'s what you need to know...',
      likes: '8.2K',
      comments: '156',
      platform: 'twitter'
    },
    {
      id: 3,
      creator: '@lifestyleblogger',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'Morning routine that changed my life ✨ Swipe for details!',
      likes: '15.7K',
      comments: '892',
      platform: 'instagram',
      verified: true
    },
    {
      id: 4,
      creator: '@fitnesscoach',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: '30-day transformation challenge starts tomorrow! Who\'s in?',
      likes: '22.1K',
      comments: '1.2K',
      platform: 'tiktok'
    },
    {
      id: 5,
      creator: '@foodieadventures',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'Recipe reveal: The viral pasta everyone\'s talking about 🍝',
      likes: '18.9K',
      comments: '567',
      platform: 'youtube',
      verified: true
    },
    {
      id: 6,
      creator: '@businessmind',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'From 0 to 6 figures in 12 months. Here\'s my exact strategy...',
      likes: '31.4K',
      comments: '2.1K',
      platform: 'twitter'
    },
    {
      id: 7,
      creator: '@travelwithme',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'Hidden gems in Bali you NEED to visit 🏝️ Thread below 👇',
      likes: '9.8K',
      comments: '445',
      platform: 'instagram'
    },
    {
      id: 8,
      creator: '@mindfulmoments',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
      content: 'Daily meditation changed everything. Here\'s how to start...',
      likes: '7.3K',
      comments: '189',
      platform: 'tiktok'
    }
  ];

  // Duplicate content for seamless scrolling
  const scrollingContent = [...creatorContent, ...creatorContent, ...creatorContent];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'from-slate-400 to-slate-500';
      case 'tiktok': return 'from-slate-500 to-slate-600';
      case 'twitter': return 'from-slate-400 to-slate-500';
      case 'youtube': return 'from-slate-500 to-slate-600';
      default: return 'from-slate-400 to-slate-500';
    }
  };

  const ContentCard: React.FC<{ content: CreatorContent; index: number }> = ({ content, index }) => (
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
      style={{ aspectRatio: '9/16', minHeight: '240px', maxHeight: '320px', animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="relative">
          <img
            src={content.avatar}
            alt={content.creator}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${getPlatformColor(content.platform)} rounded-full flex items-center justify-center`}>
            {content.platform === 'youtube' && <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" />}
            {content.platform === 'tiktok' && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-white font-medium text-xs sm:text-sm truncate">{content.creator}</span>
            {content.verified && <Verified className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300 fill-current flex-shrink-0" />}
          </div>
          <span className="text-slate-400 text-xs capitalize">{content.platform}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-3 sm:mb-4 flex-1">
        <p className="text-white text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
          {content.content}
        </p>
      </div>

      {/* Engagement */}
      <div className="flex items-center justify-between text-slate-300">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1 group-hover:text-slate-200 transition-colors">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs">{content.likes}</span>
          </div>
          <div className="flex items-center gap-1 group-hover:text-slate-200 transition-colors">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs">{content.comments}</span>
          </div>
        </div>
        <Share className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-slate-200 transition-colors cursor-pointer" />
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Desktop: 4 columns */}
        <div className="hidden lg:block">
          {/* Column 1 - Scrolling Up */}
          <div className="absolute left-0 top-0 w-1/4 h-full">
            <div className="animate-scroll-up flex flex-col gap-6 p-4">
              {scrollingContent.slice(0, 8).map((content, index) => (
                <ContentCard key={`col1-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolling Down */}
          <div className="absolute left-1/4 top-0 w-1/4 h-full">
            <div className="animate-scroll-down flex flex-col gap-6 p-4" style={{ animationDelay: '2s' }}>
              {scrollingContent.slice(2, 10).map((content, index) => (
                <ContentCard key={`col2-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>

          {/* Column 3 - Scrolling Up */}
          <div className="absolute right-1/4 top-0 w-1/4 h-full">
            <div className="animate-scroll-up flex flex-col gap-6 p-4" style={{ animationDelay: '4s' }}>
              {scrollingContent.slice(4, 12).map((content, index) => (
                <ContentCard key={`col3-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>

          {/* Column 4 - Scrolling Down */}
          <div className="absolute right-0 top-0 w-1/4 h-full">
            <div className="animate-scroll-down flex flex-col gap-6 p-4" style={{ animationDelay: '6s' }}>
              {scrollingContent.slice(6, 14).map((content, index) => (
                <ContentCard key={`col4-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden md:block lg:hidden">
          {/* Column 1 - Scrolling Up */}
          <div className="absolute left-0 top-0 w-1/2 h-full">
            <div className="animate-scroll-up flex flex-col gap-4 p-3">
              {scrollingContent.slice(0, 8).map((content, index) => (
                <ContentCard key={`tab-col1-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scrolling Down */}
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <div className="animate-scroll-down flex flex-col gap-4 p-3" style={{ animationDelay: '3s' }}>
              {scrollingContent.slice(4, 12).map((content, index) => (
                <ContentCard key={`tab-col2-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: 1 column */}
        <div className="block md:hidden">
          <div className="absolute left-0 top-0 w-full h-full">
            <div className="animate-scroll-up flex flex-col gap-3 p-2">
              {scrollingContent.slice(0, 6).map((content, index) => (
                <ContentCard key={`mobile-${content.id}-${index}`} content={content} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60 pointer-events-none" />
      </div>

      {/* Page Corner Elements */}
      {/* <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <Image src="/images/nxtpostlogo.png" alt="NxtPost Logo" width={150} height={40} />
      </div>
      
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base">
          Get Started
        </button>
      </div> */}
 
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full h-fit">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Center Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 mt-8 sm:mt-10 px-4">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse-glow h-9 sm:h-10">
              <div className="w-2 h-2 bg-teal-300 rounded-full mr-2 sm:mr-3 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">Join 50,000+ Creators</span> 
            </div>
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse-glow h-9 sm:h-10">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-300" />
              <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">AI-Powered Content</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-8 mt-5 sm:mt-5 leading-tighter  tracking-tighter px-4">
            <span className="block text-white mb-2 sm:mb-4">Create Viral</span>
            <span className="block bg-gradient-to-r from-blue-500 via-blue-300 to-teal-400 bg-clip-text text-transparent animate-gradient">
              Social Content
            </span>
            <span className="block text-white">with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed tracking-tight px-4">
            Transform your social media presence with AI that understands trending topics, creates engaging content, and schedules posts across all platforms automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <button className="group px-6 py-4 sm:px-10 sm:py-5 bg-white/15 backdrop-blur-md rounded-2xl font-bold text-base sm:text-lg text-white transition-all duration-300 hover:scale-105 hover:bg-white/25 border border-white/30 hover:border-white/50 flex items-center justify-center relative overflow-hidden hover:shadow-xl hover:shadow-white/10">
              <span className="relative z-10">Start Creating Now</span>
            </button>
            <button className="px-6 py-4 sm:px-10 sm:py-5 bg-white/10 backdrop-blur-md rounded-2xl font-semibold text-base sm:text-lg text-white transition-all duration-300 hover:bg-white/20 border border-white/20 hover:scale-105 hover:border-white/40">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 px-4">
            <div className="group text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                10x
              </div>
              <p className="text-slate-400 group-hover:text-white transition-colors text-sm sm:text-base">Faster Content Creation</p>
            </div>
            <div className="group text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <p className="text-slate-400 group-hover:text-white transition-colors text-sm sm:text-base">Time Saved Weekly</p>
            </div>
            <div className="group text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                2M+
              </div>
              <p className="text-slate-400 group-hover:text-white transition-colors text-sm sm:text-base">Posts Generated</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }

        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.2); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-scroll-up {
          animation: scroll-up 35s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 35s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-scroll-up,
          .animate-scroll-down {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedHero;