import React from 'react';
import { useApp } from '../context/AppContext';
import { Headphones, Mic, Pencil, Layers, Award, Sparkles, ArrowRight } from 'lucide-react';

export const PracticeView = () => {
  const { setActiveView } = useApp();

  const practiceModules = [
    {
      id: 'listening',
      title: 'Listening Practice',
      subtitle: 'Audio Drills & Comprehension',
      description: 'Listen to native Japanese sentences, review Romaji + English + Tamil translations, and answer JLPT listening questions.',
      icon: Headphones,
      color: 'bg-red-50 text-red-600 dark:bg-red-950/60 dark:text-red-400 border-red-200 dark:border-red-900',
      badge: 'Interactive Audio'
    },
    {
      id: 'speaking',
      title: 'Speaking Practice',
      subtitle: 'Speech & Pronunciation',
      description: 'Practice speaking Japanese sentences with microphone input feedback, pronunciation repeat, and listen-and-repeat drills.',
      icon: Mic,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border-blue-200 dark:border-blue-900',
      badge: 'Voice Recognition'
    },
    {
      id: 'writing',
      title: 'Writing Practice',
      subtitle: 'HTML5 Stroke Canvas',
      description: 'Draw Hiragana, Katakana, and Kanji inside an interactive canvas with stroke guidelines, clear, and stroke check.',
      icon: Pencil,
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900',
      badge: 'Canvas Pad'
    },
    {
      id: 'flashcards',
      title: 'Vocabulary Flashcards',
      subtitle: '3D Flip Cards Deck',
      description: 'Interactive flashcards with 3D flip animation, native voice pronunciation, Tamil meanings, and "I Know" / "Need Practice" self-scoring.',
      icon: Layers,
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/60 dark:text-amber-400 border-amber-200 dark:border-amber-900',
      badge: '3D Flip Cards'
    },
    {
      id: 'quiz',
      title: 'JLPT Quiz Engine',
      subtitle: 'Timed Mock Tests',
      description: 'Test your N5 and N4 knowledge with timed multiple choice questions, score recaps, accuracy metrics, and recommended lessons.',
      icon: Award,
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 border-purple-200 dark:border-purple-900',
      badge: 'JLPT Exam Mode'
    }
  ];

  return (
    <div className="py-10 container-custom space-y-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERACTIVE PRACTICE HUB</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Train Your Japanese Skills
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base">
          Choose a practice mode to refine your listening, speaking, stroke writing, flashcards, or JLPT quiz speed.
        </p>
      </div>

      {/* Grid of Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {practiceModules.map((module) => {
          const Icon = module.icon;
          return (
            <div
              key={module.id}
              onClick={() => setActiveView(module.id)}
              className="kattral-card p-6 flex flex-col justify-between cursor-pointer group hover:border-red-500 transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${module.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {module.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-xs font-bold text-slate-400 mt-0.5">
                    {module.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {module.description}
                </p>
              </div>

              <div className="pt-2 flex items-center text-xs font-bold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform gap-1">
                <span>Start Practice</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
