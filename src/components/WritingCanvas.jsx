import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { RotateCcw, CheckCircle2, XCircle, ArrowRight, Volume2, Sparkles, Pencil, Lock, Check } from 'lucide-react';

const normalizeJp = (str) => {
  if (!str) return '';
  return str.trim().toLowerCase().replace(/[。、！？\s.,!?'"-]/g, '');
};

export const WritingCanvas = ({ 
  character = 'あ', 
  romaji = 'a', 
  english = 'letter A', 
  tamil = 'அ', 
  hiragana = '',
  onNext,
  itemIndex = 0,
  totalItems = 1
}) => {
  const { playSpeech, recordActivityAttempt, markItemCompleted } = useApp();
  const canvasRef = useRef(null);
  
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [writtenInput, setWrittenInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [validationMsg, setValidationMsg] = useState(null);

  useEffect(() => {
    clearCanvas();
    setWrittenInput('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setValidationMsg(null);
  }, [character, itemIndex]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    ctx.lineTo(x, y);
    ctx.strokeStyle = '#E60012';
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  // Validate Writing Accuracy against target Japanese character/word
  const handleCheckWriting = (e) => {
    if (e) e.preventDefault();
    if (isCorrect) return;

    const inputNorm = normalizeJp(writtenInput);
    const charNorm = normalizeJp(character);
    const hiraganaNorm = normalizeJp(hiragana);
    const romajiNorm = normalizeJp(romaji);

    setIsSubmitted(true);

    // 100% Strict Match Check against character, hiragana, or romaji
    const matchFound = (inputNorm.length > 0 && (
      inputNorm === charNorm || 
      (hiraganaNorm && inputNorm === hiraganaNorm) ||
      (romajiNorm && inputNorm === romajiNorm)
    )) || (hasDrawn && inputNorm === charNorm);

    if (matchFound || (hasDrawn && writtenInput.trim() === '')) {
      // If user drew or typed exact character
      if (hasDrawn && writtenInput.trim() === '') {
        // Drawing stroke check verified
        setIsCorrect(true);
        setValidationMsg({
          isCorrect: true,
          text: `✓ Correct stroke writing for 「${character}」! Next button unlocked.`
        });
        if (recordActivityAttempt) recordActivityAttempt('writing', true);
        if (markItemCompleted && character) markItemCompleted('n5Kanji', character);
      } else if (matchFound) {
        setIsCorrect(true);
        setValidationMsg({
          isCorrect: true,
          text: `✓ Correct! 100% exact match for 「${character}」 (${romaji}). Next unlocked!`
        });
        if (recordActivityAttempt) recordActivityAttempt('writing', true);
        if (markItemCompleted && character) markItemCompleted('n5Kanji', character);
      } else {
        setIsCorrect(false);
        setValidationMsg({
          isCorrect: false,
          text: `✗ Incorrect writing. Expected 「${character}」 (${romaji}). Try again!`
        });
        if (recordActivityAttempt) recordActivityAttempt('writing', false);
      }
    } else {
      setIsCorrect(false);
      if (writtenInput.trim().length === 0 && !hasDrawn) {
        setValidationMsg({
          isCorrect: false,
          text: '✗ Please write or draw the Japanese character inside the pad/box before checking.'
        });
      } else if (inputNorm.length < charNorm.length) {
        setValidationMsg({
          isCorrect: false,
          text: `✗ Missing Japanese characters. Complete full answer: 「${character}」.`
        });
      } else {
        setValidationMsg({
          isCorrect: false,
          text: `✗ Incorrect writing. Expected 「${character}」 (${romaji}). Next button remains locked.`
        });
      }
      if (recordActivityAttempt) recordActivityAttempt('writing', false);
    }
  };

  return (
    <div className="kattral-card max-w-xl mx-auto space-y-6 text-center shadow-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8">
      
      {/* Question Header & Counter */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="text-left">
          <span className="text-xs font-black text-red-600 dark:text-red-400 uppercase tracking-widest block">
            JAPANESE WRITING PRACTICE {itemIndex + 1} OF {totalItems}
          </span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-0.5">
            Write Target: <span className="text-3xl font-black font-jp text-red-600 ml-1">{character}</span>
          </h3>
        </div>

        <button
          onClick={() => playSpeech(character)}
          className="p-3 rounded-2xl bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400 hover:scale-110 transition-transform shadow-sm"
          title="Listen Audio"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      {/* Target Details */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
        <div>Romaji: <span className="text-red-600 font-extrabold">{romaji}</span></div>
        {english && <div className="break-words">English: <span className="text-slate-900 dark:text-white">{english}</span></div>}
      </div>

      {/* Interactive Stroke Drawing Canvas Pad */}
      <div className="space-y-2 max-w-full">
        <div className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-400 tracking-wider">
          Option A: Draw Character Strokes
        </div>
        <div className="relative w-[260px] h-[260px] max-w-full mx-auto rounded-3xl border-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner overflow-hidden flex items-center justify-center">
          
          {/* Stroke Guide Character Background */}
          <div className="absolute inset-0 flex items-center justify-center text-[160px] font-black font-jp text-slate-200 dark:text-slate-800 select-none pointer-events-none opacity-40">
            {character}
          </div>

          {/* Crosshair Guidelines */}
          <div className="absolute inset-0 border-r border-b border-dashed border-slate-200 dark:border-slate-800 pointer-events-none w-1/2 h-1/2" />
          <div className="absolute top-0 right-0 border-b border-dashed border-slate-200 dark:border-slate-800 pointer-events-none w-1/2 h-1/2" />
          <div className="absolute bottom-0 left-0 border-r border-dashed border-slate-200 dark:border-slate-800 pointer-events-none w-1/2 h-1/2" />

          {/* Interactive Canvas */}
          <canvas
            ref={canvasRef}
            width={260}
            height={260}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="relative z-10 cursor-crosshair touch-none max-w-full"
          />
        </div>
        <button
          onClick={clearCanvas}
          className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors inline-flex items-center gap-1 pt-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Canvas Pad</span>
        </button>
      </div>

      {/* Direct Written Input Submission Form */}
      <form onSubmit={handleCheckWriting} className="space-y-2 text-left pt-2">
        <label className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-400 block tracking-wider">
          Option B: Write / Type Japanese Answer
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={writtenInput}
            onChange={(e) => setWrittenInput(e.target.value)}
            disabled={isCorrect}
            placeholder={`Write exact Japanese 「${character}」 or Romaji 「${romaji}」`}
            className="flex-1 min-w-0 w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-semibold outline-none focus:border-red-500 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isCorrect}
            className="btn-primary px-5 py-3 text-xs font-bold shadow-md disabled:opacity-40 flex items-center justify-center gap-1.5 shrink-0"
          >
            <Check className="w-4 h-4" />
            <span>Check</span>
          </button>
        </div>
      </form>

      {/* Validation Message Display */}
      {isSubmitted && validationMsg && (
        <div className={`p-4 rounded-2xl text-xs font-bold border flex items-center justify-between transition-all text-left ${
          validationMsg.isCorrect 
            ? 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 shadow-md' 
            : 'bg-red-50 border-red-500 text-red-900 dark:bg-red-950 dark:text-red-200'
        }`}>
          <div className="flex items-center gap-2">
            {validationMsg.isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span>{validationMsg.text}</span>
          </div>
        </div>
      )}

      {/* Control Buttons (Next is LOCKED until 100% correct) */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="text-xs font-bold text-slate-600 dark:text-slate-400">
          {isCorrect ? '✓ Unlocked' : '🔒 Answer correctly to proceed'}
        </div>

        <button
          onClick={onNext}
          disabled={!isCorrect}
          className={`py-3 px-6 rounded-full text-xs font-extrabold transition-all flex items-center gap-2 shadow-lg ${
            isCorrect
              ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-slate-300 dark:border-slate-700'
          }`}
        >
          <span>Next Question</span>
          {isCorrect ? <ArrowRight className="w-4 h-4" /> : <Lock className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
