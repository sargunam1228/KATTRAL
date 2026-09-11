import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Globe, Heart, Shield, Terminal, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const { setActiveView } = useApp();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Decorative Japanese Watermark */}
      <div className="absolute right-2 sm:right-4 bottom-4 text-[70px] sm:text-[120px] font-black font-jp text-slate-200 dark:text-slate-900/40 select-none pointer-events-none max-w-full overflow-hidden">
        日本語
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="hanko-stamp">勝</div>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">KATTRAL</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              “Learn Japanese. Build Your Future.”
            </p>
            <p className="text-xs font-jp text-red-600 dark:text-red-400 font-medium">
              日本語を楽しく学ぼう — Let’s learn Japanese happily.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
                JLPT N5 & N4 Only
              </span>
            </div>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Learn</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setActiveView('n5')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  JLPT N5 Beginner
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('n4')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  JLPT N4 Elementary
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('practice')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Practice Hub
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('n5')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Kanji & Vocabulary
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Practice Tools</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setActiveView('listening')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Listening Audio Simulator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('speaking')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Speech Pronunciation Practice
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('writing')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Stroke Writing Canvas
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('flashcards')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  3D Flip Flashcards
                </button>
              </li>
              <li>
                <button onClick={() => setActiveView('quiz')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  JLPT Mock Exam Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setActiveView('about')} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  About KATTRAL
                </button>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); setActiveView('about'); }} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => e.preventDefault()} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => e.preventDefault()} className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2026 KATTRAL. All rights reserved. Dedicated to N5 & N4 Japanese Learners.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Japanese EdTech
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
