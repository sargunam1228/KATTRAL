import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Volume2, Bookmark, Sparkles, Calendar, Check } from 'lucide-react';

export const DailyWordCard = () => {
  const { playSpeech, toggleBookmark, isBookmarked } = useApp();

  const todayFormatted = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const dailyWord = {
    id: 'daily_1',
    japanese: '素晴らしい',
    romaji: 'Subarashii',
    english: 'Wonderful / Splendid',
    exampleJp: '今日の日本語の授業は素晴らしかったです。',
    exampleRomaji: 'Kyou no Nihongo no jugyou wa subarashikatta desu.',
    exampleEn: 'Today’s Japanese class was wonderful.'
  };

  const bookmarked = isBookmarked(dailyWord.id);

  return (
    <div className="kattral-card relative overflow-hidden border-2 border-red-500/30 dark:border-red-500/40 bg-gradient-to-br from-white to-red-50/20 dark:from-slate-800 dark:to-slate-900">
      
      {/* Header Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-extrabold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JAPANESE OF THE DAY</span>
        </div>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{todayFormatted}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Main Word Display */}
        <div className="md:col-span-5 space-y-2 text-center md:text-left border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 pb-4 md:pb-0 md:pr-6">
          <div className="text-5xl font-black font-jp text-slate-900 dark:text-white">
            {dailyWord.japanese}
          </div>
          <div className="text-lg font-bold text-red-600 dark:text-red-400">
            {dailyWord.romaji}
          </div>
          <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
            {dailyWord.english}
          </div>
        </div>

        {/* Example Sentence & Actions */}
        <div className="md:col-span-7 space-y-4">
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5 shadow-sm">
            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Example Sentence</span>
            <p className="text-base font-bold font-jp text-slate-900 dark:text-white">
              {dailyWord.exampleJp}
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
              {dailyWord.exampleRomaji}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {dailyWord.exampleEn}
            </p>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              onClick={() => playSpeech(dailyWord.japanese)}
              className="btn-secondary py-2 px-4 text-xs"
            >
              <Volume2 className="w-4 h-4 text-red-500" />
              <span>Listen Audio</span>
            </button>

            <button
              onClick={() => toggleBookmark(dailyWord)}
              className={`py-2 px-4 rounded-full font-bold text-xs transition-all flex items-center gap-1.5 border ${
                bookmarked
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>{bookmarked ? 'Saved' : 'Save Word'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
