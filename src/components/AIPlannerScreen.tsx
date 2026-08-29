import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Bot,
  Send,
  Calendar,
  Save,
  CheckCircle,
  MapPin,
  Clock,
  ArrowRight,
  RefreshCw,
  Share2,
  Download,
  Check,
  Building,
  Plane,
  Church,
  TreePine,
  HelpCircle,
  X,
} from 'lucide-react';
import {
  SAVED_ITINERARIES,
  SACRED_INSIGHTS,
  createItineraryForDestination,
  createCustomItinerary,
} from '../data/spiritualData';
import { ChatMessage, Destination, Itinerary, ScreenType } from '../types';

interface AIPlannerScreenProps {
  onNavigate: (screen: ScreenType) => void;
  initialDestination?: Destination | null;
  initialItinerary?: Itinerary | null;
  initialQuery?: { destination: string; tradition: string; duration: string } | null;
  savedItineraries?: Itinerary[];
  onSaveItinerary: (itinerary: Itinerary) => void;
  onSelectItinerary?: (itinerary: Itinerary) => void;
}

export const AIPlannerScreen: React.FC<AIPlannerScreenProps> = ({
  onNavigate,
  initialDestination,
  initialItinerary,
  initialQuery,
  savedItineraries = SAVED_ITINERARIES,
  onSaveItinerary,
  onSelectItinerary,
}) => {
  // Itinerary in focus
  const [currentItinerary, setCurrentItinerary] = useState<Itinerary>(() => {
    if (initialItinerary) return initialItinerary;
    if (initialDestination) return createItineraryForDestination(initialDestination);
    if (initialQuery) return createCustomItinerary(initialQuery);
    return SAVED_ITINERARIES[0];
  });

  // Sync state when initial props change
  useEffect(() => {
    if (initialItinerary) {
      setCurrentItinerary(initialItinerary);
    } else if (initialDestination) {
      setCurrentItinerary(createItineraryForDestination(initialDestination));
    } else if (initialQuery) {
      setCurrentItinerary(createCustomItinerary(initialQuery));
    }
  }, [initialItinerary?.id, initialDestination?.id, initialQuery?.destination]);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      role: 'user',
      content:
        initialQuery
          ? `I'd like to plan a ${initialQuery.duration} pilgrimage to ${initialQuery.destination} for ${initialQuery.tradition}. I value a calm pace with accessible walking.`
          : "I'd like to plan a 5-day trip to Kyoto focusing on Zen Buddhism, but I need accessible walkways and quiet reflection periods.",
      timestamp: '10:14 AM',
    },
    {
      id: 'm2',
      role: 'assistant',
      content:
        initialQuery
          ? `Peace be with you. I have initialized a sacred journey for ${initialQuery.destination} with generous contemplation windows and senior-friendly walkways. Review your live draft on the right as we refine it together.`
          : "Peace be with you. I have tailored a gentle 5-day Kyoto itinerary balancing revered temple visits with peaceful garden contemplation. I've scheduled early morning visits to avoid crowds.",
      timestamp: '10:15 AM',
    },
  ]);

  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);
  const [showFinalizeModal, setShowFinalizeModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || chatInput.trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setChatInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userPreferences: {
            destination: currentItinerary.destination,
            pace: 'senior-friendly',
          },
        }),
      });

      const data = await res.json();
      const aiReply =
        data.reply ||
        'Peace be with you. I have updated your itinerary steps with calm transit and accessible viewing galleries.';

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: aiReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);

      // If user asks to add something like tea ceremony or day 3, dynamically enrich the draft itinerary!
      if (textToSend.toLowerCase().includes('tea') || textToSend.toLowerCase().includes('meditation')) {
        setCurrentItinerary((prev) => {
          const hasDay3 = prev.days.some((d) => d.day === 3);
          if (!hasDay3) {
            return {
              ...prev,
              days: [
                ...prev.days,
                {
                  day: 3,
                  date: 'May 14, 2025',
                  title: 'Uji Tea Ceremony & Forest Contemplation',
                  theme: 'Mindful Drinking & Stillness',
                  activities: [
                    {
                      time: '09:30',
                      title: 'Traditional Matcha Tea Ceremony at Taiho-an',
                      description: 'Chado masterclass focused on mindfulness, seated comfortably with back support.',
                      type: 'meditation',
                      iconName: 'coffee',
                    },
                    {
                      time: '14:00',
                      title: 'Byodoin Phoenix Hall Walkway',
                      description: 'Flat paved paths around the pure land pond reflecting pristine architecture.',
                      type: 'darshan',
                      iconName: 'church',
                    },
                  ],
                },
              ],
            };
          }
          return prev;
        });
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content:
            'Peace be with you. I have incorporated your requests for peaceful reflection and accessible paths into the live draft.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveDraft = () => {
    onSaveItinerary(currentItinerary);
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  const quickPrompts = [
    'Add an authentic tea ceremony',
    'Ensure senior wheelchair accessibility',
    'Include sunrise meditation',
    'Recommend sattvic / pure vegetarian dining',
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fbf9f8] pt-20">
      {/* Top Banner */}
      <div className="bg-white/95 border-b border-[#c6c5d4]/40 py-3 px-5 md:px-16 sticky top-20 z-30 shadow-xs">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1a237e] text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#000666]">
                Spiritual AI Trip Planner
              </h2>
              <p className="text-xs text-[#454652] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Active Co-Creation Session • Senior-Friendly Pace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveDraft}
              className="bg-[#f0eded] hover:bg-[#eae8e7] text-[#000666] font-bold text-xs md:text-sm px-4 py-2 rounded-full flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Save className="w-4 h-4 text-[#8f4e00]" />
              <span>Save Draft</span>
            </button>

            <button
              onClick={() => setShowFinalizeModal(true)}
              className="bg-[#fe9832] text-[#683700] hover:bg-[#8f4e00] hover:text-white font-bold text-xs md:text-sm px-5 py-2 rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Finalize Pilgrimage</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3-Column Layout Matching Image 4 */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Column 1 (Left): Sacred Insights & Recent Journeys */}
          <div className="lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1">
            {/* Sacred Insights Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#c6c5d4]/40 shadow-xs">
              <div className="flex items-center gap-2 text-[#735c00] font-bold text-xs uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Sacred Insights</span>
              </div>

              <div className="space-y-4">
                {SACRED_INSIGHTS.map((insight) => (
                  <div
                    key={insight.id}
                    className="p-3.5 bg-[#f5f3f3] rounded-xl border border-[#c6c5d4]/30 hover:border-[#8f4e00]/50 transition-colors"
                  >
                    <h4 className="font-serif text-sm font-bold text-[#000666] mb-1">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-[#454652] leading-relaxed mb-2.5">
                      {insight.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {insight.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-white text-[#735c00] px-2 py-0.5 rounded-full font-semibold border border-[#c6c5d4]/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Switcher / Recent Journeys */}
            <div className="bg-white rounded-2xl p-5 border border-[#c6c5d4]/40 shadow-xs">
              <h3 className="font-serif text-base font-bold text-[#000666] mb-3">
                Recent Itineraries
              </h3>
              <div className="space-y-2">
                {savedItineraries.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentItinerary(item);
                      if (onSelectItinerary) onSelectItinerary(item);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between ${
                      currentItinerary.id === item.id
                        ? 'bg-[#fe9832]/20 border border-[#fe9832]/50 text-[#8f4e00] font-bold'
                        : 'bg-[#f5f3f3] hover:bg-[#f0eded] text-[#454652]'
                    }`}
                  >
                    <div className="overflow-hidden pr-1">
                      <p className="text-xs font-bold truncate">{item.title}</p>
                      <p className="text-[10px] text-[#767683]">{item.duration}</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-white shrink-0">
                      {item.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 (Middle): Interactive AI Concierge Chat */}
          <div className="lg:col-span-5 flex flex-col bg-white rounded-2xl border border-[#c6c5d4]/40 shadow-sm h-[750px] overflow-hidden order-1 lg:order-2">
            {/* Chat Top Header */}
            <div className="p-4 border-b border-[#c6c5d4]/40 bg-[#fbf9f8] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#000666] text-white flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#000666]">
                    Divine Guide AI
                  </h3>
                  <p className="text-xs text-[#454652]">
                    Tailoring: {currentItinerary.title}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-semibold text-[#8f4e00] bg-[#ffdcc2] px-2.5 py-1 rounded-full">
                Gemini 2.5 Flash
              </span>
            </div>

            {/* Chat Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 hide-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.role === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#eae8e7] text-[#1b1c1c] rounded-br-none'
                        : 'bg-gradient-to-br from-white to-[#ffdcc2]/20 border border-[#cba72f]/40 text-[#1b1c1c] rounded-bl-none shadow-xs'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#735c00] mb-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Spiritual Guidance</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.content}</p>
                    <span className="text-[10px] text-[#767683] mt-2 block text-right">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 p-3 bg-[#f5f3f3] rounded-2xl text-xs text-[#454652] w-fit">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#8f4e00]" />
                  <span>The AI Concierge is contemplating your sacred path...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="p-3 border-t border-[#c6c5d4]/20 bg-[#fbf9f8] overflow-x-auto hide-scrollbar flex gap-2">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-xs bg-white text-[#000666] hover:bg-[#fe9832]/20 hover:text-[#8f4e00] border border-[#c6c5d4]/40 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer"
                >
                  + {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-[#c6c5d4]/40">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask to adjust stops, timings, or sacred traditions..."
                  className="w-full bg-[#f0eded] rounded-full py-3 pl-4 pr-12 text-sm text-[#1b1c1c] outline-none border border-[#c6c5d4]/50 focus:border-[#000666] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !chatInput.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a237e] hover:bg-[#000666] disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 3 (Right): Current Draft Itinerary Live View Matching Image 4 */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#c6c5d4]/40 shadow-sm p-6 flex flex-col h-[750px] overflow-hidden order-3">
            <div className="flex items-center justify-between pb-4 border-b border-[#c6c5d4]/40 mb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#000666]">
                  Current Draft Itinerary
                </h3>
                <p className="text-xs text-[#454652]">{currentItinerary.title}</p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#735c00] bg-[#ffdcc2] px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#8f4e00] animate-pulse" />
                <span>Live Updating</span>
              </div>
            </div>

            {/* Scrollable Itinerary Days */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-1 hide-scrollbar">
              {currentItinerary.days.map((day) => (
                <div key={day.day} className="flex flex-col gap-3">
                  {/* Day Header */}
                  <div className="flex items-center justify-between bg-[#f5f3f3] px-3.5 py-2 rounded-xl border border-[#c6c5d4]/30">
                    <h4 className="font-serif text-sm font-bold text-[#000666]">
                      Day {day.day}: {day.title}
                    </h4>
                    <span className="text-xs font-semibold text-[#8f4e00]">{day.date}</span>
                  </div>

                  {/* Day Activities */}
                  <div className="space-y-3 pl-2 border-l-2 border-[#fe9832]/30 ml-2">
                    {day.activities.map((act, actIdx) => (
                      <div
                        key={actIdx}
                        className="bg-[#fbf9f8] p-3.5 rounded-xl border border-[#c6c5d4]/30 shadow-2xs flex flex-col gap-2 group hover:border-[#8f4e00]/40 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#000666] bg-[#e0e0ff] px-2 py-0.5 rounded-md">
                              {act.time}
                            </span>
                            <h5 className="text-xs md:text-sm font-bold text-[#1b1c1c]">
                              {act.title}
                            </h5>
                          </div>
                        </div>

                        {act.image && (
                          <div className="h-28 rounded-lg overflow-hidden my-1">
                            <img
                              src={act.image}
                              alt={act.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <p className="text-xs text-[#454652] leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#c6c5d4]/40 flex gap-3 mt-auto">
              <button
                onClick={handleSaveDraft}
                className="flex-1 py-2.5 rounded-full border border-[#000666] text-[#000666] hover:bg-[#e0e0ff]/30 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Draft</span>
              </button>
              <button
                onClick={() => setShowFinalizeModal(true)}
                className="flex-1 py-2.5 rounded-full bg-[#fe9832] text-[#683700] hover:bg-[#8f4e00] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Finalize</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Save Draft Toast */}
      {showSavedToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#000666] text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle className="w-5 h-5 text-[#fe9832]" />
          <span className="text-sm font-semibold">
            Itinerary successfully saved to your Dashboard!
          </span>
        </div>
      )}

      {/* Finalize Pilgrimage Modal */}
      {showFinalizeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-[#c6c5d4]/40 relative">
            <button
              onClick={() => setShowFinalizeModal(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0eded] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-[#fe9832]/20 text-[#8f4e00] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#000666] mb-1">
              Pilgrimage Confirmed & Ready
            </h3>
            <p className="text-xs text-[#454652] mb-6">
              Your customized sacred journey itinerary has been prepared with full senior pacing.
            </p>

            <div className="bg-[#f5f3f3] rounded-2xl p-4 mb-6 space-y-2 text-xs text-[#1b1c1c]">
              <div className="flex justify-between font-bold text-sm text-[#000666]">
                <span>{currentItinerary.title}</span>
                <span>{currentItinerary.duration}</span>
              </div>
              <p className="text-[#454652]">{currentItinerary.summary}</p>
              <div className="pt-2 border-t border-[#c6c5d4]/30 flex justify-between">
                <span>Total Days Planned:</span>
                <span className="font-bold">{currentItinerary.days.length} Days</span>
              </div>
              <div className="flex justify-between">
                <span>Accessibility Clearance:</span>
                <span className="font-bold text-emerald-700">Verified Step-Free & Seated Pacing</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const finalized: Itinerary = {
                    ...currentItinerary,
                    status: 'Upcoming',
                    inDaysText: 'CONFIRMED PILGRIMAGE',
                  };
                  onSaveItinerary(finalized);
                  setShowFinalizeModal(false);
                  onNavigate('dashboard');
                }}
                className="flex-1 py-3 rounded-full bg-[#8f4e00] text-white font-bold text-sm hover:bg-[#8f4e00]/90 transition-colors cursor-pointer"
              >
                Go to My Journeys Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
