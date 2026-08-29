import React, { useState } from 'react';
import {
  PlaneTakeoff,
  Calendar,
  MapPin,
  Map,
  Plus,
  ArrowRight,
  Accessibility,
  Bot,
  Church,
  X,
  Check,
  Phone,
  Mail,
  Sparkles,
  ChevronDown,
  Trash2,
  Compass,
} from 'lucide-react';
import { Itinerary, ScreenType } from '../types';

interface DashboardScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onResumeItinerary: (itinerary: Itinerary) => void;
  itineraries: Itinerary[];
  activeJourney: Itinerary;
  onSelectActiveJourney: (itinerary: Itinerary) => void;
  onDeleteItinerary?: (id: string) => void;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
  onNavigate,
  onResumeItinerary,
  itineraries,
  activeJourney,
  onSelectActiveJourney,
  onDeleteItinerary,
}) => {
  const [selectedItineraryModal, setSelectedItineraryModal] = useState<Itinerary | null>(null);
  const [manageBookingOpen, setManageBookingOpen] = useState(false);
  const [contactGuideOpen, setContactGuideOpen] = useState(false);
  const [guideMessageSent, setGuideMessageSent] = useState(false);
  const [guideSubject, setGuideSubject] = useState('Accessibility & Seating Query');
  const [guideBody, setGuideBody] = useState(
    'Greetings. I would like to request assistance passes for temple corridors and verify daily walking rest stops for my upcoming pilgrimage.'
  );
  const [showSwitchDropdown, setShowSwitchDropdown] = useState(false);

  const displayJourney = activeJourney || itineraries[0];

  return (
    <div className="w-full">
      {/* Main Content Area */}
      <div className="flex flex-col gap-12 max-w-[1280px] mx-auto w-full">
        {/* Welcome Header & Profile Summary */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-2">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#000666] font-bold leading-tight">
              Welcome back, Thomas. <br />
              <span className="text-[#8f4e00]/90">Your spiritual journey continues.</span>
            </h2>
          </div>

          {/* Travel Preferences Pill */}
          <div className="bg-[#f0eded] border border-[#c6c5d4]/60 rounded-full px-6 py-3 flex items-center gap-3.5 shadow-sm backdrop-blur-md">
            <div className="w-9 h-9 rounded-full bg-[#cba72f]/20 flex items-center justify-center text-[#735c00]">
              <Accessibility className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1b1c1c]">Senior-friendly Pace</p>
              <p className="text-xs text-[#454652]">Solo Pilgrimage • Verified Accessible</p>
            </div>
          </div>
        </header>

        {/* Upcoming Journey Bento Card */}
        {displayJourney && (
          <section className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between border-b border-[#c6c5d4]/40 pb-3 gap-4">
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-2xl md:text-3xl text-[#000666] font-bold flex items-center gap-2.5">
                  <PlaneTakeoff className="w-6 h-6 text-[#8f4e00]" />
                  <span>Featured Journey</span>
                </h3>

                {/* Switcher Dropdown */}
                {itineraries.length > 1 && (
                  <div className="relative">
                    <button
                      onClick={() => setShowSwitchDropdown(!showSwitchDropdown)}
                      className="text-xs font-bold bg-[#e0e0ff] text-[#000666] hover:bg-[#bdc2ff] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Switch Active Pilgrimage</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {showSwitchDropdown && (
                      <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#c6c5d4]/50 z-30 p-2 space-y-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#767683] px-3 py-1">
                          Select Featured Pilgrimage
                        </p>
                        {itineraries.map((it) => (
                          <button
                            key={it.id}
                            onClick={() => {
                              onSelectActiveJourney(it);
                              setShowSwitchDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                              it.id === displayJourney.id
                                ? 'bg-[#ffdcc2] text-[#8f4e00] font-bold'
                                : 'hover:bg-[#f5f3f3] text-[#1b1c1c]'
                            }`}
                          >
                            <span className="truncate pr-2">{it.title}</span>
                            <span className="text-[10px] text-[#767683] shrink-0">{it.duration}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedItineraryModal(displayJourney)}
                  className="text-sm font-bold text-[#8f4e00] hover:underline cursor-pointer"
                >
                  View Full Itinerary Details
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Journey Details Card */}
              <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,6,102,0.04)] bg-white border border-[#c6c5d4]/40 flex flex-col md:flex-row group">
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-[#e0e0ff]/30">
                  <img
                    src={
                      displayJourney.image ||
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuAa3Kff2ulB7S7lFc1HihGLoQTIx1ptcoGLwUpM6WKUIp-OxoLqHcn7LQXuFXMF-w8bKScRxiV0pAhe37II5mUOvR3FKL0GeBXxcsl-Gi8RuuE6FjWqC9wKuxIuZhuRgBKqIOeGuy5txn_AXHbURFNJK_3ibKAlljr0ad6PrNGMRx8VNfpolQxpzr0i-U0jlGRBZu0KuRJlc-xou0GBRUAln6i8KUwl1W-XQOgT5d5suER5ugeH8-bj'
                    }
                    alt={displayJourney.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#8f4e00]/95 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block shadow-sm">
                      {displayJourney.inDaysText || displayJourney.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative z-10 bg-white/90 backdrop-blur-xl">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#8f4e00] bg-[#ffdcc2]/80 px-2.5 py-0.5 rounded-full">
                        {displayJourney.tradition}
                      </span>
                      <span className="text-xs text-[#767683] font-medium">
                        {displayJourney.duration}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl text-[#000666] font-bold mb-2">
                      {displayJourney.title}
                    </h4>
                    <p className="text-sm md:text-base text-[#454652] mb-6 leading-relaxed">
                      {displayJourney.summary}
                    </p>

                    <div className="flex flex-col gap-4">
                      {/* Date Step */}
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#bdc2ff]/30 flex items-center justify-center text-[#000666] shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1b1c1c]">
                            {displayJourney.dateRange}
                          </p>
                          <p className="text-xs text-[#454652]">
                            {displayJourney.nightsText || displayJourney.duration}
                          </p>
                        </div>
                      </div>

                      {/* Location Step with connecting line */}
                      <div className="flex items-center gap-4 relative">
                        <div className="absolute left-5 top-[-16px] bottom-full w-px bg-[#735c00]/30 h-4" />
                        <div className="w-10 h-10 rounded-full bg-[#bdc2ff]/30 flex items-center justify-center text-[#000666] shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#1b1c1c]">
                            Starting: {displayJourney.startingPoint}
                          </p>
                          <p className="text-xs text-[#454652]">
                            Ending: {displayJourney.endingPoint}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#c6c5d4]/40 flex flex-wrap gap-3">
                    <button
                      onClick={() => setManageBookingOpen(true)}
                      className="bg-[#8f4e00] text-white font-bold text-sm py-2.5 px-6 rounded-full hover:bg-[#8f4e00]/90 transition-all shadow-sm cursor-pointer"
                    >
                      Manage Booking
                    </button>
                    <button
                      onClick={() => setContactGuideOpen(true)}
                      className="border border-[#000666] text-[#000666] font-bold text-sm py-2.5 px-6 rounded-full hover:bg-[#e0e0ff]/40 transition-all bg-transparent cursor-pointer"
                    >
                      Contact Guide
                    </button>
                    <button
                      onClick={() => onResumeItinerary(displayJourney)}
                      className="bg-[#fe9832] text-[#683700] hover:bg-[#fe9832]/90 font-bold text-sm py-2.5 px-6 rounded-full transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Edit in AI Planner</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Map View Column */}
              <div className="bg-white border border-[#c6c5d4]/40 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,6,102,0.04)] flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl text-[#000666] font-bold mb-4 flex items-center gap-2">
                    <Map className="w-5 h-5 text-[#735c00]" />
                    <span>Route Overview</span>
                  </h4>
                  <div className="rounded-xl overflow-hidden relative min-h-[220px] border border-[#c6c5d4]/30 shadow-inner group bg-[#f0eded]">
                    <img
                      src={
                        displayJourney.mapImage ||
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3'
                      }
                      alt={`${displayJourney.title} Route Map`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#c6c5d4]/30 flex items-center justify-between text-xs text-[#454652]">
                  <span className="truncate pr-2 font-medium">
                    {displayJourney.startingPoint} ➔ {displayJourney.endingPoint}
                  </span>
                  <span className="font-bold text-[#8f4e00] shrink-0">
                    {displayJourney.days.length} Days Planned
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Saved AI Itineraries Grid */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#c6c5d4]/40 pb-3">
            <h3 className="font-serif text-2xl md:text-3xl text-[#000666] font-bold flex items-center gap-2.5">
              <Bot className="w-6 h-6 text-[#8f4e00]" />
              <span>All Saved Pilgrimages ({itineraries.length})</span>
            </h3>
            <span className="text-xs text-[#767683]">
              Click on any journey to view details, resume planning, or set as active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itineraries.map((itinerary) => {
              const isCurrentActive = displayJourney?.id === itinerary.id;

              return (
                <div
                  key={itinerary.id}
                  className={`bg-white border rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,6,102,0.04)] hover:shadow-[0_15px_40px_rgba(0,6,102,0.08)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${
                    isCurrentActive
                      ? 'border-[#fe9832] ring-2 ring-[#fe9832]/30'
                      : 'border-[#735c00]/25'
                  }`}
                >
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#8f4e00]/10 rounded-full blur-3xl group-hover:bg-[#8f4e00]/20 transition-all" />

                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#000666] text-white flex items-center justify-center shadow-md">
                        <Church className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        {isCurrentActive && (
                          <span className="text-[10px] font-bold bg-[#000666] text-white px-2.5 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full border ${
                            itinerary.status === 'Completed'
                              ? 'text-emerald-700 bg-emerald-100 border-emerald-200'
                              : itinerary.status === 'Upcoming'
                              ? 'text-blue-700 bg-blue-100 border-blue-200'
                              : 'text-[#8f4e00] bg-[#ffdcc2]/80 border-[#fe9832]/30'
                          }`}
                        >
                          {itinerary.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-[#8f4e00]">
                        {itinerary.tradition}
                      </span>
                      <span className="text-[11px] text-[#767683]">• {itinerary.duration}</span>
                    </div>

                    <h4 className="font-serif text-xl font-bold text-[#000666] mb-2 group-hover:text-[#8f4e00] transition-colors">
                      {itinerary.title}
                    </h4>
                    <p className="text-sm text-[#454652] mb-6 line-clamp-3 leading-relaxed">
                      {itinerary.summary}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#c6c5d4]/30">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedItineraryModal(itinerary)}
                        className="flex-1 bg-[#e0e0ff] text-[#000666] hover:bg-[#bdc2ff] font-bold text-xs py-2.5 px-3 rounded-full transition-all flex justify-center items-center gap-1.5 cursor-pointer"
                      >
                        <span>Review Itinerary</span>
                      </button>

                      <button
                        onClick={() => onResumeItinerary(itinerary)}
                        className="flex-1 border-2 border-[#735c00] text-[#735c00] hover:bg-[#ffe088]/40 font-bold text-xs py-2.5 px-3 rounded-full transition-all bg-transparent flex justify-center items-center gap-1.5 cursor-pointer"
                      >
                        <span>Edit in AI</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {!isCurrentActive && (
                      <button
                        onClick={() => onSelectActiveJourney(itinerary)}
                        className="w-full text-center text-xs font-semibold text-[#8f4e00] hover:text-[#000666] py-1 cursor-pointer"
                      >
                        ★ Set as Featured Journey
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {/* New AI Prompt Area */}
            <div
              onClick={() => onNavigate('planner')}
              className="bg-[#000666]/5 border-2 border-[#000666]/20 border-dashed rounded-2xl p-6 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#000666]/10 transition-colors group min-h-[260px]"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-[#8f4e00] mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#000666] mb-2">
                Plan a New Journey
              </h4>
              <p className="text-sm text-[#454652] max-w-xs">
                Let the AI Concierge craft a new spiritual path for you.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Itinerary Details Modal */}
      {selectedItineraryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#c6c5d4]/40 relative my-8 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedItineraryModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f0eded] hover:bg-[#eae8e7] flex items-center justify-center text-[#1b1c1c] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#8f4e00] uppercase tracking-wider mb-2">
              <span>{selectedItineraryModal.tradition}</span> • <span>{selectedItineraryModal.duration}</span>
              <span className="ml-auto text-xs px-2.5 py-0.5 rounded-full bg-[#ffdcc2] text-[#8f4e00] font-bold">
                {selectedItineraryModal.status}
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#000666] mb-3">
              {selectedItineraryModal.title}
            </h3>
            <p className="text-sm text-[#454652] mb-6 leading-relaxed">
              {selectedItineraryModal.summary}
            </p>

            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 hide-scrollbar">
              {selectedItineraryModal.days.map((day) => (
                <div key={day.day} className="bg-[#f5f3f3] rounded-2xl p-5 border border-[#c6c5d4]/30">
                  <div className="flex items-center justify-between mb-3 border-b border-[#c6c5d4]/40 pb-2">
                    <h4 className="font-serif text-base md:text-lg font-bold text-[#000666]">
                      Day {day.day}: {day.title}
                    </h4>
                    <span className="text-xs font-semibold text-[#8f4e00]">{day.date}</span>
                  </div>
                  <div className="space-y-3">
                    {day.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className="font-bold text-[#000666] min-w-[55px] text-xs bg-[#e0e0ff] px-2 py-0.5 rounded text-center shrink-0">
                          {act.time}
                        </span>
                        <div>
                          <p className="font-semibold text-[#1b1c1c] text-xs md:text-sm">{act.title}</p>
                          <p className="text-xs text-[#454652] mt-0.5 leading-relaxed">{act.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#c6c5d4]/40 flex flex-wrap justify-end gap-3">
              <button
                onClick={() => {
                  onSelectActiveJourney(selectedItineraryModal);
                  setSelectedItineraryModal(null);
                }}
                className="px-5 py-2.5 rounded-full border border-[#8f4e00] text-[#8f4e00] hover:bg-[#ffdcc2]/40 font-bold text-xs md:text-sm transition-colors cursor-pointer"
              >
                ★ Set as Featured Journey
              </button>
              <button
                onClick={() => {
                  const it = selectedItineraryModal;
                  setSelectedItineraryModal(null);
                  onResumeItinerary(it);
                }}
                className="px-6 py-2.5 rounded-full bg-[#fe9832] text-[#683700] font-bold text-xs md:text-sm hover:bg-[#8f4e00] hover:text-white transition-colors cursor-pointer"
              >
                Edit in AI Planner
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Booking Modal */}
      {manageBookingOpen && displayJourney && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#c6c5d4]/40 relative">
            <button
              onClick={() => setManageBookingOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0eded] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#000666] mb-2">
              Manage Pilgrimage Booking
            </h3>
            <p className="text-xs text-[#454652] mb-6">
              Booking Reference: #DJ-{displayJourney.id.slice(0, 8).toUpperCase()}-2025
            </p>

            <div className="space-y-4 text-sm">
              <div className="bg-[#f5f3f3] p-4 rounded-2xl border border-[#c6c5d4]/30 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-[#767683]">Pilgrimage:</span>
                  <span className="font-bold text-[#000666]">{displayJourney.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#767683]">Dates:</span>
                  <span className="font-semibold">{displayJourney.dateRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#767683]">Status:</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Confirmed & Supported
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#000666] uppercase tracking-wider">
                  Included Special Services
                </h4>
                <div className="text-xs space-y-1.5 text-[#454652]">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dedicated Luggage Transfer & Assistance Vehicle</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Wheelchair & Fast-Track Temple Corridor Passes</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sattvic / Pure Devotional Meal Provisioning</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c6c5d4]/40 flex justify-end gap-3">
              <button
                onClick={() => setManageBookingOpen(false)}
                className="px-5 py-2.5 rounded-full border border-[#000666] text-[#000666] font-semibold text-xs md:text-sm hover:bg-[#e0e0ff]/30 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setManageBookingOpen(false);
                  setContactGuideOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-[#8f4e00] text-white font-bold text-xs md:text-sm hover:bg-[#8f4e00]/90 cursor-pointer"
              >
                Contact Assistance Team
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Guide Modal */}
      {contactGuideOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 md:p-8 shadow-2xl border border-[#c6c5d4]/40 relative">
            <button
              onClick={() => {
                setContactGuideOpen(false);
                setGuideMessageSent(false);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0eded] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#000666] mb-2">
              Spiritual Guide Concierge
            </h3>
            <p className="text-xs text-[#454652] mb-6">
              Connect directly with your verified pastoral scholar or tour coordinator.
            </p>

            {guideMessageSent ? (
              <div className="p-6 bg-[#f5f3f3] rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#000666]">
                  Message Sent to Spiritual Concierge
                </h4>
                <p className="text-xs text-[#454652]">
                  Your guide has received your request regarding {displayJourney?.title}. Expect a
                  response via email within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setContactGuideOpen(false);
                    setGuideMessageSent(false);
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#000666] text-white text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#000666] uppercase mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={guideSubject}
                    onChange={(e) => setGuideSubject(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#c6c5d4] text-xs md:text-sm text-[#1b1c1c] outline-none focus:border-[#000666]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#000666] uppercase mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={guideBody}
                    onChange={(e) => setGuideBody(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#c6c5d4] text-xs md:text-sm text-[#1b1c1c] outline-none focus:border-[#000666]"
                  />
                </div>

                <button
                  onClick={() => setGuideMessageSent(true)}
                  className="w-full py-3 rounded-full bg-[#8f4e00] text-white font-bold text-xs md:text-sm hover:bg-[#8f4e00]/90 transition-colors shadow-sm cursor-pointer"
                >
                  Send Inquiry to Guide
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
