export type ScreenType = 'home' | 'dashboard' | 'destination' | 'planner' | 'packages' | 'festivals';

export interface SacredSite {
  id: string;
  name: string;
  description: string;
  image: string;
  altText: string;
  accessibilityNotes?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  description: string;
  features?: string[];
  type?: string;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  country: string;
  tradition: string;
  traditionCategory: 'Hinduism' | 'Buddhism' | 'Christianity' | 'Islam' | 'Abrahamic' | 'Sikhism' | 'Shinto' | 'Interfaith';
  tagColorClass: string;
  bestSeason: string;
  duration: string;
  image: string;
  heroImage: string;
  heroAlt: string;
  overview: string[];
  bestTimeToVisitDetails: string;
  accessibilityDetails: string;
  sacredSites: SacredSite[];
  accommodations: Accommodation[];
}

export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  type: 'transport' | 'accommodation' | 'darshan' | 'meditation' | 'sight';
  image?: string;
  iconName?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  theme?: string;
  activities: ItineraryActivity[];
}

export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  tradition: string;
  duration: string;
  status: 'Draft' | 'Upcoming' | 'Completed';
  dateRange: string;
  nightsText: string;
  startingPoint: string;
  endingPoint: string;
  inDaysText?: string;
  summary: string;
  image?: string;
  mapImage?: string;
  seniorFriendly?: boolean;
  days: ItineraryDay[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  miniCard?: {
    title: string;
    subtitle: string;
    image: string;
    altText?: string;
  };
}

export interface SacredInsight {
  id: string;
  title: string;
  description: string;
  destination: string;
  tags: string[];
}

export interface Festival {
  id: string;
  name: string;
  tradition: string;
  location: string;
  month: string;
  description: string;
  image: string;
  significance: string;
}
