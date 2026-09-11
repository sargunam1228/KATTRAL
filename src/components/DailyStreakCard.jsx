import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Flame, Check, X, ArrowRight, Target } from 'lucide-react';

export const DailyStreakCard = () => {
  const { userProfile, getWeekDaysWithStatus, setActiveView } = useApp();
  const [selectedDayDetail, setSelectedDayDetail] = useState(null);

  const days = getWeekDaysWithStatus ? getWeekDaysWithStatus() : [
    { name: 'Mon', completed: false, dateStr: '', stats: {} },
    { name: 'Tue', completed: false, dateStr: '', stats: {} },
    { name: 'Wed', completed: false, dateStr: '', stats: {} },
    { name: 'Thu', completed: false, dateStr: '', stats: {} },
    { name: 'Fri', completed: false, dateStr: '', stats: {} },
    { name: 'Sat', completed: false, dateStr: '', stats: {} },
    { name: 'Sun', completed: false, dateStr: '', stats: {} }
  ];

  const completedCount = days.filter((d) => d.completed).length;

  return (
    <div className="kattral-card bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-orange-500/30 dark:bg-slate-800/80 p-6 space-y-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
            <Flame className="w-7 h-7 fill-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>{completedCount > 0 ? `${completedCount} Days Completed` : 'Daily Progress'}</span>
            </h3>
            <p className="text-xs font-semibold text-orange-600 dark:text-orange-400">
              {completedCount === 7 
                ? "🔥 Outstanding! You completed all 7 daily goals this week." 
                : "Complete all 5 daily tasks to earn your ✅ tick!"}
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300">
          {completedCount} / 7 Days Done
        </span>
      </div>

      {/* Week Calendar */}
      <div className="grid grid-cols-7 gap-2 pt-2">
        {days.map((d, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedDayDetail(d)}
            className={`p-3 rounded-2xl text-center space-y-1.5 transition-all outline-none cursor-pointer hover:scale-105 ${
              d.completed
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200'
            }`}
            title={`View tasks for ${d.name} (${d.dateStr})`}
          >
            <div className="text-[10px] font-bold uppercase">{d.name}</div>
            <div className={`w-6 h-6 rounded-full mx-auto flex items-center justify-center ${
              d.completed ? 'bg-white/20' : 'bg-slate-200 dark:bg-slate-600'
            }`}>
              {d.completed ? (
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              ) : (
                <span className="text-[10px] font-bold">•</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* DAY TASKS MODAL */}
      {selectedDayDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative p-6 space-y-5">
            
            <button
              onClick={() => setSelectedDayDetail(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-3">
              <span className="text-[10px] font-bold uppercase text-orange-600 tracking-wider">
                DATE-BASED PROGRESS LOG
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {selectedDayDetail.name} ({selectedDayDetail.dateStr || 'Today'})
              </h3>
              <p className="text-xs text-slate-500">
                {selectedDayDetail.completed
                  ? "✅ All required daily tasks for this date are completed!"
                  : "⏳ Day is incomplete. All 5 required tasks must be completed to earn a ✅ tick."}
              </p>
            </div>

            {/* Task Checklist */}
            <div className="space-y-2.5 text-xs">
              {[
                { label: 'Vocabulary Practice', key: 'vocabCompleted', target: 5, current: selectedDayDetail.stats?.vocabCompleted || 0 },
                { label: 'Speaking Practice', key: 'speakingCompleted', target: 2, current: selectedDayDetail.stats?.speakingCompleted || 0 },
                { label: 'Writing Practice', key: 'writingCompleted', target: 2, current: selectedDayDetail.stats?.writingCompleted || 0 },
                { label: 'Listening Practice', key: 'listeningCompleted', target: 2, current: selectedDayDetail.stats?.listeningCompleted || 0 },
                { label: 'JLPT Quiz / Test', key: 'quizCompleted', target: 1, current: selectedDayDetail.stats?.quizCompleted || 0 }
              ].map((task, i) => {
                const isTaskDone = task.current >= task.target;
                return (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isTaskDone ? 'bg-emerald-500 text-white' : 'bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                      }`}>
                        {isTaskDone ? '✓' : '•'}
                      </div>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200">{task.label}</span>
                    </div>
                    <div className="font-bold text-slate-500">
                      <span className={isTaskDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}>
                        {task.current}
                      </span> / {task.target} items
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex gap-3">
              {!selectedDayDetail.completed && (
                <button
                  onClick={() => {
                    setSelectedDayDetail(null);
                    if (setActiveView) setActiveView('practice');
                  }}
                  className="flex-1 btn-primary py-2.5 text-xs justify-center bg-orange-600 hover:bg-orange-500"
                >
                  <Target className="w-4 h-4" />
                  <span>Go to Practice Hub</span>
                </button>
              )}
              <button
                onClick={() => setSelectedDayDetail(null)}
                className="btn-secondary py-2.5 px-5 text-xs justify-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
