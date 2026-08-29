import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Accessibility,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { ScreenType } from '../types';

interface PackagesScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectPackage: (pkgTitle: string, destination: string, tradition: string) => void;
}

export const PackagesScreen: React.FC<PackagesScreenProps> = ({
  onNavigate,
  onSelectPackage,
}) => {
  const [filterTradition, setFilterTradition] = useState('All');

  const packages = [
    {
      id: 'camino-santiago',
      title: 'The Camino de Santiago (French Way)',
      destination: 'Sarria to Santiago, Spain',
      tradition: 'Christianity',
      duration: '14 Days, 13 Nights',
      season: 'Apr - Oct',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa3Kff2ulB7S7lFc1HihGLoQTIx1ptcoGLwUpM6WKUIp-OxoLqHcn7LQXuFXMF-w8bKScRxiV0pAhe37II5mUOvR3FKL0GeBXxcsl-Gi8RuuE6FjWqC9wKuxIuZhuRgBKqIOeGuy5txn_AXHbURFNJK_3ibKAlljr0ad6PrNGMRx8VNfpolQxpzr0i-U0jlGRBZu0KuRJlc-xou0GBRUAln6i8KUwl1W-XQOgT5d5suER5ugeH8-bj',
      description: 'A gentle, fully supported pilgrimage along the historic Jacobean route with luggage transfers and pastoral blessings.',
      highlights: ['Pilgrim mass at Cathedral of Santiago', 'Luggage transfer each morning', 'Senior-paced 10-15 km daily stages'],
      seniorFriendly: true,
      price: '$2,450',
    },
    {
      id: 'varanasi-ganges',
      title: 'Varanasi Ganga Aarti & Sarnath Awakening',
      destination: 'Varanasi & Sarnath, India',
      tradition: 'Hinduism / Buddhism',
      duration: '5 Days, 4 Nights',
      season: 'Oct - Mar',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvv5eibWGErQ0RnjGVOH9jRzYT89UyAy3hrRjNUjiDbfLYj9ouqtJuC_8Eqt8qButZaHvSv1Dro9Ut911e_wv_bwdM1PMUscnFW7JYSjWfoMI4vGTf_H-D5SjC-xf9_JgATeMI0mva8XtBczmdtgNLUYLX3mEzMAwCKeUlivrL6h-UzWmhqyItcLeCwdkPuLkhzuSu8-H39ZlORXdSvwkWzGtmvQcHY9tnrK-frY9Zio_mr74sVpo2',
      description: 'Private dawn boat rides along the ghats, VIP corridor darshan at Kashi Vishwanath, and meditative walks at Sarnath.',
      highlights: ['Reserved river boat for Ganga Aarti', 'Wheelchair accessible temple corridor', 'Sattvic luxury dining at Taj Ganges'],
      seniorFriendly: true,
      price: '$1,290',
    },
    {
      id: 'kyoto-zen',
      title: 'Kyoto Zen Temples & Sacred Forests',
      destination: 'Kyoto & Nara, Japan',
      tradition: 'Buddhism',
      duration: '7 Days, 6 Nights',
      season: 'Mar - May / Oct - Nov',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrX2Jr4HrduD_expD2KsaL-qRjhXvWgeQO91TaWrRYEzkA3zkVslcLCiY63YI3jxcQjIzzMULPZ9htR0qzDAiIi4GpDHNiARR01vol0N7F2aEyIDwLsV65PrcuwCKtXoCnJeAotyyzlARtwe10wxg5XUQsHK-ctlKM8pQjL0uhHvj7LdMte8knzlw_16AZzGsTRMBqXz-iRQiHSdmsi5XRU-7nSmtHRQUYLb5AKE6AjOUg_a55IgSg',
      description: 'Immerse yourself in centuries of Zen contemplation, private garden tea ceremonies, and quiet mornings at Kinkaku-ji and Ryoan-ji.',
      highlights: ['Private tea ceremony masterclass', 'Reserved ryokan with hot spring onsen', 'Shinkansen First Class green car transfers'],
      seniorFriendly: true,
      price: '$3,800',
    },
    {
      id: 'jerusalem-holy-lands',
      title: 'Jerusalem & The Holy Land Paths',
      destination: 'Jerusalem, Bethlehem & Galilee',
      tradition: 'Abrahamic',
      duration: '8 Days, 7 Nights',
      season: 'Apr - Jun / Sep - Nov',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
      description: 'A deeply moving interfaith journey tracing the sacred sites of Mount of Olives, Western Wall, and Holy Sepulchre.',
      highlights: ['Theological scholar accompaniment', 'Accessible air-conditioned coach', 'Sunset prayers on Mount of Olives'],
      seniorFriendly: true,
      price: '$3,150',
    },
  ];

  const filtered =
    filterTradition === 'All'
      ? packages
      : packages.filter((p) => p.tradition.toLowerCase().includes(filterTradition.toLowerCase()));

  return (
    <div className="w-full min-h-screen bg-[#fbf9f8] pt-24 pb-16 px-5 md:px-16 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold text-[#8f4e00] uppercase tracking-wider bg-[#ffdcc2]/80 px-4 py-1.5 rounded-full inline-block mb-3">
          Curated Pilgrimage Packages
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#000666] mb-4">
          Sacred Pathways, Thoughtfully Guided
        </h1>
        <p className="text-base md:text-lg text-[#454652] leading-relaxed">
          Pre-arranged spiritual journeys blending devotion, historic depth, luxury rest,
          and gentle physical pacing for seamless peace of mind.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto hide-scrollbar pb-2">
        {['All', 'Hinduism', 'Buddhism', 'Christianity', 'Abrahamic'].map((trad) => (
          <button
            key={trad}
            onClick={() => setFilterTradition(trad)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filterTradition === trad
                ? 'bg-[#1a237e] text-white shadow-sm'
                : 'bg-[#f0eded] text-[#454652] hover:bg-[#eae8e7]'
            }`}
          >
            {trad}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#c6c5d4]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            <div className="h-64 relative overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#fe9832] text-[#683700] px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                  {pkg.tradition}
                </span>
                {pkg.seniorFriendly && (
                  <span className="bg-white/90 text-[#000666] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-xs">
                    <Accessibility className="w-3.5 h-3.5" /> Senior-Friendly
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-[#ffdcc2] font-semibold flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" /> {pkg.destination}
                </p>
                <h3 className="font-serif text-2xl font-bold leading-snug">{pkg.title}</h3>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
              <div>
                <p className="text-sm text-[#454652] mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-6 bg-[#f5f3f3] p-4 rounded-2xl">
                  <h4 className="text-xs font-bold text-[#000666] uppercase tracking-wider mb-2">
                    Included Highlights
                  </h4>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1b1c1c]">
                      <CheckCircle2 className="w-4 h-4 text-[#8f4e00] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#c6c5d4]/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#767683]">From</span>
                  <p className="text-xl font-bold text-[#000666]">{pkg.price}</p>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg.title, pkg.destination, pkg.tradition)}
                  className="bg-[#fe9832] text-[#683700] hover:bg-[#8f4e00] hover:text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize in AI</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
