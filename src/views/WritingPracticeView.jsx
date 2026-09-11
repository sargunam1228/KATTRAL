import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WritingCanvas } from '../components/WritingCanvas';
import { n5KanjiData } from '../data/n5KanjiData';
import { n4KanjiData } from '../data/n4KanjiData';
import { hiraganaBasic } from '../data/hiraganaData';
import { katakanaBasic } from '../data/katakanaData';
import { n5FullVocabData } from '../data/n5FullVocabData';
import { n4VocabData } from '../data/n4VocabData';
import { Pencil, Sparkles, BookOpen, RotateCcw, Trophy, ArrowRight } from 'lucide-react';

export const WritingPracticeView = () => {
  const { setActiveView } = useApp();
  const [filterType, setFilterType] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Combine datasets for comprehensive Writing Practice
  const allWritingItems = [
    // Hiragana
    ...(hiraganaBasic || []).slice(0, 15).map((h) => ({
      type: 'Hiragana',
      char: h.char,
      romaji: h.romaji,
      english: h.example ? `Hiragana '${h.char}' - e.g. ${h.example}` : `Hiragana character '${h.char}'`,
      tamil: h.tamil
    })),
    // Katakana
    ...(katakanaBasic || []).slice(0, 15).map((k) => ({
      type: 'Katakana',
      char: k.char,
      romaji: k.romaji,
      english: k.example ? `Katakana '${k.char}' - e.g. ${k.example}` : `Katakana character '${k.char}'`,
      tamil: k.tamil
    })),
    // N5 Kanji
    ...n5KanjiData.slice(0, 15).map((k) => ({
      type: 'N5 Kanji',
      char: k.kanji,
      romaji: k.onyomi || k.kunyomi,
      english: k.meaning,
      tamil: k.tamilMeaning
    })),
    // N4 Kanji
    ...n4KanjiData.slice(0, 15).map((k) => ({
      type: 'N4 Kanji',
      char: k.kanji,
      romaji: k.onyomi || k.kunyomi,
      english: k.meaning,
      tamil: k.tamil
    })),
    // Vocab Writing
    ...n5FullVocabData.slice(0, 15).map((v) => ({
      type: 'Vocabulary',
      char: v.kanji || v.hiragana,
      hiragana: v.hiragana,
      romaji: v.romaji,
      english: v.english,
      tamil: v.tamil
    }))
  ];

  const filteredItems = filterType === 'All'
    ? allWritingItems
    : allWritingItems.filter((i) => i.type.includes(filterType));

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const handleNextQuestion = () => {
    if (currentIndex + 1 < filteredItems.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleResetSession = () => {
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="py-12 container-custom max-w-xl space-y-8 text-center animate-fadeIn">
        <div className="kattral-card p-8 sm:p-10 space-y-6 shadow-2xl border border-slate-200 dark:border-slate-800 rounded-3xl">
          <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              WRITING PRACTICE COMPLETED ✓
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Great Writing Mastery!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              You have completed all <span className="font-bold text-red-600">{filteredItems.length}</span> writing practice items.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={handleResetSession}
              className="btn-secondary flex-1 justify-center py-3 text-xs font-bold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Practice</span>
            </button>
            <button
              onClick={() => setActiveView('practice')}
              className="btn-primary flex-1 justify-center py-3 text-xs font-bold bg-red-600 hover:bg-red-500"
            >
              <span>Back to Practice Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 container-custom space-y-8 animate-fadeIn">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => setActiveView('practice')}
          className="btn-secondary py-2 px-4 text-xs font-bold self-start"
        >
          ← Back to Practice Hub
        </button>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Hiragana', 'Katakana', 'Kanji', 'Vocabulary'].map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilterType(type);
                setCurrentIndex(0);
                setIsCompleted(false);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filterType === type
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-xl mx-auto space-y-1.5">
        <div className="flex justify-between text-xs font-bold text-slate-400">
          <span>Writing Question {currentIndex + 1} of {filteredItems.length}</span>
          <span>{Math.round(((currentIndex + 1) / filteredItems.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredItems.length) * 100}%` }}
          />
        </div>
      </div>

      {/* ONE-BY-ONE Writing Canvas Component */}
      <WritingCanvas
        character={currentItem.char}
        romaji={currentItem.romaji}
        english={currentItem.english}
        tamil={currentItem.tamil}
        hiragana={currentItem.hiragana}
        itemIndex={currentIndex}
        totalItems={filteredItems.length}
        onNext={handleNextQuestion}
      />
    </div>
  );
};
