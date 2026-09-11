import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Timer, Sparkles, AlertCircle } from 'lucide-react';
import { Pagination } from './Pagination';

export const QuizEngine = ({ questions: initialQuestions, quizTitle = 'JLPT Practice Quiz', onRetake }) => {
  const { setActiveView, recordActivityAttempt, markItemCompleted } = useApp();
  const [questions, setQuestions] = useState(initialQuestions || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongIndices, setWrongIndices] = useState([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [firstTryCount, setFirstTryCount] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes countdown
  const [isCompleted, setIsCompleted] = useState(false);

  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    setQuestions(initialQuestions || []);
    setCurrentIndex(0);
    setWrongIndices([]);
    setIsUnlocked(false);
    setFirstTryCount(0);
    setTimer(300);
    setIsCompleted(false);
    setShowReview(false);
  }, [initialQuestions]);

  useEffect(() => {
    if (isCompleted || timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          setIsCompleted(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isCompleted, timer]);

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleSelect = (idx) => {
    // If question is already answered correctly, ignore further option clicks until Next is pressed
    if (isUnlocked) return;

    const isMatch = idx === currentQ.correctIndex;
    if (recordActivityAttempt) {
      recordActivityAttempt('quiz', isMatch);
    }

    if (isMatch) {
      setIsUnlocked(true);
      if (wrongIndices.length === 0) {
        setFirstTryCount((prev) => prev + 1);
      }
      if (markItemCompleted && currentQ?.id) {
        const categoryKey = currentQ.level === 'N4' ? 'n4MockTests' : 'n5Grammar';
        markItemCompleted(categoryKey, currentQ.id);
      }
    } else {
      if (!wrongIndices.includes(idx)) {
        setWrongIndices((prev) => [...prev, idx]);
      }
    }
  };

  const handleNextQuestion = () => {
    if (!isUnlocked) return;

    setWrongIndices([]);
    setIsUnlocked(false);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  const handlePageChange = (page) => {
    const targetIdx = page - 1;
    if (targetIdx >= 0 && targetIdx < questions.length && targetIdx !== currentIndex) {
      setCurrentIndex(targetIdx);
      setWrongIndices([]);
      setIsUnlocked(false);
    }
  };

  const formatTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const accuracy = Math.round((firstTryCount / questions.length) * 100) || 0;

  if (isCompleted) {
    return (
      <div className="kattral-card max-w-2xl mx-auto space-y-6 text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
          <Award className="w-8 h-8" />
        </div>

        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
          Quiz Completed!
        </h2>
        <p className="text-sm font-semibold text-slate-500">{quizTitle}</p>

        {/* Score Breakdown Cards */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="text-2xl font-black text-slate-900 dark:text-white">{firstTryCount}/{questions.length}</div>
            <div className="text-[11px] font-bold text-slate-400">First-Try Score</div>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-600 dark:text-emerald-400">
            <div className="text-2xl font-black">{accuracy}%</div>
            <div className="text-[11px] font-bold">Accuracy</div>
          </div>
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400">
            <div className="text-2xl font-black">{questions.length}</div>
            <div className="text-[11px] font-bold">Completed</div>
          </div>
        </div>

        {/* Feedback Message */}
        <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-left space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
            <Sparkles className="w-4 h-4" />
            <span>Mastery Summary:</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300">
            {accuracy >= 80 
              ? 'Excellent performance! You have mastered these vocabulary and grammar concepts.' 
              : 'Good effort! Review the cards and retake the quiz to sharpen your recall.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <button
            onClick={() => setShowReview(!showReview)}
            className="btn-secondary justify-center py-3 text-xs font-bold"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{showReview ? 'Hide Answers' : 'Review Answers'}</span>
          </button>

          <button
            onClick={() => {
              if (onRetake) {
                onRetake();
              } else {
                setCurrentIndex(0);
                setWrongIndices([]);
                setIsUnlocked(false);
                setFirstTryCount(0);
                setTimer(300);
                setIsCompleted(false);
                setShowReview(false);
              }
            }}
            className="btn-secondary justify-center py-3 text-xs font-bold"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retry Quiz</span>
          </button>

          <button
            onClick={() => setActiveView('home')}
            className="btn-primary justify-center py-3 text-xs font-bold"
          >
            <span>Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Review Answers Breakdown */}
        {showReview && (
          <div className="pt-4 text-left space-y-4 border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>Questions & Explanations Review</span>
            </h3>

            <div className="space-y-4">
              {questions.map((q, qIdx) => (
                <div key={q.id || qIdx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                    <span>Q{qIdx + 1}. {q.type || q.grammarPoint || 'Grammar Question'}</span>
                    {q.level && <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-[10px]">{q.level}</span>}
                  </div>
                  <p className="text-base font-extrabold text-slate-900 dark:text-white font-jp">
                    {q.question}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isCorrectOpt = optIdx === q.correctIndex;
                      return (
                        <div 
                          key={optIdx} 
                          className={`p-2 rounded-lg border font-semibold ${
                            isCorrectOpt 
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-extrabold' 
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {isCorrectOpt && '✓ '} {opt}
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 space-y-0.5">
                      <span className="font-extrabold block">Explanation:</span>
                      <p className="text-slate-700 dark:text-slate-300">{q.explanation}</p>
                      {q.translation && <p className="text-blue-600 dark:text-blue-400 font-medium">Translation: {q.translation}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="kattral-card max-w-2xl mx-auto space-y-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-2">
        <div>
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
            {currentQ.type || 'QUIZ'}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {quizTitle}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 shrink-0">
          <Timer className="w-4 h-4 text-red-500" />
          <span>{formatTimer(timer)}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-bold text-slate-400">
          <span>Question {currentIndex + 1} / {questions.length}</span>
          <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Stem */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2 max-w-full overflow-hidden">
        <p className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug break-words max-w-full">
          {currentQ.question}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {currentQ.options.map((opt, idx) => {
          const isCorrect = idx === currentQ.correctIndex;
          const isWrong = wrongIndices.includes(idx);
          
          let btnStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500';
          
          if (isUnlocked && isCorrect) {
            btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 font-extrabold shadow-sm';
          } else if (isWrong) {
            btnStyle = 'bg-red-50 border-red-500 text-red-900 dark:bg-red-950 dark:text-red-200 font-bold opacity-80';
          }

          return (
            <button
              key={idx}
              disabled={isUnlocked}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-center justify-between text-xs sm:text-base font-semibold gap-3 min-w-0 ${btnStyle}`}
            >
              <span className="break-words max-w-full">{opt}</span>
              {isUnlocked && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
              {isWrong && <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation Box */}
      {wrongIndices.length > 0 && !isUnlocked && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-xs text-red-900 dark:text-red-200 space-y-1.5 animate-fadeIn">
          <div className="flex items-center gap-1.5 font-extrabold text-sm text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Incorrect Answer!</span>
          </div>
          <p>
            Correct answer is: <strong className="text-emerald-700 dark:text-emerald-400">{currentQ.options[currentQ.correctIndex]}</strong>
          </p>
          <p className="text-slate-600 dark:text-slate-400">{currentQ.explanation}</p>
          <p className="font-bold pt-1 text-slate-800 dark:text-slate-200">
            👉 Please select the correct answer above to unlock the Next Question.
          </p>
        </div>
      )}

      {isUnlocked && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 space-y-1 animate-fadeIn">
          <div className="flex items-center gap-1.5 font-extrabold text-sm text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Correct! 🎉</span>
          </div>
          <p>{currentQ.explanation}</p>
        </div>
      )}

      {/* Number Navigation / Pagination */}
      <Pagination
        currentPage={currentIndex + 1}
        totalPages={questions.length}
        onPageChange={handlePageChange}
      />

      {/* Next Question CTA (Gated by isUnlocked) */}
      {isUnlocked && (
        <button
          onClick={handleNextQuestion}
          className="btn-primary w-full justify-center py-3.5 text-base shadow-lg animate-fadeIn"
        >
          <span>{currentIndex + 1 === questions.length ? 'Finish Quiz 🎉' : 'Next Question'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
