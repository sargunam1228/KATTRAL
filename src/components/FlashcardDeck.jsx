import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { n5FullVocabData } from '../data/n5FullVocabData';
import { n4VocabData } from '../data/n4VocabData';
import { 
  Volume2, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Lock, 
  Layers, 
  BookOpen, 
  Sparkles, 
  Check, 
  RotateCcw,
  ChevronLeft
} from 'lucide-react';

const shuffleArray = (arr) => {
  const shallow = [...arr];
  for (let i = shallow.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shallow[i], shallow[j]] = [shallow[j], shallow[i]];
  }
  return shallow;
};

export const FlashcardDeck = ({ items: propItems }) => {
  const { playSpeech, recordActivityAttempt, setActiveView, markItemCompleted } = useApp();

  // Level Selection State: null | 'N5' | 'N4'
  const [selectedLevel, setSelectedLevel] = useState(null);
  
  // Deck & Card State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [typedAnswer, setTypedAnswer] = useState('');

  // Active dataset derived strictly from level
  const activeDeck = selectedLevel === 'N5' 
    ? n5FullVocabData 
    : selectedLevel === 'N4' 
    ? n4VocabData 
    : (propItems || n5FullVocabData);

  const currentItem = activeDeck[currentIndex] || activeDeck[0];

  // Generate 4 Quiz Options for current card
  const generateCardOptions = (item, deck) => {
    if (!item || !deck) return;
    const correctText = item.english;

    const distractors = deck
      .filter((d) => d.id !== item.id && d.english !== correctText)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((d) => d.english);

    const merged = shuffleArray([correctText, ...distractors]);
    setOptions(merged);
  };

  // Reset card state when index or level changes
  useEffect(() => {
    if (currentItem && selectedLevel) {
      generateCardOptions(currentItem, activeDeck);
      setIsFlipped(false);
      setIsAnswered(false);
      setIsCorrect(false);
      setSelectedOption(null);
      setTypedAnswer('');
    }
  }, [currentIndex, selectedLevel, currentItem]);

  // Handle Option Selection
  const handleSelectOption = (optText, optIdx) => {
    if (isCorrect) return;

    setSelectedOption(optIdx);
    setIsAnswered(true);

    const isMatch = optText === currentItem.english;

    if (recordActivityAttempt) {
      recordActivityAttempt('vocab', isMatch);
    }

    if (isMatch) {
      setIsCorrect(true);
      setIsFlipped(true); // Auto flip to reveal full details when correct
      if (markItemCompleted && currentItem?.id) {
        markItemCompleted(selectedLevel === 'N4' ? 'n4Vocab' : 'n5Vocab', currentItem.id);
      }
    } else {
      setIsCorrect(false); // NEXT LOCKED!
    }
  };

  // Handle Typed Answer Submission
  const handleCheckTyped = (e) => {
    if (e) e.preventDefault();
    if (isCorrect || !typedAnswer.trim()) return;

    const inputClean = typedAnswer.trim().toLowerCase();
    const englishClean = (currentItem.english || '').toLowerCase();
    const romajiClean = (currentItem.romaji || '').toLowerCase();
    const hiraganaClean = (currentItem.hiragana || '').toLowerCase();

    const isMatch = inputClean === englishClean || inputClean === romajiClean || inputClean === hiraganaClean;

    setIsAnswered(true);

    if (recordActivityAttempt) {
      recordActivityAttempt('vocab', isMatch);
    }

    if (isMatch) {
      setIsCorrect(true);
      setIsFlipped(true);
      if (markItemCompleted && currentItem?.id) {
        markItemCompleted(selectedLevel === 'N4' ? 'n4Vocab' : 'n5Vocab', currentItem.id);
      }
    } else {
      setIsCorrect(false);
    }
  };

  // Next Card Handler (STRICTLY GATED)
  const handleNextCard = () => {
    if (!isCorrect) return; // Next is locked until correct!

    setIsFlipped(false);
    setIsCorrect(false);
    setIsAnswered(false);

    if (currentIndex + 1 < activeDeck.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back or complete
    }
  };

  // 1. LEVEL SELECTION SCREEN (FIRST SCREEN DISPLAYED)
  if (!selectedLevel) {
    return (
      <div className="py-10 container-custom max-w-3xl space-y-8 animate-fadeIn text-center">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveView('practice')}
            className="btn-secondary py-2 px-4 text-xs font-bold"
          >
            ← Back to Practice Hub
          </button>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>Vocabulary Flashcards</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 text-xs font-black uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Select Vocabulary Level</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Choose Vocabulary Level
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
            Select N5 or N4 level below to practice vocabulary flashcards. You must answer each card correctly to unlock the next item.
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          
          {/* N5 LEVEL BUTTON */}
          <div
            onClick={() => {
              setSelectedLevel('N5');
              setCurrentIndex(0);
            }}
            className="kattral-card p-8 space-y-4 cursor-pointer group hover:border-red-500 transition-all hover:scale-[1.02] shadow-xl border-2 border-red-500/20 text-center"
          >
            <div className="w-16 h-16 rounded-3xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 font-black text-2xl font-jp mx-auto flex items-center justify-center shadow-md">
              五
            </div>

            <div>
              <span className="text-xs font-black uppercase text-red-600 tracking-wider">BEGINNER LEVEL</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">JLPT N5 Vocabulary</h2>
              <p className="text-xs text-slate-500 mt-1 font-semibold">
                {n5FullVocabData.length} Essential N5 Words
              </p>
            </div>

            <div className="btn-primary py-3 w-full justify-center text-xs font-bold bg-red-600 group-hover:bg-red-500">
              <span>Start N5 Flashcards</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* N4 LEVEL BUTTON */}
          <div
            onClick={() => {
              setSelectedLevel('N4');
              setCurrentIndex(0);
            }}
            className="kattral-card p-8 space-y-4 cursor-pointer group hover:border-blue-500 transition-all hover:scale-[1.02] shadow-xl border-2 border-blue-500/20 text-center"
          >
            <div className="w-16 h-16 rounded-3xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-black text-2xl font-jp mx-auto flex items-center justify-center shadow-md">
              四
            </div>

            <div>
              <span className="text-xs font-black uppercase text-blue-600 tracking-wider">ELEMENTARY LEVEL</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">JLPT N4 Vocabulary</h2>
              <p className="text-xs text-slate-500 mt-1 font-semibold">
                {n4VocabData.length} Complete N4 Words
              </p>
            </div>

            <div className="btn-primary py-3 w-full justify-center text-xs font-bold bg-blue-600 group-hover:bg-blue-500">
              <span>Start N4 Flashcards</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. ACTIVE FLASHCARD DECK VIEW WITH ANSWER VALIDATION
  return (
    <div className="py-8 container-custom max-w-xl space-y-6 animate-fadeIn">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedLevel(null)}
          className="btn-secondary py-2 px-4 text-xs font-bold flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Change Level ({selectedLevel})</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500">
          <span>Card {currentIndex + 1} of {activeDeck.length}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 rounded-full ${
            selectedLevel === 'N5' ? 'bg-red-600' : 'bg-blue-600'
          }`}
          style={{ width: `${((currentIndex + 1) / activeDeck.length) * 100}%` }}
        />
      </div>

      {/* 3D Flip Card Container */}
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className={`flip-card w-full h-[280px] cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      >
        <div className="flip-card-inner border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl bg-white dark:bg-slate-800">
          
          {/* Front Side */}
          <div className="flip-card-front bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 flex flex-col items-center justify-center relative">
            <div className="absolute top-4 right-4 text-[10px] font-black uppercase text-red-500 bg-red-50 dark:bg-red-950 px-3 py-1 rounded-full border border-red-200 dark:border-red-900">
              {currentItem.level || selectedLevel} • {currentItem.category || 'Vocabulary'}
            </div>

            <div className="text-5xl sm:text-6xl font-black font-jp text-slate-900 dark:text-white mb-2">
              {currentItem.kanji && currentItem.kanji !== currentItem.hiragana 
                ? currentItem.kanji 
                : (currentItem.japanese || currentItem.hiragana)}
            </div>

            {currentItem.hiragana && currentItem.hiragana !== currentItem.kanji && (
              <div className="text-lg font-extrabold text-red-600 dark:text-red-400 font-jp mb-1">
                {currentItem.hiragana}
              </div>
            )}

            <div className="text-sm font-bold text-slate-500 mb-3">
              {currentItem.romaji}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                playSpeech(currentItem.japanese || currentItem.kanji || currentItem.hiragana);
              }}
              className="p-3 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 hover:scale-110 transition-transform shadow-md"
              title="Listen Audio"
            >
              <Volume2 className="w-5 h-5" />
            </button>

            <p className="text-[11px] font-bold text-slate-400 mt-4 flex items-center gap-1">
              <RotateCw className="w-3 h-3" /> Tap card to flip details
            </p>
          </div>

          {/* Back Side */}
          <div className="flip-card-back bg-slate-900 text-white dark:bg-slate-950 p-6 flex flex-col justify-between rounded-3xl">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block">ENGLISH MEANING</span>
              <h3 className="text-2xl font-black text-white leading-snug">
                {currentItem.english}
              </h3>
              {currentItem.tamil && (
                <p className="text-lg font-extrabold text-red-400 font-jp">
                  {currentItem.tamil}
                </p>
              )}
              <p className="text-xs font-semibold text-slate-300">
                Romaji: {currentItem.romaji} {currentItem.hiragana ? `• Hiragana: ${currentItem.hiragana}` : ''}
              </p>
            </div>

            {currentItem.exampleSentence && (
              <div className="p-3 rounded-xl bg-white/10 text-xs text-slate-300 space-y-0.5 border border-white/10 text-left">
                <div className="font-jp text-white font-bold">{currentItem.exampleSentence}</div>
                <div className="text-slate-400">{currentItem.sentenceEn || currentItem.english}</div>
              </div>
            )}

            <p className="text-[10px] font-bold text-slate-500">Tap card to flip back</p>
          </div>
        </div>
      </div>

      {/* ANSWER PRACTICE VALIDATION BOX */}
      <div className="kattral-card p-5 space-y-4 shadow-xl border border-slate-200 dark:border-slate-800 rounded-3xl text-left">
        <div className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Answer Validation: Select Correct Translation
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {options.map((optText, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOpt = optText === currentItem.english;

            let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-amber-400';

            if (isAnswered) {
              if (isCorrectOpt) {
                btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-bold';
              } else if (isSelected && !isCorrectOpt) {
                btnStyle = 'bg-red-50 border-red-500 text-red-900 dark:bg-red-950 dark:text-red-200 font-bold';
              }
            }

            return (
              <button
                key={idx}
                disabled={isCorrect}
                onClick={() => handleSelectOption(optText, idx)}
                className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between text-xs font-bold text-left ${btnStyle}`}
              >
                <span>{optText}</span>
                {isAnswered && isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                {isAnswered && isSelected && !isCorrectOpt && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Written Translation Input */}
        <form onSubmit={handleCheckTyped} className="pt-1 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={typedAnswer}
            onChange={(e) => setTypedAnswer(e.target.value)}
            disabled={isCorrect}
            placeholder={`Or type English meaning e.g. "${currentItem.english}"`}
            className="flex-1 min-w-0 w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold outline-none focus:border-amber-500 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isCorrect || !typedAnswer.trim()}
            className="btn-primary px-4 py-2.5 text-xs font-bold shadow-sm disabled:opacity-40 flex items-center justify-center gap-1 shrink-0"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Check</span>
          </button>
        </form>

        {/* Feedback Alert */}
        {isAnswered && (
          <div className={`p-3.5 rounded-2xl text-xs font-bold border flex items-center justify-between transition-all ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 shadow-sm' 
              : 'bg-red-50 border-red-500 text-red-900 dark:bg-red-950 dark:text-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>✓ Correct translation! Next card unlocked.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>✗ Wrong answer. Next button remains locked! Try again.</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Navigation Bar: Next is LOCKED until 100% Correct */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400">
            {isCorrect ? '✓ Unlocked' : '🔒 Next locked until correct'}
          </div>

          <button
            onClick={handleNextCard}
            disabled={!isCorrect}
            className={`py-3 px-6 rounded-full text-xs font-extrabold transition-all flex items-center gap-2 shadow-lg ${
              isCorrect
                ? 'bg-amber-600 hover:bg-amber-500 text-white cursor-pointer'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-300 dark:border-slate-700'
            }`}
          >
            <span>Next Card</span>
            {isCorrect ? <ArrowRight className="w-4 h-4" /> : <Lock className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
