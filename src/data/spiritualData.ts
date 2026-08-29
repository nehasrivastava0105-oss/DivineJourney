import { Destination, Itinerary, SacredInsight, Festival } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'varanasi',
    name: 'Varanasi',
    location: 'Varanasi, India',
    country: 'India',
    tradition: 'Hinduism',
    traditionCategory: 'Hinduism',
    tagColorClass: 'bg-[#fe9832] text-[#683700]',
    bestSeason: 'Oct - Mar',
    duration: '3-5 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuYDdFYriy8r_Cexe91QDOCgnxOL2i0wbpkpIqdwPLNuSblBDpxb3lPtlR1X3Aeh3J-Qx9U0OnTc1yMh-BZixVLn-GUm4dfQKZ2VwvisfjxetYaBKhLEiTDVSLCJlP8WBxUCE3hXCnsQgOWnfw_61ngzY4iks9ha2GADbfx4fmGySvXPkmV-bv5jtPW0GY2MmOHPBJt8aJRm4AGnOcd5uPr6F1tD7SkUHKb9Uc49xZumM1ZnCdRrrs',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvv5eibWGErQ0RnjGVOH9jRzYT89UyAy3hrRjNUjiDbfLYj9ouqtJuC_8Eqt8qButZaHvSv1Dro9Ut911e_wv_bwdM1PMUscnFW7JYSjWfoMI4vGTf_H-D5SjC-xf9_JgATeMI0mva8XtBczmdtgNLUYLX3mEzMAwCKeUlivrL6h-UzWmhqyItcLeCwdkPuLkhzuSu8-H39ZlORXdSvwkWzGtmvQcHY9tnrK-frY9Zio_mr74sVpo2',
    heroAlt: 'A breathtaking, wide-angle photograph of the Ganga Aarti ceremony in Varanasi at dusk.',
    overview: [
      "Varanasi, also known as Kashi or Benares, is one of the world's oldest continually inhabited cities. It holds profound spiritual significance in Hinduism, Buddhism, and Jainism. To Hindus, it is the city of Lord Shiva, a place where the earthly and divine realms meet, and bathing in the Ganges here is believed to wash away lifetimes of sins.",
      "Just a short distance away lies Sarnath, where Lord Buddha gave his first sermon after attaining enlightenment, making this region a cornerstone for multiple major world religions. The city's narrow, winding alleys (galis) are alive with centuries of history, dotted with countless shrines, ashrams, and the vibrant life of spiritual seekers."
    ],
    bestTimeToVisitDetails: 'October to March: The weather is pleasant and cool, ideal for exploring the ghats and temples. Major festivals like Diwali and Dev Deepawali occur during these months.',
    accessibilityDetails: 'While the ancient alleys can be challenging, key areas like the Kashi Vishwanath corridor have been modernized for senior accessibility. Wheelchairs can often be arranged for major temple visits.',
    sacredSites: [
      {
        id: 'kashi-vishwanath',
        name: 'Kashi Vishwanath Temple',
        description: 'The most prominent temple dedicated to Lord Shiva, featuring a striking golden spire and a newly accessible corridor.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZeso8D1m4dQElCyuTs1IjwKWJiUhWXL-eUd1o4R6Th_UtMmc5Tm54ZpT3lH8vWV8srWiirmUCAHTrdlpYC8FzeCj5WCRurD8DE4YvzEfRrRUm0J12006VMj54iLksh6EV10jehbtQVagAIr2BPd4i6hRd1Ghe57MsiGudClIgWnGTnt8M9jP1VVMZ4Kg2jmYQdgsYXDy8o0DP7f7V1vSp3kvyBhsw9houQhzHpmdGVEGpeeKFnyYo',
        altText: 'Architectural shot of Kashi Vishwanath Temple golden spire',
        accessibilityNotes: 'Full ramp access, electric cart transport from Godowlia to corridor entrance.'
      },
      {
        id: 'sarnath',
        name: 'Sarnath',
        description: 'A tranquil Buddhist pilgrimage site located just outside Varanasi, where the first teachings of the Dhamma were delivered.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsCBSevlCiLFpqprqLH4UmYjik-gz3EH_BP2ijL638CnPlX911kihpWFwdoEn0KwN67aGFuu5J7FxBDvtMFI_Tfg7aXKxjeufInWs4k8vUPpJZXGVeUdy-MAJFh7FPY5B-G_6hHc7zJ3Mu6SeQ1RumQCn-We4UJDvKKybMTdpPjy_JLd4TWicZ7LBaYqqhY0XYBwoZZzL-eMzQV88k1z6IWAXSkzbV-GlHSeBEsrkfk2L46mBfxd3K',
        altText: 'Dhamek Stupa at Sarnath with monks',
        accessibilityNotes: 'Level paved gardens with shaded seating throughout.'
      }
    ],
    accommodations: [
      {
        id: 'taj-ganges',
        name: 'Taj Ganges',
        description: 'Premium comfort with serene gardens, ideal for senior travelers seeking peace after exploring.',
        features: ['Garden views', 'Accessible elevators', 'Sattvic cuisine options']
      },
      {
        id: 'brijrama-palace',
        name: 'BrijRama Palace',
        description: 'A heritage hotel directly on the ghats, offering an immersive, deeply traditional experience.',
        features: ['Riverfront heritage', 'Traditional live evening music', 'Private boat transfers']
      }
    ]
  },
  {
    id: 'tirupati',
    name: 'Tirupati',
    location: 'Tirupati, India',
    country: 'India',
    tradition: 'Hinduism',
    traditionCategory: 'Hinduism',
    tagColorClass: 'bg-[#fe9832] text-[#683700]',
    bestSeason: 'Sep - Feb',
    duration: '2-3 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKRZDxSxiv599ziVNTI0-sd7yW8WQ6JJrJWzUVFZXUdm0KXRYw0Mzt0qFIyRE7nuCqCcGcaHmdXWeZXPhHpkGduLSdPuvnCc5_oJNFaSjtS78K6yQk5mggtRZu8foogMrFlpm6LWx9k2sf5mqcc_WimXbj6QF3ZVsgmy_KWe7HzflgMaTs6OtM3kPzjRNIgDtXyoYgpXiq1i8YXOOKvSbiSL93SoiV22skIiJx_g0tXpK-4IpSRAb0',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKRZDxSxiv599ziVNTI0-sd7yW8WQ6JJrJWzUVFZXUdm0KXRYw0Mzt0qFIyRE7nuCqCcGcaHmdXWeZXPhHpkGduLSdPuvnCc5_oJNFaSjtS78K6yQk5mggtRZu8foogMrFlpm6LWx9k2sf5mqcc_WimXbj6QF3ZVsgmy_KWe7HzflgMaTs6OtM3kPzjRNIgDtXyoYgpXiq1i8YXOOKvSbiSL93SoiV22skIiJx_g0tXpK-4IpSRAb0',
    heroAlt: 'Majestic view of Tirumala Venkateswara Temple',
    overview: [
      "Perched upon the sacred Seven Hills of Seshachalam, Tirumala Venkateswara Temple is one of the most visited and venerated pilgrimage destinations on Earth.",
      "Devotees journey from across the globe to receive the blessings of Lord Venkateswara (Balaji), experiencing the sacred laddoo prasadam, serene temple tanks, and resonant Vedic chants."
    ],
    bestTimeToVisitDetails: 'September to February: The hill climate is crisp and refreshing, especially during Brahmotsavam festivities.',
    accessibilityDetails: 'Dedicated Senior Citizen & Special Darshan queue systems (SED) with battery car transfers and comfortable waiting complexes.',
    sacredSites: [
      {
        id: 'ananda-nilayam',
        name: 'Ananda Nilayam & Sanctum',
        description: 'The golden vimana atop the inner sanctum of Lord Venkateswara, gleaming in divine majesty.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKRZDxSxiv599ziVNTI0-sd7yW8WQ6JJrJWzUVFZXUdm0KXRYw0Mzt0qFIyRE7nuCqCcGcaHmdXWeZXPhHpkGduLSdPuvnCc5_oJNFaSjtS78K6yQk5mggtRZu8foogMrFlpm6LWx9k2sf5mqcc_WimXbj6QF3ZVsgmy_KWe7HzflgMaTs6OtM3kPzjRNIgDtXyoYgpXiq1i8YXOOKvSbiSL93SoiV22skIiJx_g0tXpK-4IpSRAb0',
        altText: 'Tirumala golden dome vimana'
      }
    ],
    accommodations: [
      {
        id: 'marasa-sarovar',
        name: 'Marasa Sarovar Premiere',
        description: 'Dasavatara-themed serene luxury resort at the foothills.',
        features: ['Ayurvedic spa', 'Lotus pond reflections']
      }
    ]
  },
  {
    id: 'jerusalem',
    name: 'Jerusalem',
    location: 'Jerusalem, Israel',
    country: 'Israel',
    tradition: 'Abrahamic',
    traditionCategory: 'Abrahamic',
    tagColorClass: 'bg-[#1a237e] text-white',
    bestSeason: 'Apr - May',
    duration: '5-7 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
    heroAlt: 'Old City of Jerusalem and Dome of the Rock golden dome',
    overview: [
      "The holy city of Jerusalem is a crossroads of human devotion, sacred to Judaism, Christianity, and Islam.",
      "Walk the ancient stones of the Via Dolorosa, offer prayers at the Western Wall (Kotel), and behold the golden Dome of the Rock amidst millennia of faith."
    ],
    bestTimeToVisitDetails: 'April to May and September to November: Mild Mediterranean breezes and festive spiritual seasons.',
    accessibilityDetails: 'Accessible ramps mapped through the Jewish Quarter and main gates, with private specialized tour escorts available.',
    sacredSites: [
      {
        id: 'western-wall',
        name: 'Western Wall & Old City Gates',
        description: 'The holiest site where Jews gather for continuous prayer, open day and night.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
        altText: 'Jerusalem ancient walls'
      }
    ],
    accommodations: [
      {
        id: 'king-david-hotel',
        name: 'The King David Jerusalem',
        description: 'Iconic heritage hotel with direct views of the Old City ramparts.',
        features: ['Historic landmark', 'Full concierge service']
      }
    ]
  },
  {
    id: 'bodh-gaya',
    name: 'Bodh Gaya',
    location: 'Bodh Gaya, India',
    country: 'India',
    tradition: 'Buddhism',
    traditionCategory: 'Buddhism',
    tagColorClass: 'bg-[#735c00] text-white',
    bestSeason: 'Oct - Mar',
    duration: '3-4 Days',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0PiCmLZtRkjSPGDtpcHROkp6zupQqAM9zBBh8h6LuXwW164GALbiLaAitOm1fm2x51eOC5-6T13E48vyTpiMh5iRleGkMSIjWRPMBEKXH--k8vvf05SbmpjBdp1F0CNsZtUQGPJ9xzxFBCm541qVpahQGDSAH5oKg57_BwOwNhA1EgTVoAgNJpQW2Z7eO6V5VG7RvC4YtxvQCcr_PJ1P7FvuDVAK1IUMZwJueYvIyfNRVYeZzeyF-',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0PiCmLZtRkjSPGDtpcHROkp6zupQqAM9zBBh8h6LuXwW164GALbiLaAitOm1fm2x51eOC5-6T13E48vyTpiMh5iRleGkMSIjWRPMBEKXH--k8vvf05SbmpjBdp1F0CNsZtUQGPJ9xzxFBCm541qVpahQGDSAH5oKg57_BwOwNhA1EgTVoAgNJpQW2Z7eO6V5VG7RvC4YtxvQCcr_PJ1P7FvuDVAK1IUMZwJueYvIyfNRVYeZzeyF-',
    heroAlt: 'Mahabodhi Temple and sacred Bodhi tree',
    overview: [
      "Bodh Gaya is the cradle of Buddhism, where Siddhartha Gautama sat under the Bodhi Tree and attained supreme enlightenment over 2,500 years ago.",
      "The Mahabodhi Temple complex is a UNESCO World Heritage site filled with peaceful meditation grounds, Butter Lamp ceremonies, and international monasteries."
    ],
    bestTimeToVisitDetails: 'October to March: Cool winter season with numerous international teaching festivals and monastic chanting.',
    accessibilityDetails: 'Spacious stone pathways around the temple with barefoot assistance slippers and quiet perimeter benches.',
    sacredSites: [
      {
        id: 'mahabodhi-complex',
        name: 'Mahabodhi Temple & Bodhi Tree',
        description: 'The sacred sandstone spire and diamond throne where the Buddha attained Enlightenment.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0PiCmLZtRkjSPGDtpcHROkp6zupQqAM9zBBh8h6LuXwW164GALbiLaAitOm1fm2x51eOC5-6T13E48vyTpiMh5iRleGkMSIjWRPMBEKXH--k8vvf05SbmpjBdp1F0CNsZtUQGPJ9xzxFBCm541qVpahQGDSAH5oKg57_BwOwNhA1EgTVoAgNJpQW2Z7eO6V5VG7RvC4YtxvQCcr_PJ1P7FvuDVAK1IUMZwJueYvIyfNRVYeZzeyF-',
        altText: 'Mahabodhi Temple complex'
      }
    ],
    accommodations: [
      {
        id: 'maha-bodhi-hotel',
        name: 'Maha Bodhi Resort',
        description: 'Tranquil retreat nestled in lush organic gardens near the monastery enclave.',
        features: ['Meditation halls', 'Ayurvedic tea garden']
      }
    ]
  }
];

export const UPCOMING_JOURNEY: Itinerary = {
  id: 'camino-st-james',
  title: 'The Way of St. James',
  destination: 'Santiago de Compostela, Spain',
  tradition: 'Christianity',
  duration: '14 Days, 13 Nights',
  status: 'Upcoming',
  dateRange: 'Oct 12 - Oct 26, 2024',
  nightsText: '14 Days, 13 Nights',
  startingPoint: 'Sarria, Spain',
  endingPoint: 'Santiago de Compostela',
  inDaysText: 'IN 14 DAYS',
  seniorFriendly: true,
  summary: 'A serene, guided walking tour tailored for a relaxed pace, featuring historical insights and spiritual reflections along the French Way.',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa3Kff2ulB7S7lFc1HihGLoQTIx1ptcoGLwUpM6WKUIp-OxoLqHcn7LQXuFXMF-w8bKScRxiV0pAhe37II5mUOvR3FKL0GeBXxcsl-Gi8RuuE6FjWqC9wKuxIuZhuRgBKqIOeGuy5txn_AXHbURFNJK_3ibKAlljr0ad6PrNGMRx8VNfpolQxpzr0i-U0jlGRBZu0KuRJlc-xou0GBRUAln6i8KUwl1W-XQOgT5d5suER5ugeH8-bj',
  mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
  days: [
    {
      day: 1,
      date: 'Oct 12, 2024',
      title: 'Arrival in Sarria & Pilgrim Blessing',
      theme: 'Gathering & Contemplation',
      activities: [
        { time: '14:00', title: 'Check-in at Hotel Alfonso IX', description: 'Rest after transfer from Madrid/Santiago airport.', type: 'accommodation' },
        { time: '18:00', title: 'Pilgrim Mass & Credential Blessing', description: 'At Church of Santa Marina in historic Sarria.', type: 'darshan' }
      ]
    },
    {
      day: 2,
      date: 'Oct 13, 2024',
      title: 'Sarria to Portomarín',
      theme: 'Oak Forests & Celtic Hamlets',
      activities: [
        { time: '08:30', title: 'Gentle Walk through Galician Countryside', description: 'Scenic paved sections with luggage transfer van on standby.', type: 'sight' },
        { time: '14:00', title: 'Arrive across River Miño in Portomarín', description: 'Visit fortress-church of San Juan.', type: 'darshan' }
      ]
    }
  ]
};

export const SAVED_ITINERARIES: Itinerary[] = [
  {
    id: 'kyoto-zen-gardens',
    title: 'Kyoto Zen Gardens',
    destination: 'Kyoto, Japan',
    tradition: 'Buddhism',
    duration: '5 Days, 4 Nights',
    status: 'Draft',
    dateRange: 'May 12 - May 17, 2025',
    nightsText: '5 Days, 4 Nights',
    startingPoint: 'Kansai Airport (KIX)',
    endingPoint: 'Kyoto Station',
    inDaysText: 'IN 2 MONTHS',
    summary: "A personalized exploration of Kyoto's most serene temples, prioritizing accessible walkways and quiet reflection periods.",
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrX2Jr4HrduD_expD2KsaL-qRjhXvWgeQO91TaWrRYEzkA3zkVslcLCiY63YI3jxcQjIzzMULPZ9htR0qzDAiIi4GpDHNiARR01vol0N7F2aEyIDwLsV65PrcuwCKtXoCnJeAotyyzlARtwe10wxg5XUQsHK-ctlKM8pQjL0uhHvj7LdMte8knzlw_16AZzGsTRMBqXz-iRQiHSdmsi5XRU-7nSmtHRQUYLb5AKE6AjOUg_a55IgSg',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'May 12, 2025',
        title: 'Arrival & Settlement in Gion',
        theme: 'Entering Stillness',
        activities: [
          {
            time: '11:00',
            title: 'Arrive in Kansai (KIX)',
            description: 'Transfer to Kyoto via Haruka Express in reserved comfort car.',
            type: 'transport',
            iconName: 'flight_land'
          },
          {
            time: '14:30',
            title: 'Check-in: Traditional Ryokan',
            description: 'Private garden view, relaxing hot spring onsen bath and tatami serenity.',
            type: 'accommodation',
            iconName: 'bed'
          }
        ]
      },
      {
        day: 2,
        date: 'May 13, 2025',
        title: 'The Golden Pavilion & Zen Meditation',
        theme: 'Reflections on Water',
        activities: [
          {
            time: '08:30',
            title: 'Kinkaku-ji Morning Visit',
            description: 'Beat the crowds for quiet reflection by the mirror pond with step-free garden paths.',
            type: 'darshan',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrX2Jr4HrduD_expD2KsaL-qRjhXvWgeQO91TaWrRYEzkA3zkVslcLCiY63YI3jxcQjIzzMULPZ9htR0qzDAiIi4GpDHNiARR01vol0N7F2aEyIDwLsV65PrcuwCKtXoCnJeAotyyzlARtwe10wxg5XUQsHK-ctlKM8pQjL0uhHvj7LdMte8knzlw_16AZzGsTRMBqXz-iRQiHSdmsi5XRU-7nSmtHRQUYLb5AKE6AjOUg_a55IgSg',
            iconName: 'church'
          },
          {
            time: '14:00',
            title: 'Ryoan-ji Zen Rock Garden',
            description: 'Afternoon guided meditation session on the raked gravel veranda with Zen abbot.',
            type: 'meditation',
            iconName: 'park'
          }
        ]
      },
      {
        day: 3,
        date: 'May 14, 2025',
        title: 'Bamboo Forest & Tenryu-ji Temple',
        theme: 'Sound of Green Winds',
        activities: [
          {
            time: '07:30',
            title: 'Arashiyama Bamboo Grove Walk',
            description: 'Gentle morning stroll before tourists arrive, with electric golf cart assistance.',
            type: 'sight'
          },
          {
            time: '11:00',
            title: 'Shojin Ryori Temple Lunch',
            description: 'Traditional Buddhist vegetarian cuisine overlooking Sogenchi pond.',
            type: 'accommodation'
          }
        ]
      }
    ]
  },
  {
    id: 'madurai-rameswaram',
    title: 'Madurai & Rameswaram Sacred Trail',
    destination: 'Madurai & Rameswaram, Tamil Nadu, India',
    tradition: 'Hinduism',
    duration: '7 Days, 6 Nights',
    status: 'Upcoming',
    dateRange: 'Nov 18 - Nov 25, 2025',
    nightsText: '7 Days, 6 Nights',
    startingPoint: 'Madurai Airport (IXM)',
    endingPoint: 'Rameswaram Island & Madurai',
    inDaysText: 'CONFIRMED',
    summary: 'A relaxed, senior-friendly South India temple tour featuring the soaring gopurams of Meenakshi Amman and the sacred 22 theerthams of Ramanathaswamy Temple.',
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFXGTjrizuiZrQuptCsqV05YntwhqipWT55Bw2J7QSrnLIwePHut4T5FJuxMdUNOBnzwLeIbVRyXLLbXMOzbh_L53rDFG_jTQuGKOWE7ui9u7VNuheTPE2jd5B56I7burnl3HX0jT5sYcue1C73WxpCMKZlW_C9Fb5c0P5okiCh5mV29vKZ0qB75NEWyEhWr9EKnNByNRKzeMDZZcDiguV8SHbGijgo1-9lrQif3N739RCUT3riySd',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Nov 18, 2025',
        title: 'Arrival in Heritage Madurai',
        theme: 'Gopurams of Grace',
        activities: [
          { time: '12:00', title: 'Check-in at Heritage Madurai', description: 'Rest in luxury cottages amidst banyan trees.', type: 'accommodation' },
          { time: '17:30', title: 'Meenakshi Amman Evening Darshan', description: 'VIP entrance corridor and palanquin procession witnessing.', type: 'darshan' }
        ]
      },
      {
        day: 2,
        date: 'Nov 19, 2025',
        title: 'Thirumalai Nayakkar Mahal & Chariot Streets',
        theme: 'Art & Heritage',
        activities: [
          { time: '09:00', title: 'Palace Archway Walk', description: 'Stunning Indo-Saracenic pillars with wheelchair ramps.', type: 'sight' },
          { time: '16:00', title: 'Traditional Brass Craft & Silk Weavers', description: 'Meet third-generation devotional craftsmen.', type: 'sight' }
        ]
      },
      {
        day: 3,
        date: 'Nov 20, 2025',
        title: 'Pamban Sea Bridge to Rameswaram',
        theme: 'Ocean Shrines',
        activities: [
          { time: '08:00', title: 'Scenic Private Drive across Pamban Sea Bridge', description: 'Panoramic vistas of the turquoise Bay of Bengal.', type: 'transport' },
          { time: '16:30', title: 'Ramanathaswamy Temple 1000 Pillar Hall', description: 'Marvel at the longest temple corridor in the world.', type: 'darshan' }
        ]
      }
    ]
  },
  {
    id: 'varanasi-ganga-aarti',
    title: 'Varanasi Ganga Aarti & Sarnath Awakening',
    destination: 'Varanasi & Sarnath, India',
    tradition: 'Hinduism / Buddhism',
    duration: '5 Days, 4 Nights',
    status: 'Upcoming',
    dateRange: 'Nov 02 - Nov 06, 2025',
    nightsText: '5 Days, 4 Nights',
    startingPoint: 'Lal Bahadur Shastri Airport (VNS)',
    endingPoint: 'Assi Ghat & Sarnath',
    inDaysText: 'CONFIRMED',
    summary: 'Private dawn boat rides along the ghats, VIP corridor darshan at Kashi Vishwanath, and meditative walks at Sarnath.',
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvv5eibWGErQ0RnjGVOH9jRzYT89UyAy3hrRjNUjiDbfLYj9ouqtJuC_8Eqt8qButZaHvSv1Dro9Ut911e_wv_bwdM1PMUscnFW7JYSjWfoMI4vGTf_H-D5SjC-xf9_JgATeMI0mva8XtBczmdtgNLUYLX3mEzMAwCKeUlivrL6h-UzWmhqyItcLeCwdkPuLkhzuSu8-H39ZlORXdSvwkWzGtmvQcHY9tnrK-frY9Zio_mr74sVpo2',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Nov 02, 2025',
        title: 'Arrival in Kashi & Twilight Ganga Aarti',
        theme: 'River of Lights',
        activities: [
          { time: '13:00', title: 'Check-in: Taj Ganges Varanasi', description: 'Serene garden accommodations with sattvic dining.', type: 'accommodation' },
          { time: '17:30', title: 'Reserved Bajra Boat for Dashashwamedh Aarti', description: 'Watch the sacred priests offer multi-tiered brass oil lamps from the calm waters.', type: 'darshan' }
        ]
      },
      {
        day: 2,
        date: 'Nov 03, 2025',
        title: 'Dawn Sanctum Darshan at Kashi Vishwanath',
        theme: 'Eternal Shiva',
        activities: [
          { time: '06:00', title: 'VIP Corridor Darshan at Kashi Vishwanath', description: 'Direct battery cart and wheelchair corridor to the sanctum.', type: 'darshan' },
          { time: '10:00', title: 'Traditional Banarasi Silk Heritage Walk', description: 'Gentle exploration of ancient master handlooms.', type: 'sight' }
        ]
      },
      {
        day: 3,
        date: 'Nov 04, 2025',
        title: 'Sarnath Deer Park & Dhamek Stupa',
        theme: 'First Turning of the Wheel',
        activities: [
          { time: '09:00', title: 'Dhamek Stupa & Archaeological Museum', description: 'Meditate in the tranquil park where Lord Buddha gave his first sermon.', type: 'meditation' },
          { time: '14:30', title: 'Mulagandha Kuti Vihara Buddhist Chants', description: 'Witness the serene afternoon bell ringing ceremony.', type: 'darshan' }
        ]
      }
    ]
  },
  {
    id: 'vatican-city-rome',
    title: 'Vatican City & Rome',
    destination: 'Rome & Vatican City',
    tradition: 'Christianity',
    duration: '5 Days, 4 Nights',
    status: 'Completed',
    dateRange: 'Mar 10 - Mar 15, 2024',
    nightsText: '5 Days, 4 Nights',
    startingPoint: 'Rome Fiumicino (FCO)',
    endingPoint: "St. Peter's Square",
    inDaysText: 'COMPLETED',
    summary: 'A comprehensive historical and religious tour of Rome, paced specifically for senior solo travelers.',
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Day 1',
        title: "Papal Audience & St. Peter's Basilica",
        theme: 'Apostolic Blessings',
        activities: [
          { time: '09:00', title: 'Reserved Seating at Papal Audience', description: 'Accessible access in Paul VI Audience Hall.', type: 'darshan' },
          { time: '14:00', title: 'Vatican Museums Private Elevator Tour', description: 'Direct corridor to Sistine Chapel with audio guide.', type: 'sight' }
        ]
      },
      {
        day: 2,
        date: 'Day 2',
        title: 'Basilica of Saint Mary Major',
        theme: 'Early Christian Roman Shrines',
        activities: [
          { time: '10:00', title: 'Private Guided Holy Relics Tour', description: 'Seated prayer in the Borghese Chapel.', type: 'darshan' }
        ]
      }
    ]
  },
  {
    id: 'jerusalem-holy-lands',
    title: 'Jerusalem & The Holy Land Paths',
    destination: 'Jerusalem, Bethlehem & Galilee',
    tradition: 'Abrahamic',
    duration: '8 Days, 7 Nights',
    status: 'Draft',
    dateRange: 'Apr 05 - Apr 13, 2026',
    nightsText: '8 Days, 7 Nights',
    startingPoint: 'Ben Gurion Airport (TLV)',
    endingPoint: 'Old City Jerusalem',
    inDaysText: 'IN 8 MONTHS',
    summary: 'A deeply moving interfaith journey tracing the sacred sites of Mount of Olives, Western Wall, and Holy Sepulchre.',
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Day 1',
        title: 'Arrival in Jerusalem',
        theme: 'City of Peace',
        activities: [
          { time: '14:00', title: 'Check-in at The King David Hotel', description: 'Rest with panoramic views of the Old City ramparts.', type: 'accommodation' },
          { time: '18:00', title: 'Sunset Prayer on Mount of Olives', description: 'Overlooking the golden Dome of the Rock and Kidron Valley.', type: 'meditation' }
        ]
      },
      {
        day: 2,
        date: 'Day 2',
        title: 'Western Wall & Church of the Holy Sepulchre',
        theme: 'Sacred Stones of Devotion',
        activities: [
          { time: '08:30', title: 'Western Wall (Kotel) Dawn Prayers', description: 'Step-free plaza access and personal prayer reflection.', type: 'darshan' },
          { time: '14:00', title: 'Via Dolorosa & Holy Sepulchre', description: 'Accompanied by a theological scholar with frequent resting points.', type: 'darshan' }
        ]
      }
    ]
  }
];

// Helper functions to generate rich itineraries
export function createItineraryForDestination(dest: Destination): Itinerary {
  return {
    id: `dest-${dest.id}-${Date.now()}`,
    title: `${dest.name} Sacred Pilgrimage`,
    destination: dest.location,
    tradition: dest.tradition,
    duration: dest.duration,
    status: 'Draft',
    dateRange: 'Upcoming 2025 - 2026',
    nightsText: dest.duration,
    startingPoint: `${dest.name} Gateway`,
    endingPoint: `${dest.name} Sacred Heart`,
    inDaysText: 'UPCOMING',
    summary: `A personalized, reverently paced pilgrimage in ${dest.name}, combining iconic shrines, serene darshans, and step-free senior accommodations.`,
    seniorFriendly: true,
    image: dest.image || dest.heroImage,
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Day 1',
        title: 'Arrival & Sacred Inception',
        theme: 'Settlement & Devotion',
        activities: [
          {
            time: '14:00',
            title: `Check-in: ${dest.accommodations[0]?.name || 'Heritage Lodging'}`,
            description: dest.accommodations[0]?.description || 'Gentle arrival, welcome herbal drink and luggage assistance.',
            type: 'accommodation',
            iconName: 'bed'
          },
          {
            time: '17:30',
            title: 'Evening Sunset Prayer & Lamps',
            description: 'Witness the serene evening ritual from reserved accessible seating.',
            type: 'darshan',
            iconName: 'flame'
          }
        ]
      },
      {
        day: 2,
        date: 'Day 2',
        title: `Sanctum Visit: ${dest.sacredSites[0]?.name || 'Holy Shrine'}`,
        theme: 'Inner Stillness',
        activities: [
          {
            time: '06:30',
            title: `Quiet Darshan at ${dest.sacredSites[0]?.name || 'Sacred Sanctum'}`,
            description: dest.sacredSites[0]?.description || 'Experience the morning silence before general visiting hours.',
            type: 'darshan',
            image: dest.sacredSites[0]?.image,
            iconName: 'church'
          },
          {
            time: '14:30',
            title: 'Theological Scholar Insight & Garden Meditation',
            description: 'Accompanied by a dedicated spiritual guide with frequent shaded resting points.',
            type: 'meditation',
            iconName: 'book'
          }
        ]
      },
      {
        day: 3,
        date: 'Day 3',
        title: 'Sacred Blessings & Peaceful Departure',
        theme: 'Carrying the Light',
        activities: [
          {
            time: '08:00',
            title: 'Prasadam / Holy Offering & Morning Walk',
            description: 'Receive personal blessings and commemorative sacred tokens.',
            type: 'darshan'
          },
          {
            time: '12:00',
            title: 'Comfort Airport / Rail Transfer',
            description: 'Private air-conditioned transfer with driver assistance.',
            type: 'transport'
          }
        ]
      }
    ]
  };
}

export function createItineraryForPackage(pkgTitle: string, destination: string, tradition: string): Itinerary {
  const matchingSaved = SAVED_ITINERARIES.find(
    (s) => s.title.toLowerCase().includes(pkgTitle.toLowerCase()) || pkgTitle.toLowerCase().includes(s.title.toLowerCase())
  );
  if (matchingSaved) {
    return { ...matchingSaved, id: `pkg-${matchingSaved.id}-${Date.now()}` };
  }

  return {
    id: `pkg-${Date.now()}`,
    title: pkgTitle,
    destination,
    tradition,
    duration: '7 Days, 6 Nights',
    status: 'Upcoming',
    dateRange: 'Flexible Dates 2025 - 2026',
    nightsText: '7 Days, 6 Nights',
    startingPoint: `${destination} Gateway`,
    endingPoint: `${destination} Central Shrine`,
    inDaysText: 'FEATURED PACKAGE',
    summary: `A fully supported, gentle pilgrimage for "${pkgTitle}" in ${destination}, incorporating dedicated guides, senior pacing, and premium rest.`,
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa3Kff2ulB7S7lFc1HihGLoQTIx1ptcoGLwUpM6WKUIp-OxoLqHcn7LQXuFXMF-w8bKScRxiV0pAhe37II5mUOvR3FKL0GeBXxcsl-Gi8RuuE6FjWqC9wKuxIuZhuRgBKqIOeGuy5txn_AXHbURFNJK_3ibKAlljr0ad6PrNGMRx8VNfpolQxpzr0i-U0jlGRBZu0KuRJlc-xou0GBRUAln6i8KUwl1W-XQOgT5d5suER5ugeH8-bj',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Day 1',
        title: 'Arrival & Welcome Reception',
        theme: 'Gathering & Blessings',
        activities: [
          { time: '14:00', title: 'Hotel Check-in & Luggage Assistance', description: 'Private transfer from airport directly to hotel.', type: 'accommodation' },
          { time: '18:00', title: 'Pilgrim Blessing & Orientation', description: 'Meet with your spiritual leader and receive tour credentials.', type: 'darshan' }
        ]
      },
      {
        day: 2,
        date: 'Day 2',
        title: 'Morning Sanctum & Guided Sacred Walk',
        theme: 'Devotional Awakening',
        activities: [
          { time: '08:00', title: 'VIP Corridor Entry to Main Shrine', description: 'Reserved access with wheelchair ramps and minimal standing.', type: 'darshan' },
          { time: '14:00', title: 'Theological Dialogue & Rest', description: 'Quiet discussion with tea and refreshments.', type: 'meditation' }
        ]
      },
      {
        day: 3,
        date: 'Day 3',
        title: 'Sacred Rituals & Evening Ceremony',
        theme: 'Communion & Lights',
        activities: [
          { time: '07:00', title: 'Sunrise Contemplation & Chanting', description: 'Early morning peace before city wakes.', type: 'meditation' },
          { time: '17:30', title: 'Grand Evening Ceremony with Reserved Seating', description: 'Witness traditional lamps and sacred music.', type: 'darshan' }
        ]
      }
    ]
  };
}

export function createItineraryForFestival(festivalName: string, location: string, tradition: string): Itinerary {
  return {
    id: `fest-${Date.now()}`,
    title: `${festivalName} Pilgrimage`,
    destination: location,
    tradition,
    duration: '5 Days, 4 Nights',
    status: 'Upcoming',
    dateRange: 'Special Festival Dates 2025',
    nightsText: '5 Days, 4 Nights',
    startingPoint: `${location} Arrival Point`,
    endingPoint: `${location} Main Festival Arena`,
    inDaysText: 'FESTIVAL SPECIAL',
    summary: `Experience the divine grandeur of ${festivalName} in ${location} with curated crowd-mitigated access, private viewing platforms, and senior assistance.`,
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvv5eibWGErQ0RnjGVOH9jRzYT89UyAy3hrRjNUjiDbfLYj9ouqtJuC_8Eqt8qButZaHvSv1Dro9Ut911e_wv_bwdM1PMUscnFW7JYSjWfoMI4vGTf_H-D5SjC-xf9_JgATeMI0mva8XtBczmdtgNLUYLX3mEzMAwCKeUlivrL6h-UzWmhqyItcLeCwdkPuLkhzuSu8-H39ZlORXdSvwkWzGtmvQcHY9tnrK-frY9Zio_mr74sVpo2',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Festival Day 1',
        title: 'Arrival & Festival Atmosphere',
        theme: 'Entering the Celebration',
        activities: [
          { time: '14:00', title: 'Check-in at Reserved Sanctuary Hotel', description: 'Rest away from crowded corridors.', type: 'accommodation' },
          { time: '17:30', title: 'Opening Lamp Lighting Ritual', description: 'Witness the inaugural ceremonies from a private elevated lounge.', type: 'darshan' }
        ]
      },
      {
        day: 2,
        date: 'Festival Day 2',
        title: 'Grand Auspicious Ceremony & Procession',
        theme: 'Celestial Union',
        activities: [
          { time: '07:30', title: 'Morning Chants & Holy Immersion / Blessings', description: 'Guided by temple priests with private assistance.', type: 'darshan' },
          { time: '18:00', title: 'Illumination & Sacred Music Concert', description: 'Devotional ragas and choir performances under starry skies.', type: 'meditation' }
        ]
      }
    ]
  };
}

export function createCustomItinerary(query: { destination: string; tradition: string; duration: string }): Itinerary {
  const destMatch = DESTINATIONS.find((d) =>
    d.name.toLowerCase().includes(query.destination.toLowerCase()) ||
    query.destination.toLowerCase().includes(d.name.toLowerCase())
  );
  if (destMatch) {
    return createItineraryForDestination(destMatch);
  }

  return {
    id: `custom-${Date.now()}`,
    title: `${query.destination} Spiritual Journey`,
    destination: query.destination,
    tradition: query.tradition === 'Any Religion' ? 'Interfaith / Spiritual' : query.tradition,
    duration: query.duration,
    status: 'Draft',
    dateRange: 'Flexible Dates 2025 - 2026',
    nightsText: query.duration,
    startingPoint: `${query.destination} Airport / Station`,
    endingPoint: `${query.destination} Sanctum`,
    inDaysText: 'NEW DRAFT',
    summary: `A personalized ${query.duration} sacred itinerary to ${query.destination} honoring ${query.tradition}, designed with senior-friendly walking pace and morning contemplation.`,
    seniorFriendly: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwtX3c2EInlYfR_PP9UokIJV7CDvy-1abGW1drveZ1MoVt-2leUm98Et84KIJoolrX0GgwkmZysl224sox_5VPUT8tmYld3NgYUws8Rl28yS2vZf1Hb9k-Hw9mT1EJPexGrUiqHm4zW7KAjrKzgBRJ7Mva1JpsTY5cZOsFCSb2SN8K4z-xM0uzm_o2wdigSSBgH8JqlTPi5_a6uWap7SVcuQ9v_cIPa-XkzLkkmajeJlTpeWjWcM1s',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXbqybLANvX_VgBYeSceZG7_aKetsWk1Mct80olBjxRupQpoowqxLgQzLs6KI8QOfgzkLGcFhs6gScGxy4RKq26OCMTVVFurR8ygJkCa6dyfQ0ivpWAyZgxXH2tNdOJ3TuFjZJ-elcoz_6DvIY3Ng4gjzJNfe8TrfbiMHqYZsul0HIicqMw58DmDS0r-RWGQ8Ao9cR9NFy2PJDpo2SlycgNFkQmCgRS4UzwTrMQC2x3OxKKPBzfJT3',
    days: [
      {
        day: 1,
        date: 'Day 1',
        title: `Arrival in ${query.destination} & Evening Prayer`,
        theme: 'Arrival & Stillness',
        activities: [
          { time: '14:00', title: 'Hotel Check-in & Rest', description: 'Unwind and acclimatize with herbal tea.', type: 'accommodation' },
          { time: '18:00', title: 'Evening Devotional Offering', description: 'Candlelight / Lamp lighting and quiet meditation.', type: 'darshan' }
        ]
      },
      {
        day: 2,
        date: 'Day 2',
        title: 'Morning Sanctum Visit & Sacred Sites',
        theme: 'Spiritual Deepening',
        activities: [
          { time: '08:30', title: `Guided Visit to Historic Shrine in ${query.destination}`, description: 'Explore ancient architecture with accessible routes.', type: 'darshan' },
          { time: '14:30', title: 'Theological Dialogue & Quiet Time', description: 'Spiritual contemplation and local sacred arts.', type: 'meditation' }
        ]
      }
    ]
  };
}

export const SACRED_INSIGHTS: SacredInsight[] = [
  {
    id: 'amritsar-amrit-vela',
    title: 'Dawn at the Golden Temple',
    description: 'Consider visiting the Golden Temple during Amrit Vela (early dawn 3:30 AM - 5:00 AM) for a profound spiritual experience as the holy scripture is ceremonially installed.',
    destination: 'Amritsar',
    tags: ['Amritsar', 'Morning Rituals', 'Sikhism']
  },
  {
    id: 'varanasi-aarti',
    title: 'Ganga Aarti at Dashashwamedh',
    description: 'Reserve a wooden hand-rowed boat at twilight to witness the synchronized brass lamp offering from the quiet vantage of the sacred river.',
    destination: 'Varanasi',
    tags: ['Varanasi', 'Twilight Prayers', 'Hinduism']
  },
  {
    id: 'kyoto-zen',
    title: 'Quiet Hours at Ryoan-ji',
    description: 'Arrive at 8:00 AM right as temple gates open. The rock garden is enveloped in pure morning silence before tour groups arrive.',
    destination: 'Kyoto',
    tags: ['Kyoto', 'Zen Meditation', 'Buddhism']
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: 'dev-deepawali',
    name: 'Dev Deepawali (Festival of Lights of the Gods)',
    tradition: 'Hinduism',
    location: 'Varanasi, India',
    month: 'November (Kartik Purnima)',
    description: 'Over a million earthen oil lamps (diyas) illuminate all 84 ghats along the Ganges in an awe-inspiring celestial sight.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvv5eibWGErQ0RnjGVOH9jRzYT89UyAy3hrRjNUjiDbfLYj9ouqtJuC_8Eqt8qButZaHvSv1Dro9Ut911e_wv_bwdM1PMUscnFW7JYSjWfoMI4vGTf_H-D5SjC-xf9_JgATeMI0mva8XtBczmdtgNLUYLX3mEzMAwCKeUlivrL6h-UzWmhqyItcLeCwdkPuLkhzuSu8-H39ZlORXdSvwkWzGtmvQcHY9tnrK-frY9Zio_mr74sVpo2',
    significance: 'Celebrates the victory of Lord Shiva over demon Tripurasura, when gods descend to earth to bathe in the holy Ganges.'
  },
  {
    id: 'vesak',
    name: 'Vesak (Buddha Purnima)',
    tradition: 'Buddhism',
    location: 'Bodh Gaya, India',
    month: 'May',
    description: 'Pilgrims from Sri Lanka, Thailand, Tibet, and Japan assemble around the sacred Bodhi Tree in white robes, lighting lamps and chanting peace mantras.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0PiCmLZtRkjSPGDtpcHROkp6zupQqAM9zBBh8h6LuXwW164GALbiLaAitOm1fm2x51eOC5-6T13E48vyTpiMh5iRleGkMSIjWRPMBEKXH--k8vvf05SbmpjBdp1F0CNsZtUQGPJ9xzxFBCm541qVpahQGDSAH5oKg57_BwOwNhA1EgTVoAgNJpQW2Z7eO6V5VG7RvC4YtxvQCcr_PJ1P7FvuDVAK1IUMZwJueYvIyfNRVYeZzeyF-',
    significance: "Commemorates the birth, supreme enlightenment, and parinirvana of Gautama Buddha."
  },
  {
    id: 'easter-jerusalem',
    name: 'Holy Week & Easter',
    tradition: 'Christianity',
    location: 'Jerusalem, Israel',
    month: 'March / April',
    description: 'Solemn processions trace the Palm Sunday path on the Mount of Olives and Good Friday Via Dolorosa to the Church of the Holy Sepulchre.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkB3f7kwssbSLwvxHhk-RE59QYtMsBoOedUxA495GeT2QoWwEDDQrJtU3qPta2FPhvLxQSg1GfU-kQSkv9c4UG8W-MMGFlPVzsd__fahyJF0nSfa-Qh97OcJ2OpGrYOhlXQSXHdx8XWr0DGIlJDEt7v7a_nt9dpvmaxd6-O6qaBqy9aYZexJUvESxZliBmKY3nHPvimYQVG1FjRGbn2mEGGEH3i_BOAKH8Mi1ruFrz_Lk7IMU1Z2V6',
    significance: "The Passion, Crucifixion, and Resurrection of Jesus Christ in the historic sacred city."
  }
];
