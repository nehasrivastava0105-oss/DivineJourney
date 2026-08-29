import React from 'react';
import { Map, Home, Bot, Church, Settings, Sparkles } from 'lucide-react';
import { ScreenType } from '../types';

interface SideNavBarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSettings: () => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSettings,
}) => {
  return (
    <nav className="bg-[#ffffff] border-r border-[#c6c5d4]/40 shadow-lg h-full w-72 fixed left-0 top-0 z-40 hidden lg:flex flex-col py-6">
      {/* Brand Header */}
      <div className="px-6 mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="text-left group"
        >
          <h1 className="font-serif text-3xl text-[#000666] leading-tight font-bold tracking-tight">
            Divine Journey AI
          </h1>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2 flex-grow">
        {/* Active Tab: My Journeys */}
        <button
          onClick={() => onNavigate('dashboard')}
          className={`mx-4 px-4 py-3 rounded-full flex items-center gap-3 text-sm font-semibold transition-all duration-200 ${
            currentScreen === 'dashboard'
              ? 'bg-[#fe9832] text-[#683700] shadow-sm font-bold'
              : 'text-[#454652] hover:bg-[#e0e0ff]/30 hover:text-[#000666]'
          }`}
        >
          <Map className="w-5 h-5" />
          <span>My Journeys</span>
        </button>

        <button
          onClick={() => onNavigate('home')}
          className={`mx-4 px-4 py-3 rounded-full flex items-center gap-3 text-sm font-semibold transition-all duration-200 ${
            currentScreen === 'home'
              ? 'bg-[#fe9832] text-[#683700] shadow-sm font-bold'
              : 'text-[#454652] hover:bg-[#e0e0ff]/30 hover:text-[#000666]'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => onNavigate('planner')}
          className={`mx-4 px-4 py-3 rounded-full flex items-center gap-3 text-sm font-semibold transition-all duration-200 ${
            currentScreen === 'planner'
              ? 'bg-[#fe9832] text-[#683700] shadow-sm font-bold'
              : 'text-[#454652] hover:bg-[#e0e0ff]/30 hover:text-[#000666]'
          }`}
        >
          <Bot className="w-5 h-5" />
          <span>Spiritual AI</span>
        </button>

        <button
          onClick={() => onNavigate('destination')}
          className={`mx-4 px-4 py-3 rounded-full flex items-center gap-3 text-sm font-semibold transition-all duration-200 ${
            currentScreen === 'destination'
              ? 'bg-[#fe9832] text-[#683700] shadow-sm font-bold'
              : 'text-[#454652] hover:bg-[#e0e0ff]/30 hover:text-[#000666]'
          }`}
        >
          <Church className="w-5 h-5" />
          <span>Sacred Sites</span>
        </button>

        {/* Settings button pinned above profile */}
        <button
          onClick={onOpenSettings}
          className="mx-4 px-4 py-3 rounded-full flex items-center gap-3 text-sm font-semibold text-[#454652] hover:bg-[#e0e0ff]/30 hover:text-[#000666] transition-all duration-200 mt-auto"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </div>

      {/* User Profile Card & CTA */}
      <div className="px-6 mt-6">
        <div className="flex items-center gap-3 mb-4 p-3.5 rounded-xl bg-[#f5f3f3] border border-[#c6c5d4]/40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAySvsFLclwFSKAwXh1hzU8nILDBojgPPbjQ2UVecIMT7l1LoKcTXQ13vCG-XF70G9F3TKpf3QKc_iGT5TcS1dpnytPxOb7LO79IxrEz_YgpWrR5FjjLqdosV2gzGlwYQ7VNEntx0apaNdfFnEFegwW6_OMTJXOhMPsDA5dr0pN3tF0q1qGHKPT2J4sz58NCdfSfIEH3hjK8SCgKQcJIh3Iujmkt-kzGCFjVW_hWveIglLOcQdpFBNP"
            alt="Thomas - Senior Pilgrim"
            className="w-11 h-11 rounded-full object-cover shadow-sm border border-white"
          />
          <div className="overflow-hidden">
            <p className="font-serif text-sm font-semibold text-[#000666] truncate">
              Peace be with you
            </p>
            <p className="text-xs text-[#454652] truncate">
              Your spiritual journey awaits
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('planner')}
          className="w-full bg-[#8f4e00] hover:bg-[#8f4e00]/90 text-white font-semibold text-sm rounded-full py-3 transition-colors flex justify-center items-center gap-2 shadow-sm cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Start New Pilgrimage</span>
        </button>
      </div>
    </nav>
  );
};
