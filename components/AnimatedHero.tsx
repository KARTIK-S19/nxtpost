'use client'
import React, { useEffect, useState } from 'react';
import { Play, Heart, Sparkles, MessageCircle, Share, Verified } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

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
      case 'instagram': return 'from-pink-500 to-purple-600';
      case 'tiktok': return 'from-black to-red-500';
      case 'twitter': return 'from-blue-400 to-blue-600';
      case 'youtube': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const ContentCard: React.FC<{ content: CreatorContent; index: number }> = ({ content, index }) => (
    <div
      className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
      style={{ aspectRatio: '9/16', minHeight: '280px', animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <Image
            src={content.avatar}
            alt={content.creator}
            height={40}
            width={40}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${getPlatformColor(content.platform)} rounded-full flex items-center justify-center`}>
            {content.platform === 'youtube' && <Play className="w-2 h-2 text-white" />}
            {content.platform === 'tiktok' && <div className="w-2 h-2 bg-white rounded-full" />}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="text-white font-medium text-sm">{content.creator}</span>
            {content.verified && <Verified className="w-4 h-4 text-blue-400 fill-current" />}
          </div>
          <span className="text-gray-400 text-xs capitalize">{content.platform}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4 flex-1">
        <p className="text-white text-sm leading-relaxed line-clamp-4">
          {content.content}
        </p>
      </div>

      {/* Engagement */}
      <div className="flex items-center justify-between text-gray-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 group-hover:text-red-400 transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-xs">{content.likes}</span>
          </div>
          <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs">{content.comments}</span>
          </div>
        </div>
        <Share className="w-4 h-4 group-hover:text-green-400 transition-colors cursor-pointer" />
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
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

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/60 pointer-events-none" />
      </div>

      {/* Page Corner Elements */}
      <div className="absolute top-6 left-6 z-20">
        <Image 
          src="/images/nxtpostlogo.png" 
          alt="NxtPost Logo" 
          width={160} 
          height={50} 
        />
      </div>
      
      <div className="absolute top-10.5 right-15 z-20">
        <Button variant="outline" className="bg-transparent border border-white/30 hover:bg-white/10 hover:text-white px-6 py-4">
          Sign in
        </Button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full h-fit">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Center Badges */}
          <div className="flex items-center justify-center gap-4 mb-10 mt-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse-glow h-10">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium text-white">Join 50,000+ Creators</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-pulse-glow h-10">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium text-white">AI-Powered Content Generation</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-4xl lg:text-8xl font-bold mb-8 mt-5 leading-tighter tracking-tighter">
            <span className="block text-white mb-4">Create Viral</span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              Social Content
            </span>
            <span className="block text-white">with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed tracking-tight">
            Transform your social media presence with AI that understands trending topics, creates engaging content, and schedules posts across all platforms automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center relative overflow-hidden">
              <span className="relative z-10">Start Creating Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md rounded-full font-semibold text-lg text-white transition-all duration-300 hover:bg-white/20 border border-white/20 hover:scale-105 hover:border-white/40">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                10x
              </div>
              <p className="text-gray-400 group-hover:text-white transition-colors">Faster Content Creation</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                95%
              </div>
              <p className="text-gray-400 group-hover:text-white transition-colors">Time Saved Weekly</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                2M+
              </div>
              <p className="text-gray-400 group-hover:text-white transition-colors">Posts Generated</p>
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
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default AnimatedHero;