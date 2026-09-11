import React from 'react';
import { useApp } from '../context/AppContext';
import { Home, BookOpen, Dumbbell, BarChart3, User } from 'lucide-react';

export const MobileBottomNav = () => {
  const { activeView, setActiveView } = useApp();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'n5', label: 'Learn N5', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Dumbbell },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  // Derive current active tab index (default to 0)
  const activeIndex = Math.max(0, navItems.findIndex((item) => item.id === activeView));

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-200/80 dark:border-slate-800/80 shadow-2xl transition-all duration-300"
      style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
    >
      <div className="max-w-lg mx-auto px-2 pt-1.5 pb-1">
      <div className="grid grid-cols-5 items-center relative w-full">
        
        {/* Dynamic Sliding Red Floating Circle Active Indicator */}
        <div 
          className="absolute -top-3.5 left-0 w-1/5 flex justify-center pointer-events-none transition-transform duration-350 ease-out-spring"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        >
          <div className="w-12 h-12 rounded-full bg-red-600 ring-4 ring-red-100 dark:ring-red-950/80 shadow-lg shadow-red-600/40 nav-floating-pop" />
        </div>

        {/* Tab Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className="mobile-nav-btn flex flex-col items-center justify-center py-1 px-1 relative z-10 w-full group"
              title={item.label}
            >
              <div 
                key={`nav-icon-${item.id}-${isActive}`}
                className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'w-12 h-12 -mt-5 text-white nav-icon-pop'
                    : 'w-10 h-10 bg-transparent text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 nav-icon-settle'
                }`}
              >
                <Icon className={`transition-all duration-200 ${
                  isActive ? 'w-6 h-6 stroke-[2.3]' : 'w-5 h-5 stroke-[1.8]'
                }`} />
              </div>
              <span className={`text-[9px] font-bold tracking-tight transition-all duration-200 text-center truncate w-full ${
                isActive ? 'text-red-600 dark:text-red-400 mt-1 nav-label-active' : 'text-slate-500 dark:text-slate-400 mt-0.5'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      </div>
    </nav>
  );
};


