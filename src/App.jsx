import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { SakuraCanvas } from './components/SakuraCanvas';
import { SmartSearchModal } from './components/SmartSearchModal';
import { AuthModal } from './components/AuthModal';

import { HomeView } from './views/HomeView';
import { N5ModuleView } from './views/N5ModuleView';
import { N4ModuleView } from './views/N4ModuleView';
import { PracticeView } from './views/PracticeView';
import { ListeningPracticeView } from './views/ListeningPracticeView';
import { SpeakingPracticeView } from './views/SpeakingPracticeView';
import { WritingPracticeView } from './views/WritingPracticeView';
import { ProgressView } from './views/ProgressView';
import { BookmarksView } from './views/BookmarksView';
import { ProfileView } from './views/ProfileView';
import { AboutView } from './views/AboutView';
import { TestView } from './views/TestView';
import { FlashcardDeck } from './components/FlashcardDeck';
import { QuizEngine } from './components/QuizEngine';

import { jlpt500QuizBank } from './data/quizzesData';
import { IntroVideo } from './components/IntroVideo';

const MainContent = () => {
  const { activeView, setActiveView, navigateBack, currentUser } = useApp();

  // Mandatory Login First Protection
  if (!currentUser) {
    return (
      <div className="min-h-screen flex flex-col relative z-10 bg-slate-50 dark:bg-[#0B0E14] text-slate-900 dark:text-white transition-colors duration-300 max-w-full overflow-x-hidden">
        <SakuraCanvas />
        <AuthModal isFirstScreen={true} />
      </div>
    );
  }

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'n5':
        return <N5ModuleView />;
      case 'n4':
        return <N4ModuleView />;
      case 'test':
        return <TestView />;
      case 'practice':
        return <PracticeView />;
      case 'listening':
        return <ListeningPracticeView />;
      case 'speaking':
        return <SpeakingPracticeView />;
      case 'writing':
        return <WritingPracticeView />;
      case 'flashcards':
        return <FlashcardDeck />;
      case 'quiz':
        return (
          <div className="py-10 container-custom space-y-6">
            <button onClick={() => navigateBack('practice')} className="btn-secondary py-2 px-4 text-xs font-bold">
              ← Back to Practice Hub
            </button>
            <QuizEngine questions={jlpt500QuizBank} quizTitle={`JLPT Practice Exam (${jlpt500QuizBank.length}+ Questions)`} />
          </div>
        );
      case 'progress':
        return <ProgressView />;
      case 'bookmarks':
        return <BookmarksView />;
      case 'profile':
        return <ProfileView />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative z-10 bg-slate-50 dark:bg-[#0B0E14] text-slate-900 dark:text-white transition-colors duration-300">
      <SakuraCanvas />
      <Navbar />
      <main className="flex-1 pb-24 lg:pb-0 pb-safe">
        {renderView()}
      </main>
      <Footer />
      <MobileBottomNav />
      <SmartSearchModal />
      <AuthModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <IntroVideo />
      <MainContent />
    </AppProvider>
  );
}
