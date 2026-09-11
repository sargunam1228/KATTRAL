import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Award, Flame, Brain, CheckCircle2, TrendingUp, Sparkles, Star } from 'lucide-react';

export const DashboardOverview = () => {
  const { userProfile, n5Progress, n5ProgressFormatted, setActiveView } = useApp();

  const statsCards = [
    {
      title: 'Current Level',
      value: userProfile.level,
      subtitle: 'Target: JLPT N4',
      icon: Award,
      color: 'text-red-500 bg-red-50 dark:bg-red-950/60'
    },
    {
      title: 'Lessons Completed',
      value: `${userProfile.completedLessons} Lessons`,
      subtitle: '+3 this week',
      icon: BookOpen,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/60'
    },
    {
      title: 'Vocabulary Learned',
      value: `${userProfile.vocabLearned} Words`,
      subtitle: 'JP + EN',
      icon: Brain,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/60'
    },
    {
      title: 'Kanji Mastered',
      value: `${userProfile.kanjiLearned} Kanji`,
      subtitle: 'With stroke practice',
      icon: Sparkles,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
    },
    {
      title: 'Quiz Score Avg',
      value: `${userProfile.quizAverage}%`,
      subtitle: 'Top 10% accuracy',
      icon: Star,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60'
    },
    {
      title: 'Learning Streak',
      value: `${userProfile.streak} Days`,
      subtitle: 'Mon — Sun Active',
      icon: Flame,
      color: 'text-orange-500 bg-orange-50 dark:bg-orange-950/60'
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="container-custom space-y-8">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 dark:bg-[#121824] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-700 dark:border-slate-800 relative overflow-hidden">
          
          <div className="space-y-2 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-red-400 text-xs font-bold">
              <span>LEARNER DASHBOARD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Welcome back, {userProfile.username}! {userProfile.avatar}
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              You are making steady progress toward your Japanese N5 mastery. Keep your daily streak active!
            </p>
          </div>

          <div className="flex items-center gap-4 z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 min-w-[200px]">
            {/* Circular Progress Gauge */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-white/20"
                  fill="transparent"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-red-500 transition-all duration-1000"
                  fill="transparent"
                  strokeDasharray={163.3}
                  strokeDashoffset={163.3 - (163.3 * n5Progress) / 100}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-xs font-black text-white">{n5ProgressFormatted || `${n5Progress}%`}</span>
            </div>

            <div>
              <div className="text-xs font-bold text-slate-300 uppercase">N5 Progress</div>
              <div className="text-sm font-bold text-white">{n5ProgressFormatted || `${n5Progress}%`} Complete</div>
              <button 
                onClick={() => setActiveView('n5')}
                className="text-xs text-red-400 font-bold hover:underline mt-0.5 inline-block"
              >
                Continue Lesson →
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {statsCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="kattral-card p-3.5 sm:p-5 space-y-2 sm:space-y-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                    {card.title}
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
                    {card.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                    {card.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
