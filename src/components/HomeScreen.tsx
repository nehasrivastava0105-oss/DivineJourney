import React, { useState } from 'react';
import {
  MapPin,
  Church,
  Calendar,
  Sparkles,
  Bot,
  CheckCircle2,
  ArrowRight,
  Sun,
  Clock,
  Send,
  Compass,
} from 'lucide-react';
import { DESTINATIONS, SAVED_ITINERARIES } from '../data/spiritualData';
import { Destination, Itinerary, ScreenType } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectDestination: (dest: Destination) => void;
  onStartPlanning: (query: { destination: string; tradition: string; duration: string }) => void;
  onSelectItinerary?: (itinerary: Itinerary) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectDestination,
  onStartPlanning,
  onSelectItinerary,
}) => {
  const [destinationInput, setDestinationInput] = useState('');
  const [traditionInput, setTraditionInput] = useState('Any Religion');
  const [durationInput, setDurationInput] = useState('4-7 Days');

  // Interactive home chat mockup state
  const [homeChatInput, setHomeChatInput] = useState('');
  const [homeChatMessages, setHomeChatMessages] = useState([
    {
      role: 'user',
      text: "I'd like to plan a serene, 7-day temple trail in South India. It needs to be relaxed as I am traveling with my elderly parents.",
    },
    {
      role: 'assistant',
      text: 'Peace be with you. I have crafted a gentle, 7-day South India pilgrimage focusing on accessible shrines and comfortable rest periods.',
      miniCard: {
        title: 'Madurai & Rameswaram Trail',
        subtitle: '7 Days • Senior Friendly • Ground Transport Included',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDFXGTjrizuiZrQuptCsqV05YntwhqipWT55Bw2J7QSrnLIwePHut4T5FJuxMdUNOBnzwLeIbVRyXLLbXMOzbh_L53rDFG_jTQuGKOWE7ui9u7VNuheTPE2jd5B56I7burnl3HX0jT5sYcue1C73WxpCMKZlW_C9Fb5c0P5okiCh5mV29vKZ0qB75NEWyEhWr9EKnNByNRKzeMDZZcDiguV8SHbGijgo1-9lrQif3N739RCUT3riySd',
      },
    },
  ]);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartPlanning({
      destination: destinationInput.trim() || 'Varanasi',
      tradition: traditionInput,
      duration: durationInput,
    });
  };

  const handleSendHomeChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeChatInput.trim()) return;

    const userText = homeChatInput.trim();
    setHomeChatMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setHomeChatInput('');

    // Quick intelligent response & transition option
    setTimeout(() => {
      setHomeChatMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `Blessings on your path. I've tailored this sacred route with morning darshans and serene pacing. Let's customize your day-by-day itinerary in the AI Planner!`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-5 md:px-16 overflow-hidden">
        {/* Background Image with optimized light gradient */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwtX3c2EInlYfR_PP9UokIJV7CDvy-1abGW1drveZ1MoVt-2leUm98Et84KIJoolrX0GgwkmZysl224sox_5VPUT8tmYld3NgYUws8Rl28yS2vZf1Hb9k-Hw9mT1EJPexGrUiqHm4zW7KAjrKzgBRJ7Mva1JpsTY5cZOsFCSb2SN8K4z-xM0uzm_o2wdigSSBgH8JqlTPi5_a6uWap7SVcuQ9v_cIPa-XkzLkkmajeJlTpeWjWcM1s')`,
            }}
          />
          {/* Gradient Overlay matching HTML 1 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f8]/40 via-[#fbf9f8]/20 to-[#fbf9f8]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center mt-20 md:mt-24">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#000666] mb-6 drop-shadow-sm font-bold leading-tight">
            Your Spiritual Journey,<br />
            <span className="text-[#8f4e00]">Powered by AI</span>
          </h1>

          <p className="text-lg md:text-xl text-[#454652] max-w-2xl mx-auto mb-10 md:mb-12 font-normal leading-relaxed">
            Discover sacred destinations, plan personalized pilgrimages, and experience
            meaningful journeys with your intelligent spiritual travel companion.
          </p>

          {/* Search / Planner Box (Glassmorphic) */}
          <div className="glass-panel ai-glow rounded-[24px] p-6 md:p-8 w-full max-w-5xl mx-auto shadow-xl">
            <form
              onSubmit={handleHeroSubmit}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
            >
              <div className="flex flex-col text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-[#000666] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8f4e00]" /> Destination
                </label>
                <input
                  type="text"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="Where do you seek peace?"
                  className="bg-[#fbf9f8] rounded-lg border border-[#c6c5d4] focus:border-[#000666] focus:ring-1 focus:ring-[#000666] text-base py-3 px-4 outline-none w-full placeholder-[#454652]/60 text-[#1b1c1c]"
                />
              </div>

              <div className="flex flex-col text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-[#000666] mb-2 flex items-center gap-1.5">
                  <Church className="w-4 h-4 text-[#8f4e00]" /> Tradition
                </label>
                <select
                  value={traditionInput}
                  onChange={(e) => setTraditionInput(e.target.value)}
                  className="bg-[#fbf9f8] rounded-lg border border-[#c6c5d4] focus:border-[#000666] focus:ring-1 focus:ring-[#000666] text-base py-3 px-4 outline-none w-full text-[#1b1c1c] cursor-pointer"
                >
                  <option>Any Religion</option>
                  <option>Hinduism</option>
                  <option>Buddhism</option>
                  <option>Christianity</option>
                  <option>Islam</option>
                  <option>Sikhism</option>
                  <option>Shinto</option>
                  <option>Interfaith</option>
                </select>
              </div>

              <div className="flex flex-col text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-[#000666] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#8f4e00]" /> Duration
                </label>
                <select
                  value={durationInput}
                  onChange={(e) => setDurationInput(e.target.value)}
                  className="bg-[#fbf9f8] rounded-lg border border-[#c6c5d4] focus:border-[#000666] focus:ring-1 focus:ring-[#000666] text-base py-3 px-4 outline-none w-full text-[#1b1c1c] cursor-pointer"
                >
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>1-2 Weeks</option>
                  <option>2+ Weeks</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-[#1a237e] hover:bg-[#000666] text-white font-bold h-[50px] py-3 px-6 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#fe9832] transition-transform group-hover:rotate-12" />
                <span>Plan with AI</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 md:h-24" />

      {/* AI Companion Intro (Bento Grid Style) */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 pr-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-[#cba72f]/20 text-[#735c00] w-fit px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              <Bot className="w-4 h-4" />
              <span>AI Spiritual Concierge</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#000666] font-bold leading-tight">
              Guidance at Every Step of The Path
            </h2>

            <p className="text-base md:text-lg text-[#454652] leading-relaxed">
              Experience a journey tailored specifically to your spiritual needs,
              physical capabilities, and inner calling. Our AI crafts meticulous
              itineraries that balance reverence with comfort.
            </p>

            <ul className="space-y-4 mt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8f4e00] mt-0.5 shrink-0" />
                <span className="text-base text-[#1b1c1c] font-medium">
                  Customized pacing for senior travelers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8f4e00] mt-0.5 shrink-0" />
                <span className="text-base text-[#1b1c1c] font-medium">
                  Deep historical and theological insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#8f4e00] mt-0.5 shrink-0" />
                <span className="text-base text-[#1b1c1c] font-medium">
                  Real-time adjustments during your pilgrimage
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('planner')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8f4e00] hover:text-[#000666] transition-colors"
              >
                <span>Try the full AI Trip Planner</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Mockup (Glassmorphic) */}
          <div className="lg:col-span-7 relative">
            {/* Decorative background aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e0e0ff]/50 to-[#ffdcc2]/50 rounded-[32px] transform rotate-1 scale-105 -z-10 blur-xl" />

            <div className="glass-panel rounded-[24px] p-6 shadow-xl flex flex-col gap-4 h-[480px] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#c6c5d4]/40">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#1a237e] flex items-center justify-center text-white shadow-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#000666]">
                      Divine Guide
                    </h3>
                    <p className="text-xs text-[#454652] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Always online
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('planner')}
                  className="text-xs font-bold text-[#8f4e00] bg-[#fe9832]/20 hover:bg-[#fe9832]/30 px-3 py-1.5 rounded-full transition-colors"
                >
                  Open in Full Planner
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 flex flex-col hide-scrollbar">
                {homeChatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.role === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <div className="max-w-[85%] bg-[#eae8e7] text-[#1b1c1c] rounded-t-2xl rounded-bl-2xl p-4 shadow-sm text-sm md:text-base">
                        <p>{msg.text}</p>
                      </div>
                    ) : (
                      <div className="max-w-[90%] bg-gradient-to-br from-white to-[#ffdcc2]/30 border border-[#cba72f]/40 rounded-t-2xl rounded-br-2xl p-4 md:p-5 shadow-sm relative text-sm md:text-base">
                        <div className="absolute -left-2 -top-2 bg-[#fbf9f8] rounded-full p-1 border border-[#c6c5d4]/30 shadow-xs">
                          <Sparkles className="w-3.5 h-3.5 text-[#735c00]" />
                        </div>
                        <p className="text-[#1b1c1c] mb-3">{msg.text}</p>

                        {/* Mini Itinerary Card inside chat */}
                        {msg.miniCard && (
                          <div
                            onClick={() => {
                              const madurai = SAVED_ITINERARIES.find(
                                (s) => s.id === 'madurai-rameswaram'
                              );
                              if (madurai && onSelectItinerary) {
                                onSelectItinerary(madurai);
                              } else {
                                onNavigate('planner');
                              }
                            }}
                            className="bg-[#ffffff] rounded-xl p-3 border border-[#c6c5d4]/40 flex items-center gap-3.5 cursor-pointer hover:border-[#8f4e00] transition-colors shadow-xs group"
                          >
                            <img
                              src={msg.miniCard.image}
                              alt={msg.miniCard.title}
                              className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform"
                            />
                            <div>
                              <h4 className="text-sm font-bold text-[#000666] group-hover:text-[#8f4e00] transition-colors">
                                {msg.miniCard.title}
                              </h4>
                              <p className="text-xs text-[#454652] mt-0.5">
                                {msg.miniCard.subtitle}
                              </p>
                              <span className="text-[11px] text-[#8f4e00] font-semibold mt-1 inline-flex items-center gap-1">
                                View Itinerary <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendHomeChat} className="relative mt-2">
                <input
                  type="text"
                  value={homeChatInput}
                  onChange={(e) => setHomeChatInput(e.target.value)}
                  placeholder="Ask follow-up questions or describe your pilgrimage..."
                  className="w-full bg-[#f0eded] rounded-full py-3.5 pl-5 pr-12 outline-none border border-[#c6c5d4]/60 text-sm md:text-base text-[#1b1c1c] focus:border-[#000666] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#000666] hover:bg-[#1a237e] text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16 md:h-24" />

      {/* Explore Sacred Horizons Destinations Section */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-16 py-12 bg-[#f5f3f3]/60 rounded-3xl relative overflow-hidden border border-[#c6c5d4]/30">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#000666] font-bold mb-2">
              Sacred Horizons
            </h2>
            <p className="text-base text-[#454652]">
              Discover destinations that resonate with your soul.
            </p>
          </div>

          <button
            onClick={() => onNavigate('destination')}
            className="hidden md:flex items-center gap-2 text-sm font-bold text-[#8f4e00] hover:text-[#000666] transition-colors cursor-pointer"
          >
            <span>View All Paths</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.map((destination) => (
            <div
              key={destination.id}
              onClick={() => onSelectDestination(destination)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white cursor-pointer border border-[#c6c5d4]/40"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Tradition Badge */}
                <div
                  className={`absolute top-4 left-4 ${destination.tagColorClass} px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm`}
                >
                  {destination.tradition}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 text-white">
                <h3 className="font-serif text-2xl font-bold text-white mb-1.5 group-hover:text-[#ffdcc2] transition-colors">
                  {destination.location}
                </h3>
                <div className="flex items-center gap-4 text-white/85 text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-[#ffdcc2]" /> {destination.bestSeason}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#ffdcc2]" /> {destination.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => onNavigate('destination')}
          className="md:hidden mt-8 w-full py-3.5 flex items-center justify-center gap-2 text-sm font-bold text-[#8f4e00] border-2 border-[#8f4e00] rounded-xl hover:bg-[#fe9832]/10 transition-colors"
        >
          <span>View All Paths</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Spacer */}
      <div className="h-16 md:h-24" />

      {/* Floating Action Button (FAB) */}
      <button
        onClick={() => onNavigate('planner')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#fe9832] text-[#683700] hover:bg-[#8f4e00] hover:text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-300 z-50 group focus:outline-none focus:ring-4 focus:ring-[#000666]/20 cursor-pointer"
        aria-label="Consult AI Guide"
      >
        <Bot className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-20 bg-[#303030] text-[#f2f0f0] px-4 py-2 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Consult AI Guide
        </span>
      </button>
    </div>
  );
};
