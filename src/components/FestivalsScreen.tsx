import React from 'react';
import { Calendar, MapPin, Sparkles, Flame, Clock } from 'lucide-react';
import { FESTIVALS } from '../data/spiritualData';
import { ScreenType } from '../types';

interface FestivalsScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onPlanFestivalJourney: (festivalName: string, location: string, tradition: string) => void;
}

export const FestivalsScreen: React.FC<FestivalsScreenProps> = ({
  onNavigate,
  onPlanFestivalJourney,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#fbf9f8] pt-24 pb-16 px-5 md:px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold text-[#8f4e00] uppercase tracking-wider bg-[#ffdcc2]/80 px-4 py-1.5 rounded-full inline-block mb-3">
          Sacred Observances & Calendars
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#000666] mb-4">
          World Sacred Festivals
        </h1>
        <p className="text-base md:text-lg text-[#454652] leading-relaxed">
          Witness celestial celebrations, lamp lightings, and communal prayers. Let AI align
          your pilgrimage with auspicious dates and crowd-mitigated access.
        </p>
      </div>

      {/* Festivals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {FESTIVALS.map((fest) => (
          <div
            key={fest.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#c6c5d4]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            <div className="h-56 relative overflow-hidden">
              <img
                src={fest.image}
                alt={fest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-[#fe9832] text-[#683700] px-3 py-1 rounded-full text-xs font-bold">
                  {fest.tradition}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-[#ffdcc2] font-semibold flex items-center gap-1 mb-1">
                  <Calendar className="w-3.5 h-3.5" /> {fest.month}
                </span>
                <h3 className="font-serif text-xl font-bold leading-tight">{fest.name}</h3>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="space-y-3 mb-6">
                <p className="text-xs text-[#767683] flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-4 h-4 text-[#8f4e00]" /> {fest.location}
                </p>
                <p className="text-sm text-[#454652] leading-relaxed">{fest.description}</p>
                <div className="p-3 bg-[#f5f3f3] rounded-xl text-xs text-[#735c00] border border-[#cba72f]/30">
                  <span className="font-bold">Significance: </span>
                  {fest.significance}
                </div>
              </div>

              <button
                onClick={() => onPlanFestivalJourney(fest.name, fest.location, fest.tradition)}
                className="w-full bg-[#1a237e] hover:bg-[#000666] text-white font-bold text-xs md:text-sm py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#fe9832]" />
                <span>Plan Pilgrimage for this Festival</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
