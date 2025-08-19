'use client'

import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API', href: '#api' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Changelog', href: '#changelog' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Partners', href: '#partners' },
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Templates', href: '#templates' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' },
    ],
    Legal: [
      { name: 'Privacy', href: '#privacy' },
      { name: 'Terms', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'GDPR', href: '#gdpr' },
      { name: 'Cookie Policy', href: '#cookies' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'GitHub', icon: Github, href: '#github' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Post Pilot AI</h3>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Transform your social media presence with AI-powered content generation, 
                smart scheduling, and performance analytics.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>hello@postpilotai.com</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:ml-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Stay Updated
                </h4>
                <p className="text-gray-400 mb-6">
                  Get the latest AI content tips, product updates, and industry insights 
                  delivered to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 mt-3">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-slate-800">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="text-white font-semibold mb-4">{category}</h5>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Post Pilot AI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;