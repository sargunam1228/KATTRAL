import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  BarChart3, 
  Award, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  Flame, 
  Sparkles, 
  BookOpen, 
  Bookmark, 
  Brain, 
  Star,
  Target,
  Calendar,
  Mic,
  Pencil,
  Layers,
  Headphones,
  XCircle,
  Activity
} from 'lucide-react';

export const ProgressView = () => {
  const { 
    n5Progress, 
    n4Progress, 
    n5ProgressFormatted,
    n4ProgressFormatted,
    isN4Unlocked, 
    toggleN4Lock, 
    userProfile, 
    getCategoryProgress,
    getTodayStats
  } = useApp();

  // N4 Category Dynamic Calculations
  const n4VocabProg = getCategoryProgress ? getCategoryProgress('n4Vocab', 635) : { completed: 0, total: 635, percent: 0, formatted: '0%' };
  const n4KanjiProg = getCategoryProgress ? getCategoryProgress('n4Kanji', 210) : { completed: 0, total: 210, percent: 0, formatted: '0%' };
  const n4GrammarProg = getCategoryProgress ? getCategoryProgress('n4Grammar', 77) : { completed: 0, total: 77, percent: 0, formatted: '0%' };
  const n4TestProg = getCategoryProgress ? getCategoryProgress('n4MockTests', 50) : { completed: 0, total: 50, percent: 0, formatted: '0%' };

  // N5 Category Dynamic Calculations
  const n5HiraganaProg = getCategoryProgress ? getCategoryProgress('n5Hiragana', 107) : { completed: 0, total: 107, percent: 0, formatted: '0%' };
  const n5KatakanaProg = getCategoryProgress ? getCategoryProgress('n5Katakana', 71) : { completed: 0, total: 71, percent: 0, formatted: '0%' };
  const n5VocabProg = getCategoryProgress ? getCategoryProgress('n5Vocab', 670) : { completed: 0, total: 670, percent: 0, formatted: '0%' };
  const n5GrammarProg = getCategoryProgress ? getCategoryProgress('n5Grammar', 30) : { completed: 0, total: 30, percent: 0, formatted: '0%' };
  const n5KanjiProg = getCategoryProgress ? getCategoryProgress('n5Kanji', 15) : { completed: 0, total: 15, percent: 0, formatted: '0%' };
  const n5ListeningProg = getCategoryProgress ? getCategoryProgress('n5Listening', 20) : { completed: 0, total: 20, percent: 0, formatted: '0%' };

  const todayStats = getTodayStats ? getTodayStats() : {
    speakingCompleted: 0,
    speakingAttempts: 0,
    speakingCorrect: 0,
    speakingIncorrect: 0,
    writingCompleted: 0,
    writingAttempts: 0,
    writingCorrect: 0,
    writingIncorrect: 0,
    vocabCompleted: 0,
    vocabAttempts: 0,
    vocabCorrect: 0,
    vocabIncorrect: 0,
    listeningCompleted: 0,
    listeningAttempts: 0,
    listeningCorrect: 0,
    listeningIncorrect: 0,
    quizCompleted: 0,
    quizAttempts: 0,
    quizCorrect: 0,
    quizIncorrect: 0
  };

  // Calculate Today Totals strictly from actual activity
  const totalCompletedToday = 
    (todayStats.speakingCompleted || 0) +
    (todayStats.writingCompleted || 0) +
    (todayStats.vocabCompleted || 0) +
    (todayStats.listeningCompleted || 0) +
    (todayStats.quizCompleted || 0);

  const totalAttemptsToday = 
    (todayStats.speakingAttempts || 0) +
    (todayStats.writingAttempts || 0) +
    (todayStats.vocabAttempts || 0) +
    (todayStats.listeningAttempts || 0) +
    (todayStats.quizAttempts || 0);

  const totalCorrectToday = 
    (todayStats.speakingCorrect || 0) +
    (todayStats.writingCorrect || 0) +
    (todayStats.vocabCorrect || 0) +
    (todayStats.listeningCorrect || 0) +
    (todayStats.quizCorrect || 0);

  const totalIncorrectToday = 
    (todayStats.speakingIncorrect || 0) +
    (todayStats.writingIncorrect || 0) +
    (todayStats.vocabIncorrect || 0) +
    (todayStats.listeningIncorrect || 0) +
    (todayStats.quizIncorrect || 0);

  const overallAccuracyToday = totalAttemptsToday > 0 
    ? Math.round((totalCorrectToday / totalAttemptsToday) * 100) 
    : 0;

  // Format today's date
  const todayFormatted = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const sectionBreakdown = [
    {
      title: 'Speaking Practice',
      completed: todayStats.speakingCompleted || 0,
      target: 10,
      attempts: todayStats.speakingAttempts || 0,
      correct: todayStats.speakingCorrect || 0,
      incorrect: todayStats.speakingIncorrect || 0,
      icon: Mic,
      color: 'bg-red-500'
    },
    {
      title: 'Writing Practice',
      completed: todayStats.writingCompleted || 0,
      target: 10,
      attempts: todayStats.writingAttempts || 0,
      correct: todayStats.writingCorrect || 0,
      incorrect: todayStats.writingIncorrect || 0,
      icon: Pencil,
      color: 'bg-emerald-500'
    },
    {
      title: 'Vocabulary',
      completed: todayStats.vocabCompleted || 0,
      target: 30,
      attempts: todayStats.vocabAttempts || 0,
      correct: todayStats.vocabCorrect || 0,
      incorrect: todayStats.vocabIncorrect || 0,
      icon: Layers,
      color: 'bg-amber-500'
    },
    {
      title: 'Listening Practice',
      completed: todayStats.listeningCompleted || 0,
      target: 10,
      attempts: todayStats.listeningAttempts || 0,
      correct: todayStats.listeningCorrect || 0,
      incorrect: todayStats.listeningIncorrect || 0,
      icon: Headphones,
      color: 'bg-indigo-500'
    },
    {
      title: 'JLPT Quiz',
      completed: todayStats.quizCompleted || 0,
      target: 25,
      attempts: todayStats.quizAttempts || 0,
      correct: todayStats.quizCorrect || 0,
      incorrect: todayStats.quizIncorrect || 0,
      icon: Award,
      color: 'bg-purple-500'
    }
  ];

  const n5Breakdown = [
    { label: 'Hiragana Mastery', percent: n5HiraganaProg.percent, formatted: n5HiraganaProg.formatted, completed: n5HiraganaProg.completed, total: n5HiraganaProg.total, color: 'bg-emerald-500' },
    { label: 'Katakana Mastery', percent: n5KatakanaProg.percent, formatted: n5KatakanaProg.formatted, completed: n5KatakanaProg.completed, total: n5KatakanaProg.total, color: 'bg-blue-500' },
    { label: 'Vocabulary Learned', percent: n5VocabProg.percent, formatted: n5VocabProg.formatted, completed: n5VocabProg.completed, total: n5VocabProg.total, color: 'bg-purple-500' },
    { label: 'Grammar Patterns', percent: n5GrammarProg.percent, formatted: n5GrammarProg.formatted, completed: n5GrammarProg.completed, total: n5GrammarProg.total, color: 'bg-amber-500' },
    { label: 'Kanji & Strokes', percent: n5KanjiProg.percent, formatted: n5KanjiProg.formatted, completed: n5KanjiProg.completed, total: n5KanjiProg.total, color: 'bg-rose-500' },
    { label: 'Listening Practice', percent: n5ListeningProg.percent, formatted: n5ListeningProg.formatted, completed: n5ListeningProg.completed, total: n5ListeningProg.total, color: 'bg-indigo-500' }
  ];

  const n4Breakdown = [
    { label: 'N4 Vocabulary', percent: isN4Unlocked ? n4VocabProg.percent : 0, formatted: isN4Unlocked ? n4VocabProg.formatted : '0%', completed: n4VocabProg.completed, total: 635, color: 'bg-teal-500' },
    { label: 'N4 Kanji & Readings', percent: isN4Unlocked ? n4KanjiProg.percent : 0, formatted: isN4Unlocked ? n4KanjiProg.formatted : '0%', completed: n4KanjiProg.completed, total: 210, color: 'bg-cyan-500' },
    { label: 'N4 Grammar Rules', percent: isN4Unlocked ? n4GrammarProg.percent : 0, formatted: isN4Unlocked ? n4GrammarProg.formatted : '0%', completed: n4GrammarProg.completed, total: 77, color: 'bg-sky-500' },
    { label: 'JLPT N4 Mock Tests', percent: isN4Unlocked ? n4TestProg.percent : 0, formatted: isN4Unlocked ? n4TestProg.formatted : '0%', completed: n4TestProg.completed, total: 50, color: 'bg-blue-600' }
  ];

  return (
    <div className="py-10 container-custom space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" />
          <span>ACTUAL DAILY LEARNING METRICS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Today's Learning Progress
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base">
          Track your real activity, completed items, correct & incorrect attempts for <span className="font-bold text-red-600">{todayFormatted}</span>.
        </p>
      </div>

      {/* TODAY'S SUMMARY DASHBOARD CARD */}
      <div className="kattral-card bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-5 sm:p-8 rounded-3xl border-0 space-y-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-700/80 pb-4 gap-3">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase text-red-400 tracking-wider flex items-center gap-1.5 break-words">
              <Activity className="w-4 h-4 shrink-0" /> TODAY'S REAL ACTIVITY — {todayFormatted}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">Daily Learning Recap</h2>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-extrabold shrink-0">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Streak: {userProfile.streak ?? 0} Days</span>
          </div>
        </div>

        {/* 5 Main Today Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-center">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md space-y-1">
            <Target className="w-5 h-5 text-blue-400 mx-auto" />
            <div className="text-3xl font-black">{totalCompletedToday}</div>
            <div className="text-[11px] font-bold text-slate-300">Completed Today</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md space-y-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto" />
            <div className="text-3xl font-black text-emerald-400">{totalCorrectToday}</div>
            <div className="text-[11px] font-bold text-slate-300">Correct Answers</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md space-y-1">
            <XCircle className="w-5 h-5 text-red-400 mx-auto" />
            <div className="text-3xl font-black text-red-400">{totalIncorrectToday}</div>
            <div className="text-[11px] font-bold text-slate-300">Incorrect Attempts</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md space-y-1">
            <Activity className="w-5 h-5 text-purple-400 mx-auto" />
            <div className="text-3xl font-black">{totalAttemptsToday}</div>
            <div className="text-[11px] font-bold text-slate-300">Total Attempts</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md space-y-1 col-span-2 sm:col-span-1">
            <Star className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-3xl font-black text-amber-400">{overallAccuracyToday}%</div>
            <div className="text-[11px] font-bold text-slate-300">Overall Accuracy</div>
          </div>
        </div>
      </div>

      {/* SECTION-WISE TODAY PROGRESS GRID */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-red-500" />
          <span>Today's Section-wise Breakdown</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectionBreakdown.map((sec, idx) => {
            const Icon = sec.icon;
            const secAccuracy = sec.attempts > 0 ? Math.round((sec.correct / sec.attempts) * 100) : 0;
            const isFinished = sec.completed >= sec.target;

            return (
              <div 
                key={idx} 
                className="kattral-card p-6 space-y-4 shadow-lg border border-slate-200 dark:border-slate-800 rounded-3xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center text-red-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                        {sec.title}
                      </h3>
                      <div className="text-[11px] font-bold text-slate-400">
                        Target: {sec.target} items / day
                      </div>
                    </div>
                  </div>
                  {isFinished && (
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-300">
                      ✓ Done
                    </span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span>{sec.completed} / {sec.target} Completed</span>
                    <span className="text-red-600 font-black">
                      {Math.min(100, Math.round((sec.completed / sec.target) * 100))}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${sec.color} rounded-full transition-all duration-700`}
                      style={{ width: `${Math.min(100, (sec.completed / sec.target) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Stats Breakdown */}
                <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs font-semibold">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                    <div className="font-extrabold text-slate-900 dark:text-white">{sec.correct}</div>
                    <div className="text-[9px] text-slate-400">Correct</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                    <div className="font-extrabold text-red-500">{sec.incorrect}</div>
                    <div className="text-[9px] text-slate-400">Incorrect</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                    <div className="font-extrabold text-slate-900 dark:text-white">{sec.attempts}</div>
                    <div className="text-[9px] text-slate-400">Attempts</div>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                    <div className="font-extrabold">{secAccuracy}%</div>
                    <div className="text-[9px]">Accuracy</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* HISTORICAL MODULE PROGRESS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* JLPT N5 PROGRESS BREAKDOWN CARD */}
        <div className="kattral-card space-y-6 border-2 border-red-500/20 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                BEGINNER LEVEL
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                JLPT N5 Progress — {n5ProgressFormatted || `${n5Progress}%`}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center text-red-600 font-black text-xl font-jp">
              五
            </div>
          </div>

          <div className="space-y-4">
            {n5Breakdown.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>{item.label}</span>
                  <span className="text-red-600 dark:text-red-400">{item.formatted || `${item.percent}%`}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JLPT N4 PROGRESS BREAKDOWN CARD */}
        <div className="kattral-card space-y-6 border-2 border-blue-500/20 relative shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  ELEMENTARY LEVEL
                </span>
                {!isN4Unlocked && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
                JLPT N4 Progress — {isN4Unlocked ? (n4ProgressFormatted || `${n4Progress}%`) : '0%'}
              </h2>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 font-black text-xl font-jp">
              四
            </div>
          </div>

          {!isN4Unlocked ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 mx-auto flex items-center justify-center">
                <Lock className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  N4 locked until N5 completion
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Complete your N5 modules or toggle demo mode to start tracking N4 stats.
                </p>
              </div>
              <button
                onClick={toggleN4Lock}
                className="btn-primary py-2.5 px-6 text-xs mx-auto bg-emerald-600 hover:bg-emerald-700"
              >
                <Unlock className="w-4 h-4" />
                <span>Demo Unlock N4</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {n4Breakdown.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span>{item.label}</span>
                    <span className="text-blue-600 dark:text-blue-400">{item.formatted || `${item.percent}%`}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-700`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
