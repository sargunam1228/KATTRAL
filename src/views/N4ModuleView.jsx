import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { n4VocabCategories, n4VocabData } from '../data/n4VocabData';
import { n4KanjiData } from '../data/n4KanjiData';
import { n4GrammarData } from '../data/n4GrammarData';
import { generateN4QuizSet, n4GrammarTestQuestions } from '../data/quizzesData';
import { WritingCanvas } from '../components/WritingCanvas';
import { QuizEngine } from '../components/QuizEngine';
import { Pagination } from '../components/Pagination';
import { 
  Lock, 
  Unlock, 
  Volume2, 
  Pencil, 
  BookOpen, 
  Bookmark, 
  Sparkles, 
  CheckCircle2, 
  ShieldAlert,
  Search,
  Star,
  X,
  Info,
  AlertTriangle,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

export const N4ModuleView = () => {
  const { isN4Unlocked, toggleN4Lock, playSpeech, toggleBookmark, isBookmarked, markItemCompleted } = useApp();
  const [activeTab, setActiveTab] = useState('vocab'); // 'vocab' | 'kanji' | 'grammar' | 'grammar-test' | 'quiz'
  const [vocabCategory, setVocabCategory] = useState('All');
  const [grammarCategory, setGrammarCategory] = useState('All');
  const [filterImportantGrammar, setFilterImportantGrammar] = useState(false);
  const [selectedGrammarDetail, setSelectedGrammarDetail] = useState(null);
  const [practiceWritingKanji, setPracticeWritingKanji] = useState(null);
  const [n4Questions, setN4Questions] = useState(() => generateN4QuizSet(15));
  const [grammarQuery, setGrammarQuery] = useState('');
  const [vocabPage, setVocabPage] = useState(1);

  // Sync back navigation between modals and N4 module lists
  useEffect(() => {
    const handlePop = (e) => {
      if (selectedGrammarDetail && (!e.state || !e.state.modal)) {
        setSelectedGrammarDetail(null);
      }
      if (practiceWritingKanji && (!e.state || !e.state.writing)) {
        setPracticeWritingKanji(null);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [selectedGrammarDetail, practiceWritingKanji]);

  const handleStartWritingKanji = (kanji) => {
    setPracticeWritingKanji(kanji);
    if (typeof window !== 'undefined' && window.history?.pushState) {
      window.history.pushState({ view: 'n4', writing: true }, '', '#n4-writing');
    }
  };

  const handleOpenGrammarDetail = (item) => {
    setSelectedGrammarDetail(item);
    if (typeof window !== 'undefined' && window.history?.pushState) {
      window.history.pushState({ view: 'n4', modal: true }, '', '#n4-grammar-detail');
    }
  };

  // Extract unique categories from N4 grammar data
  const grammarCategories = ['All', ...Array.from(new Set(n4GrammarData.map((g) => g.category).filter(Boolean)))];

  // Filter grammar items
  const filteredGrammar = n4GrammarData.filter((g) => {
    if (filterImportantGrammar && !g.important) return false;
    if (grammarCategory !== 'All' && g.category !== grammarCategory) return false;
    if (!grammarQuery.trim()) return true;
    const q = grammarQuery.toLowerCase().trim();
    return (
      g.pattern?.toLowerCase().includes(q) ||
      g.japanese?.toLowerCase().includes(q) ||
      g.hiragana?.toLowerCase().includes(q) ||
      g.romaji?.toLowerCase().includes(q) ||
      g.meaning?.toLowerCase().includes(q) ||
      g.structure?.toLowerCase().includes(q) ||
      g.explanation?.toLowerCase().includes(q) ||
      g.category?.toLowerCase().includes(q) ||
      g.exampleJp?.toLowerCase().includes(q) ||
      g.exampleEn?.toLowerCase().includes(q)
    );
  });

  // If locked and not demo unlocked
  if (!isN4Unlocked) {
    return (
      <div className="py-16 container-custom max-w-xl text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 mx-auto flex items-center justify-center">
          <Lock className="w-10 h-10" />
        </div>

        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
          🔒 JLPT N4 Level Locked
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Complete your N5 journey to unlock N4, or tap the button below to instantly enable N4 Demo Mode.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={toggleN4Lock}
            className="btn-primary py-3.5 px-8 text-base shadow-lg bg-emerald-600 hover:bg-emerald-700"
          >
            <Unlock className="w-5 h-5" />
            <span>Unlock N4 Demo Mode</span>
          </button>
        </div>
      </div>
    );
  }

  const filteredVocab = vocabCategory === 'All'
    ? n4VocabData
    : n4VocabData.filter((v) => v.category === vocabCategory);

  const vocabItemsPerPage = 20;
  const totalVocabPages = Math.ceil(filteredVocab.length / vocabItemsPerPage) || 1;
  const currentVocabPage = Math.min(vocabPage, totalVocabPages);
  const startVocabIndex = (currentVocabPage - 1) * vocabItemsPerPage;
  const paginatedVocab = filteredVocab.slice(startVocabIndex, startVocabIndex + vocabItemsPerPage);

  return (
    <div className="py-10 container-custom space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
              ELEMENTARY LEVEL
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-400 text-slate-900 flex items-center gap-1">
              <Unlock className="w-3 h-3" /> Unlocked
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            JLPT N4 Elementary Module
          </h1>
          <p className="text-blue-100 text-sm max-w-xl">
            Advance your skills with 9 N4 Vocabulary categories, complex Kanji stroke practice, and {n4GrammarData.length} complete Speed Master N4 grammar patterns.
          </p>
        </div>

        <div className="z-10 flex gap-3">
          <button
            onClick={() => setActiveTab('quiz')}
            className="px-5 py-3 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 shadow-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>N4 Quiz Engine</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 scrollbar-none max-w-full">
        {[
          { id: 'vocab', label: '1. N4 Vocabulary' },
          { id: 'kanji', label: '2. N4 Kanji' },
          { id: 'grammar', label: `3. N4 Grammar (${n4GrammarData.length})` },
          { id: 'grammar-test', label: '⚡ N4 Grammar Test' },
          { id: 'quiz', label: '4. N4 Quiz' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setPracticeWritingKanji(null);
            }}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: N4 VOCABULARY */}
      {activeTab === 'vocab' && (
        <div className="space-y-6">
          <div className="flex overflow-x-auto gap-2 pb-2">
            <button
              onClick={() => {
                setVocabCategory('All');
                setVocabPage(1);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                vocabCategory === 'All'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
              }`}
            >
              All N4 Categories ({n4VocabData.length})
            </button>
            {n4VocabCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setVocabCategory(cat);
                  setVocabPage(1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  vocabCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                {cat} ({n4VocabData.filter((v) => v.category === cat).length})
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>
              Showing <strong className="text-blue-600 dark:text-blue-400">{startVocabIndex + 1}–{Math.min(startVocabIndex + vocabItemsPerPage, filteredVocab.length)}</strong> of {filteredVocab.length} N4 Vocabulary Words
            </span>
            <span>
              Page {currentVocabPage} of {totalVocabPages}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedVocab.map((item) => {
              const bookmarked = isBookmarked(item.id);
              return (
                <div key={item.id} className="kattral-card p-5 space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      {item.category}
                    </span>
                    <button
                      onClick={() => toggleBookmark(item)}
                      className={`p-1.5 rounded-full transition-colors ${
                        bookmarked ? 'text-red-600 fill-red-600' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-3xl font-black font-jp text-slate-900 dark:text-white">
                      {item.kanji || item.japanese || item.hiragana}
                    </div>
                    {item.hiragana && item.hiragana !== item.kanji && item.hiragana !== item.japanese && (
                      <div className="text-sm font-bold font-jp text-blue-600 dark:text-blue-400">
                        {item.hiragana}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {item.romaji}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {item.english}
                    </div>
                    <div className="text-xs font-bold text-slate-500 font-jp">
                      {item.tamil}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playSpeech(item.japanese || item.kanji || item.hiragana);
                      if (markItemCompleted && item?.id) markItemCompleted('n4Vocab', item.id);
                    }}
                    className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen Sound</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Number Navigation / Pagination */}
          <Pagination
            currentPage={currentVocabPage}
            totalPages={totalVocabPages}
            onPageChange={(page) => setVocabPage(page)}
          />
        </div>
      )}

      {/* TAB 2: N4 KANJI */}
      {activeTab === 'kanji' && (
        <div className="space-y-8">
          {practiceWritingKanji ? (
            <div className="space-y-4">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && window.location.hash.includes('writing')) {
                    window.history.back();
                  } else {
                    setPracticeWritingKanji(null);
                  }
                }}
                className="btn-secondary py-2 px-4 text-xs font-bold"
              >
                ← Back to N4 Kanji Cards
              </button>
              <WritingCanvas
                character={practiceWritingKanji.kanji}
                romaji={practiceWritingKanji.onyomi}
                tamil={practiceWritingKanji.tamilMeaning}
                onNext={() => setPracticeWritingKanji(null)}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {n4KanjiData.map((kanji) => (
                <div key={kanji.id} className="kattral-card p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-5xl font-black font-jp text-blue-600 dark:text-blue-400">
                        {kanji.kanji}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {kanji.meaning}
                        </h4>
                        <p className="text-sm font-bold text-blue-600 font-jp">
                          {kanji.tamilMeaning}
                        </p>
                        <span className="text-xs text-slate-400">Strokes: {kanji.strokes}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => playSpeech(kanji.kanji)}
                      className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl">
                    <div>
                      <span className="font-bold text-slate-400 uppercase block">On-yomi:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{kanji.onyomi}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-400 uppercase block">Kun-yomi:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{kanji.kunyomi}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-slate-800 text-xs space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">Example: {kanji.exampleWord}</div>
                    <div className="font-jp text-slate-700 dark:text-slate-300">{kanji.exampleSentence}</div>
                    <div className="text-slate-500">{kanji.sentenceEn} • <span className="font-jp text-blue-500">{kanji.sentenceTa}</span></div>
                  </div>

                  <button
                    onClick={() => handleStartWritingKanji(kanji)}
                    className="w-full py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Pencil className="w-4 h-4" />
                    <span>Practice Writing "{kanji.kanji}"</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: COMPLETE N4 GRAMMAR */}
      {activeTab === 'grammar' && (
        <div className="space-y-6">
          {/* N4 Grammar Test Launch Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
                PRACTICE EXAM
              </span>
              <h3 className="text-xl font-extrabold flex items-center gap-2 pt-1">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Take Official JLPT N4 Grammar Test</span>
              </h3>
              <p className="text-xs text-blue-100 max-w-xl">
                Test your N4 grammar skills with authentic Speed Master PDF questions (Causative, Passive, Keigo, Conditionals).
              </p>
            </div>
            <button
              onClick={() => setActiveTab('grammar-test')}
              className="px-6 py-3 rounded-full bg-white text-blue-600 font-extrabold text-xs hover:bg-blue-50 shadow-md transition-all whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Start N4 Grammar Test</span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </button>
          </div>

          {/* Search and Star Filter Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-blue-500 shrink-0" />
              <input
                type="text"
                value={grammarQuery}
                onChange={(e) => setGrammarQuery(e.target.value)}
                placeholder={`Search across all ${n4GrammarData.length} N4 Grammar patterns... (e.g. と思います, Causative, Passive, Favor)`}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 dark:text-white outline-none placeholder:text-slate-400 placeholder:font-normal"
              />
              {grammarQuery && (
                <button onClick={() => setGrammarQuery('')} className="text-slate-400 hover:text-slate-600">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => setFilterImportantGrammar(!filterImportantGrammar)}
              className={`px-5 py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all whitespace-nowrap border ${
                filterImportantGrammar
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
              }`}
            >
              <Star className={`w-4 h-4 ${filterImportantGrammar ? 'fill-white text-white' : 'text-amber-500'}`} />
              <span>⭐ High-Priority N4 Exam Grammar</span>
            </button>
          </div>

          {/* Category Selector Pills */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
            {grammarCategories.map((cat) => {
              const count = cat === 'All' 
                ? n4GrammarData.length 
                : n4GrammarData.filter((g) => g.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setGrammarCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    grammarCategory === cat
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Results Count Banner */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>Showing <strong className="text-blue-600 dark:text-blue-400">{filteredGrammar.length}</strong> of {n4GrammarData.length} N4 Grammar Patterns</span>
            {filteredGrammar.length === 0 && (
              <span className="text-amber-600 font-semibold">No grammar patterns found. Try clearing filters.</span>
            )}
          </div>

          {/* Grammar Cards Grid */}
          <div className="space-y-4">
            {filteredGrammar.map((g) => (
              <div key={g.id} className="kattral-card p-6 space-y-4 relative group hover:border-blue-300 dark:hover:border-blue-800 transition-all">
                <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-3 gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                        #{g.grammarNumber || g.id} • {g.category}
                      </span>
                      {g.important && (
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>Exam Essential</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-black font-jp text-slate-900 dark:text-white mt-1">
                      {g.pattern}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => playSpeech(g.exampleJp || g.pattern)}
                      className="p-2.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 hover:bg-blue-100 transition-colors"
                      title="Listen Audio"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => setSelectedGrammarDetail(g)}
                      className="px-3.5 py-2 rounded-xl bg-blue-600 text-white font-extrabold text-xs hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow-md shadow-blue-600/20"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Full Details</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400">Meaning & Tamil:</h4>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white">{g.meaning}</p>
                    {g.tamilMeaning && (
                      <p className="text-sm font-bold text-blue-600 font-jp">{g.tamilMeaning}</p>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400">Sentence Structure / Formation:</h4>
                    <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg block mt-1 text-blue-600 dark:text-blue-300 font-bold border border-slate-200 dark:border-slate-700">
                      {g.structure}
                    </code>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{g.explanation}</p>

                {/* Main Example Box */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/90 space-y-1 border border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Representative Example</span>
                    <button
                      onClick={() => playSpeech(g.exampleJp)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Listen</span>
                    </button>
                  </div>
                  <p className="text-base font-bold font-jp text-slate-900 dark:text-white">{g.exampleJp}</p>
                  <p className="text-xs text-blue-500 font-semibold">{g.exampleRomaji}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {g.exampleEn} {g.exampleTa && <span>• <span className="font-jp text-blue-500">{g.exampleTa}</span></span>}
                  </p>
                </div>

                {/* View Details Footer CTA */}
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">
                    Includes {g.examples?.length || 1} examples • Notes & JLPT Tips
                  </span>
                  <button
                    onClick={() => handleOpenGrammarDetail(g)}
                    className="text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 group"
                  >
                    <span>View Notes & Exam Tips</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GRAMMAR DETAIL VIEW MODAL */}
      {selectedGrammarDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto scrollbar-thin">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    JLPT N4 • #{selectedGrammarDetail.grammarNumber || selectedGrammarDetail.id}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {selectedGrammarDetail.category}
                  </span>
                  {selectedGrammarDetail.important && (
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>Important Exam Pattern</span>
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-black font-jp text-slate-900 dark:text-white pt-2">
                  {selectedGrammarDetail.pattern}
                </h2>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {selectedGrammarDetail.romaji}
                </p>
              </div>

              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && window.location.hash.includes('grammar-detail')) {
                    window.history.back();
                  } else {
                    setSelectedGrammarDetail(null);
                  }
                }}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Meaning & Explanation Box */}
            <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <Info className="w-4 h-4" />
                <span>Meaning & Simple Explanation</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {selectedGrammarDetail.meaning}
              </h3>
              {selectedGrammarDetail.tamilMeaning && (
                <p className="text-sm font-bold text-blue-600 font-jp">{selectedGrammarDetail.tamilMeaning}</p>
              )}
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                {selectedGrammarDetail.explanation}
              </p>
            </div>

            {/* Formation & Sentence Structure Box */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                Sentence Structure & Formation Formula
              </h4>
              <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-sm font-bold border border-slate-800">
                {selectedGrammarDetail.structure}
              </div>
            </div>

            {/* 2–4 Example Sentences */}
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                Japanese Example Sentences ({selectedGrammarDetail.examples?.length || 1})
              </h4>

              {(selectedGrammarDetail.examples || [
                {
                  jp: selectedGrammarDetail.exampleJp,
                  romaji: selectedGrammarDetail.exampleRomaji,
                  en: selectedGrammarDetail.exampleEn
                }
              ]).map((ex, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Example {idx + 1}
                    </span>
                    <button
                      onClick={() => playSpeech(ex.jp)}
                      className="p-1.5 rounded-full hover:bg-blue-100 text-blue-600 transition-colors"
                      title="Play Audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-base font-black font-jp text-slate-900 dark:text-white leading-snug">{ex.jp}</p>
                  <p className="text-xs text-blue-500 font-bold">{ex.romaji}</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">{ex.en}</p>
                </div>
              ))}
            </div>

            {/* Important Notes */}
            {selectedGrammarDetail.notes && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-black text-amber-700 dark:text-amber-400">
                  <Lightbulb className="w-4 h-4" />
                  <span>Important Usage Notes & Nuances</span>
                </div>
                <p className="leading-relaxed font-medium">{selectedGrammarDetail.notes}</p>
              </div>
            )}

            {/* Similar Grammar & Differences */}
            {selectedGrammarDetail.similarGrammar && (
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-indigo-900 dark:text-indigo-200 space-y-1 text-xs">
                <div className="font-black text-indigo-700 dark:text-indigo-400">
                  Similar Grammar: <span className="font-extrabold font-jp">{selectedGrammarDetail.similarGrammar}</span>
                </div>
                <p className="leading-relaxed font-medium">{selectedGrammarDetail.differenceFromSimilar}</p>
              </div>
            )}

            {/* Common Mistakes */}
            {selectedGrammarDetail.commonMistakes && (
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-black text-rose-700 dark:text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Common Mistakes to Avoid</span>
                </div>
                <p className="leading-relaxed font-medium">{selectedGrammarDetail.commonMistakes}</p>
              </div>
            )}

            {/* JLPT Tip */}
            {selectedGrammarDetail.jlptTip && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-black text-emerald-700 dark:text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>JLPT N4 Exam Tip</span>
                </div>
                <p className="leading-relaxed font-medium">{selectedGrammarDetail.jlptTip}</p>
              </div>
            )}

            {/* Modal Footer CTA */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedGrammarDetail(null)}
                className="px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-extrabold text-xs hover:opacity-90 transition-opacity"
              >
                Close Grammar Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB: N4 GRAMMAR TEST */}
      {activeTab === 'grammar-test' && (
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab('grammar')}
            className="btn-secondary py-2 px-4 text-xs font-bold"
          >
            ← Back to N4 Grammar Patterns
          </button>
          <QuizEngine 
            questions={n4GrammarTestQuestions} 
            quizTitle="JLPT N4 Grammar Practice Test (Speed Master PDF)"
          />
        </div>
      )}

      {/* TAB 4: N4 QUIZ */}
      {activeTab === 'quiz' && (
        <QuizEngine 
          questions={n4Questions} 
          quizTitle="JLPT N4 Vocabulary & Grammar Quiz" 
          onRetake={() => setN4Questions(generateN4QuizSet(15))}
        />
      )}
    </div>
  );
};

