import React, { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { SideNavBar } from './components/SideNavBar';
import { HomeScreen } from './components/HomeScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { DestinationDetailScreen } from './components/DestinationDetailScreen';
import { AIPlannerScreen } from './components/AIPlannerScreen';
import { PackagesScreen } from './components/PackagesScreen';
import { FestivalsScreen } from './components/FestivalsScreen';
import { Footer } from './components/Footer';
import { SignInModal, SettingsModal } from './components/Modals';
import {
  DESTINATIONS,
  UPCOMING_JOURNEY,
  SAVED_ITINERARIES,
  createItineraryForDestination,
  createItineraryForPackage,
  createItineraryForFestival,
  createCustomItinerary,
} from './data/spiritualData';
import { Destination, Itinerary, ScreenType } from './types';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination>(DESTINATIONS[0]);
  
  // Dynamic user itineraries state
  const [userItineraries, setUserItineraries] = useState<Itinerary[]>([
    UPCOMING_JOURNEY,
    ...SAVED_ITINERARIES,
  ]);
  
  // Featured / Active Journey in Dashboard
  const [activeJourney, setActiveJourney] = useState<Itinerary>(UPCOMING_JOURNEY);

  // Active itinerary loaded in AI Planner
  const [activeItinerary, setActiveItinerary] = useState<Itinerary | null>(UPCOMING_JOURNEY);
  
  const [plannerQuery, setPlannerQuery] = useState<{
    destination: string;
    tradition: string;
    duration: string;
  } | null>(null);

  // User auth state
  const [user, setUser] = useState<{ name: string; email: string } | null>({
    name: 'Thomas Reynolds',
    email: 'thomas.reynolds@example.com',
  });

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Navigation handler
  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    setCurrentScreen('destination');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct selection of an itinerary (e.g. from chat miniCard or quick link)
  const handleSelectItinerary = (itinerary: Itinerary) => {
    // Ensure it exists in state
    setUserItineraries((prev) => {
      if (prev.some((item) => item.id === itinerary.id)) return prev;
      return [itinerary, ...prev];
    });
    setActiveJourney(itinerary);
    setActiveItinerary(itinerary);
    setCurrentScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start planning from Hero Search
  const handleStartPlanningFromHero = (query: {
    destination: string;
    tradition: string;
    duration: string;
  }) => {
    setPlannerQuery(query);
    const newItinerary = createCustomItinerary(query);
    
    // Add to user itineraries
    setUserItineraries((prev) => [newItinerary, ...prev]);
    setActiveJourney(newItinerary);
    setActiveItinerary(newItinerary);

    const match = DESTINATIONS.find((d) =>
      d.name.toLowerCase().includes(query.destination.toLowerCase())
    );
    if (match) {
      setSelectedDestination(match);
    }
    
    setCurrentScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Plan a specific destination
  const handlePlanDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    const newItinerary = createItineraryForDestination(dest);
    
    setUserItineraries((prev) => {
      if (prev.some((p) => p.title === newItinerary.title)) return prev;
      return [newItinerary, ...prev];
    });
    setActiveJourney(newItinerary);
    setActiveItinerary(newItinerary);
    
    setPlannerQuery({
      destination: dest.name,
      tradition: dest.tradition,
      duration: dest.duration,
    });
    setCurrentScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume or edit an itinerary
  const handleResumeItinerary = (itinerary: Itinerary) => {
    setActiveItinerary(itinerary);
    setActiveJourney(itinerary);
    setCurrentScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select a curated package
  const handleSelectPackage = (pkgTitle: string, destination: string, tradition: string) => {
    const pkgItinerary = createItineraryForPackage(pkgTitle, destination, tradition);
    
    setUserItineraries((prev) => {
      if (prev.some((p) => p.title.toLowerCase() === pkgTitle.toLowerCase())) return prev;
      return [pkgItinerary, ...prev];
    });
    setActiveJourney(pkgItinerary);
    setActiveItinerary(pkgItinerary);

    setPlannerQuery({
      destination,
      tradition,
      duration: pkgItinerary.duration,
    });
    const match = DESTINATIONS.find(
      (d) => destination.toLowerCase().includes(d.name.toLowerCase())
    );
    if (match) setSelectedDestination(match);

    setCurrentScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Plan a festival pilgrimage
  const handlePlanFestivalJourney = (
    festivalName: string,
    location: string,
    tradition: string
  ) => {
    const festItinerary = createItineraryForFestival(festivalName, location, tradition);
    
    setUserItineraries((prev) => {
      if (prev.some((p) => p.title.toLowerCase() === festItinerary.title.toLowerCase())) return prev;
      return [festItinerary, ...prev];
    });
    setActiveJourney(festItinerary);
    setActiveItinerary(festItinerary);

    setPlannerQuery({
      destination: location,
      tradition,
      duration: '5 Days, 4 Nights',
    });
    const match = DESTINATIONS.find((d) => location.toLowerCase().includes(d.name.toLowerCase()));
    if (match) setSelectedDestination(match);

    setCurrentScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save or update itinerary
  const handleSaveItinerary = (saved: Itinerary) => {
    setUserItineraries((prev) => {
      const idx = prev.findIndex((s) => s.id === saved.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = saved;
        return next;
      }
      return [saved, ...prev];
    });
    setActiveJourney(saved);
    setActiveItinerary(saved);
  };

  // Delete itinerary
  const handleDeleteItinerary = (id: string) => {
    setUserItineraries((prev) => {
      const filtered = prev.filter((p) => p.id !== id);
      if (activeJourney.id === id && filtered.length > 0) {
        setActiveJourney(filtered[0]);
      }
      return filtered;
    });
  };

  const isDashboard = currentScreen === 'dashboard';

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f8] text-[#1b1c1c]">
      {/* Top Navigation Bar */}
      <TopNavBar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenSignIn={() => setIsSignInOpen(true)}
        user={user}
        onSignOut={() => setUser(null)}
      />

      {/* Side Navigation Bar (when in Dashboard on desktop) */}
      {isDashboard && (
        <SideNavBar
          currentScreen={currentScreen}
          onNavigate={handleNavigate}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
      )}

      {/* Main View Container */}
      <div
        className={`flex-1 flex flex-col ${
          isDashboard ? 'lg:pl-72 pt-28 px-5 md:px-12 pb-16' : ''
        }`}
      >
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectDestination={handleSelectDestination}
            onStartPlanning={handleStartPlanningFromHero}
            onSelectItinerary={handleSelectItinerary}
          />
        )}

        {currentScreen === 'dashboard' && (
          <DashboardScreen
            onNavigate={handleNavigate}
            onResumeItinerary={handleResumeItinerary}
            itineraries={userItineraries}
            activeJourney={activeJourney}
            onSelectActiveJourney={setActiveJourney}
            onDeleteItinerary={handleDeleteItinerary}
          />
        )}

        {currentScreen === 'destination' && (
          <DestinationDetailScreen
            destination={selectedDestination}
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
            onPlanDestination={handlePlanDestination}
            onSelectDestination={setSelectedDestination}
          />
        )}

        {currentScreen === 'planner' && (
          <AIPlannerScreen
            onNavigate={handleNavigate}
            initialDestination={selectedDestination}
            initialItinerary={activeItinerary}
            initialQuery={plannerQuery}
            savedItineraries={userItineraries}
            onSaveItinerary={handleSaveItinerary}
            onSelectItinerary={(it) => {
              setActiveItinerary(it);
              setActiveJourney(it);
            }}
          />
        )}

        {currentScreen === 'packages' && (
          <PackagesScreen
            onNavigate={handleNavigate}
            onSelectPackage={handleSelectPackage}
          />
        )}

        {currentScreen === 'festivals' && (
          <FestivalsScreen
            onNavigate={handleNavigate}
            onPlanFestivalJourney={handlePlanFestivalJourney}
          />
        )}
      </div>

      {/* Footer */}
      {!isDashboard && <Footer onNavigate={handleNavigate} />}

      {/* Modals */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSignInSuccess={(u) => setUser(u)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
