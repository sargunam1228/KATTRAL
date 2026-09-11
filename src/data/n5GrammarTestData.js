// Authentic JLPT N5 Grammar Test Questions (Extracted from N5 Speed Master Source PDF)
export const n5GrammarTestQuestions = [
  {
    id: 'n5_gtest_1',
    level: 'N5',
    type: 'Particle Selection',
    grammarPoint: 'は (wa) - Topic Particle',
    question: '私（　）田中です。よろしくお願いいたします。',
    options: ['は', 'が', 'を', 'に'],
    correctIndex: 0,
    translation: 'I am Tanaka. Nice to meet you.',
    explanation: 'Particle「は」(pronounced wa) marks the main topic of the sentence ("As for me...").'
  },
  {
    id: 'n5_gtest_2',
    level: 'N5',
    type: 'Particle Selection',
    grammarPoint: 'で (de) - Location of Action',
    question: '図書館（　）日本語の辞書を借りました。',
    options: ['に', 'で', 'へ', 'を'],
    correctIndex: 1,
    translation: 'I borrowed a Japanese dictionary at the library.',
    explanation: 'Particle「で」indicates the location where an action takes place (library).'
  },
  {
    id: 'n5_gtest_3',
    level: 'N5',
    type: 'Particle Selection',
    grammarPoint: 'に (ni) - Target Time',
    question: '毎朝、7時半（　）起きます。',
    options: ['で', 'に', 'を', 'から'],
    correctIndex: 1,
    translation: 'I wake up at 7:30 every morning.',
    explanation: 'Particle「に」marks specific points in time (7:30).'
  },
  {
    id: 'n5_gtest_4',
    level: 'N5',
    type: 'Verb Form (Te-Form Request)',
    grammarPoint: '〜てください (te kudasai)',
    question: 'ここに名前を（　）ください。',
    options: ['書いて', '書きます', '書く', '書いた'],
    correctIndex: 0,
    translation: 'Please write your name here.',
    explanation: 'Polite request formula requires Verb Te-form + ください. 「書く」 becomes 「書いて」.'
  },
  {
    id: 'n5_gtest_5',
    level: 'N5',
    type: 'Existence Verb',
    grammarPoint: 'あります / います (Existence)',
    question: '公園に子供が一人も（　）。',
    options: ['ありません', 'いません', 'あります', 'います'],
    correctIndex: 1,
    translation: 'There is not even a single child in the park.',
    explanation: 'For animate beings (children) paired with 否定, use 「いません」 (there is not).'
  },
  {
    id: 'n5_gtest_6',
    level: 'N5',
    type: 'Desire Expression',
    grammarPoint: '〜たいです (tai desu)',
    question: '喉が渇きましたから、冷たい水が（　）。',
    options: ['飲みたいです', '飲みます', '飲んでください', '飲みましょう'],
    correctIndex: 0,
    translation: 'My throat is dry, so I want to drink cold water.',
    explanation: 'Verb stem + たいです expresses personal desire to do an action.'
  },
  {
    id: 'n5_gtest_7',
    level: 'N5',
    type: 'Prohibition',
    grammarPoint: '〜てはいけません (te wa ikemasen)',
    question: 'ここでタバコを（　）はいけません。',
    options: ['吸って', '吸い', '吸う', '吸った'],
    correctIndex: 0,
    translation: 'You must not smoke cigarettes here.',
    explanation: 'Prohibition pattern requires Verb Te-form + はいけません. 「吸う」 becomes 「吸って」.'
  },
  {
    id: 'n5_gtest_8',
    level: 'N5',
    type: 'Ability / Potential',
    grammarPoint: '〜ことができます (koto ga dekimasu)',
    question: 'あなたは漢字を（　）ことができますか。',
    options: ['読む', '読み', '読んで', '読んだ'],
    correctIndex: 0,
    translation: 'Can you read Kanji?',
    explanation: 'Nominalized potential pattern requires Verb Dictionary Form + ことができます.'
  },
  {
    id: 'n5_gtest_9',
    level: 'N5',
    type: 'Comparison',
    grammarPoint: 'N1 は N2 より (yori)',
    question: '飛行機は電車（　）速いです。',
    options: ['より', 'ほど', 'から', 'まで'],
    correctIndex: 0,
    translation: 'Airplanes are faster than trains.',
    explanation: 'Comparison pattern: N1 は N2 より Adjective です ("N1 is more Adj than N2").'
  },
  {
    id: 'n5_gtest_10',
    level: 'N5',
    type: 'Superlative',
    grammarPoint: 'いちばん (ichiban)',
    question: '1年で7月が（　）暑いです。',
    options: ['いちばん', 'とても', 'もっと', 'あまり'],
    correctIndex: 0,
    translation: 'July is the hottest month of the year.',
    explanation: 'Superlative pattern: Category で Noun が いちばん Adjective です.'
  },
  {
    id: 'n5_gtest_11',
    level: 'N5',
    type: 'Sequence of Actions',
    grammarPoint: '〜てから (te kara)',
    question: '手を（　）から、ご飯を食べます。',
    options: ['洗って', '洗う', '洗い', '洗った'],
    correctIndex: 0,
    translation: 'I eat dinner after washing my hands.',
    explanation: 'Sequential action formula requires Verb Te-form + から ("after doing...").'
  },
  {
    id: 'n5_gtest_12',
    level: 'N5',
    type: 'Obligation',
    grammarPoint: '〜なければなりません',
    question: '風邪ですから、薬を（　）なければなりません。',
    options: ['飲ま', '飲み', '飲む', '飲んだ'],
    correctIndex: 0,
    translation: 'Because I have a cold, I must take medicine.',
    explanation: 'Obligation formula requires Verb Nai-form stem (without い) + なければなりません.'
  },
  {
    id: 'n5_gtest_13',
    level: 'N5',
    type: 'Experience',
    grammarPoint: '〜たことがあります',
    question: '富士山に（　）ことがありますか。',
    options: ['登った', '登る', '登り', '登って'],
    correctIndex: 0,
    translation: 'Have you ever climbed Mount Fuji?',
    explanation: 'Past experience formula requires Verb Ta-form + ことがあります.'
  },
  {
    id: 'n5_gtest_14',
    level: 'N5',
    type: 'Reason Particle',
    grammarPoint: '〜から (kara)',
    question: '時間がありません（　）、タクシーで行きましょう。',
    options: ['から', 'まで', 'でも', 'のに'],
    correctIndex: 0,
    translation: 'Because we don\'t have time, let\'s go by taxi.',
    explanation: 'Reason clause ending particle 「から」 states the cause/reason for the following action.'
  },
  {
    id: 'n5_gtest_15',
    level: 'N5',
    type: 'Giving & Receiving',
    grammarPoint: 'あげます / くれます',
    question: '誕生日に友達がプレゼントを（　）。',
    options: ['くれました', 'あげました', 'もらいました', 'やりました'],
    correctIndex: 0,
    translation: 'My friend gave me a present on my birthday.',
    explanation: 'When someone else gives something to me or my family, use 「くれました」.'
  }
];
