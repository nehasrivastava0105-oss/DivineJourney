import React, { useState } from 'react';
import { X, Sparkles, Accessibility, Heart, Shield, Check } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignInSuccess: (user: { name: string; email: string }) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSignInSuccess,
}) => {
  const [email, setEmail] = useState('thomas.pilgrim@example.com');
  const [name, setName] = useState('Thomas Reynolds');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignInSuccess({ name, email });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-[#c6c5d4]/40 relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0eded] hover:bg-[#eae8e7] flex items-center justify-center text-[#1b1c1c]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#1a237e]/10 flex items-center justify-center text-[#000666] mb-4">
          <Sparkles className="w-6 h-6" />
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#000666] mb-1">
          Welcome to Divine Journey AI
        </h3>
        <p className="text-xs text-[#454652] mb-6">
          Sign in to access your saved pilgrimages, senior preferences, and live AI travel companion.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#000666] uppercase mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#c6c5d4] text-sm text-[#1b1c1c] outline-none focus:border-[#000666]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#000666] uppercase mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-[#c6c5d4] text-sm text-[#1b1c1c] outline-none focus:border-[#000666]"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#fe9832] text-[#683700] hover:bg-[#8f4e00] hover:text-white font-bold text-sm transition-colors shadow-sm cursor-pointer"
            >
              Enter Sacred Companion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [seniorPacing, setSeniorPacing] = useState(true);
  const [wheelchairAccess, setWheelchairAccess] = useState(true);
  const [sattvicDiet, setSattvicDiet] = useState(true);
  const [morningAlerts, setMorningAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#c6c5d4]/40 relative animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0eded] hover:bg-[#eae8e7] flex items-center justify-center text-[#1b1c1c]"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-[#000666] mb-1">
          Pilgrim Preferences & Accessibility
        </h3>
        <p className="text-xs text-[#454652] mb-6">
          Customize how our AI Concierge designs your physical pacing, transport, and temple access.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3.5 bg-[#f5f3f3] rounded-2xl">
            <div className="flex items-center gap-3">
              <Accessibility className="w-5 h-5 text-[#8f4e00]" />
              <div>
                <p className="text-sm font-bold text-[#1b1c1c]">Senior-Friendly Pacing</p>
                <p className="text-xs text-[#454652]">Max 2-3 hours walking per day with frequent rest stops</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={seniorPacing}
              onChange={(e) => setSeniorPacing(e.target.checked)}
              className="w-5 h-5 text-[#8f4e00] rounded accent-[#8f4e00] cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 bg-[#f5f3f3] rounded-2xl">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#8f4e00]" />
              <div>
                <p className="text-sm font-bold text-[#1b1c1c]">Wheelchair & Step-Free Routes</p>
                <p className="text-xs text-[#454652]">Prioritize elevators, ramps, and electric cart services</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={wheelchairAccess}
              onChange={(e) => setWheelchairAccess(e.target.checked)}
              className="w-5 h-5 text-[#8f4e00] rounded accent-[#8f4e00] cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between p-3.5 bg-[#f5f3f3] rounded-2xl">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#8f4e00]" />
              <div>
                <p className="text-sm font-bold text-[#1b1c1c]">Sattvic / Pure Vegetarian Dining</p>
                <p className="text-xs text-[#454652]">Filter restaurants for onion/garlic-free or pure devotional meals</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={sattvicDiet}
              onChange={(e) => setSattvicDiet(e.target.checked)}
              className="w-5 h-5 text-[#8f4e00] rounded accent-[#8f4e00] cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#c6c5d4]/40 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-[#000666] text-[#000666] font-semibold text-xs md:text-sm hover:bg-[#e0e0ff]/30"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-full bg-[#8f4e00] text-white font-bold text-xs md:text-sm hover:bg-[#8f4e00]/90 flex items-center gap-2"
          >
            {saved ? <Check className="w-4 h-4" /> : null}
            <span>{saved ? 'Preferences Saved' : 'Save Preferences'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
