import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, Volume2, BookOpen, Bookmark, Check } from 'lucide-react';
import { n5FullVocabData } from '../data/n5FullVocabData';
import { n4VocabData } from '../data/n4VocabData';
import { n5KanjiData } from '../data/n5KanjiData';
import { n4KanjiData } from '../data/n4KanjiData';
import { n5GrammarData } from '../data/n5GrammarData';
import { n4GrammarData } from '../data/n4GrammarData';

export const SmartSearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, playSpeech, toggleBookmark, isBookmarked } = useApp();
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Memoize search dataset index across N5 learning data
  const allItems = useMemo(() => [
    ...n5FullVocabData.map((v) => ({
      id: v.id,
      japanese: v.kanji || v.hiragana,
      hiragana: v.hiragana,
      romaji: v.romaji,
      english: v.english,
      category: v.category || 'N5 Vocab',
      level: 'N5',
      type: 'Vocab'
    })),
    ...n5GrammarData.map((g) => ({
      id: g.id,
      japanese: g.pattern,
      hiragana: g.structure || g.pattern,
      romaji: g.exampleRomaji || '',
      english: g.meaning,
      category: 'N5 Grammar',
      level: 'N5',
      type: 'Grammar'
    })),
    ...n5KanjiData.map((k) => ({
      id: k.id,
      japanese: k.kanji,
      hiragana: k.kunyomi || k.onyomi,
      romaji: `${k.onyomi} ${k.kunyomi}`,
      english: k.meaning,
      exampleWord: k.exampleWord,
      category: 'Kanji',
      level: 'N5',
      type: 'Kanji'
    }))
  ], []);

  const q = query.toLowerCase().trim();

  // Memoize filtered results and limit maximum DOM nodes for peak performance
  const results = useMemo(() => {
    if (q === '') return allItems.slice(0, 8);
    return allItems.filter((item) => 
      item.japanese?.toLowerCase().includes(q) ||
      item.hiragana?.toLowerCase().includes(q) ||
      item.romaji?.toLowerCase().includes(q) ||
      item.english?.toLowerCase().includes(q) ||
      item.exampleWord?.toLowerCase().includes(q)
    ).slice(0, 40);
  }, [q, allItems]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50">
          <Search className="w-5 h-5 text-red-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search English or Japanese... (e.g. to meet / 会う / あう / Au)"
            className="w-full bg-transparent text-base font-semibold text-slate-900 dark:text-white outline-none placeholder:text-slate-400 placeholder:font-normal"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
            {q === '' ? 'Suggested N5 Learning Words' : `Found ${results.length} results`}
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-1">
              <p className="font-bold text-slate-700 dark:text-slate-300">No N5 entries found for "{query}"</p>
              <p className="text-xs">Try searching in English ("to meet"), Japanese ("会う"), Hiragana ("あう"), or Romaji ("au")</p>
            </div>
          ) : (
            results.map((item) => {
              const bookmarked = isBookmarked(item.id);
              return (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 hover:bg-red-50/50 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-2xl font-black font-jp text-red-600 dark:text-red-400 shrink-0">
                      {item.japanese}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                          {item.english}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                          {item.level} {item.type}
                        </span>
                      </div>
                      {item.hiragana && (
                        <div className="text-xs font-bold text-red-600 dark:text-red-400 font-jp">
                          Hiragana: {item.hiragana}
                        </div>
                      )}
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Romaji: {item.romaji}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => playSpeech(item.japanese)}
                      className="p-2.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 border border-slate-200 dark:border-slate-700 shadow-sm"
                      title="Play Pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleBookmark(item)}
                      className={`p-2.5 rounded-full border shadow-sm transition-colors ${
                        bookmarked
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700'
                      }`}
                      title="Save Bookmark"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 flex justify-between px-6">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 font-mono">ESC</kbd> to close</span>
          <span>KATTRAL Smart Search Engine</span>
        </div>
      </div>
    </div>
  );
};
