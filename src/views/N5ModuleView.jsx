import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  hiraganaBasic, 
  hiraganaDakuten, 
  hiraganaHandakuten, 
  hiraganaCombination 
} from '../data/hiraganaData';
import { katakanaBasic, katakanaDakuten } from '../data/katakanaData';
import { n5KanjiData } from '../data/n5KanjiData';
import { n5GrammarData } from '../data/n5GrammarData';
import { generateN5QuizSet, n5GrammarTestQuestions } from '../data/quizzesData';
import { WritingCanvas } from '../components/WritingCanvas';
import { QuizEngine } from '../components/QuizEngine';
import { N5FullVocabSection } from '../components/N5FullVocabSection';
import { 
  BookOpen, 
  Volume2, 
  Pencil, 
  CheckCircle2, 
  Bookmark, 
  HelpCircle, 
  Sparkles, 
  Grid, 
  ListFilter,
  Search
} from 'lucide-react';

export const N5ModuleView = () => {
  const { playSpeech, toggleBookmark, isBookmarked, setActiveView } = useApp();
  const [activeTab, setActiveTab] = useState('vocab'); // Default to full N5 Vocab
  const [practiceWritingKanji, setPracticeWritingKanji] = useState(null);
  const [n5Questions, setN5Questions] = useState(() => generateN5QuizSet(15));
  const [grammarQuery, setGrammarQuery] = useState('');

  // Sync back navigation between kanji writing practice and kanji card list
  useEffect(() => {
    const handlePop = (e) => {
      if (practiceWritingKanji && (!e.state || !e.state.writing)) {
        setPracticeWritingKanji(null);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [practiceWritingKanji]);

  const handleStartWritingKanji = (kanji) => {
    setPracticeWritingKanji(kanji);
    if (typeof window !== 'undefined' && window.history?.pushState) {
      window.history.pushState({ view: 'n5', writing: true }, '', '#n5-writing');
    }
  };

  const tabs = [
    { id: 'vocab', label: '1. N5 Full Vocabulary' },
    { id: 'hiragana', label: '2. Hiragana' },
    { id: 'katakana', label: '3. Katakana' },
    { id: 'kanji', label: '4. Kanji' },
    { id: 'grammar', label: `5. Grammar (${n5GrammarData.length})` },
    { id: 'grammar-test', label: '⚡ N5 Grammar Test' },
    { id: 'quiz', label: '6. N5 Quiz' }
  ];

  return (
    <div className="py-10 container-custom space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 z-10">
          <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
            BEGINNER LEVEL
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            JLPT N5 Complete Learning Module
          </h1>
          <p className="text-red-100 text-sm max-w-xl">
            Complete N5 Vocabulary extracted from notes n5/VocabList.N5nxsty.pdf, Hiragana, Katakana, N5 Kanji with stroke practice, and {n5GrammarData.length} N5 Grammar patterns.
          </p>
        </div>

        <div className="z-10 flex gap-3">
          <button
            onClick={() => setActiveTab('quiz')}
            className="px-5 py-3 rounded-full bg-white text-red-600 font-bold text-sm hover:bg-red-50 shadow-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>Take N5 Test</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 scrollbar-none max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setPracticeWritingKanji(null);
            }}
            className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: FULL N5 VOCABULARY FROM PDF */}
      {activeTab === 'vocab' && (
        <N5FullVocabSection />
      )}

      {/* TAB 2: HIRAGANA */}
      {activeTab === 'hiragana' && (
        <div className="space-y-8">
          <div className="kattral-card space-y-4">
            <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <span>Basic Hiragana (46 Characters)</span>
              <span className="text-xs font-semibold text-slate-400">Tap character to hear pronunciation</span>
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2.5">
              {hiraganaBasic.map((item, idx) => (
                item.char ? (
                  <div
                    key={idx}
                    onClick={() => playSpeech(item.char)}
                    className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-red-500 text-center cursor-pointer transition-all hover:scale-105 group"
                  >
                    <div className="text-xl sm:text-2xl font-black font-jp text-slate-900 dark:text-white group-hover:text-red-600">
                      {item.char}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500">{item.romaji}</div>
                  </div>
                ) : (
                  <div key={idx} className="p-1.5 sm:p-3" />
                )
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="kattral-card space-y-4">
              <h4 className="text-lg font-black text-slate-900 dark:text-white">Dakuten (が, ざ, だ, ば)</h4>
              <div className="grid grid-cols-5 gap-2">
                {hiraganaDakuten.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => playSpeech(item.char)}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center cursor-pointer hover:border-red-500"
                  >
                    <div className="text-xl font-bold font-jp">{item.char}</div>
                    <div className="text-[10px] font-semibold text-slate-500">{item.romaji}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="kattral-card space-y-4">
              <h4 className="text-lg font-black text-slate-900 dark:text-white">Handakuten (ぱ, ぴ, ぷ, ぺ, ぽ)</h4>
              <div className="grid grid-cols-5 gap-2">
                {hiraganaHandakuten.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => playSpeech(item.char)}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center cursor-pointer hover:border-red-500"
                  >
                    <div className="text-xl font-bold font-jp">{item.char}</div>
                    <div className="text-[10px] font-semibold text-slate-500">{item.romaji}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: KATAKANA */}
      {activeTab === 'katakana' && (
        <div className="space-y-8">
          <div className="kattral-card space-y-4">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              Basic Katakana (46 Characters)
            </h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2.5">
              {katakanaBasic.map((item, idx) => (
                item.char ? (
                  <div
                    key={idx}
                    onClick={() => playSpeech(item.char)}
                    className="p-1.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 text-center cursor-pointer transition-all hover:scale-105 group"
                  >
                    <div className="text-xl sm:text-2xl font-black font-jp text-slate-900 dark:text-white group-hover:text-blue-600">
                      {item.char}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500">{item.romaji}</div>
                  </div>
                ) : (
                  <div key={idx} className="p-1.5 sm:p-3" />
                )
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: KANJI */}
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
                ← Back to N5 Kanji Cards
              </button>
              <WritingCanvas
                character={practiceWritingKanji.kanji}
                romaji={practiceWritingKanji.onyomi}
                onNext={() => setPracticeWritingKanji(null)}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {n5KanjiData.map((kanji) => (
                <div key={kanji.id} className="kattral-card p-6 space-y-4">
                  
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 flex items-center justify-center text-5xl font-black font-jp text-red-600 dark:text-red-400">
                        {kanji.kanji}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {kanji.meaning}
                        </h4>
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

                  <div className="p-3 rounded-xl bg-red-50/50 dark:bg-slate-800 text-xs space-y-1">
                    <div className="font-bold text-slate-800 dark:text-slate-200">Example: {kanji.exampleWord}</div>
                    <div className="font-jp text-slate-700 dark:text-slate-300">{kanji.exampleSentence}</div>
                    <div className="text-slate-500">{kanji.sentenceEn}</div>
                  </div>

                  <button
                    onClick={() => handleStartWritingKanji(kanji)}
                    className="btn-primary w-full justify-center py-2.5 text-xs font-bold"
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

      {/* TAB 5: GRAMMAR */}
      {activeTab === 'grammar' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              JLPT N5 Grammar Patterns ({n5GrammarData.length})
            </h2>
          </div>

          {/* N5 Grammar Test Launch Banner */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-red-600 to-rose-700 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20">
                PRACTICE EXAM
              </span>
              <h3 className="text-xl font-extrabold flex items-center gap-2 pt-1">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Take Official JLPT N5 Grammar Test</span>
              </h3>
              <p className="text-xs text-red-100 max-w-xl">
                Test your N5 grammar mastery with authentic PDF-extracted questions (Particles, Verb Conjugations, Expressions).
              </p>
            </div>
            <button
              onClick={() => setActiveTab('grammar-test')}
              className="px-6 py-3 rounded-full bg-white text-red-600 font-extrabold text-xs hover:bg-red-50 shadow-md transition-all whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Start N5 Grammar Test</span>
              <Sparkles className="w-4 h-4 text-red-600" />
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <Search className="w-5 h-5 text-red-500 shrink-0" />
            <input
              type="text"
              value={grammarQuery}
              onChange={(e) => setGrammarQuery(e.target.value)}
              placeholder={`Search across all ${n5GrammarData.length} N5 Grammar patterns... (e.g. です, Desu, Topic, Want)`}
              className="w-full bg-transparent text-sm font-semibold text-slate-900 dark:text-white outline-none placeholder:text-slate-400 placeholder:font-normal"
            />
          </div>

          {n5GrammarData
            .filter((g) => {
              if (!grammarQuery.trim()) return true;
              const q = grammarQuery.toLowerCase().trim();
              return (
                g.pattern?.toLowerCase().includes(q) ||
                g.meaning?.toLowerCase().includes(q) ||
                g.structure?.toLowerCase().includes(q) ||
                g.explanation?.toLowerCase().includes(q) ||
                g.exampleJp?.toLowerCase().includes(q) ||
                g.exampleRomaji?.toLowerCase().includes(q) ||
                g.exampleEn?.toLowerCase().includes(q) ||
                g.notes?.toLowerCase().includes(q)
              );
            })
            .map((g) => (
              <div key={g.id} className="kattral-card p-6 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                      N5 GRAMMAR PATTERN
                    </span>
                    <h3 className="text-2xl font-black font-jp text-slate-900 dark:text-white">
                      {g.pattern}
                    </h3>
                  </div>
                  <button
                    onClick={() => playSpeech(g.exampleJp || g.pattern)}
                    className="p-2.5 rounded-full bg-red-50 dark:bg-red-950 text-red-600"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Meaning:</h4>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white">{g.meaning}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">Sentence Structure:</h4>
                    <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg block mt-1 text-slate-800 dark:text-slate-200">
                      {g.structure}
                    </code>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">{g.explanation}</p>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Sentence Example</span>
                  <p className="text-base font-bold font-jp text-slate-900 dark:text-white">{g.exampleJp}</p>
                  <p className="text-xs text-red-500 font-semibold">{g.exampleRomaji}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{g.exampleEn}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* TAB: N5 GRAMMAR TEST */}
      {activeTab === 'grammar-test' && (
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab('grammar')}
            className="btn-secondary py-2 px-4 text-xs font-bold"
          >
            ← Back to N5 Grammar Patterns
          </button>
          <QuizEngine 
            questions={n5GrammarTestQuestions} 
            quizTitle="JLPT N5 Grammar Practice Test (PDF Source)"
          />
        </div>
      )}

      {/* TAB 6: QUIZ */}
      {activeTab === 'quiz' && (
        <QuizEngine 
          questions={n5Questions} 
          quizTitle="JLPT N5 Vocabulary & Grammar Quiz"
          onRetake={() => setN5Questions(generateN5QuizSet(15))}
        />
      )}
    </div>
  );
};
