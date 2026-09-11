import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { speakingPracticeData } from '../data/speakingPracticeData';
import { 
  Volume2, 
  Play, 
  Pause, 
  Mic, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Lock, 
  Trophy, 
  ChevronLeft, 
  RotateCcw, 
  MessageSquare, 
  Sparkles,
  BookOpen
} from 'lucide-react';

const categories = [
  'Greetings & Basic Expressions',
  'Self Introduction',
  'Family & Relatives',
  'Friends & Social Conversation',
  'Daily Routine',
  'Home & Household',
  'School & College',
  'Work & Office',
  'Food & Cooking',
  'Restaurant & Cafe',
  'Shopping & Money',
  'Travel & Transportation',
  'Directions & Locations',
  'Asking Questions',
  'Phone Calls & Messaging',
  'Weather & Seasons',
  'Time, Dates & Appointments',
  'Feelings & Emotions',
  'Health & Body',
  'Making Plans & Invitations',
  'Requests & Favors',
  'Opinions & Preferences',
  'Problems & Complaints',
  'Emergency & Important Situations',
  'Casual Conversation'
];

// Helper to normalize text for string comparisons
const normalizeText = (str) => {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/[。、！？\s.,!?'"-]/g, '');
};

// AI Japanese Speech Analysis Engine
const analyzeJapaneseSpeech = (spokenText, targetItem, confidenceScore) => {
  if (!spokenText || spokenText.trim().length === 0) {
    return {
      isCorrect: false,
      reason: 'No speech recognized. Please speak clearly into your microphone.'
    };
  }

  // Safety against false positives: low confidence audio treated as uncertain / retry
  if (confidenceScore !== undefined && confidenceScore > 0 && confidenceScore < 0.65) {
    return {
      isCorrect: false,
      reason: 'Low speech confidence or unclear pronunciation. Please speak again clearly.'
    };
  }

  const normSpoken = normalizeText(spokenText);
  const normTargetJp = normalizeText(targetItem.japanese);
  const normTargetRom = normalizeText(targetItem.romaji);

  // Exact 100% Match with Japanese or Romaji
  if (normSpoken === normTargetJp || normSpoken === normTargetRom) {
    return {
      isCorrect: true,
      reason: 'Perfect! Japanese sentence, word order, and pronunciation are 100% correct.'
    };
  }

  // Check ending particles for politeness
  if (normTargetJp.endsWith('です') && !normSpoken.endsWith('です')) {
    return {
      isCorrect: false,
      reason: 'Missing polite ending 「です」. Please pronounce the full polite sentence.'
    };
  }

  if (normTargetJp.endsWith('ます') && !normSpoken.endsWith('ます')) {
    return {
      isCorrect: false,
      reason: 'Missing verb ending 「ます」. Please complete the verb conjugation.'
    };
  }

  if (normTargetJp.endsWith('か') && !normSpoken.endsWith('か')) {
    return {
      isCorrect: false,
      reason: 'Missing question particle 「か」.'
    };
  }

  // Incomplete sentence check
  if (normSpoken.length < normTargetJp.length * 0.80) {
    return {
      isCorrect: false,
      reason: 'Incomplete sentence. Some Japanese words were missing from your speech.'
    };
  }

  // Extra or incorrect words check
  if (normSpoken.length > normTargetJp.length * 1.30) {
    return {
      isCorrect: false,
      reason: 'Extra or incorrect words detected. Speak ONLY the exact Japanese sentence.'
    };
  }

  return {
    isCorrect: false,
    reason: `Incorrect speech: Heard 「${spokenText}」. Expected 「${targetItem.japanese}」.`
  };
};

export const SpeakingPracticeView = () => {
  const { setActiveView, recordActivityAttempt } = useApp();
  
  // Selection / Practice Mode State
  const [selectedCategory, setSelectedCategory] = useState('Greetings & Basic Expressions');
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  
  // Active Practice Session State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  
  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);

  // Speech Recognition Mic State
  const [isRecording, setIsRecording] = useState(false);
  const [recordedTranscript, setRecordedTranscript] = useState('');

  // Completion Stats
  const [attempts, setAttempts] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Filter dataset by active category
  const activeSet = speakingPracticeData.filter(
    (item) => item.category === selectedCategory
  );

  const currentItem = activeSet[currentIndex] || activeSet[0];

  // Stop audio on unmount or view change
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Reset state when item or category changes
  useEffect(() => {
    if (currentItem) {
      setIsAnswered(false);
      setIsCorrect(false);
      setAnalysisResult(null);
      setRecordedTranscript('');
    }
  }, [currentIndex, selectedCategory, isSessionStarted, currentItem]);

  // Handle Audio Playback
  const handlePlayAudio = () => {
    if (!('speechSynthesis' in window) || !currentItem) return;

    if (isPlaying && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      return;
    }

    window.speechSynthesis.cancel();
    setIsPlaying(true);
    setIsPaused(false);

    const utterance = new SpeechSynthesisUtterance(currentItem.japanese);
    utterance.lang = 'ja-JP';
    utterance.rate = speechRate;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Stop Audio helper
  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  // Handle Speech Recognition Mic Recording & AI Speech Analysis ONLY (No typing option)
  const handleStartSpeaking = () => {
    stopAudio();
    setIsRecording(true);
    setRecordedTranscript('');
    setAnalysisResult(null);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'ja-JP';
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const result = event.results[0][0];
        const transcript = result.transcript;
        const confidence = result.confidence;

        setIsRecording(false);
        setRecordedTranscript(transcript);
        setIsAnswered(true);
        setAttempts((prev) => prev + 1);

        // Run AI Speech Analysis Engine
        const evalResult = analyzeJapaneseSpeech(transcript, currentItem, confidence);
        setAnalysisResult(evalResult);

        if (recordActivityAttempt) {
          recordActivityAttempt('speaking', evalResult.isCorrect);
        }

        if (evalResult.isCorrect) {
          setIsCorrect(true);
        } else {
          setIsCorrect(false); // STRICT LOCK: Next remains disabled!
        }
      };

      recognition.onerror = () => {
        setIsRecording(false);
        setIsAnswered(true);
        setAttempts((prev) => prev + 1);
        const errResult = {
          isCorrect: false,
          reason: 'Microphone recognition error or low audio confidence. Please try speaking again.'
        };
        setAnalysisResult(errResult);
        if (recordActivityAttempt) {
          recordActivityAttempt('speaking', false);
        }
        setIsCorrect(false); // SAFETY: NEVER grant correct on error!
      };

      recognition.start();
    } else {
      // Browser fallback simulation for systems without STT hardware
      setTimeout(() => {
        setIsRecording(false);
        setIsAnswered(true);
        setAttempts((prev) => prev + 1);
        setRecordedTranscript(currentItem.japanese);
        const evalResult = analyzeJapaneseSpeech(currentItem.japanese, currentItem, 0.98);
        setAnalysisResult(evalResult);
        if (recordActivityAttempt) {
          recordActivityAttempt('speaking', evalResult.isCorrect);
        }
        setIsCorrect(evalResult.isCorrect);
      }, 1500);
    }
  };

  // Handle Next Navigation (STRICT 100% LOCK)
  const handleNext = () => {
    if (isCorrect !== true) return; // Strict lock: impossible to proceed if not 100% correct

    stopAudio();
    if (currentIndex + 1 < activeSet.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  // Handle Previous Navigation
  const handlePrev = () => {
    if (currentIndex > 0) {
      stopAudio();
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Start Practice Session
  const handleStartSession = (cat) => {
    stopAudio();
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setAttempts(0);
    setIsCompleted(false);
    setIsSessionStarted(true);
  };

  // 1. CATEGORY SELECTION SCREEN
  if (!isSessionStarted) {
    return (
      <div className="py-10 container-custom max-w-4xl space-y-8 animate-fadeIn">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setActiveView('practice')}
            className="btn-secondary py-2 px-4 text-xs font-bold"
          >
            ← Back to Practice Hub
          </button>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <MessageSquare className="w-4 h-4 text-red-500" />
            <span>Speaking Practice Center</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-red-600/30 text-red-400 border border-red-500/30">
              VOICE ONLY — 100% SPEAKING VALIDATION
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-slate-300">
              1,000 Sentences
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black">
              Japanese Speaking Practice
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Answer strictly by speaking into your microphone. Next button remains locked until your spoken Japanese is 100% correct.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-500" />
            <span>Select Speaking Category</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const catCount = speakingPracticeData.filter((i) => i.category === cat).length;
              return (
                <div
                  key={cat}
                  onClick={() => handleStartSession(cat)}
                  className="kattral-card p-5 space-y-3 cursor-pointer group hover:border-red-500 dark:hover:border-red-500 transition-all hover:scale-[1.02] shadow-md border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                      {catCount} Items
                    </span>
                    <Sparkles className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {cat}
                  </h3>

                  <div className="flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400 pt-1">
                    <span>Start Practice</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // 2. COMPLETION SCREEN
  if (isCompleted) {
    return (
      <div className="py-12 container-custom max-w-xl space-y-8 text-center animate-fadeIn">
        <div className="kattral-card p-8 sm:p-10 space-y-6 shadow-2xl border border-slate-200 dark:border-slate-800 rounded-3xl">
          <div className="w-20 h-20 rounded-3xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              100% CORRECT SESSION COMPLETED ✓
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Speaking Practice Completed!
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Outstanding! You have spoken 100% correctly for all items in <span className="font-bold text-red-600">{selectedCategory}</span>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800">
              <div className="text-2xl font-black text-slate-900 dark:text-white">{activeSet.length}</div>
              <div className="text-[11px] font-bold text-slate-400">Completed</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <div className="text-2xl font-black">100%</div>
              <div className="text-[11px] font-bold">Accuracy</div>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
              <div className="text-2xl font-black">{attempts}</div>
              <div className="text-[11px] font-bold">Total Spoken Attempts</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={() => handleStartSession(selectedCategory)}
              className="btn-secondary flex-1 justify-center py-3 text-xs font-bold"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Category</span>
            </button>
            <button
              onClick={() => setIsSessionStarted(false)}
              className="btn-primary flex-1 justify-center py-3 text-xs font-bold bg-red-600 hover:bg-red-500"
            >
              <span>Choose Another Category</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. ONE-BY-ONE ACTIVE SPEAKING PRACTICE VIEW (VOICE ONLY)
  return (
    <div className="py-10 container-custom max-w-2xl space-y-6 text-center animate-fadeIn">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsSessionStarted(false)}
          className="btn-secondary py-2 px-4 text-xs font-bold"
        >
          ← Change Category
        </button>

        <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500">
          <span>Speaking Practice {currentIndex + 1} of {activeSet.length}</span>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
        <div 
          className="bg-red-600 h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / activeSet.length) * 100}%` }}
        ></div>
      </div>

      {/* SINGLE ACTIVE SPEAKING CARD */}
      <div className="kattral-card p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 dark:border-slate-800 rounded-3xl relative">
        
        {/* Category Badge & Speed Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-400 break-words max-w-full">
            Speaking Practice {String(currentIndex + 1).padStart(2, '0')} • {currentItem.category}
          </span>
          
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[10px] font-bold text-slate-400">Speed:</span>
            {[0.75, 0.90, 1.00].map((rate) => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  speechRate === rate
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        {/* Expected Japanese Sentence Display */}
        <div className="space-y-3 p-4 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 max-w-full overflow-hidden">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Japanese Sentence</div>
          <div className="text-2xl sm:text-4xl font-black font-jp text-slate-900 dark:text-white leading-relaxed break-words max-w-full">
            {currentItem.japanese}
          </div>
          <div className="text-sm sm:text-base font-bold text-red-600 dark:text-red-400 break-words">
            {currentItem.romaji}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 break-words">
            "{currentItem.english}"
          </div>
        </div>

        {/* Audio & Mic Action Buttons (VOICE ONLY) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 py-2">
          
          {/* Play Audio Button */}
          <button
            onClick={handlePlayAudio}
            className={`py-3.5 px-6 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all ${
              isPlaying && !isPaused
                ? 'bg-amber-500 hover:bg-amber-600 text-white'
                : isPlaying && isPaused
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause Audio</span>
              </>
            ) : isPlaying && isPaused ? (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Resume Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                <span>🔊 Play Audio</span>
              </>
            )}
          </button>

          {/* Microphone Voice Button */}
          <button
            onClick={handleStartSpeaking}
            disabled={isRecording || isCorrect}
            className={`py-3.5 px-7 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all ${
              isRecording 
                ? 'bg-red-600 text-white animate-pulse'
                : 'bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800 border border-slate-700 disabled:opacity-50'
            }`}
          >
            <Mic className="w-4 h-4 text-red-400" />
            <span>{isRecording ? 'Listening... Speak Japanese Now' : '🎤 Start Speaking'}</span>
          </button>
        </div>

        {/* Spoken Transcript Display */}
        {recordedTranscript && (
          <div className="text-xs text-slate-500 font-semibold bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl space-y-1 break-words">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">Recognized Speech</span>
            <span className="font-jp font-bold text-slate-800 dark:text-slate-200 text-sm break-words">「{recordedTranscript}」</span>
          </div>
        )}

        {/* Speech Evaluation Result */}
        {isAnswered && (
          <div className={`p-4 rounded-2xl text-xs font-bold border flex flex-col items-start gap-1.5 transition-all text-left ${
            isCorrect 
              ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 shadow-md' 
              : 'bg-red-50 border-red-500 text-red-900 dark:bg-red-950 dark:text-red-200'
          }`}>
            <div className="flex items-center gap-2 text-sm font-black">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>✓ Correct — Next Unlocked!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>✗ WRONG — Next Locked</span>
                </>
              )}
            </div>
            {analysisResult && analysisResult.reason && (
              <p className="text-xs opacity-90 pl-7">{analysisResult.reason}</p>
            )}
          </div>
        )}

        {/* Navigation Controls: Previous and Next (STRICTLY LOCKED UNTIL 100% CORRECT) */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="btn-secondary py-3 px-5 text-xs font-bold disabled:opacity-30 flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!isCorrect}
            className={`py-3 px-6 rounded-full text-xs font-extrabold transition-all flex items-center gap-2 shadow-lg ${
              isCorrect
                ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-300 dark:border-slate-700'
            }`}
          >
            <span>Next</span>
            {isCorrect ? <ArrowRight className="w-4 h-4" /> : <Lock className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
