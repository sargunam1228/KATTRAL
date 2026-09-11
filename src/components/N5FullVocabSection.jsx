import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { n5FullVocabData } from '../data/n5FullVocabData';
import { Search, Volume2, Bookmark, BookOpen, X, ChevronLeft, ChevronRight, Sparkles, Trash2, Check } from 'lucide-react';
import { Pagination } from './Pagination';

export const N5FullVocabSection = () => {
  const { playSpeech, toggleBookmark, isBookmarked, recordWordView, markItemCompleted } = useApp();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWord, setSelectedWord] = useState(null); // For Details Modal
  const itemsPerPage = 50;

  // Filter full 670 items dataset across all fields
  const q = searchQuery.toLowerCase().trim();
  const filteredData = q === ''
    ? n5FullVocabData
    : n5FullVocabData.filter((item) => {
        const kanjiMatch = item.kanji && item.kanji.toLowerCase().includes(q);
        const hiraganaMatch = item.hiragana && item.hiragana.toLowerCase().includes(q);
        const romajiMatch = item.romaji && item.romaji.toLowerCase().includes(q);
        const englishMatch = item.english && item.english.toLowerCase().includes(q);
        return kanjiMatch || hiraganaMatch || romajiMatch || englishMatch;
      });

  // Calculate pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 on search
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleOpenDetails = (word) => {
    setSelectedWord(word);
    recordWordView();
    if (markItemCompleted && word?.id) markItemCompleted('n5Vocab', word.id);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950 text-red-400 text-xs font-bold border border-red-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL LOCAL PDF DATASET</span>
          </div>
          <h2 className="text-3xl font-black">N5 Vocabulary</h2>
          <p className="text-xs text-slate-400">
            Complete JLPT N5 Vocabulary extracted from notes n5/VocabList.N5nxsty.pdf
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/10 text-center sm:text-right shrink-0">
          <span className="text-xs font-bold text-slate-300 uppercase block">Total Dataset</span>
          <span className="text-2xl font-black text-red-400">
            Total Words: {n5FullVocabData.length}
          </span>
        </div>
      </div>

      {/* Search Bar & Category Filter Pills */}
      <div className="kattral-card p-5 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-red-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search vocabulary by Kanji, Hiragana, Romaji, or English..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold text-sm outline-none focus:border-red-500 transition-colors shadow-inner placeholder:text-slate-500 dark:placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills matching Screen 5 */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shrink-0">
            {['All', 'N5', 'N4', 'Saved'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  if (cat === 'Saved') {
                    setSearchQuery('saved');
                  } else if (cat === 'All') {
                    setSearchQuery('');
                  } else {
                    setSearchQuery(cat);
                  }
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  (cat === 'All' && !searchQuery) || (searchQuery.toLowerCase() === cat.toLowerCase())
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800">
          <div className="text-slate-700 dark:text-slate-300">
            Search Results: <span className="text-red-600 dark:text-red-400 font-extrabold">{totalItems} {totalItems === 1 ? 'word' : 'words'}</span>
          </div>

          {totalItems > 0 && (
            <div>
              Showing {startIndex + 1}–{endIndex} of {totalItems}
            </div>
          )}
        </div>
      </div>

      {/* Vocabulary Cards Grid */}
      {totalItems === 0 ? (
        <div className="kattral-card text-center py-16 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 dark:bg-red-950 mx-auto flex items-center justify-center">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            No vocabulary found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No matches found for "{searchQuery}". Try searching in Kanji, Hiragana, Romaji, or English.
          </p>
          <button
            onClick={handleClearSearch}
            className="btn-primary py-2.5 px-6 text-xs mx-auto"
          >
            <span>Clear Search</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedData.map((item) => {
            const bookmarked = isBookmarked(item.id);
            return (
              <div key={item.id} className="kattral-card p-5 flex flex-col justify-between space-y-3 relative group">
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                      {item.level || 'JLPT N5'}
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Japanese & Hiragana */}
                  <div className="space-y-0.5">
                    <div className="text-3xl font-black font-jp text-slate-900 dark:text-white">
                      {item.kanji}
                    </div>
                    {item.hiragana && item.hiragana !== item.kanji && (
                      <div className="text-sm font-bold font-jp text-red-600 dark:text-red-400">
                        {item.hiragana}
                      </div>
                    )}
                  </div>

                  {/* Translations */}
                  <div className="space-y-1 pt-1">
                    <div className="text-xs font-bold text-slate-600 dark:text-slate-400">
                      Romaji: <span className="text-slate-900 dark:text-slate-200">{item.romaji}</span>
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                      {item.english}
                    </div>
                  </div>
                </div>

                {/* 3 Action Buttons */}
                <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => {
                      playSpeech(item.hiragana || item.kanji);
                      if (markItemCompleted && item?.id) markItemCompleted('n5Vocab', item.id);
                    }}
                    className="py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-50 text-slate-700 dark:text-slate-300 hover:text-red-600 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors"
                    title="Listen Pronunciation"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-red-500" />
                    <span>Listen</span>
                  </button>

                  <button
                    onClick={() => toggleBookmark(item)}
                    className={`py-2 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1 transition-colors ${
                      bookmarked
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-700 dark:text-slate-300'
                    }`}
                    title="Bookmark Word"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{bookmarked ? 'Saved' : 'Bookmark'}</span>
                  </button>

                  <button
                    onClick={() => handleOpenDetails(item)}
                    className="py-2 rounded-xl bg-slate-900 text-white dark:bg-slate-700 text-[11px] font-bold flex items-center justify-center gap-1 hover:bg-slate-800 transition-colors"
                    title="View Full Details"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* DETAILS MODAL */}
      {selectedWord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative p-6 sm:p-8 space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedWord(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                  {selectedWord.level} VOCABULARY DETAILS
                </span>
                <h3 className="text-4xl font-black font-jp text-slate-900 dark:text-white mt-2">
                  {selectedWord.kanji}
                </h3>
                {selectedWord.hiragana && selectedWord.hiragana !== selectedWord.kanji && (
                  <p className="text-lg font-bold font-jp text-red-600 dark:text-red-400">
                    Hiragana: {selectedWord.hiragana}
                  </p>
                )}
              </div>

              <button
                onClick={() => playSpeech(selectedWord.hiragana || selectedWord.kanji)}
                className="p-4 rounded-2xl bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400 hover:scale-105 transition-transform"
                title="Play Pronunciation"
              >
                <Volume2 className="w-6 h-6" />
              </button>
            </div>

            {/* Detailed Translations */}
            <div className="grid grid-cols-2 gap-3 text-sm bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Romaji Reading</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedWord.romaji}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">Category</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedWord.category}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">English Meaning</span>
                <span className="font-extrabold text-slate-900 dark:text-white text-base">{selectedWord.english}</span>
              </div>
            </div>

            {/* Example Sentence Box */}
            <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-slate-800 space-y-1.5 border border-red-100 dark:border-slate-700">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Example Sentence</span>
              <p className="text-base font-bold font-jp text-slate-900 dark:text-white">
                {selectedWord.exampleSentence}
              </p>
              <p className="text-xs text-red-600 font-semibold">
                {selectedWord.sentenceRomaji}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                {selectedWord.sentenceEn}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => toggleBookmark(selectedWord)}
                className={`flex-1 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 border ${
                  isBookmarked(selectedWord.id)
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200'
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>{isBookmarked(selectedWord.id) ? 'Bookmarked' : 'Bookmark Word'}</span>
              </button>

              <button
                onClick={() => setSelectedWord(null)}
                className="btn-secondary py-3 px-6 text-xs justify-center"
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
