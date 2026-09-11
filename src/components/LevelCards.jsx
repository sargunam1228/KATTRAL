import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Check, Lock, Unlock, ArrowRight, Sparkles, Award } from 'lucide-react';

export const LevelCards = () => {
  const { 
    setActiveView, 
    n5Progress, 
    n4Progress, 
    isN4Unlocked, 
    toggleN4Lock 
  } = useApp();

  const n5Topics = [
    'Hiragana (46 Characters)',
    'Katakana & Dakuten',
    'Basic N5 Kanji & Readings',
    'Essential N5 Vocabulary',
    'Fundamental Grammar Rules',
    'Basic Daily Conversations',
    'N5 Audio Listening Practice'
  ];

  const n4Topics = [
    'Complex N4 Kanji & Sentences',
    'N4 Vocabulary Categories',
    'Advanced N4 Grammar Patterns',
    'Short Reading Passages',
    'N4 Audio Listening Drills',
    'Situational Conversation',
    'JLPT N4 Practice Questions'
  ];

  return (
    <section className="py-16 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        
        {/* Screen 2: Your Learning Roadmap Section */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-red-600 dark:text-red-500 tracking-widest">
                INTERACTIVE CURRICULUM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Your Learning Roadmap
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Step by step path from Japanese beginner to JLPT N4 mastery.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/80 shrink-0">
              <button 
                onClick={() => setActiveView('n5')}
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-red-600 text-white shadow-md shadow-red-600/30"
              >
                N5 Journey
              </button>
              <button 
                onClick={() => setActiveView('n4')}
                className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                N4 Journey
              </button>
            </div>
          </div>

          {/* Interactive Roadmap Step Nodes */}
          <div className="relative pt-4 pb-2 overflow-x-auto scrollbar-none">
            {/* Step Line */}
            <div className="hidden lg:block absolute top-[44px] left-[60px] right-[60px] h-1 bg-slate-200 dark:bg-slate-800 -z-0" />
            
            <div className="flex items-start justify-between min-w-[700px] relative z-10 gap-4">
              {[
                { kanji: 'あ', title: 'Hiragana', sub: 'Basic Kana', active: true, view: 'n5' },
                { kanji: 'カ', title: 'Katakana', sub: 'Basic Kana', active: false, view: 'n5' },
                { kanji: '漢', title: 'Basic Kanji', sub: 'N5 Kanji', active: false, view: 'n5' },
                { kanji: '語', title: 'Vocabulary', sub: 'Daily Words', active: false, view: 'n5' },
                { kanji: '文', title: 'Grammar', sub: 'N5 Grammar', active: false, view: 'n5' },
                { kanji: '耳', title: 'Listening', sub: 'Practice', active: false, view: 'listening' },
                { kanji: '試', title: 'Mock Test', sub: 'N5 Quiz', active: false, view: 'test' }
              ].map((step, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveView(step.view)}
                  className="flex flex-col items-center text-center space-y-2 cursor-pointer group flex-1 min-w-[80px]"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black font-jp text-xl transition-all duration-300 relative ${
                    step.active
                      ? 'bg-red-600 text-white ring-4 ring-red-100 dark:ring-red-950/80 scale-110 shadow-lg shadow-red-600/40'
                      : 'bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300 group-hover:border-red-500 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:scale-105'
                  }`}>
                    {step.kanji}
                    {step.active && (
                      <span className="absolute -bottom-6 whitespace-nowrap text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-red-600 text-white shadow-sm">
                        You are here
                      </span>
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="text-xs font-black text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {step.title}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {step.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Summary Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Lessons Completed</div>
                <div className="text-base font-black text-slate-900 dark:text-white">18 / 120</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Quizzes Completed</div>
                <div className="text-base font-black text-slate-900 dark:text-white">08 / 60</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Study Streak</div>
                <div className="text-base font-black text-slate-900 dark:text-white">7 Days</div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">Accuracy</div>
                <div className="text-base font-black text-slate-900 dark:text-white">92%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/60 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURRICULUM LEVEL STRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Choose Your JLPT Goal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Start from complete zero with JLPT N5, then transition directly into N4.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* N5 LEVEL CARD */}
          <div className="kattral-card relative flex flex-col justify-between border-2 border-red-500/20 dark:border-red-500/30 overflow-hidden">
            
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-rose-600" />

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                    BEGINNER LEVEL
                  </span>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                    JLPT N5
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Japanese Beginner
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center text-red-600 dark:text-red-400 font-extrabold text-2xl font-jp shadow-sm">
                  五
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>N5 Progress</span>
                  <span className="text-red-600 dark:text-red-400">{n5Progress}% Complete</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-600 rounded-full transition-all duration-500"
                    style={{ width: `${n5Progress}%` }}
                  />
                </div>
              </div>

              {/* Topics List */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Course Curriculum includes:</p>
                {n5Topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Action */}
            <div className="pt-8">
              <button
                onClick={() => setActiveView('n5')}
                className="btn-primary w-full justify-center py-3.5 text-base"
              >
                <span>Start N5</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* N4 LEVEL CARD */}
          <div className={`kattral-card relative flex flex-col justify-between border-2 transition-all ${
            isN4Unlocked 
              ? 'border-emerald-500/30' 
              : 'border-slate-200 dark:border-slate-800'
          }`}>
            
            {/* Top Accent Ribbon */}
            <div className={`absolute top-0 left-0 right-0 h-2 ${
              isN4Unlocked 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600' 
                : 'bg-slate-300 dark:bg-slate-700'
            }`} />

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      ELEMENTARY LEVEL
                    </span>
                    {!isN4Unlocked && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Locked
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                    JLPT N4
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Elementary Japanese (Next Level)
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-extrabold text-2xl font-jp shadow-sm">
                  四
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>N4 Progress</span>
                  <span className="text-blue-600 dark:text-blue-400">{n4Progress}% Complete</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${n4Progress}%` }}
                  />
                </div>
              </div>

              {/* Topics List */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Course Curriculum includes:</p>
                {n4Topics.map((topic, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lock Warning or Start Button */}
            <div className="pt-8 space-y-3">
              {!isN4Unlocked ? (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <Lock className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Complete your N5 journey to unlock N4, or tap demo unlock.</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveView('n4')}
                      className="btn-secondary flex-1 justify-center py-3 text-sm"
                    >
                      <span>Preview N4</span>
                    </button>
                    <button
                      onClick={toggleN4Lock}
                      className="px-4 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                    >
                      <Unlock className="w-4 h-4" />
                      <span>Demo Unlock</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setActiveView('n4')}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                >
                  <span>Start N4</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
