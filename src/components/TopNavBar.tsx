import React, { useState } from 'react';
import { Compass, Menu, X, Sparkles, User, LogOut } from 'lucide-react';
import { ScreenType } from '../types';

interface TopNavBarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSignIn: () => void;
  user: { name: string; email: string } | null;
  onSignOut: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  currentScreen,
  onNavigate,
  onOpenSignIn,
  user,
  onSignOut,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; screen: ScreenType }[] = [
    { label: 'Home', screen: 'home' },
    { label: 'Explore', screen: 'destination' },
    { label: 'AI Planner', screen: 'planner' },
    { label: 'Packages', screen: 'packages' },
    { label: 'Festivals', screen: 'festivals' },
  ];

  return (
    <nav className="bg-[#fbf9f8]/90 backdrop-blur-md border-b border-[#000666]/10 shadow-sm fixed top-0 w-full z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-5 md:px-16 h-20 max-w-[1280px] mx-auto">
        {/* Brand */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-left group transition-transform"
        >
          <div className="w-10 h-10 rounded-full bg-[#1a237e]/10 flex items-center justify-center text-[#000666] group-hover:bg-[#1a237e]/20 transition-colors">
            <Compass className="w-6 h-6 text-[#000666]" />
          </div>
          <span className="font-serif text-2xl md:text-3xl text-[#000666] tracking-tight font-bold">
            Divine Journey AI
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.screen;
            return (
              <li key={link.label}>
                <button
                  onClick={() => onNavigate(link.screen)}
                  className={`text-sm font-semibold tracking-wide transition-all px-2 py-1 rounded ${
                    isActive
                      ? 'text-[#8f4e00] font-bold border-b-2 border-[#8f4e00] pb-1'
                      : 'text-[#454652] hover:text-[#000666] hover:bg-[#eae8e7]/50'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
          {/* Dashboard shortcut link */}
          <li>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`text-sm font-semibold tracking-wide transition-all px-2 py-1 rounded ${
                currentScreen === 'dashboard'
                  ? 'text-[#8f4e00] font-bold border-b-2 border-[#8f4e00] pb-1'
                  : 'text-[#454652] hover:text-[#000666] hover:bg-[#eae8e7]/50'
              }`}
            >
              My Journeys
            </button>
          </li>
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3 bg-[#f0eded] py-1.5 px-3 rounded-full border border-[#c6c5d4]/40">
              <button
                onClick={() => onNavigate('dashboard')}
                className="flex items-center gap-2 text-sm font-semibold text-[#000666] hover:underline"
              >
                <div className="w-6 h-6 rounded-full bg-[#fe9832] text-[#683700] text-xs flex items-center justify-center font-bold">
                  {user.name.charAt(0)}
                </div>
                <span>{user.name.split(' ')[0]}</span>
              </button>
              <button
                onClick={onSignOut}
                title="Sign Out"
                className="text-[#767683] hover:text-[#ba1a1a] transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenSignIn}
              className="text-sm font-semibold text-[#000666] hover:text-[#1a237e] transition-colors px-3 py-2"
            >
              Sign In
            </button>
          )}

          <button
            onClick={() => onNavigate('planner')}
            className="text-sm font-bold bg-[#fe9832] text-[#683700] px-6 py-3 rounded-full hover:bg-[#8f4e00] hover:text-white transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Plan My Journey</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#000666] p-2 rounded-lg hover:bg-[#eae8e7]/60 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b border-[#c6c5d4]/40 px-6 py-5 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => {
                    onNavigate(link.screen);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left py-2 px-3 rounded-lg text-base font-semibold ${
                    currentScreen === link.screen
                      ? 'bg-[#fe9832]/20 text-[#8f4e00] font-bold'
                      : 'text-[#454652] hover:bg-[#f0eded]'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  onNavigate('dashboard');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 rounded-lg text-base font-semibold ${
                  currentScreen === 'dashboard'
                    ? 'bg-[#fe9832]/20 text-[#8f4e00] font-bold'
                    : 'text-[#454652] hover:bg-[#f0eded]'
                }`}
              >
                My Journeys (Dashboard)
              </button>
            </li>
          </ul>

          <div className="pt-4 border-t border-[#c6c5d4]/30 flex flex-col gap-3">
            {user ? (
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-semibold text-[#000666]">
                  Signed in as {user.name}
                </span>
                <button
                  onClick={onSignOut}
                  className="text-xs text-[#ba1a1a] underline font-semibold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onOpenSignIn();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-full border border-[#000666] text-[#000666] font-semibold text-sm"
              >
                Sign In
              </button>
            )}

            <button
              onClick={() => {
                onNavigate('planner');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-3 rounded-full bg-[#fe9832] text-[#683700] font-bold text-sm shadow-md"
            >
              Plan My Journey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
