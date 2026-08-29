import React from 'react';
import { Compass, Heart, Shield, Sparkles } from 'lucide-react';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#ffffff] border-t border-[#000666]/10 pt-16 pb-12 text-[#454652] mt-auto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1a237e]/10 flex items-center justify-center text-[#000666]">
              <Compass className="w-5 h-5 text-[#000666]" />
            </div>
            <span className="font-serif text-2xl text-[#000666] font-bold">
              Divine Journey AI
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#767683] leading-relaxed">
            Your trusted spiritual travel companion. Thoughtfully crafting sacred itineraries
            with reverent pacing, theological depth, and accessible comfort.
          </p>
        </div>

        {/* Sacred Horizons */}
        <div>
          <h4 className="font-serif text-base font-bold text-[#000666] mb-4">
            Sacred Horizons
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li>
              <button
                onClick={() => onNavigate('destination')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Varanasi & Sarnath
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destination')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Tirumala Venkateswara
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destination')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Jerusalem Old City
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('destination')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Bodh Gaya Enlightenment
              </button>
            </li>
          </ul>
        </div>

        {/* AI Capabilities */}
        <div>
          <h4 className="font-serif text-base font-bold text-[#000666] mb-4">
            Spiritual AI Tools
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li>
              <button
                onClick={() => onNavigate('planner')}
                className="hover:text-[#8f4e00] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#fe9832]" /> Custom Pilgrimage Generator
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('dashboard')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Senior & Mobility Pacing
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('packages')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Fully Supported Packages
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('festivals')}
                className="hover:text-[#8f4e00] transition-colors"
              >
                Sacred Festival Calendars
              </button>
            </li>
          </ul>
        </div>

        {/* Safety & Values */}
        <div>
          <h4 className="font-serif text-base font-bold text-[#000666] mb-4">
            Reverence & Access
          </h4>
          <div className="space-y-3 text-xs text-[#767683] leading-relaxed">
            <p className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-[#8f4e00] shrink-0 mt-0.5" />
              <span>Verified wheelchair routes, temple assistance passes, and emergency contact network.</span>
            </p>
            <p className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-[#8f4e00] shrink-0 mt-0.5" />
              <span>Interfaith respect across all traditions, shrines, and sacred communities.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-16 pt-8 border-t border-[#c6c5d4]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#767683]">
        <p>© 2025 Divine Journey AI. Crafted with reverence for spiritual seekers worldwide.</p>
        <div className="flex gap-6">
          <span className="hover:text-[#000666] cursor-pointer">Privacy & Data Reverence</span>
          <span className="hover:text-[#000666] cursor-pointer">Pilgrim Support</span>
          <span className="hover:text-[#000666] cursor-pointer">Accessibility Statement</span>
        </div>
      </div>
    </footer>
  );
};
