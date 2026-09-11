import { n5FullVocabData } from './n5FullVocabData';
import { n4VocabData } from './n4VocabData';
import { n5KanjiData } from './n5KanjiData';
import { n4KanjiData } from './n4KanjiData';
import { n5GrammarData } from './n5GrammarData';
import { n4GrammarData } from './n4GrammarData';
import { n5GrammarTestQuestions } from './n5GrammarTestData';
import { n4GrammarTestQuestions } from './n4GrammarTestData';
import { listeningData } from './listeningData';

// Utility helper to shuffle array deterministically or randomly
const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Generate 500+ Authentic JLPT Questions Bank
export const generateJLPT500QuizBank = () => {
  const bank = [];

  // 1. Authentic PDF N5 Grammar Test Questions (40 questions)
  if (Array.isArray(n5GrammarTestQuestions)) {
    n5GrammarTestQuestions.forEach((q, idx) => {
      bank.push({
        id: `pdf_n5_g_${q.id || idx}`,
        type: 'JLPT N5 Grammar',
        level: 'N5',
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation || `Correct answer is Option ${q.correctIndex + 1}: ${q.options[q.correctIndex]}.`
      });
    });
  }

  // 2. Authentic PDF N4 Grammar Test Questions (50 questions)
  if (Array.isArray(n4GrammarTestQuestions)) {
    n4GrammarTestQuestions.forEach((q, idx) => {
      bank.push({
        id: `pdf_n4_g_${q.id || idx}`,
        type: 'JLPT N4 Grammar',
        level: 'N4',
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation || `Correct answer is Option ${q.correctIndex + 1}: ${q.options[q.correctIndex]}.`
      });
    });
  }

  // 3. Listening Comprehension Questions (15 questions)
  if (Array.isArray(listeningData)) {
    listeningData.slice(0, 15).forEach((item, idx) => {
      const correctOpt = item.english;
      const distractors = listeningData
        .filter((l) => l.id !== item.id && l.english !== correctOpt)
        .slice(0, 3)
        .map((l) => l.english);

      if (distractors.length === 3) {
        const opts = shuffle([correctOpt, ...distractors]);
        bank.push({
          id: `list_${item.id || idx}`,
          type: 'JLPT Listening',
          level: item.level || 'N5',
          question: `Listening Task: What is the meaning of native audio sentence 「${item.japanese}」 (${item.romaji})?`,
          options: opts,
          correctIndex: opts.indexOf(correctOpt),
          explanation: `「${item.japanese}」 (${item.romaji}) translates to "${item.english}".`
        });
      }
    });
  }

  // 4. N5 Vocabulary Questions (200 questions)
  const n5VocabShuffled = shuffle(n5FullVocabData);
  const n5VocabLimit = Math.min(200, n5VocabShuffled.length);
  for (let i = 0; i < n5VocabLimit; i++) {
    const item = n5VocabShuffled[i];
    const correctOpt = item.english;

    const distractors = [];
    let guard = 0;
    while (distractors.length < 3 && guard < 100) {
      guard++;
      const randItem = n5FullVocabData[Math.floor(Math.random() * n5FullVocabData.length)];
      if (randItem.english !== correctOpt && !distractors.includes(randItem.english)) {
        distractors.push(randItem.english);
      }
    }

    if (distractors.length === 3) {
      const options = shuffle([correctOpt, ...distractors]);
      const wordDisplay = item.kanji && item.kanji !== item.hiragana 
        ? `${item.kanji} (${item.hiragana})` 
        : (item.hiragana || item.kanji || item.romaji);

      bank.push({
        id: `n5_v_${item.id}_${i}`,
        type: 'JLPT N5 Vocabulary',
        level: 'N5',
        question: `What is the meaning of N5 word 「${wordDisplay}」 (${item.romaji})?`,
        options,
        correctIndex: options.indexOf(correctOpt),
        explanation: `「${wordDisplay}」 (${item.romaji}) means "${item.english}". Example: ${item.exampleSentence || ''}`
      });
    }
  }

  // 5. N4 Vocabulary Questions (200 questions)
  const n4VocabShuffled = shuffle(n4VocabData);
  const n4VocabLimit = Math.min(200, n4VocabShuffled.length);
  for (let i = 0; i < n4VocabLimit; i++) {
    const item = n4VocabShuffled[i];
    const correctOpt = item.english;

    const distractors = [];
    let guard = 0;
    while (distractors.length < 3 && guard < 100) {
      guard++;
      const randItem = n4VocabData[Math.floor(Math.random() * n4VocabData.length)];
      if (randItem.english !== correctOpt && !distractors.includes(randItem.english)) {
        distractors.push(randItem.english);
      }
    }

    if (distractors.length === 3) {
      const options = shuffle([correctOpt, ...distractors]);
      const wordDisplay = item.kanji && item.kanji !== item.hiragana 
        ? `${item.kanji} (${item.hiragana})` 
        : (item.hiragana || item.kanji || item.japanese);

      bank.push({
        id: `n4_v_${item.id}_${i}`,
        type: 'JLPT N4 Vocabulary',
        level: 'N4',
        question: `What is the meaning of N4 word 「${wordDisplay}」 (${item.romaji})?`,
        options,
        correctIndex: options.indexOf(correctOpt),
        explanation: `N4 Vocabulary 「${wordDisplay}」 (${item.romaji}) means "${item.english}".`
      });
    }
  }

  // 6. N5 Kanji Questions (40 questions)
  const n5KanjiShuffled = shuffle(n5KanjiData);
  const n5KanjiLimit = Math.min(40, n5KanjiShuffled.length);
  for (let i = 0; i < n5KanjiLimit; i++) {
    const item = n5KanjiShuffled[i];
    const correctOpt = `${item.meaning} (${item.onyomi || item.kunyomi})`;

    const distractors = [];
    let guard = 0;
    while (distractors.length < 3 && guard < 100) {
      guard++;
      const randItem = n5KanjiData[Math.floor(Math.random() * n5KanjiData.length)];
      const candidate = `${randItem.meaning} (${randItem.onyomi || randItem.kunyomi})`;
      if (randItem.kanji !== item.kanji && !distractors.includes(candidate)) {
        distractors.push(candidate);
      }
    }

    if (distractors.length === 3) {
      const options = shuffle([correctOpt, ...distractors]);
      bank.push({
        id: `n5_k_${item.id}_${i}`,
        type: 'JLPT N5 Kanji',
        level: 'N5',
        question: `What is the meaning and reading for N5 Kanji 「${item.kanji}」?`,
        options,
        correctIndex: options.indexOf(correctOpt),
        explanation: `Kanji 「${item.kanji}」 means "${item.meaning}" with reading (${item.onyomi || item.kunyomi}). Example: ${item.exampleWord || ''}.`
      });
    }
  }

  // 7. N4 Kanji Questions (40 questions)
  const n4KanjiShuffled = shuffle(n4KanjiData);
  const n4KanjiLimit = Math.min(40, n4KanjiShuffled.length);
  for (let i = 0; i < n4KanjiLimit; i++) {
    const item = n4KanjiShuffled[i];
    const correctOpt = `${item.meaning} (${item.onyomi || item.kunyomi})`;

    const distractors = [];
    let guard = 0;
    while (distractors.length < 3 && guard < 100) {
      guard++;
      const randItem = n4KanjiData[Math.floor(Math.random() * n4KanjiData.length)];
      const candidate = `${randItem.meaning} (${randItem.onyomi || randItem.kunyomi})`;
      if (randItem.kanji !== item.kanji && !distractors.includes(candidate)) {
        distractors.push(candidate);
      }
    }

    if (distractors.length === 3) {
      const options = shuffle([correctOpt, ...distractors]);
      bank.push({
        id: `n4_k_${item.id}_${i}`,
        type: 'JLPT N4 Kanji',
        level: 'N4',
        question: `What is the meaning and reading for N4 Kanji 「${item.kanji}」?`,
        options,
        correctIndex: options.indexOf(correctOpt),
        explanation: `Kanji 「${item.kanji}」 means "${item.meaning}" with reading (${item.onyomi || item.kunyomi}). Example: ${item.exampleWord || ''}.`
      });
    }
  }

  // 8. N5 & N4 Grammar Pattern Questions (40 questions)
  const grammarCombined = [...n5GrammarData.map(g => ({...g, level: 'N5'})), ...n4GrammarData.map(g => ({...g, level: 'N4'}))];
  const grammarShuffled = shuffle(grammarCombined);
  const grammarLimit = Math.min(40, grammarShuffled.length);

  for (let i = 0; i < grammarLimit; i++) {
    const item = grammarShuffled[i];
    const correctOpt = item.meaning;

    const distractors = [];
    let guard = 0;
    while (distractors.length < 3 && guard < 100) {
      guard++;
      const randItem = grammarCombined[Math.floor(Math.random() * grammarCombined.length)];
      if (randItem.id !== item.id && !distractors.includes(randItem.meaning)) {
        distractors.push(randItem.meaning);
      }
    }

    if (distractors.length === 3) {
      const options = shuffle([correctOpt, ...distractors]);
      bank.push({
        id: `g_pat_${item.id}_${i}`,
        type: `JLPT ${item.level} Grammar Pattern`,
        level: item.level,
        question: `What does the ${item.level} grammar pattern 「${item.pattern}」 mean?`,
        options,
        correctIndex: options.indexOf(correctOpt),
        explanation: `Pattern 「${item.pattern}」 means "${item.meaning}". Structure: ${item.structure || ''}. Example: ${item.exampleJp || ''}`
      });
    }
  }

  return shuffle(bank);
};

// Export pre-generated 500+ Question Bank
export const jlpt500QuizBank = generateJLPT500QuizBank();

// Backwards compatibility exports
export const generateN5QuizSet = (count = 15) => generateJLPT500QuizBank().filter(q => q.level === 'N5').slice(0, count);
export const generateN4QuizSet = (count = 15) => generateJLPT500QuizBank().filter(q => q.level === 'N4').slice(0, count);

export const n5QuizSet = generateN5QuizSet(15);
export const n4QuizSet = generateN4QuizSet(15);

export { n5GrammarTestQuestions } from './n5GrammarTestData';
export { n4GrammarTestQuestions } from './n4GrammarTestData';
