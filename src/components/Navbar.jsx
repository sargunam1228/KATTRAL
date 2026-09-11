import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Sun, 
  Moon, 
  User, 
  LogOut,
  Menu, 
  X, 
  BookOpen, 
  Lock, 
  Unlock, 
  Award, 
  Compass, 
  Bookmark, 
  Sparkles 
} from 'lucide-react';

export const Navbar = () => {
  const { 
    currentUser,
    logoutUser,
    activeView, 
    setActiveView, 
    darkMode, 
    setDarkMode, 
    isN4Unlocked, 
    toggleN4Lock,
    setIsSearchOpen, 
    setIsAuthOpen, 
    setAuthMode,
    userProfile 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'n5', label: 'N5' },
    { id: 'n4', label: 'N4', locked: !isN4Unlocked },
    { id: 'test', label: 'Test' },
    { id: 'practice', label: 'Practice' },
    { id: 'progress', label: 'Progress' },
    { id: 'bookmarks', label: 'Bookmarks' },
    { id: 'about', label: 'About' }
  ];

  const handleNavClick = (id) => {
    if (id === 'n4' && !isN4Unlocked) {
      setActiveView('n4');
    } else {
      setActiveView(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300 border-b border-slate-200 dark:border-slate-800/80">
      <div className="container-custom flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Tagline Group (Left) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 select-none"
        >
          <div className="hanko-stamp group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center text-center">
            勝
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                KATTRAL
              </span>
              <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full font-extrabold bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/80 shrink-0 leading-none">
                JLPT N5/N4
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-jp hidden sm:block leading-tight mt-1">
              Japanese Learning Platform
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links (Center) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-[#121824] p-1.5 rounded-full border border-slate-200 dark:border-slate-700/80 shadow-inner my-auto">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-extrabold rounded-full transition-all duration-200 flex items-center justify-center gap-1.5 leading-none ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md shadow-red-600/40 scale-[1.02]'
                    : 'text-slate-700 dark:text-slate-100 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-200/80 dark:hover:bg-slate-800/80'
                }`}
              >
                <span>{item.label}</span>
                {item.locked && (
                  <Lock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 opacity-90 shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 my-auto">
          
          {/* N4 Unlock Quick Toggle (Demo Control) */}
          <button
            onClick={toggleN4Lock}
            title={isN4Unlocked ? "N4 Unlocked (Click to Lock)" : "N4 Locked (Click to Demo Unlock)"}
            className={`hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-extrabold rounded-full border transition-all leading-none shadow-sm ${
              isN4Unlocked 
                ? 'bg-emerald-100 dark:bg-emerald-950/90 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-600/80' 
                : 'bg-amber-100 dark:bg-amber-950/90 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-600/80'
            }`}
          >
            {isN4Unlocked ? <Unlock className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" /> : <Lock className="w-3.5 h-3.5 shrink-0 text-amber-600 dark:text-amber-400" />}
            <span>{isN4Unlocked ? 'N4 Unlocked' : 'Demo Unlock'}</span>
          </button>

          {/* Smart Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/60"
            title="Search Japanese (Ctrl+K)"
          >
            <Search className="w-5 h-5 shrink-0" />
          </button>

          {/* Dark Mode Switcher */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800/60"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400 shrink-0" /> : <Moon className="w-5 h-5 text-slate-700 shrink-0" />}
          </button>

          {/* User Profile / Auth Button */}
          <button
            onClick={() => setActiveView('profile')}
            className="hidden sm:inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:border-red-500/80 transition-all leading-none shrink-0"
          >
            {userProfile.profilePic ? (
              <img src={userProfile.profilePic} alt="Avatar" className="w-6 h-6 rounded-full object-cover shrink-0" />
            ) : (
              <span className="text-lg leading-none shrink-0">{userProfile.avatar}</span>
            )}
            <span className="text-xs font-extrabold text-slate-900 dark:text-white max-w-[90px] truncate leading-none">
              {userProfile.username}
            </span>
          </button>

          {/* Logout Button */}
          <button
            onClick={logoutUser}
            className="btn-secondary py-2 px-4 text-xs font-black text-red-600 dark:text-red-300 hover:text-red-700 dark:hover:text-white border-red-200 dark:border-red-800/80 bg-red-50 dark:bg-red-950/60 hover:bg-red-100 dark:hover:bg-red-900/80 inline-flex items-center justify-center leading-none shrink-0 shadow-sm"
            title="Log Out (Ends Session)"
          >
            <LogOut className="w-4 h-4 shrink-0 text-red-500 dark:text-red-400" />
            <span className="hidden sm:inline">Logout</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center justify-center shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 shrink-0" /> : <Menu className="w-6 h-6 shrink-0" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left py-3 px-4 rounded-xl font-medium text-base flex items-center justify-between ${
                activeView === item.id
                  ? 'bg-red-600 text-white font-bold'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{item.label}</span>
              {item.locked && <Lock className="w-4 h-4" />}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-sm text-slate-500">N4 Level Status</span>
            <button
              onClick={toggleN4Lock}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400"
            >
              {isN4Unlocked ? 'Unlocked' : 'Tap to Unlock Demo'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
