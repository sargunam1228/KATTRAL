import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { testQuestionsBank } from '../data/testQuestionsBank';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { Pagination } from '../components/Pagination';

export const TestView = () => {
  const { 
    setActiveView, 
    navigateBack,
    recordTestAttempt, 
    vocabStats, 
    recordActivityAttempt,
    testProgressState,
    setTestProgressState
  } = useApp();
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongIndices, setWrongIndices] = useState([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongAttemptsCount, setWrongAttemptsCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Helper to shuffle array
  const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Initialize or restore saved test state
  useEffect(() => {
    if (testProgressState && testProgressState.questions && testProgressState.questions.length > 0) {
      setQuestions(testProgressState.questions);
      setCurrentIndex(testProgressState.currentIndex || 0);
      setWrongIndices(testProgressState.wrongIndices || []);
      setIsUnlocked(testProgressState.isUnlocked || false);
      setCorrectCount(testProgressState.correctCount || 0);
      setWrongAttemptsCount(testProgressState.wrongAttemptsCount || 0);
      setIsCompleted(testProgressState.isCompleted || false);
    } else {
      startFreshTest();
    }
  }, []);

  const startFreshTest = () => {
    if (!testQuestionsBank || testQuestionsBank.length === 0) return;
    const randomized = shuffleArray(testQuestionsBank);
    setQuestions(randomized);
    setCurrentIndex(0);
    setWrongIndices([]);
    setIsUnlocked(false);
    setCorrectCount(0);
    setWrongAttemptsCount(0);
    setIsCompleted(false);

    if (setTestProgressState) {
      setTestProgressState({
        questions: randomized,
        currentIndex: 0,
        wrongIndices: [],
        isUnlocked: false,
        correctCount: 0,
        wrongAttemptsCount: 0,
        isCompleted: false
      });
    }
  };

  // Sync state changes to user-isolated testProgressState
  const saveState = (updated) => {
    if (setTestProgressState) {
      setTestProgressState((prev) => ({
        ...prev,
        ...updated
      }));
    }
  };

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleSelectOption = (idx) => {
    if (isUnlocked) return; // Prevent changing after correct answer is found

    if (idx === currentQ.correctIndex) {
      const newCorrect = correctCount + 1;
      setCorrectCount(newCorrect);
      setIsUnlocked(true);
      if (recordActivityAttempt) recordActivityAttempt('quiz', true);

      saveState({
        isUnlocked: true,
        correctCount: newCorrect,
        wrongIndices: []
      });
    } else {
      if (!wrongIndices.includes(idx)) {
        const newWrongIndices = [...wrongIndices, idx];
        const newWrongAttempts = wrongAttemptsCount + 1;
        setWrongIndices(newWrongIndices);
        setWrongAttemptsCount(newWrongAttempts);
        if (recordActivityAttempt) recordActivityAttempt('quiz', false);

        saveState({
          wrongIndices: newWrongIndices,
          wrongAttemptsCount: newWrongAttempts
        });
      }
    }
  };

  const handleNextQuestion = () => {
    if (!isUnlocked) return; // Gate next question strictly until current is correct

    const nextIdx = currentIndex + 1;
    if (nextIdx < questions.length) {
      setCurrentIndex(nextIdx);
      setIsUnlocked(false);
      setWrongIndices([]);
      saveState({
        currentIndex: nextIdx,
        isUnlocked: false,
        wrongIndices: []
      });
    } else {
      setIsCompleted(true);
      const totalAttempts = correctCount + wrongAttemptsCount;
      const finalPct = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 100;
      
      if (recordTestAttempt) recordTestAttempt(finalPct);
      saveState({
        isCompleted: true
      });

      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handlePageChange = (page) => {
    const targetIdx = page - 1;
    if (targetIdx >= 0 && targetIdx < questions.length && targetIdx !== currentIndex) {
      setCurrentIndex(targetIdx);
      setIsUnlocked(false);
      setWrongIndices([]);
      saveState({
        currentIndex: targetIdx,
        isUnlocked: false,
        wrongIndices: []
      });
    }
  };

  const totalAttempts = correctCount + wrongAttemptsCount;
  const currentAccuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 100;

  if (isCompleted) {
    return (
      <div className="py-10 container-custom max-w-xl space-y-6 text-center animate-fadeIn">
        <div className="kattral-card space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 mx-auto flex items-center justify-center shadow-lg">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              JLPT N5 & N4 Test Completed! 🎉
            </h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Evaluated from 500+ Question Master Dataset
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800">
              <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">{correctCount}/{questions.length}</div>
              <div className="text-[11px] font-bold text-slate-400">Completed</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <div className="text-xl sm:text-2xl font-black">{correctCount}</div>
              <div className="text-[11px] font-bold">Correct</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
              <div className="text-xl sm:text-2xl font-black">{wrongAttemptsCount}</div>
              <div className="text-[11px] font-bold">Wrong Attempts</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
              <div className="text-xl sm:text-2xl font-black">{currentAccuracy}%</div>
              <div className="text-[11px] font-bold">Accuracy</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={startFreshTest}
              className="btn-secondary flex-1 justify-center py-3"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restart Test Bank</span>
            </button>
            <button
              onClick={() => navigateBack('practice')}
              className="btn-primary flex-1 justify-center py-3"
            >
              <span>Back to Practice</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex + 1) / questions.length) * 100);

  return (
    <div className="py-10 container-custom max-w-2xl space-y-6">
      
      {/* Test Section Header Frame */}
      <div className="bg-[#121824] text-white p-5 sm:p-6 rounded-3xl shadow-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>MOCK TEST • JLPT N5 & N4</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-black mt-2 text-white">500+ Question Master Test</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Topic: {currentQ.category} ({currentQ.level || 'N5/N4'})
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="px-3.5 py-1.5 rounded-2xl bg-red-950/80 border border-red-800 text-xs font-black text-red-400">
            {currentIndex + 1} / {questions.length}
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="kattral-card space-y-6">
        
        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
            <span>Progress: Question {currentIndex + 1} of {questions.length}</span>
            <span>{progressPercent}%</span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-600 to-rose-600 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Prompt */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 dark:text-red-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 shrink-0" />
            <span>{currentQ.category}</span>
          </div>
          <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug break-words">
            {currentQ.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            const isCorrect = idx === currentQ.correctIndex;
            const isWrong = wrongIndices.includes(idx);
            
            let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-red-400 hover:bg-slate-50 dark:hover:bg-slate-850';

            if (isUnlocked && isCorrect) {
              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950/90 dark:border-emerald-500 dark:text-emerald-200 font-black shadow-md';
            } else if (isWrong) {
              btnStyle = 'bg-rose-50 border-rose-500 text-rose-900 dark:bg-rose-950/90 dark:border-rose-500 dark:text-rose-200 font-bold opacity-80';
            }

            return (
              <button
                key={idx}
                disabled={isUnlocked}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between text-base font-bold font-jp ${btnStyle}`}
              >
                <span>{opt}</span>
                {isUnlocked && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                {isWrong && <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Incorrect Attempt Feedback (Do NOT reveal correct option text) */}
        {wrongIndices.length > 0 && !isUnlocked && (
          <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs text-rose-900 dark:text-rose-200 space-y-1 animate-fadeIn">
            <div className="flex items-center gap-1.5 font-extrabold text-sm text-rose-600 dark:text-rose-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Incorrect Choice!</span>
            </div>
            <p className="font-bold text-slate-800 dark:text-slate-200">
              👉 Please try another option above to find the correct answer. You must answer correctly to move to the Next Question.
            </p>
          </div>
        )}

        {/* Correct Feedback & Explanation */}
        {isUnlocked && (
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-1.5 font-extrabold text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Correct! 🎉</span>
            </div>
            <p className="font-jp text-slate-700 dark:text-slate-300 font-medium">{currentQ.explanation}</p>
          </div>
        )}

        {/* Number Navigation / Pagination */}
        <Pagination
          currentPage={currentIndex + 1}
          totalPages={questions.length}
          onPageChange={handlePageChange}
        />

        {/* Next CTA (Gated strictly by isUnlocked) */}
        {isUnlocked && (
          <button
            onClick={handleNextQuestion}
            className="btn-primary w-full justify-center py-3.5 text-base shadow-lg animate-fadeIn font-extrabold"
          >
            <span>{currentIndex + 1 === questions.length ? 'Finish Test 🎉' : 'Next Question'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
