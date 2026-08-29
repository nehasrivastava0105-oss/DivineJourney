import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Accessibility,
  Sparkles,
  Bot,
  MapPin,
  Check,
  ChevronRight,
  Info,
  Building,
} from 'lucide-react';
import { DESTINATIONS } from '../data/spiritualData';
import { Destination, ScreenType } from '../types';

interface DestinationDetailScreenProps {
  destination: Destination;
  onBack: () => void;
  onNavigate: (screen: ScreenType) => void;
  onPlanDestination: (dest: Destination) => void;
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationDetailScreen: React.FC<DestinationDetailScreenProps> = ({
  destination,
  onBack,
  onNavigate,
  onPlanDestination,
  onSelectDestination,
}) => {
  const [selectedSiteModal, setSelectedSiteModal] = useState<any | null>(null);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fbf9f8] pt-20">
      {/* Top Bar for Destination View matching HTML 3 */}
      <div className="border-b border-[#c6c5d4]/40 bg-white/90 backdrop-blur-md sticky top-20 z-30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-[#000666] hover:text-[#8f4e00] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Horizons</span>
          </button>

          {/* Quick Destination Switcher */}
          <div className="hidden sm:flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {DESTINATIONS.map((d) => (
              <button
                key={d.id}
                onClick={() => onSelectDestination(d)}
                className={`px-3 py-1 text-xs rounded-full font-bold transition-all ${
                  d.id === destination.id
                    ? 'bg-[#1a237e] text-white shadow-xs'
                    : 'bg-[#f0eded] text-[#454652] hover:bg-[#eae8e7]'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => onPlanDestination(destination)}
            className="bg-[#fe9832] text-[#683700] hover:bg-[#8f4e00] hover:text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Plan This Journey</span>
          </button>
        </div>
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.heroAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 max-w-[1280px] mx-auto text-white">
          <span className="bg-[#8f4e00] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block shadow-sm">
            SACRED DESTINATION • {destination.tradition.toUpperCase()}
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-md">
            {destination.name} — The Spiritual Heart of {destination.country}
          </h1>

          <p className="text-base md:text-lg text-[#ffdcc2] max-w-2xl font-light">
            Where the sacred traditions meet the timeless spirit of devotion and inner peace.
          </p>
        </div>
      </section>

      {/* Main Content Layout (2 Columns) */}
      <main className="max-w-[1280px] mx-auto px-5 md:px-16 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Deep Overview & Sacred Sites */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {/* The Eternal City Story */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-[#000666] font-bold mb-4">
                The Sacred Realm of {destination.name}
              </h2>
              <div className="space-y-4 text-base md:text-lg text-[#454652] leading-relaxed">
                {destination.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Essential Details Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Best Time to Visit Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#c6c5d4]/40 shadow-xs flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#cba72f]/20 flex items-center justify-center text-[#735c00]">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#000666]">
                  Best Time to Visit
                </h3>
                <p className="text-sm text-[#454652] leading-relaxed">
                  {destination.bestTimeToVisitDetails}
                </p>
              </div>

              {/* Accessibility Card */}
              <div className="bg-white p-6 rounded-2xl border border-[#c6c5d4]/40 shadow-xs flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-[#cba72f]/20 flex items-center justify-center text-[#735c00]">
                  <Accessibility className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#000666]">
                  Accessibility & Comfort
                </h3>
                <p className="text-sm text-[#454652] leading-relaxed">
                  {destination.accessibilityDetails}
                </p>
              </div>
            </section>

            {/* Sacred Sites Section */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl text-[#000666] font-bold mb-6">
                Sacred Sites in {destination.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destination.sacredSites.map((site) => (
                  <div
                    key={site.id}
                    className="bg-white rounded-2xl overflow-hidden border border-[#c6c5d4]/40 shadow-xs group hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={site.image}
                        alt={site.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-[#000666] mb-2">
                        {site.name}
                      </h3>
                      <p className="text-sm text-[#454652] mb-4 leading-relaxed">
                        {site.description}
                      </p>
                      {site.accessibilityNotes && (
                        <div className="flex items-start gap-2 text-xs text-[#735c00] bg-[#ffdcc2]/30 p-2.5 rounded-lg">
                          <Info className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{site.accessibilityNotes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: AI Action Card & Accommodations */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Sticky Container */}
            <div className="sticky top-36 flex flex-col gap-8">
              {/* Glassmorphic AI Concierge Action Card */}
              <div className="glass-aura rounded-3xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden shadow-lg border border-[#cba72f]/40">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a237e] text-white flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-[#735c00] uppercase tracking-wider">
                    AI Concierge Action
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#000666] font-bold leading-snug">
                  Ready to walk these sacred grounds?
                </h3>

                <p className="text-sm text-[#454652] leading-relaxed">
                  Let our AI guide design a step-by-step itinerary aligned with your schedule,
                  physical comfort, and devotional preferences.
                </p>

                <button
                  onClick={() => onPlanDestination(destination)}
                  className="w-full mt-2 bg-[#8f4e00] hover:bg-[#8f4e00]/90 text-white font-bold text-sm py-3.5 px-6 rounded-full transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer group"
                >
                  <Bot className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>Generate Personalized Itinerary</span>
                </button>
              </div>

              {/* Rest & Reflection Accommodations */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-[#c6c5d4]/40 shadow-xs flex flex-col gap-6">
                <div className="flex items-center gap-2.5">
                  <Building className="w-5 h-5 text-[#8f4e00]" />
                  <h3 className="font-serif text-xl font-bold text-[#000666]">
                    Rest & Reflection
                  </h3>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-[#c6c5d4]/60">
                  {destination.accommodations.map((acc) => (
                    <div key={acc.id} className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#fe9832] border-2 border-white ring-2 ring-[#fe9832]/30" />
                      <h4 className="font-bold text-base text-[#1b1c1c]">{acc.name}</h4>
                      <p className="text-sm text-[#454652] mt-1 leading-relaxed">
                        {acc.description}
                      </p>
                      {acc.features && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {acc.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="text-[11px] bg-[#f0eded] text-[#454652] px-2 py-0.5 rounded-md font-medium"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
