import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Bookmark, Volume2, Trash2, BookOpen, Sparkles } from 'lucide-react';

export const BookmarksView = () => {
  const { bookmarks, toggleBookmark, playSpeech } = useApp();
  const [filterCategory, setFilterCategory] = useState('All');

  const filtered = filterCategory === 'All'
    ? bookmarks
    : bookmarks.filter((b) => b.category === filterCategory || b.type === filterCategory);

  return (
    <div className="py-10 container-custom space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>SAVED ITEMS ({bookmarks.length})</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            My Bookmarks
          </h1>
        </div>

        {/* Filter Pills matching Screen 11 */}
        <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/80">
          {['All', 'Lessons', 'Vocabulary', 'Kanji', 'Grammar'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterCategory === cat
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {bookmarks.length === 0 ? (
        <div className="kattral-card text-center py-16 space-y-3">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <Bookmark className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Bookmarks Saved Yet</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            Tap the bookmark icon on any vocabulary, kanji card, or grammar pattern to save it here for quick review.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="kattral-card p-5 space-y-3 relative flex flex-col justify-between">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400">
                    {item.category || 'Vocab'}
                  </span>
                  <button
                    onClick={() => toggleBookmark(item)}
                    className="p-1 rounded-full text-slate-400 hover:text-red-600 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-3xl font-black font-jp text-slate-900 dark:text-white">
                  {item.japanese}
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-bold text-red-600 dark:text-red-400">
                    {item.romaji}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.english}
                  </div>
                </div>
              </div>

              <button
                onClick={() => playSpeech(item.japanese)}
                className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-50 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors mt-2"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Listen Audio</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
