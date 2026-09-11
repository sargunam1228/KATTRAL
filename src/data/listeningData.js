// Listening Practice Data (N5 & N4)
export const listeningData = [
  {
    id: 'l1',
    level: 'N5',
    title: 'Morning Greetings',
    japanese: 'おはようございます。今日もいい天気ですね。',
    romaji: 'Ohayou gozaimasu. Kyou mo ii tenki desu ne.',
    english: 'Good morning. It’s nice weather today as well, isn’t it?',
    tamil: 'காலை வணக்கம். இன்றும் நல்ல வானிலை, அல்லவா?',
    audioText: 'おはようございます。今日もいい天気ですね。',
    question: 'What is the speaker talking about?',
    options: [
      'Saying good evening and talking about rain',
      'Saying good morning and commenting on nice weather',
      'Asking for the time at school',
      'Ordering food at a restaurant'
    ],
    correctIndex: 1,
    explanation: '“Ohayou gozaimasu” means Good Morning and “ii tenki” means good weather.'
  },
  {
    id: 'l2',
    level: 'N5',
    title: 'Asking for Location',
    japanese: 'すみません、駅はどこですか。',
    romaji: 'Sumimasen, eki wa doko desu ka.',
    english: 'Excuse me, where is the station?',
    tamil: 'மன்னிக்கவும், ரயில் நிலையம் எங்கே இருக்கிறது?',
    audioText: 'すみません、駅はどこですか。',
    question: 'Where does the speaker want to go?',
    options: [
      'The Hospital (病院)',
      'The Library (図書館)',
      'The Station (駅)',
      'The Park (公園)'
    ],
    correctIndex: 2,
    explanation: '“Eki” means station in Japanese.'
  },
  {
    id: 'l3',
    level: 'N5',
    title: 'Ordering Food',
    japanese: 'これを二つとお茶を一つください。',
    romaji: 'Kore o futatsu to ocha o hitotsu kudasai.',
    english: 'Two of this and one green tea, please.',
    tamil: 'இதில் இரண்டு மற்றும் ஒரு தேநீர் கொடுங்கள்.',
    audioText: 'これを二つとお茶を一つください。',
    question: 'How many green teas (ocha) is the customer ordering?',
    options: ['One (一つ)', 'Two (二つ)', 'Three (三つ)', 'None'],
    correctIndex: 0,
    explanation: '“Ocha o hitotsu kudasai” means 1 tea please.'
  },
  {
    id: 'l4',
    level: 'N4',
    title: 'Making Plans',
    japanese: '明日は雨が降りそうだから、映画館へ行くつもりです。',
    romaji: 'Ashita wa ame ga furisou dakara, eigakan e iku tsumori desu.',
    english: 'Because it looks like rain tomorrow, I plan to go to the movie theater.',
    tamil: 'நாளை மழை பெய்யும் போல் இருப்பதால், திரையரங்கிற்கு செல்ல திட்டமிட்டுள்ளேன்.',
    audioText: '明日は雨が降りそうだから、映画館へ行くつもりです。',
    question: 'Why is the speaker planning to go to the movie theater?',
    options: [
      'Because they have an exam',
      'Because it looks like it will rain tomorrow',
      'Because their friend invited them',
      'Because the station is closed'
    ],
    correctIndex: 1,
    explanation: '“Ame ga furisou” means it looks like rain.'
  },
  {
    id: 'l5',
    level: 'N4',
    title: 'Travel Advice',
    japanese: '新幹線のチケットは早く予約したほうがいいですよ。',
    romaji: 'Shinkansen no chiketto wa hayaku yoyaku shita hou ga ii desu yo.',
    english: 'It is better to reserve bullet train tickets early.',
    tamil: 'அதிவேக ரயில் சீட்டுகளை சீக்கிரமே முன்பதிவு செய்வது நல்லது.',
    audioText: '新幹線のチケットは早く予約したほうがいいですよ。',
    question: 'What advice does the speaker give?',
    options: [
      'Take the bus instead of train',
      'Cancel the trip to Kyoto',
      'Reserve bullet train tickets early',
      'Wait until the day of departure to buy tickets'
    ],
    correctIndex: 2,
    explanation: '“Yoyaku shita hou ga ii” means it’s better to reserve.'
  }
];
