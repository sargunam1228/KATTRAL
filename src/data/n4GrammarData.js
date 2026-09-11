// JLPT N4 Complete Grammar Dataset (Speed Master Grammar Source - 77 Items)
export const n4GrammarData = [
  {
    "id": "n4g_1",
    "grammarNumber": 1,
    "pattern": "〜 にしては (ni shite wa)",
    "japanese": "〜 にしては",
    "hiragana": "〜 にしては",
    "romaji": "ni shite wa",
    "meaning": "For / Considering that... (contrary to expectation)",
    "explanation": "Expresses an outcome or state that is surprisingly different from what one would normally expect based on a given fact.",
    "structure": "Verb Plain / Noun / Adjective + にしては",
    "category": "Particles & Particle Patterns",
    "important": true,
    "exampleJp": "彼は外国人にしては日本語が上手だ。",
    "exampleRomaji": "Kare wa gaikokujin ni shite wa Nihongo ga jouzu da.",
    "exampleEn": "For a foreigner, his Japanese is surprisingly good.",
    "examples": [
      {
        "jp": "彼は外国人にしては日本語が上手だ。",
        "romaji": "Kare wa gaikokujin ni shite wa Nihongo ga jouzu da.",
        "en": "For a foreigner, his Japanese is surprisingly good."
      },
      {
        "jp": "冬にしては今日はとても暖かい。",
        "romaji": "Fuyu ni shite wa kyou wa totemo atatakai.",
        "en": "Considering it's winter, today is very warm."
      },
      {
        "jp": "初めてにしては上手くできました。",
        "romaji": "Hajimete ni shite wa umaku dekimashita.",
        "en": "For a first try, you did it very well."
      }
    ],
    "notes": "Directly attaches to Nouns without だ.",
    "similarGrammar": "〜 わりに (wari ni)",
    "differenceFromSimilar": "にしては emphasizes unexpected outcome for a clear standard category, while わりに emphasizes numerical/degree proportion.",
    "commonMistakes": "Do not add だ after nouns before にしては.",
    "jlptTip": "Frequently tested in reading comprehension when evaluating surprising facts."
  },
  {
    "id": "n4g_2",
    "grammarNumber": 2,
    "pattern": "〜 によって / によると (ni yotte / ni yoruto)",
    "japanese": "〜 によって / によると",
    "hiragana": "〜 によって / によると",
    "romaji": "ni yotte / ni yoruto",
    "meaning": "Depending on / According to / Created by",
    "explanation": "Indicates a cause, method, creator (with passive), or source of hearsay information (によると).",
    "structure": "Noun + によって / によると + そうです",
    "category": "Particles & Particle Patterns",
    "important": true,
    "exampleJp": "天気予報によると、明日は雨が降るそうです。",
    "exampleRomaji": "Tenki yogou ni yoruto, ashita wa ame ga furu sou desu.",
    "exampleEn": "According to the weather forecast, it will rain tomorrow.",
    "examples": [
      {
        "jp": "天気予報によると、明日は雨が降るそうです。",
        "romaji": "Tenki yogou ni yoruto, ashita wa ame ga furu sou desu.",
        "en": "According to the weather forecast, it will rain tomorrow."
      },
      {
        "jp": "国によって文化や習慣が違います。",
        "romaji": "Kuni ni yotte bunka ya shuukan ga chigaimasu.",
        "en": "Cultures and customs differ depending on the country."
      },
      {
        "jp": "この絵は有名な画家によって描かれました。",
        "romaji": "Kono e wa yuumei na gaka ni yotte kakaremashita.",
        "en": "This painting was drawn by a famous painter."
      }
    ],
    "notes": "によると is strictly followed by hearsay expressions like 〜そうです or 〜とのことです.",
    "similarGrammar": "〜 によれば (ni yoreba)",
    "differenceFromSimilar": "によると and によれば are interchangeable when quoting news or reports.",
    "commonMistakes": "Confusing によると (source) with によって (method/by agent).",
    "jlptTip": "Key N4 exam pattern: Noun + によると + Plain Form + そうです."
  },
  {
    "id": "n4g_3",
    "grammarNumber": 3,
    "pattern": "〜 ところです (tokoro desu)",
    "japanese": "〜 ところです",
    "hiragana": "〜 ところです",
    "romaji": "tokoro desu",
    "meaning": "About to / Just doing / Just finished",
    "explanation": "Expresses the exact temporal phase of an action (just about to start, currently in progress, or just finished).",
    "structure": "Verb (Dict) + ところ / Verb (Te-form) + いるところ / Verb (Ta-form) + ところ",
    "category": "Verb Grammar",
    "important": true,
    "exampleJp": "今から出かけるところです。",
    "exampleRomaji": "Ima kara dekakeru tokoro desu.",
    "exampleEn": "I am just about to go out now.",
    "examples": [
      {
        "jp": "今から出かけるところです。",
        "romaji": "Ima kara dekakeru tokoro desu.",
        "en": "I am just about to go out now."
      },
      {
        "jp": "今、昼ご飯を食べているところです。",
        "romaji": "Ima, hirugohan o tabete iru tokoro desu.",
        "en": "I am in the middle of eating lunch right now."
      },
      {
        "jp": "たった今家に着いたところです。",
        "romaji": "Tatta ima ie ni tsuita tokoro desu.",
        "en": "I have just arrived home this very moment."
      }
    ],
    "notes": "Dict form = about to start; ている = currently in progress; た form = just completed.",
    "similarGrammar": "〜 たばかり (ta bakari)",
    "differenceFromSimilar": "たところ indicates action finished seconds/minutes ago; たばかり can refer to events finished days or weeks ago if felt recent.",
    "commonMistakes": "Using Dictionary form when you mean 'just finished'. Pay close attention to verb form!",
    "jlptTip": "Look for temporal cues like 今から (Dict form + ところ), 今 (ているところ), or たった今 (Ta-form + ところ)."
  },
  {
    "id": "n4g_4",
    "grammarNumber": 4,
    "pattern": "〜 意志形 (Volitional Form: 〜おう / 〜よう)",
    "japanese": "〜 意志形 (〜おう / 〜よう)",
    "hiragana": "〜 いしけい",
    "romaji": "ishikei (~ou / ~you)",
    "meaning": "Let's... / I will... (Casual intention/proposal)",
    "explanation": "The informal equivalent of 〜ましょう, expressing informal proposal or personal intention.",
    "structure": "Group 1: u -> ou (行こう) | Group 2: ru -> you (食べよう) | Group 3: しよう / 来よう (こよう)",
    "category": "Verb Conjugation Patterns",
    "important": true,
    "exampleJp": "一緒に映画を見に行こう！",
    "exampleRomaji": "Issho ni eiga o mii ni ikou!",
    "exampleEn": "Let's go watch a movie together!",
    "examples": [
      {
        "jp": "一緒に映画を見に行こう！",
        "romaji": "Issho ni eiga o mii ni ikou!",
        "en": "Let's go watch a movie together!"
      },
      {
        "jp": "今日は早く寝よう。",
        "romaji": "Kyou wa hayaku neyou.",
        "en": "Let me sleep early today."
      },
      {
        "jp": "明日田中さんに相談しよう。",
        "romaji": "Ashita Tanaka-san ni soudan shiyou.",
        "en": "Let's consult Mr. Tanaka tomorrow."
      }
    ],
    "notes": "Group 3: する becomes しよう, 来る (kuru) becomes 来よう (koyou).",
    "similarGrammar": "〜 ましょう (mashou)",
    "differenceFromSimilar": "〜ましょう is polite/formal; Volitional form (〜よう) is casual/informal.",
    "commonMistakes": "Mispronouncing 来よう (koyou) as kiyou or kurou.",
    "jlptTip": "Volitional form is essential for patterns like 意志形 + と思っています."
  },
  {
    "id": "n4g_5",
    "grammarNumber": 5,
    "pattern": "〜 ておく (te oku / te okimasu)",
    "japanese": "〜 ておく",
    "hiragana": "〜 ておく",
    "romaji": "te oku",
    "meaning": "Do in advance / Leave as is in preparation",
    "explanation": "Expresses performing an action ahead of time for a future purpose, or maintaining a state for future convenience.",
    "structure": "Verb (Te-form) + おく (ておきます)",
    "category": "て-form Grammar",
    "important": true,
    "exampleJp": "旅行の前にホテルを予約しておきます。",
    "exampleRomaji": "Ryokou no mae ni hoteru o yoyaku shite okimasu.",
    "exampleEn": "I will reserve a hotel in advance before the trip.",
    "examples": [
      {
        "jp": "旅行の前にホテルを予約しておきます。",
        "romaji": "Ryokou no mae ni hoteru o yoyaku shite okimasu.",
        "en": "I will reserve a hotel in advance before the trip."
      },
      {
        "jp": "パーティーのために飲み物を買っておきました。",
        "romaji": "Paatii no tame ni nomimono o katte okimashita.",
        "en": "I bought drinks in advance for the party."
      },
      {
        "jp": "窓を開けておいてください。",
        "romaji": "Mado o akete oite kudasai.",
        "en": "Please leave the window open."
      }
    ],
    "notes": "In casual speech, 〜ておく contracts to 〜とく (e.g. 買っとく, 予約しとく).",
    "similarGrammar": "〜 てある (te aru)",
    "differenceFromSimilar": "ておく is the action of preparing; てある describes the state after preparation is complete.",
    "commonMistakes": "Confusing casual 〜とく with 〜つく.",
    "jlptTip": "Watch for casual contraction 〜とく in JLPT N4 listening section."
  },
  {
    "id": "n4g_6",
    "grammarNumber": 6,
    "pattern": "〜 てある (te aru / te arimasu)",
    "japanese": "〜 てある",
    "hiragana": "〜 てある",
    "romaji": "te aru",
    "meaning": "Is done (state resulting from deliberate preparation)",
    "explanation": "Describes a state where a transitive verb action was intentionally performed by someone and remains in effect.",
    "structure": "Noun + が + Transitive Verb (Te-form) + ある",
    "category": "て-form Grammar",
    "important": true,
    "exampleJp": "壁にカレンダーが貼ってあります。",
    "exampleRomaji": "Kabe ni karendaa ga hatte arimasu.",
    "exampleEn": "A calendar has been hung on the wall.",
    "examples": [
      {
        "jp": "壁にカレンダーが貼ってあります。",
        "romaji": "Kabe ni karendaa ga hatte arimasu.",
        "en": "A calendar has been hung on the wall."
      },
      {
        "jp": "机の上に本が置いてあります。",
        "romaji": "Tsukue no ue ni hon ga oite arimasu.",
        "en": "Books are placed on top of the desk."
      },
      {
        "jp": "部屋のエアコンがつけてあります。",
        "romaji": "Heya no eakon ga tsukete arimasu.",
        "en": "The room's air conditioner has been turned on."
      }
    ],
    "notes": "Object particle を changes to が when using 〜てある.",
    "similarGrammar": "〜 ている (te iru)",
    "differenceFromSimilar": "ている with intransitive verb describes natural state (ドアが開いている); てある with transitive verb implies human intent (ドアが開けてある).",
    "commonMistakes": "Using intransitive verbs with てある. Always use transitive verbs!",
    "jlptTip": "Remember particle shift: Noun を 貼る -> Noun が 貼ってある."
  },
  {
    "id": "n4g_7",
    "grammarNumber": 7,
    "pattern": "〜 てしまう (te shimau / te shimaimashita)",
    "japanese": "〜 てしまう",
    "hiragana": "〜 てしまう",
    "romaji": "te shimau",
    "meaning": "Regrettably do by accident / Completely finish",
    "explanation": "Expresses either total completion of an action or regret/sorrow over an unintended action.",
    "structure": "Verb (Te-form) + しまう (てしまいました)",
    "category": "て-form Grammar",
    "important": true,
    "exampleJp": "宿題を忘れてしまいました。",
    "exampleRomaji": "Shukudai o washurete shimaimashita.",
    "exampleEn": "I accidentally forgot my homework.",
    "examples": [
      {
        "jp": "宿題を忘れてしまいました。",
        "romaji": "Shukudai o washurete shimaimashita.",
        "en": "I accidentally forgot my homework."
      },
      {
        "jp": "大切なお皿を割ってしまいました。",
        "romaji": "Taisetsu na osara o watte shimaimashita.",
        "en": "I broke an important plate by accident."
      },
      {
        "jp": "この本を全部読んでしまいました。",
        "romaji": "Kono hon o zenbu yonde shimaimashita.",
        "en": "I have completely finished reading this book."
      }
    ],
    "notes": "In casual conversation, 〜てしまう contracts to 〜ちゃう (ちゃう/ちゃった) and 〜でしまう to 〜じゃう (じゃう/じゃった).",
    "similarGrammar": "〜 ちゃう / 〜 じゃう (casual)",
    "differenceFromSimilar": "ちゃう is casual spoken form of てしまう.",
    "commonMistakes": "Using てしまう for positive intentional accomplishments without completion focus.",
    "jlptTip": "Listen for ちゃう/ちゃった in dialogue listening test items."
  },
  {
    "id": "n4g_8",
    "grammarNumber": 8,
    "pattern": "〜 てみる (te miru / te mimasu)",
    "japanese": "〜 てみる",
    "hiragana": "〜 てみる",
    "romaji": "te miru",
    "meaning": "Try doing (to see how it is)",
    "explanation": "Expresses doing an action experimentally to test or experience the result.",
    "structure": "Verb (Te-form) + みる",
    "category": "て-form Grammar",
    "important": true,
    "exampleJp": "日本の着物を着てみたいです。",
    "exampleRomaji": "Nihon no kimono o kite mitai desu.",
    "exampleEn": "I want to try wearing Japanese kimono.",
    "examples": [
      {
        "jp": "日本の着物を着てみたいです。",
        "romaji": "Nihon no kimono o kite mitai desu.",
        "en": "I want to try wearing Japanese kimono."
      },
      {
        "jp": "新しい料理を作ってみました。",
        "romaji": "Atarashii ryouri o tsukutte mimashita.",
        "en": "I tried making a new dish."
      },
      {
        "jp": "その靴を履いてみてください。",
        "romaji": "Sono kutsu o haite mite kudasai.",
        "en": "Please try wearing those shoes."
      }
    ],
    "notes": "Can combine with 〜たい (てみたい = want to try doing).",
    "similarGrammar": "〜 ようとする (you to suru)",
    "differenceFromSimilar": "てみる is trying an action to see the outcome; ようとする is attempting an action just as it begins or fails.",
    "commonMistakes": "Do not write 見る in kanji when used as auxiliary verb てみる.",
    "jlptTip": "Common in shopping and dining dialogue situations."
  },
  {
    "id": "n4g_9",
    "grammarNumber": 9,
    "pattern": "〜 てはじめて (te hajimete)",
    "japanese": "〜 てはじめて",
    "hiragana": "〜 てはじめて",
    "romaji": "te hajimete",
    "meaning": "Only after doing... for the first time",
    "explanation": "Expresses that a realization or new state occurred only after a specific experience took place.",
    "structure": "Verb (Te-form) + はじめて",
    "category": "て-form Grammar",
    "important": true,
    "exampleJp": "病気になってはじめて健康の大切さがわかりました。",
    "exampleRomaji": "Byouki ni natte hajimete kenkou no taisetsusa ga wakarimashita.",
    "exampleEn": "Only after falling ill did I realize the importance of health.",
    "examples": [
      {
        "jp": "病気になってはじめて健康の大切さがわかりました。",
        "romaji": "Byouki ni natte hajimete kenkou no taisetsusa ga wakarimashita.",
        "en": "Only after falling ill did I realize the importance of health."
      },
      {
        "jp": "日本へ行ってはじめて本物の歌舞伎を見ました。",
        "romaji": "Nihon e itte hajimete honmono no Kabuki o mimashita.",
        "en": "Only after going to Japan did I watch genuine Kabuki for the first time."
      }
    ],
    "notes": "The main clause usually expresses a realization, discovery, or new condition.",
    "similarGrammar": "〜 てから (te kara)",
    "differenceFromSimilar": "てから simple sequence ('after'); てはじめて emphasizes new realization resulting from the experience.",
    "commonMistakes": "Using dictionary form instead of Te-form before はじめて.",
    "jlptTip": "Often paired with わかる (realize) or 気づく (notice) in the main clause."
  },
  {
    "id": "n4g_10",
    "grammarNumber": 10,
    "pattern": "〜 ないで (naide / naide kudasai)",
    "japanese": "〜 ないで",
    "hiragana": "〜 ないで",
    "romaji": "naide",
    "meaning": "Without doing... / Please don't...",
    "explanation": "Expresses carrying out a main action without performing another action, or forms negative requests (ないでください).",
    "structure": "Verb (Nai-form) + で",
    "category": "ない-form Grammar",
    "important": true,
    "exampleJp": "朝ご飯を食べないで学校へ行きました。",
    "exampleRomaji": "Asagohan o tabenaide gakkou e ikimashita.",
    "exampleEn": "I went to school without eating breakfast.",
    "examples": [
      {
        "jp": "朝ご飯を食べないで学校へ行きました。",
        "romaji": "Asagohan o tabenaide gakkou e ikimashita.",
        "en": "I went to school without eating breakfast."
      },
      {
        "jp": "辞書を使わないで漢字を書きます。",
        "romaji": "Jisho o tsukawanaide kanji o kakimasu.",
        "en": "I write kanji without using a dictionary."
      },
      {
        "jp": "心配しないでください。",
        "romaji": "Shinpai shinai de kudasai.",
        "en": "Please do not worry."
      }
    ],
    "notes": "Suru becomes しないで.",
    "similarGrammar": "〜 ずに (zu ni)",
    "differenceFromSimilar": "ずに is more formal written Japanese; ないで is common in both speech and writing.",
    "commonMistakes": "Confusing 〜なくて (reason) with 〜ないで (without doing).",
    "jlptTip": "Contrast test: ないで means 'without doing action A, did B'."
  },
  {
    "id": "n4g_11",
    "grammarNumber": 11,
    "pattern": "〜 ずに (zu ni)",
    "japanese": "〜 ずに",
    "hiragana": "〜 ずに",
    "romaji": "zu ni",
    "meaning": "Without doing (formal written equivalent of ないで)",
    "explanation": "Formal written grammatical structure indicating an action taken without doing something else.",
    "structure": "Verb (Nai-stem without ない) + ずに (する -> せずに)",
    "category": "ない-form Grammar",
    "important": true,
    "exampleJp": "昨晩は寝ずに勉強しました。",
    "exampleRomaji": "Sakuban wa nezu ni benkyou shimashita.",
    "exampleEn": "Last night I studied without sleeping.",
    "examples": [
      {
        "jp": "昨晩は寝ずに勉強しました。",
        "romaji": "Sakuban wa nezu ni benkyou shimashita.",
        "en": "Last night I studied without sleeping."
      },
      {
        "jp": "何も言わずに部屋を出ていきました。",
        "romaji": "Nani mo iwazu ni heya o dete ikimashita.",
        "en": "He left the room without saying anything."
      }
    ],
    "notes": "CRITICAL IRREGULAR: する becomes せずに (sezuni), NOT suruzu.",
    "similarGrammar": "〜 ないで (naide)",
    "differenceFromSimilar": "ずに is more formal and literary than ないで.",
    "commonMistakes": "Writing しずに instead of せずに for Verb する.",
    "jlptTip": "Irregular する -> ずに is heavily tested in N4 grammar section!"
  },
  {
    "id": "n4g_12",
    "grammarNumber": 12,
    "pattern": "〜 なくてもいいです (nakutemo ii desu)",
    "japanese": "〜 なくてもいいです",
    "hiragana": "〜 なくてもいいです",
    "romaji": "nakutemo ii desu",
    "meaning": "Don't have to / Need not do",
    "explanation": "Expresses absence of obligation or permission not to perform an action.",
    "structure": "Verb (Nai-form without い) + くてもいいです",
    "category": "ない-form Grammar",
    "important": true,
    "exampleJp": "明日は学校へ行かなくてもいいです。",
    "exampleRomaji": "Ashita wa gakkou e ikanakutemo ii desu.",
    "exampleEn": "You don't have to go to school tomorrow.",
    "examples": [
      {
        "jp": "明日は学校へ行かなくてもいいです。",
        "romaji": "Ashita wa gakkou e ikanakutemo ii desu.",
        "en": "You don't have to go to school tomorrow."
      },
      {
        "jp": "全部食べなくてもいいですよ。",
        "romaji": "Zenbu tabenakutemo ii desu yo.",
        "en": "You don't need to eat all of it."
      }
    ],
    "notes": "Can be asked as question: 〜なくてもいいですか (Is it okay if I don't...?).",
    "similarGrammar": "〜 なければならない (nakereba naranai)",
    "differenceFromSimilar": "なくてもいいです is non-obligation; なければならない is strict obligation.",
    "commonMistakes": "Mixing up ないで (without doing) with なくても (even if not).",
    "jlptTip": "Opposite concept of obligation questions."
  },
  {
    "id": "n4g_13",
    "grammarNumber": 13,
    "pattern": "〜 たばかり (ta bakari)",
    "japanese": "〜 たばかり",
    "hiragana": "〜 たばかり",
    "romaji": "ta bakari",
    "meaning": "Just did / Have just finished doing",
    "explanation": "Indicates that an action occurred very recently according to the speaker's subjective perception.",
    "structure": "Verb (Ta-form) + ばかりです",
    "category": "た-form Grammar",
    "important": true,
    "exampleJp": "先月日本に来たばかりです。",
    "exampleRomaji": "Sengetsu Nihon ni kita bakari desu.",
    "exampleEn": "I just arrived in Japan last month.",
    "examples": [
      {
        "jp": "先月日本に来たばかりです。",
        "romaji": "Sengetsu Nihon ni kita bakari desu.",
        "en": "I just arrived in Japan last month."
      },
      {
        "jp": "さっき昼ご飯を食べたばかりなのでお腹がいっぱいです。",
        "romaji": "Sakki hirugohan o tabeta bakari nano de onaka ga ippai desu.",
        "en": "Because I have just eaten lunch moments ago, I am full."
      }
    ],
    "notes": "Can connect to nouns as 〜たばかりの [Noun] (e.g. 買ったばかりの服).",
    "similarGrammar": "〜 たところ (ta tokoro)",
    "differenceFromSimilar": "たところ strictly means moments ago; たばかり can refer to events weeks ago if speaker feels it is fresh.",
    "commonMistakes": "Attaching ばかり to dictionary form verbs. Must use Ta-form!",
    "jlptTip": "Watch out for noun modification: たばかりの + Noun."
  },
  {
    "id": "n4g_14",
    "grammarNumber": 14,
    "pattern": "〜 たまま (ta mama)",
    "japanese": "〜 たまま",
    "hiragana": "〜 たまま",
    "romaji": "ta mama",
    "meaning": "While still in the state of / Leaving unchanged",
    "explanation": "Describes taking a new action while leaving a previous state continuously unchanged.",
    "structure": "Verb (Ta-form) + まま / Noun + のまま",
    "category": "た-form Grammar",
    "important": true,
    "exampleJp": "テレビをつけたまま寝てしまいました。",
    "exampleRomaji": "Terebi o tsuketa mama nete shimaimashita.",
    "exampleEn": "I fell asleep while leaving the TV turned on.",
    "examples": [
      {
        "jp": "テレビをつけたまま寝てしまいました。",
        "romaji": "Terebi o tsuketa mama nete shimaimashita.",
        "en": "I fell asleep while leaving the TV turned on."
      },
      {
        "jp": "靴を履いたまま部屋に入らないでください。",
        "romaji": "Kutsu o haita mama heya ni hairanaide kudasai.",
        "en": "Please do not enter the room with your shoes still on."
      }
    ],
    "notes": "With nouns, use のまま (e.g. 昔のまま = as it was long ago).",
    "similarGrammar": "〜 ながら (nagara)",
    "differenceFromSimilar": "ながら describes two simultaneous active actions; まま describes an action performed while retaining a prior state.",
    "commonMistakes": "Using dictionary form verb before まま. Use Ta-form!",
    "jlptTip": "Classic JLPT N4 question scenario: 窓を開けたまま (window left open)."
  },
  {
    "id": "n4g_15",
    "grammarNumber": 15,
    "pattern": "〜 可能形 (Potential Form: 〜れる / 〜られる)",
    "japanese": "〜 可能形 (〜れる / 〜られる)",
    "hiragana": "〜 かのうけい",
    "romaji": "kanoukei (~reru / ~rareru)",
    "meaning": "Can do / Able to do",
    "explanation": "Expresses ability or possibility to perform an action.",
    "structure": "Group 1: u -> eru (話せる) | Group 2: ru -> rareru (食べられる) | Group 3: できる / 来られる (こられる)",
    "category": "Potential Form",
    "important": true,
    "exampleJp": "私は漢字を500字読むことができます/読めます。",
    "exampleRomaji": "Watashi wa kanji o gohyakuji yomemasu.",
    "exampleEn": "I can read 500 kanji characters.",
    "examples": [
      {
        "jp": "私は漢字を500字読めます。",
        "romaji": "Watashi wa kanji o gohyakuji yomemasu.",
        "en": "I can read 500 kanji characters."
      },
      {
        "jp": "お刺身が食べられますか。",
        "romaji": "Osashimi ga taberareru desu ka.",
        "en": "Can you eat raw fish?"
      },
      {
        "jp": "一人で病院へ行けますか。",
        "romaji": "Hitori de byouin e ikemasu ka.",
        "en": "Can you go to the hospital alone?"
      }
    ],
    "notes": "Direct object particle を usually changes to が with potential verbs.",
    "similarGrammar": "〜 ことができる (koto ga dekimasu)",
    "differenceFromSimilar": "Verb potential form is more natural and shorter than ことができる in spoken Japanese.",
    "commonMistakes": "Forgetting that Group 1 verbs change final vowel sound to 'e' column + ru (書く -> 書ける).",
    "jlptTip": "Watch particle shift: 漢字を書く -> 漢字が書ける."
  },
  {
    "id": "n4g_16",
    "grammarNumber": 16,
    "pattern": "〜 ようになる (you ni naru)",
    "japanese": "〜 ようになる",
    "hiragana": "〜 ようになる",
    "romaji": "you ni naru",
    "meaning": "Become able to / Reach a point where...",
    "explanation": "Expresses a gradual change in state, capability, or habit over time.",
    "structure": "Verb (Potential/Non-volitional Dict) + ようになる",
    "category": "Potential Form",
    "important": true,
    "exampleJp": "毎日練習して、日本語が話せるようになりました。",
    "exampleRomaji": "Mainichi renshuu shite, Nihongo ga hanaseru you ni narimashita.",
    "exampleEn": "Through practicing every day, I became able to speak Japanese.",
    "examples": [
      {
        "jp": "毎日練習して、日本語が話せるようになりました。",
        "romaji": "Mainichi renshuu shite, Nihongo ga hanaseru you ni narimashita.",
        "en": "Through practicing every day, I became able to speak Japanese."
      },
      {
        "jp": "最近、刺身が食べられるようになりました。",
        "romaji": "Saikin, sashimi ga taberareru you ni narimashita.",
        "en": "Recently, I have become able to eat sashimi."
      }
    ],
    "notes": "Usually used with potential form of verbs to indicate acquired ability.",
    "similarGrammar": "〜 ことになる (koto ni naru)",
    "differenceFromSimilar": "ようになる indicates state change/ability; ことになる indicates external decision/rule.",
    "commonMistakes": "Using volitional form before ようになる. Use Potential or Dict form!",
    "jlptTip": "Frequently tested: Potential Verb + ようになる."
  },
  {
    "id": "n4g_17",
    "grammarNumber": 17,
    "pattern": "〜 受身形 (Passive Form: 〜れる / 〜られる)",
    "japanese": "〜 受身形 (〜れる / 〜られる)",
    "hiragana": "〜 うけみけい",
    "romaji": "ukemikei (~reru / ~rareru)",
    "meaning": "Be done to (Passive action / Suffering passive)",
    "explanation": "Expresses that the subject receives an action, or suffers inconvenience caused by someone else's action.",
    "structure": "Group 1: a-stem + れる (書かれる) | Group 2: ru -> られる (褒められる) | Group 3: される / 来られる (こられる)",
    "category": "Passive Form",
    "important": true,
    "exampleJp": "先生に褒められました。",
    "exampleRomaji": "Sensei ni homeramashita.",
    "exampleEn": "I was praised by my teacher.",
    "examples": [
      {
        "jp": "先生に褒められました。",
        "romaji": "Sensei ni homeramashita.",
        "en": "I was praised by my teacher."
      },
      {
        "jp": "雨に降られて濡れてしまいました。",
        "romaji": "Ame ni furarete nurete shimaimashita.",
        "en": "I got rained on and ended up soaked (suffering passive)."
      },
      {
        "jp": "知らない人に足を踏まれました。",
        "romaji": "Shiranai hito ni ashi o fumaramashita.",
        "en": "My foot was stepped on by a stranger."
      }
    ],
    "notes": "The agent/doer of action is marked with particle に.",
    "similarGrammar": "〜 使役形 (Causative Form)",
    "differenceFromSimilar": "Passive is receiving action (に...される); Causative is making/letting someone act (に...させる).",
    "commonMistakes": "Using を for the agent of passive action instead of に.",
    "jlptTip": "Agent is marked by に: [Subject] は [Agent] に [Passive Verb]."
  },
  {
    "id": "n4g_18",
    "grammarNumber": 18,
    "pattern": "〜 使役形 (Causative Form: 〜させる)",
    "japanese": "〜 使役形 (〜させる)",
    "hiragana": "〜 しえきけい",
    "romaji": "shiekikei (~saseru)",
    "meaning": "Make / Let someone do",
    "explanation": "Expresses forcing someone to perform an action or giving permission for someone to do an action.",
    "structure": "Group 1: a-stem + せる (行かせる) | Group 2: ru -> させる (食べさせる) | Group 3: させる / 来させる (こさせる)",
    "category": "Causative / Causative-related N4 patterns",
    "important": true,
    "exampleJp": "母は子供に野菜を食べさせます。",
    "exampleRomaji": "Haha wa kodomo ni yasai o tabesasemasu.",
    "exampleEn": "The mother makes/lets her child eat vegetables.",
    "examples": [
      {
        "jp": "母は子供に野菜を食べさせます。",
        "romaji": "Haha wa kodomo ni yasai o tabesasemasu.",
        "en": "The mother makes her child eat vegetables."
      },
      {
        "jp": "先生は学生に作文を書かせました。",
        "romaji": "Sensei wa gakusei ni sakubun o kakasemashita.",
        "en": "The teacher made the students write an essay."
      }
    ],
    "notes": "The person coerced or permitted is marked by に (transitive) or を (intransitive).",
    "similarGrammar": "〜 させてもらう (Causative + Morau)",
    "differenceFromSimilar": "使役形 is making/letting; させてもらう is asking for permission to do something yourself.",
    "commonMistakes": "Confusing Causative 〜させる with Passive 〜られる.",
    "jlptTip": "Look for causative request formula: 〜させてください (Please let me do)."
  },
  {
    "id": "n4g_19",
    "grammarNumber": 19,
    "pattern": "〜 させられる (Causative-Passive Form)",
    "japanese": "〜 させられる (使役受身)",
    "hiragana": "〜 させられる",
    "romaji": "saserareru",
    "meaning": "Be forced to do (against one's will)",
    "explanation": "Expresses being coerced or made to perform an unwanted action by someone else.",
    "structure": "Group 1: a-stem + される (買わされる/書かされる) | Group 2: ru -> させられる (食べさせられる) | Group 3: させられる / こさせられる",
    "category": "Causative / Causative-related N4 patterns",
    "important": true,
    "exampleJp": "子供の時、母に毎日野菜を食べさせられました。",
    "exampleRomaji": "Kodomo no toki, haha ni mainichi yasai o tabesaseraremashita.",
    "exampleEn": "When I was a child, I was forced to eat vegetables every day by my mother.",
    "examples": [
      {
        "jp": "子供の時、母に毎日野菜を食べさせられました。",
        "romaji": "Kodomo no toki, haha ni mainichi yasai o tabesaseraremashita.",
        "en": "When I was a child, I was forced to eat vegetables every day by my mother."
      },
      {
        "jp": "昨日、友達に2時間も待たされました。",
        "romaji": "Kinou, tomodachi ni nijikan mo matasaremashita.",
        "en": "Yesterday, I was made to wait for 2 hours by my friend."
      }
    ],
    "notes": "Group 1 verbs shorten 〜させられる to 〜される (e.g. 待たされる, 書かされる) except for verbs ending in す.",
    "similarGrammar": "〜 受身形 (Passive)",
    "differenceFromSimilar": "Passive is being acted upon; Causative-Passive specifically conveys being coerced to perform an action.",
    "commonMistakes": "Failing to recognize shortened Group 1 form (待たされる = 待たさせられる).",
    "jlptTip": "High frequency JLPT N4 exam topic!"
  },
  {
    "id": "n4g_20",
    "grammarNumber": 20,
    "pattern": "〜 てあげる / てもらう / てくれる",
    "japanese": "〜 てあげる / てもらう / てくれる",
    "hiragana": "〜 てあげる / てもらう / てくれる",
    "romaji": "te ageru / te morau / te kureru",
    "meaning": "Do favor for / Receive favor / Have someone do for me",
    "explanation": "Expresses exchange of helpful actions and favors between speaker and others.",
    "structure": "Verb (Te-form) + あげる / もらう / くれる",
    "category": "Giving & Receiving",
    "important": true,
    "exampleJp": "親切な人に道を教えてもらいました。",
    "exampleRomaji": "Shinsetsu na hito ni michi o oshiete moraimashita.",
    "exampleEn": "I had a kind person guide me the way (received favor).",
    "examples": [
      {
        "jp": "親切な人に道を教えてもらいました。",
        "romaji": "Shinsetsu na hito ni michi o oshiete moraimashita.",
        "en": "I had a kind person guide me the way (received favor)."
      },
      {
        "jp": "友達が引っ越しを手伝ってくれました。",
        "romaji": "Tomodachi ga hikkoshi o tetsudatte kuremashita.",
        "en": "My friend helped me move (gave me a favor)."
      },
      {
        "jp": "妹に英語を教えてあげました。",
        "romaji": "Imouto ni Eigo o oshiete agemashita.",
        "en": "I taught English to my younger sister."
      }
    ],
    "notes": "てくれる = someone does favor for ME; てあげる = I do favor for someone; てもらう = I receive favor from someone.",
    "similarGrammar": "〜 ていただく / 〜 てくださる (Keigo polite forms)",
    "differenceFromSimilar": "ていただく/てくださる are honorific/humble versions of てもらう/てくれる.",
    "commonMistakes": "Confusing てくれる (someone to me) with てあげる (me to someone).",
    "jlptTip": "Focus on the subject of the sentence: X が 私に 〜てくれた vs 私が Xに 〜てもらった."
  },
  {
    "id": "n4g_21",
    "grammarNumber": 21,
    "pattern": "〜 ほうがいいです (hou ga ii desu)",
    "japanese": "〜 ほうがいいです",
    "hiragana": "〜 ほうがいいです",
    "romaji": "hou ga ii desu",
    "meaning": "Had better do / It's recommended to",
    "explanation": "Used to give advice or make strong suggestions to someone.",
    "structure": "Verb (Ta-form) + ほうがいい (Affirmative) / Verb (Nai-form) + ほうがいい (Negative)",
    "category": "Requests & Advice",
    "important": true,
    "exampleJp": "風邪の時は早く寝たほうがいいです。",
    "exampleRomaji": "Kaze no toki wa hayaku neta hou ga ii desu.",
    "exampleEn": "When you have a cold, you had better sleep early.",
    "examples": [
      {
        "jp": "風邪の時は早く寝たほうがいいです。",
        "romaji": "Kaze no toki wa hayaku neta hou ga ii desu.",
        "en": "When you have a cold, you had better sleep early."
      },
      {
        "jp": "そんなに甘いものを食べないほうがいいですよ。",
        "romaji": "Sonna ni amai mono o tabenai hou ga ii desu yo.",
        "en": "You had better not eat so much sweet food."
      }
    ],
    "notes": "Affirmative advice uses Verb TA-FORM; Negative advice uses Verb NAI-FORM.",
    "similarGrammar": "〜 たらどうですか (tara dou desu ka)",
    "differenceFromSimilar": "ほうがいい is direct advice ('you should'); たらどうですか is a gentle recommendation ('how about...?').",
    "commonMistakes": "Using Dictionary Form for affirmative advice instead of Ta-form. Use 食べたほう, NOT 食べるほう!",
    "jlptTip": "Remember Ta-form for affirmative advice: 薬を飲んだほうがいい."
  },
  {
    "id": "n4g_22",
    "grammarNumber": 22,
    "pattern": "〜 てはいけません (te wa ikemasen)",
    "japanese": "〜 てはいけません",
    "hiragana": "〜 てはいけません",
    "romaji": "te wa ikemasen",
    "meaning": "Must not / Forbidden to do",
    "explanation": "Expresses strict prohibition or rules against doing an action.",
    "structure": "Verb (Te-form) + はいけません",
    "category": "Permission & Prohibition",
    "important": true,
    "exampleJp": "ここで写真を撮ってはいけません。",
    "exampleRomaji": "Koko de shashin o totte wa ikemasen.",
    "exampleEn": "You must not take photos here.",
    "examples": [
      {
        "jp": "ここで写真を撮ってはいけません。",
        "romaji": "Koko de shashin o totte wa ikemasen.",
        "en": "You must not take photos here."
      },
      {
        "jp": "テスト中に隣の人と話してはいけません。",
        "romaji": "Tesuto chuu ni tonari no hito to hanashite wa ikemasen.",
        "en": "You must not talk to the person next to you during the test."
      }
    ],
    "notes": "In casual speech, 〜ては contracts to 〜ちゃ (っちゃいけない), 〜では to 〜じゃ (じゃいけない).",
    "similarGrammar": "〜 てはならない (te wa naranai)",
    "differenceFromSimilar": "てはならない is formal written/official prohibition; てはいけません is standard polite spoken prohibition.",
    "commonMistakes": "Pronouncing は as 'ha' instead of 'wa' in てはいけません.",
    "jlptTip": "Casual listening form: 〜ちゃいけない / 〜じゃいけない."
  },
  {
    "id": "n4g_23",
    "grammarNumber": 23,
    "pattern": "〜 なければなりません (nakereba narimasen)",
    "japanese": "〜 なければなりません",
    "hiragana": "〜 なければなりません",
    "romaji": "nakereba narimasen",
    "meaning": "Must do / Have to do",
    "explanation": "Expresses strong obligation, duty, or necessity.",
    "structure": "Verb (Nai-stem without い) + なければなりません / なければいけません",
    "category": "Obligation & Necessity",
    "important": true,
    "exampleJp": "毎日漢字を覚えなければなりません。",
    "exampleRomaji": "Mainichi kanji o oboenakereba narimasen.",
    "exampleEn": "I must memorize kanji every day.",
    "examples": [
      {
        "jp": "毎日漢字を覚えなければなりません。",
        "romaji": "Mainichi kanji o oboenakereba narimasen.",
        "en": "I must memorize kanji every day."
      },
      {
        "jp": "パスポートを見せなければいけません。",
        "romaji": "Pasupooto o misenakereba ikemasen.",
        "en": "You have to show your passport."
      }
    ],
    "notes": "Casual spoken forms: 〜なきゃ (nakya) or 〜なくちゃ (nakucha).",
    "similarGrammar": "〜 ないといけない (nai to ikenai)",
    "differenceFromSimilar": "なければなりません is polite and standard; ないといけない is casual/conversational.",
    "commonMistakes": "Forgetting to drop final い from nai-form before adding なければなりません.",
    "jlptTip": "Listen for casual 〜なきゃ in conversational audio passages."
  },
  {
    "id": "n4g_24",
    "grammarNumber": 24,
    "pattern": "〜 つもりです (tsumori desu)",
    "japanese": "〜 つもりです",
    "hiragana": "〜 つもりです",
    "romaji": "tsumori desu",
    "meaning": "Plan to / Intend to",
    "explanation": "Expresses speaker's definite plan or intention to perform (or not perform) an action.",
    "structure": "Verb (Dict Form) + つもりです (Affirmative) / Verb (Nai Form) + つもりです (Negative)",
    "category": "Desire & Intention",
    "important": true,
    "exampleJp": "来年日本へ行くつもりです。",
    "exampleRomaji": "Rainen Nihon e iku tsumori desu.",
    "exampleEn": "I plan to go to Japan next year.",
    "examples": [
      {
        "jp": "来年日本へ行くつもりです。",
        "romaji": "Rainen Nihon e iku tsumori desu.",
        "en": "I plan to go to Japan next year."
      },
      {
        "jp": "タバコはもう吸わないつもりです。",
        "romaji": "Tabako wa mou suwanai tsumori desu.",
        "en": "I intend not to smoke cigarettes anymore."
      }
    ],
    "notes": "For third-person plans, use 〜つもりらしいです or 〜つもりだと言っている.",
    "similarGrammar": "〜 予定です (yotei desu)",
    "differenceFromSimilar": "つもり expresses personal inner intention; 予定 refers to scheduled official appointments/plans.",
    "commonMistakes": "Directly asking a superior '〜つもりですか' can sound overly direct.",
    "jlptTip": "Negative plan is formed with Verb Nai-form + つもりです."
  },
  {
    "id": "n4g_25",
    "grammarNumber": 25,
    "pattern": "〜 意志形 + と思っています (Volitional + to omotte imasu)",
    "japanese": "〜 意志形 + と思っています",
    "hiragana": "〜 いしけい + とおもっています",
    "romaji": "Volitional + to omotte imasu",
    "meaning": "Thinking of doing / Intending to",
    "explanation": "Expresses an intention that the speaker has been contemplating for some time.",
    "structure": "Verb (Volitional Form) + と思っています",
    "category": "Desire & Intention",
    "important": true,
    "exampleJp": "来年、自分の会社を作ろうと思っています。",
    "exampleRomaji": "Rainen, jibun no kaisha o tsukurou to omotte imasu.",
    "exampleEn": "I am thinking of starting my own company next year.",
    "examples": [
      {
        "jp": "来年、自分の会社を作ろうと思っています。",
        "romaji": "Rainen, jibun no kaisha o tsukurou to omotte imasu.",
        "en": "I am thinking of starting my own company next year."
      },
      {
        "jp": "週末に新しいパソコンを買おうと思っています。",
        "romaji": "Shuumatsu ni atarashii pasokon o kaou to omotte imasu.",
        "en": "I am thinking of buying a new laptop on the weekend."
      }
    ],
    "notes": "と心に決めた (decided in mind) state over time.",
    "similarGrammar": "〜 と思います (to omoimasu)",
    "differenceFromSimilar": "〜と思う is an instant thought; 〜と思っている indicates an intention held continuously over a period.",
    "commonMistakes": "Using Dictionary Form instead of Volitional form before と思っています.",
    "jlptTip": "Volitional form (〜おう/〜よう) is required before と思っています."
  },
  {
    "id": "n4g_26",
    "grammarNumber": 26,
    "pattern": "〜 たがります (tagarimasu)",
    "japanese": "〜 たがります",
    "hiragana": "〜 たがります",
    "romaji": "tagarimasu",
    "meaning": "Shows sign of wanting to... (Third person desire)",
    "explanation": "Used to describe observable desires or inclinations of a third person.",
    "structure": "Verb Stem + たがる / たがっている (Noun: 欲しがる)",
    "category": "Desire & Intention",
    "important": true,
    "exampleJp": "子供は外へ遊びに行きたがっています。",
    "exampleRomaji": "Kodomo wa soto e asobi ni ikitagatte imasu.",
    "exampleEn": "The child is showing signs of wanting to go out and play.",
    "examples": [
      {
        "jp": "子供は外へ遊びに行きたがっています。",
        "romaji": "Kodomo wa soto e asobi ni ikitagatte imasu.",
        "en": "The child is showing signs of wanting to go out and play."
      },
      {
        "jp": "弟は新しいゲームを欲しがっています。",
        "romaji": "Otouto wa atarashii geemu o hoshigatte imasu.",
        "en": "My younger brother wants a new video game."
      }
    ],
    "notes": "Drop い from 〜たい and add 〜たがる.",
    "similarGrammar": "〜 たいです (tai desu)",
    "differenceFromSimilar": "〜たい expresses speaker's own desire; 〜たがる describes third person's outward desire.",
    "commonMistakes": "Using 〜たいです for third person statements without quoting.",
    "jlptTip": "Look for 3rd person subjects (彼, 子供, 弟)."
  },
  {
    "id": "n4g_27",
    "grammarNumber": 27,
    "pattern": "〜 ことにする (koto ni suru)",
    "japanese": "〜 ことにする",
    "hiragana": "〜 ことにする",
    "romaji": "koto ni suru",
    "meaning": "Decide to do (Personal decision)",
    "explanation": "Expresses a decision made by oneself to perform (or not perform) an action.",
    "structure": "Verb (Dict Form / Nai Form) + ことにする (ことにしました)",
    "category": "Plans & Decisions",
    "important": true,
    "exampleJp": "健康のために毎日ランニングをすることにしました。",
    "exampleRomaji": "Kenkou no tame ni mainichi ranningu o suru koto ni shimashita.",
    "exampleEn": "I have decided to go running every day for my health.",
    "examples": [
      {
        "jp": "健康のために毎日ランニングをすることにしました。",
        "romaji": "Kenkou no tame ni mainichi ranningu o suru koto ni shimashita.",
        "en": "I have decided to go running every day for my health."
      },
      {
        "jp": "お酒をやめることにしました。",
        "romaji": "Osake o yameru koto ni shimashita.",
        "en": "I decided to quit alcohol."
      }
    ],
    "notes": "ことにしている means making it a personal habit/rule.",
    "similarGrammar": "〜 ことになる (koto ni naru)",
    "differenceFromSimilar": "ことにする is your own decision; ことになる is an external/group decision or rule.",
    "commonMistakes": "Using Ta-form before ことにする. Use Dict form or Nai form!",
    "jlptTip": "Decided habit = ことにしている."
  },
  {
    "id": "n4g_28",
    "grammarNumber": 28,
    "pattern": "〜 ことになる (koto ni naru)",
    "japanese": "〜 ことになる",
    "hiragana": "〜 ことになる",
    "romaji": "koto ni naru",
    "meaning": "It has been decided that... (External decision / Rule)",
    "explanation": "Expresses that a decision or arrangement has been made by an external authority, organization, or circumstance.",
    "structure": "Verb (Dict / Nai Form) + ことになる (ことになりました)",
    "category": "Plans & Decisions",
    "important": true,
    "exampleJp": "来月東京へ転勤することになりました。",
    "exampleRomaji": "Raigetsu Tokyo e tenkin suru koto ni narimashita.",
    "exampleEn": "It has been decided that I will transfer to Tokyo next month.",
    "examples": [
      {
        "jp": "来月東京へ転勤することになりました。",
        "romaji": "Raigetsu Tokyo e tenkin suru koto ni narimashita.",
        "en": "It has been decided that I will transfer to Tokyo next month."
      },
      {
        "jp": "法律が変わることになりました。",
        "romaji": "Houritsu ga kawaru koto ni narimashita.",
        "en": "It has been arranged that the law will change."
      }
    ],
    "notes": "ことになっている expresses a standing rule, policy, or regulation.",
    "similarGrammar": "〜 ことにする (koto ni suru)",
    "differenceFromSimilar": "ことになる removes individual personal agency, presenting the outcome as an established decision.",
    "commonMistakes": "Confusing ことにする (I decided) with ことになる (It was decided).",
    "jlptTip": "Official job transfers & school rules always use ことになった / ことになっている."
  },
  {
    "id": "n4g_29",
    "grammarNumber": 29,
    "pattern": "〜 と (to conditional)",
    "japanese": "〜 と",
    "hiragana": "〜 と",
    "romaji": "to conditional",
    "meaning": "When / Whenever / If (Natural result / Automatic sequence)",
    "explanation": "Expresses an inevitable natural consequence, habitual cause-and-effect, or unexpected discovery.",
    "structure": "Verb (Dict Form) + と",
    "category": "Conditionals",
    "important": true,
    "exampleJp": "春になると桜が咲きます。",
    "exampleRomaji": "Haru ni naru to sakura ga sakimasu.",
    "exampleEn": "When spring comes, cherry blossoms bloom.",
    "examples": [
      {
        "jp": "春になると桜が咲きます。",
        "romaji": "Haru ni naru to sakura ga sakimasu.",
        "en": "When spring comes, cherry blossoms bloom."
      },
      {
        "jp": "このボタンを押すと、水が出ます。",
        "romaji": "Kono botan o osu to, mizu ga demasu.",
        "en": "If you press this button, water comes out."
      }
    ],
    "notes": "Cannot be followed by requests, commands, invitations, or personal volitions in the second clause.",
    "similarGrammar": "〜 たら (tara)",
    "differenceFromSimilar": "と is automatic/natural result; たら can be followed by personal requests and commands.",
    "commonMistakes": "Putting requests (〜てください) after 〜と.",
    "jlptTip": "Machines & natural phenomena always use Verb (Dict) + と."
  },
  {
    "id": "n4g_30",
    "grammarNumber": 30,
    "pattern": "〜 ば (ba conditional)",
    "japanese": "〜 ば",
    "hiragana": "〜 ば",
    "romaji": "ba conditional",
    "meaning": "If... (Hypothetical condition)",
    "explanation": "Expresses a hypothetical condition necessary for a outcome to take place.",
    "structure": "Group 1: u -> e + ba (行けば) | Group 2: ru -> reba (食べれば) | Group 3: すれば / 来れば (すれば/すれば)",
    "category": "Conditionals",
    "important": true,
    "exampleJp": "安ければ買います。",
    "exampleRomaji": "Yasukereba kaimasu.",
    "exampleEn": "If it is cheap, I will buy it.",
    "examples": [
      {
        "jp": "安ければ買います。",
        "romaji": "Yasukereba kaimasu.",
        "en": "If it is cheap, I will buy it."
      },
      {
        "jp": "薬を飲めば治ります。",
        "romaji": "Kusuri o nomeba narimasu.",
        "en": "If you take medicine, you will recover."
      }
    ],
    "notes": "I-adj: drop い + ければ (良ければ); Na-adj / Noun: なら / であれば.",
    "similarGrammar": "〜 たら (tara)",
    "differenceFromSimilar": "ば focuses on general logical prerequisite; たら focuses on specific temporal realization.",
    "commonMistakes": "Misconjugating Group 1 verbs (行けば, NOT 行くば).",
    "jlptTip": "Proverb pattern: 〜ば〜ほど (The more... the more...)."
  },
  {
    "id": "n4g_31",
    "grammarNumber": 31,
    "pattern": "〜 たら (tara conditional)",
    "japanese": "〜 たら",
    "hiragana": "〜 たら",
    "romaji": "tara conditional",
    "meaning": "If / When (upon doing)",
    "explanation": "The most versatile Japanese conditional, used for hypothetical situations and temporal sequences ('once/when').",
    "structure": "Verb (Ta-form) + ら / Noun, Na-adj + だったら / I-adj + かったら",
    "category": "Conditionals",
    "important": true,
    "exampleJp": "東京に着いたら、すぐに電話をしてください。",
    "exampleRomaji": "Tokyo ni tsuita ra, sugu ni denwa o shite kudasai.",
    "exampleEn": "When/If you arrive in Tokyo, please call me immediately.",
    "examples": [
      {
        "jp": "東京に着いたら、すぐに電話をしてください。",
        "romaji": "Tokyo ni tsuita ra, sugu ni denwa o shite kudasai.",
        "en": "When/If you arrive in Tokyo, please call me immediately."
      },
      {
        "jp": "時間がなかったら、明日やりましょう。",
        "romaji": "Jikan ga nakattara, ashita yarimashou.",
        "en": "If there is no time, let's do it tomorrow."
      }
    ],
    "notes": "Can be freely followed by requests (〜てください), invitations, and commands.",
    "similarGrammar": "〜 と (to)",
    "differenceFromSimilar": "たら permits requests in clause 2; と strictly forbids them.",
    "commonMistakes": "Using dictionary form instead of Ta-form before ら.",
    "jlptTip": "When in doubt on JLPT conditional questions, 〜たら is most flexible!"
  },
  {
    "id": "n4g_32",
    "grammarNumber": 32,
    "pattern": "〜 なら (nara conditional)",
    "japanese": "〜 なら",
    "hiragana": "〜 なら",
    "romaji": "nara conditional",
    "meaning": "If it is the case that... / Speaking of...",
    "explanation": "Takes up information raised by the listener or context and bases advice, suggestions, or comments upon it.",
    "structure": "Noun / Plain Form + なら",
    "category": "Conditionals",
    "important": true,
    "exampleJp": "日本へ行くなら、京都へ行ったほうがいいですよ。",
    "exampleRomaji": "Nihon e iku nara, Kyoto e itta hou ga ii desu yo.",
    "exampleEn": "If you are going to Japan, you had better go to Kyoto.",
    "examples": [
      {
        "jp": "日本へ行くなら、京都へ行ったほうがいいですよ。",
        "romaji": "Nihon e iku nara, Kyoto e itta hou ga ii desu yo.",
        "en": "If you are going to Japan, you had better go to Kyoto."
      },
      {
        "jp": "明日雨なら、旅行は中止です。",
        "romaji": "Ashita ame nara, ryokou wa chuushi desu.",
        "en": "If it rains tomorrow, the trip is cancelled."
      }
    ],
    "notes": "Noun attaches directly to なら without だ.",
    "similarGrammar": "〜 たら (tara)",
    "differenceFromSimilar": "なら can refer to a future event that hasn't happened yet in clause 1; たら requires clause 1 to complete first.",
    "commonMistakes": "Adding だ before なら after Nouns (e.g. ×雨だなら).",
    "jlptTip": "Used for giving recommendations based on someone's statement."
  },
  {
    "id": "n4g_33",
    "grammarNumber": 33,
    "pattern": "〜 のに (noni)",
    "japanese": "〜 のに",
    "hiragana": "〜 のに",
    "romaji": "noni",
    "meaning": "Even though / Despite / Although (disappointment)",
    "explanation": "Connects two clauses where the second clause result contradicts reasonable expectation, carrying nuance of surprise or dissatisfaction.",
    "structure": "Verb Plain / I-adj + のに | Na-adj / Noun + なのに",
    "category": "Contrast",
    "important": true,
    "exampleJp": "一生懸命練習したのに、試合に負けてしまいました。",
    "exampleRomaji": "Isshoukenmei renshuu shita noni, shiai ni makete shimaimashita.",
    "exampleEn": "Even though I practiced hard, we lost the match.",
    "examples": [
      {
        "jp": "一生懸命練習したのに、試合に負けてしまいました。",
        "romaji": "Isshoukenmei renshuu shita noni, shiai ni makete shimaimashita.",
        "en": "Even though I practiced hard, we lost the match."
      },
      {
        "jp": "約束したのに、彼は来ませんでした。",
        "romaji": "Yakusoku shita noni, kare wa kimasen deshita.",
        "en": "Even though we made a promise, he didn't come."
      }
    ],
    "notes": "Noun and Na-adjectives require な before のに (e.g. 日曜日なのに).",
    "similarGrammar": "〜 が / 〜 けど (ga / kedo)",
    "differenceFromSimilar": "のに carries strong emotional dissatisfaction or complaint; が/けど are neutral contrast conjunctions.",
    "commonMistakes": "Forgetting な after Nouns or Na-adjectives before のに.",
    "jlptTip": "High frequency JLPT test item: Noun + なのに."
  },
  {
    "id": "n4g_34",
    "grammarNumber": 34,
    "pattern": "〜 ので (node)",
    "japanese": "〜 ので",
    "hiragana": "〜 ので",
    "romaji": "node",
    "meaning": "Because / Since (Polite objective cause)",
    "explanation": "States an objective reason or cause in a polite, soft manner.",
    "structure": "Verb Plain / I-adj + ので | Na-adj / Noun + なので",
    "category": "Reasons & Causes",
    "important": true,
    "exampleJp": "気分が悪いので、早退してもいいですか。",
    "exampleRomaji": "Kibun ga warui node, soutai shite mo ii desu ka.",
    "exampleEn": "Because I feel unwell, may I leave early?",
    "examples": [
      {
        "jp": "気分が悪いので、早退してもいいですか。",
        "romaji": "Kibun ga warui node, soutai shite mo ii desu ka.",
        "en": "Because I feel unwell, may I leave early?"
      },
      {
        "jp": "雨なので、試合は延期になりました。",
        "romaji": "Ame na node, shiai wa enki ni narimashita.",
        "en": "Since it is raining, the match was postponed."
      }
    ],
    "notes": "Requires な after Nouns and Na-adjectives.",
    "similarGrammar": "〜 から (kara)",
    "differenceFromSimilar": "ので is objective and polite; から is subjective and sounds stronger.",
    "commonMistakes": "Forgetting な with Nouns before ので.",
    "jlptTip": "Preferred when asking polite permission in business/school contexts."
  },
  {
    "id": "n4g_35",
    "grammarNumber": 35,
    "pattern": "〜 うちに (uchi ni)",
    "japanese": "〜 うちに",
    "hiragana": "〜 うちに",
    "romaji": "uchi ni",
    "meaning": "While still... / Before state changes",
    "explanation": "Expresses performing an action while a specific temporary condition still exists, before it changes.",
    "structure": "Verb (Te-iru/Nai) + うちに | I-adj + うちに | Na-adj + なうちに | Noun + のうちに",
    "category": "Time Expressions",
    "important": true,
    "exampleJp": "温かいうちに食べてください。",
    "exampleRomaji": "Atatakai uchi ni tabete kudasai.",
    "exampleEn": "Please eat while it is still warm.",
    "examples": [
      {
        "jp": "温かいうちに食べてください。",
        "romaji": "Atatakai uchi ni tabete kudasai.",
        "en": "Please eat while it is still warm."
      },
      {
        "jp": "雨が降らないうちに帰りましょう。",
        "romaji": "Ame ga furanai uchi ni kaerimashou.",
        "en": "Let's go home before it starts raining."
      }
    ],
    "notes": "Verb (Nai-form) + うちに = 'before [action] happens'.",
    "similarGrammar": "〜 あいだに (aida ni)",
    "differenceFromSimilar": "うちに emphasizes urgency before state expires; あいだに simply marks a time interval.",
    "commonMistakes": "Using past tense verb before うちに.",
    "jlptTip": "Listen for 日本にいるうちに (while still in Japan)."
  },
  {
    "id": "n4g_36",
    "grammarNumber": 36,
    "pattern": "〜 あいだ / あいだに (aida / aida ni)",
    "japanese": "〜 あいだ / あいだに",
    "hiragana": "〜 あいだ / あいだに",
    "romaji": "aida / aida ni",
    "meaning": "While / During (Continuous vs Single event)",
    "explanation": "あいだ = continuous action throughout period; あいだに = single momentary event within period.",
    "structure": "Verb (Te-iru Form) + あいだ(に) / Noun + のあいだ(に)",
    "category": "Time Expressions",
    "important": true,
    "exampleJp": "留守の間に泥棒が入りました。",
    "exampleRomaji": "Rusu no aida ni dorobou ga hairimashita.",
    "exampleEn": "While I was away, a thief entered.",
    "examples": [
      {
        "jp": "留守の間に泥棒が入りました。",
        "romaji": "Rusu no aida ni dorobou ga hairimashita.",
        "en": "While I was away, a thief entered (single event = あいだに)."
      },
      {
        "jp": "子供が寝ている間、本を読んでいました。",
        "romaji": "Kodomo ga nete iru aida, hon o yonde imashita.",
        "en": "While the child was sleeping, I was reading books (continuous = あいだ)."
      }
    ],
    "notes": "あいだ (no に) = continuous duration throughout; あいだに (with に) = one-time event.",
    "similarGrammar": "〜 うちに (uchi ni)",
    "differenceFromSimilar": "あいだ clearly defines an objective duration between two time boundaries.",
    "commonMistakes": "Omitting に when describing a single instantaneous event during a period.",
    "jlptTip": "Crucial JLPT test point: Check if main clause is continuous or instantaneous!"
  },
  {
    "id": "n4g_37",
    "grammarNumber": 37,
    "pattern": "〜 そうです (Look like / Appearances: 〜そう)",
    "japanese": "〜 そうです (様態)",
    "hiragana": "〜 そうです",
    "romaji": "sou desu (appearance)",
    "meaning": "Looks like / Seems about to",
    "explanation": "Expresses visual conjecture based on immediate direct observation.",
    "structure": "Verb Stem + そうです | I-adj (drop い) + そうです | Na-adj + そうです",
    "category": "Similarity",
    "important": true,
    "exampleJp": "今にも雨が降りそうです。",
    "exampleRomaji": "Ima ni mo ame ga furi sou desu.",
    "exampleEn": "It looks like it's about to rain at any moment.",
    "examples": [
      {
        "jp": "今にも雨が降りそうです。",
        "romaji": "Ima ni mo ame ga furi sou desu.",
        "en": "It looks like it's about to rain at any moment."
      },
      {
        "jp": "このケーキはおいしそうです。",
        "romaji": "Kono keeki wa oishisou desu.",
        "en": "This cake looks delicious."
      }
    ],
    "notes": "Irregulars: いい -> よさそう; ない -> なさそう.",
    "similarGrammar": "〜 そうです (Hearsay)",
    "differenceFromSimilar": "Conjecture drops い/stem (おいしそう); Hearsay keeps full plain form (おいしいそうです).",
    "commonMistakes": "Saying おいしいそうです when you mean 'it looks delicious'!",
    "jlptTip": "High frequency test distractor: おいしそう (looks delicious) vs おいしいそう (I heard it's delicious)."
  },
  {
    "id": "n4g_38",
    "grammarNumber": 38,
    "pattern": "〜 そうです (Hearsay: 〜そうだ)",
    "japanese": "〜 そうです (伝聞)",
    "hiragana": "〜 そうです",
    "romaji": "sou desu (hearsay)",
    "meaning": "I heard that... / Reportedly",
    "explanation": "Conveys information heard from a third party or read in news without altering it.",
    "structure": "Plain Form + そうです (Noun + だそうです / Na-adj + だそうです)",
    "category": "Reported Information",
    "important": true,
    "exampleJp": "ニュースによると、明日は大雨が降るそうです。",
    "exampleRomaji": "Nyuusu ni yoruto, ashita wa ooame ga furu sou desu.",
    "exampleEn": "According to the news, I heard it will rain heavily tomorrow.",
    "examples": [
      {
        "jp": "ニュースによると、明日は大雨が降るそうです。",
        "romaji": "Nyuusu ni yoruto, ashita wa ooame ga furu sou desu.",
        "en": "According to the news, I heard it will rain heavily tomorrow."
      },
      {
        "jp": "田中さんは来月結婚するそうです。",
        "romaji": "Tanaka-san wa raigetsu kekkon suru sou desu.",
        "en": "I heard Mr. Tanaka will get married next month."
      }
    ],
    "notes": "Nouns & Na-adjectives take だそうです (e.g. 雨だそうです, 有名だそうです).",
    "similarGrammar": "〜 らしい (rashii)",
    "differenceFromSimilar": "そうです is direct reporting of news/statements; らしい is inference based on evidence.",
    "commonMistakes": "Dropping だ after Nouns before そうです.",
    "jlptTip": "Often paired with 〜によると at beginning of sentence."
  },
  {
    "id": "n4g_39",
    "grammarNumber": 39,
    "pattern": "尊敬語 (Sonkeigo - Respectful Speech)",
    "japanese": "尊敬語 (Sonkeigo)",
    "hiragana": "そんけいご",
    "romaji": "Sonkeigo",
    "meaning": "Honorific Respectful Verbs (Exalting superior's actions)",
    "explanation": "Used to show high respect when describing actions of superiors, customers, or teachers.",
    "structure": "1. Special verbs: いらっしゃる/おっしゃる/なさる/ご覧になる | 2. お + Stem + になる",
    "category": "Common N4 conversational grammar",
    "important": true,
    "exampleJp": "社長はもうお帰りになりました。",
    "exampleRomaji": "Shachou wa mou okaeri ni narimashita.",
    "exampleEn": "The company president has already returned home.",
    "examples": [
      {
        "jp": "社長はもうお帰りになりました。",
        "romaji": "Shachou wa mou okaeri ni narimashita.",
        "en": "The company president has already returned home."
      },
      {
        "jp": "先生は何とおっしゃいましたか。",
        "romaji": "Sensei wa nan to osshaimashita ka.",
        "en": "What did the teacher say?"
      },
      {
        "jp": "社長は会議室にいらっしゃいます。",
        "romaji": "Shachou wa kaigishitsu ni irasshaimasu.",
        "en": "The president is in the conference room."
      }
    ],
    "notes": "Special verbs: 行く/来る/いる -> いらっしゃる, 言う -> おっしゃる, 食べる/飲む -> 召し上がる, 見る -> ご覧になる.",
    "similarGrammar": "謙譲語 (Kenjougo)",
    "differenceFromSimilar": "Sonkeigo exalts the OTHER person's action; Kenjougo lowers MY OWN action.",
    "commonMistakes": "Using Sonkeigo for your own actions! Never say 私はいらっしゃいます.",
    "jlptTip": "Core JLPT N4 Keigo questions test Sonkeigo vs Kenjougo verb matching."
  },
  {
    "id": "n4g_40",
    "grammarNumber": 40,
    "pattern": "謙譲語 (Kenjougo - Humble Speech)",
    "japanese": "謙譲語 (Kenjougo)",
    "hiragana": "けんじょうご",
    "romaji": "Kenjougo",
    "meaning": "Humble Speech (Lowering speaker's own actions)",
    "explanation": "Used when describing your own actions (or your group's actions) out of modesty to show respect to the listener.",
    "structure": "1. Special verbs: 参る/申す/いたす/拝見する/いただく | 2. お + Stem + する / ご + Noun + する",
    "category": "Common N4 conversational grammar",
    "important": true,
    "exampleJp": "明日10時に伺います。",
    "exampleRomaji": "Ashita juuji ni ukagaimasu.",
    "exampleEn": "I will humbly visit/ask you at 10 o'clock tomorrow.",
    "examples": [
      {
        "jp": "明日10時に伺います。",
        "romaji": "Ashita juuji ni ukagaimasu.",
        "en": "I will humbly visit you at 10 o'clock tomorrow."
      },
      {
        "jp": "わたくしは田中と申します。",
        "romaji": "Watakushi wa Tanaka to moushimasu.",
        "en": "My name is humbly Tanaka."
      },
      {
        "jp": "重い荷物をお持ちします。",
        "romaji": "Omoi nimotsu o omochi shimasu.",
        "en": "I will humbly carry your heavy luggage."
      }
    ],
    "notes": "Special verbs: 行く/来る -> 参る (mairu), 言う -> 申す (mousu), する -> いたす (itasu), 見る -> 拝見する (haiken suru).",
    "similarGrammar": "尊敬語 (Sonkeigo)",
    "differenceFromSimilar": "Kenjougo applies strictly to speaker or speaker's in-group.",
    "commonMistakes": "Using Kenjougo when talking about a customer's actions.",
    "jlptTip": "Look for subject: 私 = Kenjougo, 社長/先生 = Sonkeigo."
  },
  {
    "id": "n4g_41",
    "grammarNumber": 41,
    "pattern": "〜 はずです (hazu desu)",
    "japanese": "〜 はずです",
    "hiragana": "〜 はずです",
    "romaji": "hazu desu",
    "meaning": "Expectation / Should be / Ought to be",
    "explanation": "Expresses strong expectation based on clear objective evidence or logical reasoning.",
    "structure": "Verb Plain / I-adj + はず | Na-adj + なはず | Noun + のはず",
    "category": "Conjecture / Probability",
    "important": true,
    "exampleJp": "彼は今日来るはずです。",
    "exampleRomaji": "Kare wa kyou kuru hazu desu.",
    "exampleEn": "He should be coming today (I expect so).",
    "examples": [
      {
        "jp": "彼は今日来るはずです。",
        "romaji": "Kare wa kyou kuru hazu desu.",
        "en": "He should be coming today."
      },
      {
        "jp": "田中さんはもう着いたはずです。",
        "romaji": "Tanaka-san wa mou tsuita hazu desu.",
        "en": "Mr. Tanaka should have arrived already."
      }
    ],
    "notes": "Negative: 〜はずがない (It is impossible that...). Nouns take のはず.",
    "similarGrammar": "〜 だろう (darou)",
    "differenceFromSimilar": "はず is based on firm objective grounds; だろう is subjective guess.",
    "commonMistakes": "Using だ instead of の for nouns before はず.",
    "jlptTip": "Look for logical premises in preceding sentence (e.g. 5分前に出たから...)."
  },
  {
    "id": "n4g_42",
    "grammarNumber": 42,
    "pattern": "〜 やすいです (yasui desu)",
    "japanese": "〜 やすいです",
    "hiragana": "〜 やすいです",
    "romaji": "yasui desu",
    "meaning": "Easy to do / Tendency to...",
    "explanation": "Expresses that an action is easy to perform or an object has a tendency to undergo a state.",
    "structure": "Verb Stem + やすい",
    "category": "Adjective Grammar",
    "important": true,
    "exampleJp": "このペンはとても書きやすいです。",
    "exampleRomaji": "Kono pen wa totemo kakiyasui desu.",
    "exampleEn": "This pen is very easy to write with.",
    "examples": [
      {
        "jp": "このペンはとても書きやすいです。",
        "romaji": "Kono pen wa totemo kakiyasui desu.",
        "en": "This pen is very easy to write with."
      },
      {
        "jp": "この靴は歩きやすいです。",
        "romaji": "Kono kutsu wa arukiyasui desu.",
        "en": "These shoes are easy to walk in."
      }
    ],
    "notes": "Conjugates like an i-adjective (書きやすくない, 書きやすかった).",
    "similarGrammar": "〜 にくい (nikui)",
    "differenceFromSimilar": "やすい means easy; にくい means difficult.",
    "commonMistakes": "Using dictionary form instead of verb stem before やすい.",
    "jlptTip": "Tested in product review & tool usability contexts."
  },
  {
    "id": "n4g_43",
    "grammarNumber": 43,
    "pattern": "〜 にくいです (nikui desu)",
    "japanese": "〜 にくいです",
    "hiragana": "〜 にくいです",
    "romaji": "nikui desu",
    "meaning": "Difficult / Hard to do",
    "explanation": "Expresses that an action is physically or psychologically difficult to perform.",
    "structure": "Verb Stem + にくい",
    "category": "Adjective Grammar",
    "important": true,
    "exampleJp": "この漢字は覚えにくいです。",
    "exampleRomaji": "Kono kanji wa oboenikui desu.",
    "exampleEn": "This kanji is difficult to memorize.",
    "examples": [
      {
        "jp": "この漢字は覚えにくいです。",
        "romaji": "Kono kanji wa oboenikui desu.",
        "en": "This kanji is difficult to memorize."
      },
      {
        "jp": "雨の日は道が滑りやすくて歩きにくいです。",
        "romaji": "Ame no hi wa michi ga suberiyasukute arukinikui desu.",
        "en": "On rainy days the road is slippery and hard to walk on."
      }
    ],
    "notes": "Conjugates as i-adjective.",
    "similarGrammar": "〜 がたい (gatai - N1/N2)",
    "differenceFromSimilar": "にくい is the standard N4 expression for hard to do.",
    "commonMistakes": "Confusing づらい (dzurai - emotional difficulty) with にくい.",
    "jlptTip": "Opposite pair with 〜やすい."
  },
  {
    "id": "n4g_44",
    "grammarNumber": 44,
    "pattern": "〜 までに (made ni)",
    "japanese": "〜 までに",
    "hiragana": "〜 までに",
    "romaji": "made ni",
    "meaning": "By (Deadline / Time limit)",
    "explanation": "Specifies a deadline before which an action must be completed.",
    "structure": "Time / Event + までに / Verb Dict + までに",
    "category": "Time Expressions",
    "important": true,
    "exampleJp": "今週の金曜日までに宿題を出してください。",
    "exampleRomaji": "Konshuu no kouyoubi made ni shukudai o dashite kudasai.",
    "exampleEn": "Please submit your homework by Friday of this week.",
    "examples": [
      {
        "jp": "今週の金曜日までに宿題を出してください。",
        "romaji": "Konshuu no kouyoubi made ni shukudai o dashite kudasai.",
        "en": "Please submit your homework by Friday of this week."
      },
      {
        "jp": "5時までに帰ってきてください。",
        "romaji": "Go-ji made ni kaette kite kudasai.",
        "en": "Please come back by 5 o'clock."
      }
    ],
    "notes": "までに = deadline for instantaneous action; まで = continuous duration until.",
    "similarGrammar": "〜 まで (made)",
    "differenceFromSimilar": "まで means 'until' continuous (5時まで勉強する); までに means 'by' deadline (5時までに提出する).",
    "commonMistakes": "Using まで for homework submission deadlines instead of までに.",
    "jlptTip": "Classic JLPT N4 distinction test: まで vs までに!"
  },
  {
    "id": "n4g_45",
    "grammarNumber": 45,
    "pattern": "〜 てほしい (te hoshii)",
    "japanese": "〜 てほしい",
    "hiragana": "〜 てほしい",
    "romaji": "te hoshii",
    "meaning": "Want someone else to do something",
    "explanation": "Expresses the speaker's wish for another person to perform a specific action.",
    "structure": "Person + に + Verb (Te-form) + ほしい",
    "category": "Desire & Intention",
    "important": true,
    "exampleJp": "あなたに一緒に来てほしいです。",
    "exampleRomaji": "Anata ni issho ni kite hoshii desu.",
    "exampleEn": "I want you to come with me.",
    "examples": [
      {
        "jp": "あなたに一緒に来てほしいです。",
        "romaji": "Anata ni issho ni kite hoshii desu.",
        "en": "I want you to come with me."
      },
      {
        "jp": "部屋を静かにしてほしいです。",
        "romaji": "Heya o shizuka ni shite hoshii desu.",
        "en": "I want you to keep the room quiet."
      }
    ],
    "notes": "Target person is marked with particle に.",
    "similarGrammar": "〜 たい (tai)",
    "differenceFromSimilar": "〜たい is wanting to do something yourself; 〜てほしい is wanting SOMEONE ELSE to do it.",
    "commonMistakes": "Using 〜たい to express desire for someone else's action.",
    "jlptTip": "Target person MUST be marked with に."
  },
  {
    "id": "n4g_46",
    "grammarNumber": 46,
    "pattern": "〜 かどうか (ka dou ka)",
    "japanese": "〜 かどうか",
    "hiragana": "〜 かどうか",
    "romaji": "ka dou ka",
    "meaning": "Whether or not",
    "explanation": "Embeds a yes/no question clause into a larger sentence.",
    "structure": "Plain Form + かどうか (Noun / Na-adj drop だ)",
    "category": "Sentence-ending expressions",
    "important": true,
    "exampleJp": "明日雨が降るかどうか分かりません。",
    "exampleRomaji": "Ashita ame ga furu ka dou ka wakarimasen.",
    "exampleEn": "I don't know whether or not it will rain tomorrow.",
    "examples": [
      {
        "jp": "明日雨が降るかどうか分かりません。",
        "romaji": "Ashita ame ga furu ka dou ka wakarimasen.",
        "en": "I don't know whether or not it will rain tomorrow."
      },
      {
        "jp": "彼が来るかどうか知っていますか。",
        "romaji": "Kare ga kuru ka dou ka shitte imasu ka.",
        "en": "Do you know whether he is coming or not?"
      }
    ],
    "notes": "Drop だ from Nouns and Na-adjectives before かどうか.",
    "similarGrammar": "〜 か (ka)",
    "differenceFromSimilar": "かどうか is specifically for yes/no choices; か is for question words (何, 誰, どこ).",
    "commonMistakes": "Adding だ after Noun before かどうか.",
    "jlptTip": "Embedded question clauses are heavily tested."
  },
  {
    "id": "n4g_47",
    "grammarNumber": 47,
    "pattern": "〜 か (ka - Embedded question)",
    "japanese": "〜 か (埋め込み質問)",
    "hiragana": "〜 か",
    "romaji": "ka (embedded)",
    "meaning": "Indirect embedded question (who/what/where/when...)",
    "explanation": "Embeds a question containing a question word (誰, 何, いつ, どこ, なぜ) into a main sentence.",
    "structure": "Question Word + Plain Form + か + Main Clause",
    "category": "Sentence-ending expressions",
    "important": true,
    "exampleJp": "どこへ行くか教えてください。",
    "exampleRomaji": "Doko e iku ka oshiete kudasai.",
    "exampleEn": "Please tell me where you are going.",
    "examples": [
      {
        "jp": "どこへ行くか教えてください。",
        "romaji": "Doko e iku ka oshiete kudasai.",
        "en": "Please tell me where you are going."
      },
      {
        "jp": "何時に始まるか調べてみます。",
        "romaji": "Nanji ni hajimaru ka shirabete mimasu.",
        "en": "I will check what time it starts."
      }
    ],
    "notes": "Drop だ after Nouns and Na-adjectives.",
    "similarGrammar": "〜 かどうか (ka dou ka)",
    "differenceFromSimilar": "か is used with question words (何, どこ); かどうか is used for yes/no options.",
    "commonMistakes": "Keeping だ after nouns in embedded questions.",
    "jlptTip": "Look for 誰, 何, いつ, どこ before the verb."
  },
  {
    "id": "n4g_48",
    "grammarNumber": 48,
    "pattern": "〜 ていく / てくる (te iku / te kuru)",
    "japanese": "〜 ていく / てくる",
    "hiragana": "〜 ていく / 〜 てくる",
    "romaji": "te iku / te kuru",
    "meaning": "Continue into future / Progress up to now / Go & return",
    "explanation": "ていく = change continuing from now into future; てくる = change continuing up to present, or going to do action and return.",
    "structure": "Verb (Te-form) + いく / くる",
    "category": "Change & Becoming",
    "important": true,
    "exampleJp": "これからも日本語を勉強していこうと思います。",
    "exampleRomaji": "Kore kara mo Nihongo o benkyou shite ikou to omoimasu.",
    "exampleEn": "I intend to continue studying Japanese from now on.",
    "examples": [
      {
        "jp": "これからも日本語を勉強していこうと思います。",
        "romaji": "Kore kara mo Nihongo o benkyou shite ikou to omoimasu.",
        "en": "I intend to continue studying Japanese from now on."
      },
      {
        "jp": "寒くなってきましたね。",
        "romaji": "Samaku natte kimashita ne.",
        "en": "It has gradually become cold, hasn't it?"
      },
      {
        "jp": "ちょっとジュースを買ってきます。",
        "romaji": "Chotto juusu o katte kimasu.",
        "en": "I'll go buy some juice and come back."
      }
    ],
    "notes": "てくる often expresses physical motion returning (買ってきます).",
    "similarGrammar": "〜 ようになる (you ni naru)",
    "differenceFromSimilar": "ていく/てくる emphasizes directional trajectory of change over time.",
    "commonMistakes": "Confusing future continuation (ていく) with past accumulation (てくる).",
    "jlptTip": "これからも (from now on) triggers ていく; だんだん (gradually) triggers てくる."
  },
  {
    "id": "n4g_49",
    "grammarNumber": 49,
    "pattern": "〜 ことができる (koto ga dekimasu)",
    "japanese": "〜 ことができる",
    "hiragana": "〜 ことができる",
    "romaji": "koto ga dekimasu",
    "meaning": "Can do / Be able to do (Nominalized ability)",
    "explanation": "Expresses ability or possibility using nominalized dictionary form verb.",
    "structure": "Verb (Dict Form) + ことができる",
    "category": "Ability",
    "important": true,
    "exampleJp": "あなたは車を運転することができますか。",
    "exampleRomaji": "Anata wa kuruma o unten suru koto ga dekimasu ka.",
    "exampleEn": "Can you drive a car?",
    "examples": [
      {
        "jp": "あなたは車を運転することができますか。",
        "romaji": "Anata wa kuruma o unten suru koto ga dekimasu ka.",
        "en": "Can you drive a car?"
      },
      {
        "jp": "ここでカードを使うことができます。",
        "romaji": "Koko de kaado o tsukau koto ga dekimasu.",
        "en": "You can use credit cards here."
      }
    ],
    "notes": "Nominalizes the preceding verb with こと.",
    "similarGrammar": "〜 可能形 (Potential Form)",
    "differenceFromSimilar": "ことができる is more formal; potential verb forms (運転できる) are more common in speech.",
    "commonMistakes": "Using Ta-form or Nai-form before ことができる.",
    "jlptTip": "Dictionary form is mandatory before ことができる."
  },
  {
    "id": "n4g_50",
    "grammarNumber": 50,
    "pattern": "〜 しか...ない (shika...nai)",
    "japanese": "〜 しか...ない",
    "hiragana": "〜 しか...ない",
    "romaji": "shika...nai",
    "meaning": "Only / Nothing but (negative nuance)",
    "explanation": "Expresses limitation with an underlying feeling of insufficiency or complaint.",
    "structure": "Noun + しか + Negative Verb",
    "category": "Limitation",
    "important": true,
    "exampleJp": "財布の中に100円しかありません。",
    "exampleRomaji": "Saifu no naka ni hyakuen shika arimasen.",
    "exampleEn": "There is only 100 yen in my wallet.",
    "examples": [
      {
        "jp": "財布の中に100円しかありません。",
        "romaji": "Saifu no naka ni hyakuen shika arimasen.",
        "en": "There is only 100 yen in my wallet."
      },
      {
        "jp": "ひらがなしか書けません。",
        "romaji": "Hiragana shika kakemasen.",
        "en": "I can write nothing but hiragana."
      }
    ],
    "notes": "ALWAYS paired with a NEGATIVE verb.",
    "similarGrammar": "〜 だけ (dake)",
    "differenceFromSimilar": "だけ takes affirmative verb and is neutral; しか REQUIRES negative verb and implies insufficiency.",
    "commonMistakes": "Using an affirmative verb after しか (e.g. ×100円しかあります).",
    "jlptTip": "Formula: しか + NEGATIVE VERB."
  },
  {
    "id": "n4g_51",
    "grammarNumber": 51,
    "pattern": "〜 てから (te kara)",
    "japanese": "〜 てから",
    "hiragana": "〜 てから",
    "romaji": "te kara",
    "meaning": "After doing...",
    "explanation": "Expresses sequential order: completing action A before starting action B.",
    "structure": "Verb (Te-form) + から",
    "category": "Sequence & Order",
    "important": true,
    "exampleJp": "手を洗ってから、ご飯を食べます。",
    "exampleRomaji": "Te o aratte kara, gohan o tabemasu.",
    "exampleEn": "I eat dinner after washing my hands.",
    "examples": [
      {
        "jp": "手を洗ってから、ご飯を食べます。",
        "romaji": "Te o aratte kara, gohan o tabemasu.",
        "en": "I eat dinner after washing my hands."
      },
      {
        "jp": "宿題を終わらせてから遊びに行きます。",
        "romaji": "Shukudai o owarasete kara asobi ni ikimasu.",
        "en": "I will go out to play after finishing my homework."
      }
    ],
    "notes": "Ensures that action A is fully complete before action B begins.",
    "similarGrammar": "〜 あとで (ato de)",
    "differenceFromSimilar": "てから emphasizes continuous flow of actions; あとで simply states relative sequence.",
    "commonMistakes": "Using Ta-form before から (use Te-form: 洗ってから, NOT 洗ったから).",
    "jlptTip": "Te-form + から = sequential order."
  },
  {
    "id": "n4g_52",
    "grammarNumber": 52,
    "pattern": "〜 あとで (ato de)",
    "japanese": "〜 あとで",
    "hiragana": "〜 あとで",
    "romaji": "ato de",
    "meaning": "After... / Afterwards",
    "explanation": "Indicates that one event takes place after another event or period.",
    "structure": "Verb (Ta-form) + あとで / Noun + のあとで",
    "category": "Sequence & Order",
    "important": true,
    "exampleJp": "仕事が終わったあとで、飲みに行きましょう。",
    "exampleRomaji": "Shigoto ga owatta ato de, nomi ni ikimashou.",
    "exampleEn": "Let's go for a drink after work is finished.",
    "examples": [
      {
        "jp": "仕事が終わったあとで、飲みに行きましょう。",
        "romaji": "Shigoto ga owatta ato de, nomi ni ikimashou.",
        "en": "Let's go for a drink after work is finished."
      },
      {
        "jp": "授業のあとで先生に質問します。",
        "romaji": "Jugyou no ato de sensei ni shitsumon shimasu.",
        "en": "I will ask the teacher a question after class."
      }
    ],
    "notes": "Requires Ta-form for verbs (終わったあとで) and の for nouns.",
    "similarGrammar": "〜 てから (te kara)",
    "differenceFromSimilar": "あとで can stand alone as an adverb ('later'), whereas てから cannot.",
    "commonMistakes": "Using dictionary form before あとで.",
    "jlptTip": "Formula: Verb Ta-form + あとで / Noun + のあとで."
  },
  {
    "id": "n4g_53",
    "grammarNumber": 53,
    "pattern": "〜 ても (temo / demo)",
    "japanese": "〜 ても / でも",
    "hiragana": "〜 ても",
    "romaji": "temo / demo",
    "meaning": "Even if / Even though",
    "explanation": "Expresses a reverse condition: the main clause holds true regardless of the condition in the first clause.",
    "structure": "Verb (Te-form) + も | I-adj (くても) | Na-adj / Noun (でも)",
    "category": "Conditionals",
    "important": true,
    "exampleJp": "雨が降っても、サッカーの試合はあります。",
    "exampleRomaji": "Ame ga futtemo, sakkaa no shiai wa arimasu.",
    "exampleEn": "Even if it rains, there will be a soccer match.",
    "examples": [
      {
        "jp": "雨が降っても、サッカーの試合はあります。",
        "romaji": "Ame ga futtemo, sakkaa no shiai wa arimasu.",
        "en": "Even if it rains, there will be a soccer match."
      },
      {
        "jp": "安くても買いません。",
        "romaji": "Yasukutemo kaimasen.",
        "en": "Even if it is cheap, I won't buy it."
      }
    ],
    "notes": "Nouns and Na-adjectives take でも (e.g. 日曜日でも).",
    "similarGrammar": "〜 のに (noni)",
    "differenceFromSimilar": "ても is hypothetical ('even if'); のに is real past fact ('even though it actually happened').",
    "commonMistakes": "Using ても for real past facts that already occurred.",
    "jlptTip": "Hypothetical reverse condition: Verb Te-form + も."
  },
  {
    "id": "n4g_54",
    "grammarNumber": 54,
    "pattern": "〜 命令形 (Imperative Form: 〜え / 〜ろ)",
    "japanese": "〜 命令形 (〜え / 〜ろ)",
    "hiragana": "〜 めいれいけい",
    "romaji": "meireikei",
    "meaning": "Imperative Command (Do it!)",
    "explanation": "Direct blunt command form, used in urgent situations, traffic signs, male casual speech, or sports cheering.",
    "structure": "Group 1: u -> e (行け/書け) | Group 2: ru -> ro (起きろ/しろ) | Group 3: しろ / 来い (こい)",
    "category": "Requests & Advice",
    "important": true,
    "exampleJp": "早く走れ！",
    "exampleRomaji": "Hayaku hashire!",
    "exampleEn": "Run fast!",
    "examples": [
      {
        "jp": "早く走れ！",
        "romaji": "Hayaku hashire!",
        "en": "Run fast!"
      },
      {
        "jp": "静かにしろ！",
        "romaji": "Shizuka ni shiro!",
        "en": "Be quiet!"
      }
    ],
    "notes": "Very blunt! Used in emergencies, road signs (止まれ), or reported speech (〜と言われた).",
    "similarGrammar": "〜 なさい (nasai)",
    "differenceFromSimilar": "命令形 is blunt command; なさい is authoritative instruction (e.g. parent to child).",
    "commonMistakes": "Using Imperative form in polite conversation.",
    "jlptTip": "Used in reported speech: 先生に「勉強しろ」と言われた."
  },
  {
    "id": "n4g_55",
    "grammarNumber": 55,
    "pattern": "〜 禁止形 (Prohibitive Form: 〜な)",
    "japanese": "〜 禁止形 (〜な)",
    "hiragana": "〜 きんしけい",
    "romaji": "kinshikei (~na)",
    "meaning": "Don't do! (Strong Prohibition)",
    "explanation": "Direct blunt command prohibiting an action.",
    "structure": "Verb (Dict Form) + な",
    "category": "Permission & Prohibition",
    "important": true,
    "exampleJp": "ここに触るな！",
    "exampleRomaji": "Koko ni sawaru na!",
    "exampleEn": "Don't touch this!",
    "examples": [
      {
        "jp": "ここに触るな！",
        "romaji": "Koko ni sawaru na!",
        "en": "Don't touch this!"
      },
      {
        "jp": "諦めるな！",
        "romaji": "Akirameru na!",
        "en": "Don't give up!"
      }
    ],
    "notes": "Directly attach な to Dictionary Form of verb.",
    "similarGrammar": "〜 ないでください (naide kudasai)",
    "differenceFromSimilar": " prohibitive 〜な is blunt command; 〜ないでください is polite request.",
    "commonMistakes": "Confusing prohibitive 〜な with sentence ending particle な (isn't it?).",
    "jlptTip": "Verb Dict + な = PROHIBITION (Don't do!)."
  },
  {
    "id": "n4g_56",
    "grammarNumber": 56,
    "pattern": "〜 ために (tame ni)",
    "japanese": "〜 ために",
    "hiragana": "〜 ために",
    "romaji": "tame ni",
    "meaning": "In order to / For the sake of",
    "explanation": "Expresses a deliberate target or purpose requiring intentional action.",
    "structure": "Verb (Dict Form) + ために / Noun + のために",
    "category": "Purpose",
    "important": true,
    "exampleJp": "家を建てるために貯金しています。",
    "exampleRomaji": "Ie o tateru tame ni chokin shite imasu.",
    "exampleEn": "I am saving money in order to build a house.",
    "examples": [
      {
        "jp": "家を建てるために貯金しています。",
        "romaji": "Ie o tateru tame ni chokin shite imasu.",
        "en": "I am saving money in order to build a house."
      },
      {
        "jp": "家族のために一生懸命働きます。",
        "romaji": "Kazoku no tame ni isshoukenmei hatarakimasu.",
        "en": "I work hard for the sake of my family."
      }
    ],
    "notes": "Preceding verb must be a volitional / controllable action verb.",
    "similarGrammar": "〜 ように (you ni)",
    "differenceFromSimilar": "ために requires controllable action; ように is used with non-controllable or potential verbs.",
    "commonMistakes": "Using potential verbs before ために. Use ように for potential verbs!",
    "jlptTip": "Controllable Verb + ために vs Potential Verb + ように."
  },
  {
    "id": "n4g_57",
    "grammarNumber": 57,
    "pattern": "〜 ように (you ni - Purpose)",
    "japanese": "〜 ように (目的)",
    "hiragana": "〜 ように",
    "romaji": "you ni (purpose)",
    "meaning": "So that / In order to enable",
    "explanation": "Expresses acting so that a non-controllable state or potential ability becomes possible.",
    "structure": "Verb (Potential / Non-volitional Dict / Nai Form) + ように",
    "category": "Purpose",
    "important": true,
    "exampleJp": "後ろの人にも聞こえるように大きな声で話しました。",
    "exampleRomaji": "Ushiro no hito ni mo kikoeru you ni ookina koe de hanashimashita.",
    "exampleEn": "I spoke loudly so that people in the back could hear.",
    "examples": [
      {
        "jp": "後ろの人にも聞こえるように大きな声で話しました。",
        "romaji": "Ushiro no hito ni mo kikoeru you ni ookina koe de hanashimashita.",
        "en": "I spoke loudly so that people in the back could hear."
      },
      {
        "jp": "風邪を引かないように暖かい服を着ます。",
        "romaji": "Kaze o hikanai you ni atatakai fuku o kimasu.",
        "en": "I wear warm clothes so that I won't catch a cold."
      }
    ],
    "notes": "Used with Potential verbs, Intransitive non-volitional verbs, and Nai-form.",
    "similarGrammar": "〜 ために (tame ni)",
    "differenceFromSimilar": "ように takes potential/negative/state verbs; ために takes active intentional verbs.",
    "commonMistakes": "Using active volitional verbs before ように.",
    "jlptTip": "Verb Potential + ように is a classic exam pattern."
  },
  {
    "id": "n4g_58",
    "grammarNumber": 58,
    "pattern": "〜 ようにする (you ni suru)",
    "japanese": "〜 ようにする",
    "hiragana": "〜 ようにする",
    "romaji": "you ni suru",
    "meaning": "Make sure to / Endeavor to make a habit",
    "explanation": "Expresses making a conscious continuous effort to establish a habit or perform an action.",
    "structure": "Verb (Dict / Nai Form) + ようにする / ようにしている",
    "category": "Change & Becoming",
    "important": true,
    "exampleJp": "毎日野菜をたくさん食べるようにしています。",
    "exampleRomaji": "Mainichi yasai o takusan taberu you ni shite imasu.",
    "exampleEn": "I make sure to eat plenty of vegetables every day.",
    "examples": [
      {
        "jp": "毎日野菜をたくさん食べるようにしています。",
        "romaji": "Mainichi yasai o takusan taberu you ni shite imasu.",
        "en": "I make sure to eat plenty of vegetables every day."
      },
      {
        "jp": "寝る前にスマホを見ないようにしてください。",
        "romaji": "Neru mae ni sumaho o minai you ni shite kudasai.",
        "en": "Please try to make it a habit not to look at your smartphone before sleeping."
      }
    ],
    "notes": "ようにしている indicates ongoing habit; ようにしてください is a gentle instruction.",
    "similarGrammar": "〜 ことにする (koto ni suru)",
    "differenceFromSimilar": "ことにする is single decision; ようにする emphasizes ongoing conscious daily effort.",
    "commonMistakes": "Using past tense verb before ようにする.",
    "jlptTip": "ようとする (attempt at moment) vs ようにする (ongoing habitual effort)."
  },
  {
    "id": "n4g_59",
    "grammarNumber": 59,
    "pattern": "〜 と言っていました (to itte imashita)",
    "japanese": "〜 と言っていました",
    "hiragana": "〜 と言っていました",
    "romaji": "to itte imashita",
    "meaning": "He/She said that...",
    "explanation": "Used to report a statement made previously by a third person.",
    "structure": "Plain Form + と言っていました",
    "category": "Reported Information",
    "important": true,
    "exampleJp": "田中さんは明日休むと言っていました。",
    "exampleRomaji": "Tanaka-san wa ashita yasumu to itte imashita.",
    "exampleEn": "Mr. Tanaka said that he will be absent tomorrow.",
    "examples": [
      {
        "jp": "田中さんは明日休むと言っていました。",
        "romaji": "Tanaka-san wa ashita yasumu to itte imashita.",
        "en": "Mr. Tanaka said that he will be absent tomorrow."
      },
      {
        "jp": "山田さんはパーティーに来られないと言っていました。",
        "romaji": "Yamada-san wa paatii ni korarenai to itte imashita.",
        "en": "Yamada-san said that she cannot come to the party."
      }
    ],
    "notes": "Uses と言っていました (continuous past) when conveying third person's words to someone else.",
    "similarGrammar": "〜 そうです (sou desu)",
    "differenceFromSimilar": "と言っていました explicitly quotes the speaker; そうです is general hearsay.",
    "commonMistakes": "Using 言いました instead of 言っていました when reporting to a listener.",
    "jlptTip": "Standard format for relaying messages in listening section."
  },
  {
    "id": "n4g_60",
    "grammarNumber": 60,
    "pattern": "〜 そうにない (sou ni nai)",
    "japanese": "〜 そうにない / 〜 そうもない",
    "hiragana": "〜 そうにない",
    "romaji": "sou ni nai",
    "meaning": "Unlikely to / Doesn't seem like it will",
    "explanation": "Expresses negative conjecture: that an action or event appears unlikely to happen.",
    "structure": "Verb Stem + そうにない / そうもない",
    "category": "Conjecture / Probability",
    "important": true,
    "exampleJp": "雨はまだやみそうにありません。",
    "exampleRomaji": "Ame wa mada yami sou ni arimasen.",
    "exampleEn": "It doesn't seem like the rain will stop anytime soon.",
    "examples": [
      {
        "jp": "雨はまだやみそうにありません。",
        "romaji": "Ame wa mada yami sou ni arimasen.",
        "en": "It doesn't seem like the rain will stop anytime soon."
      },
      {
        "jp": "締め切りまでに間に合いそうにないです。",
        "romaji": "Shimekiri made ni maniai sou ni nai desu.",
        "en": "It looks unlikely that I will make it in time for the deadline."
      }
    ],
    "notes": "Polite form: 〜そうにありません.",
    "similarGrammar": "〜 ないでしょう (nai deshou)",
    "differenceFromSimilar": "そうにない is based on direct visual evidence of current state.",
    "commonMistakes": "Attaching ない directly to verb dictionary form.",
    "jlptTip": "Verb Stem + そうにない = unlikely to happen."
  },
  {
    "id": "n4g_61",
    "grammarNumber": 61,
    "pattern": "〜 がり (gari - Tendency)",
    "japanese": "〜 がり",
    "hiragana": "〜 がり",
    "romaji": "gari",
    "meaning": "Person sensitive to... / Person who tends to feel...",
    "explanation": "Forms a noun describing a person who easily feels or exhibits a certain sensation.",
    "structure": "Adjective Stem + がり (寒がり, 暑がり, 恥ずかしがり)",
    "category": "Noun Grammar",
    "important": true,
    "exampleJp": "私は寒がりなので冬が苦手です。",
    "exampleRomaji": "Watashi wa samugari nano de fuyu ga nigate desu.",
    "exampleEn": "Because I am sensitive to the cold, I don't like winter.",
    "examples": [
      {
        "jp": "私は寒がりなので冬が苦手です。",
        "romaji": "Watashi wa samugari nano de fuyu ga nigate desu.",
        "en": "Because I am sensitive to the cold, I don't like winter."
      },
      {
        "jp": "妹は恥ずかしがり屋です。",
        "romaji": "Imouto wa hazukashigariya desu.",
        "en": "My younger sister is a shy person."
      }
    ],
    "notes": "Often combines with 屋 (ya) -> 恥ずかしがり屋 (shy person), 寒がり屋 (person sensitive to cold).",
    "similarGrammar": "〜 たがる (tagaru)",
    "differenceFromSimilar": "がり creates a noun (personality trait); たがる creates a verb.",
    "commonMistakes": "Using がり for non-sensory adjectives.",
    "jlptTip": "Common vocabulary & grammar crossover item."
  },
  {
    "id": "n4g_62",
    "grammarNumber": 62,
    "pattern": "〜 らしい (rashii)",
    "japanese": "〜 らしい",
    "hiragana": "〜 らしい",
    "romaji": "rashii",
    "meaning": "Seems like / Typical of",
    "explanation": "Expresses inference based on information/rumors, or describes typical expected characteristics of something.",
    "structure": "Noun / Plain Form + らしい",
    "category": "Similarity",
    "important": true,
    "exampleJp": "男らしく堂々としなさい。",
    "exampleRomaji": "Otokorashiku doudou to shinasai.",
    "exampleEn": "Be manly and act with confidence.",
    "examples": [
      {
        "jp": "男らしく堂々としなさい。",
        "romaji": "Otokorashiku doudou to shinasai.",
        "en": "Be manly and act with confidence."
      },
      {
        "jp": "彼は来月結婚するらしいです。",
        "romaji": "Kare wa raigetsu kekkon suru rashii desu.",
        "en": "It seems he is getting married next month."
      }
    ],
    "notes": "Noun + らしい can mean 'typical of [Noun]' (e.g. 子供らしい = childlike).",
    "similarGrammar": "〜 ようだ (you da)",
    "differenceFromSimilar": "らしい is based on external reports or representative qualities; ようだ is based on direct personal observation.",
    "commonMistakes": "Adding だ before らしい after nouns.",
    "jlptTip": "Noun + らしい = 'embodying typical characteristics of Noun'."
  },
  {
    "id": "n4g_63",
    "grammarNumber": 63,
    "pattern": "〜 と言われている (to iwarete iru)",
    "japanese": "〜 と言われている",
    "hiragana": "〜 といわわれている",
    "romaji": "to iwarete iru",
    "meaning": "It is said that... / People say that...",
    "explanation": "Expresses general public consensus, common belief, or tradition.",
    "structure": "Plain Form + と言われている",
    "category": "Reported Information",
    "important": true,
    "exampleJp": "納豆は体によいと言われています。",
    "exampleRomaji": "Nattou wa karada ni yoi to iwarete iru.",
    "exampleEn": "It is said that Natto is good for the body.",
    "examples": [
      {
        "jp": "納豆は体によいと言われています。",
        "romaji": "Nattou wa karada ni yoi to iwarete iru.",
        "en": "It is said that Natto is good for the body."
      },
      {
        "jp": "今年は猛暑になると言われています。",
        "romaji": "Kotoshi wa mousho ni naru to iwarete iru.",
        "en": "It is said that this year will be an intensely hot summer."
      }
    ],
    "notes": "Passive form of 言う + ている.",
    "similarGrammar": "〜 そうです (sou desu)",
    "differenceFromSimilar": "と言われている states general societal consensus; そうです reports specific heard news.",
    "commonMistakes": "Using active 言っている for general public belief.",
    "jlptTip": "Commonly found in JLPT reading comprehension passages."
  },
  {
    "id": "n4g_64",
    "grammarNumber": 64,
    "pattern": "〜 に違いない (ni chigainai)",
    "japanese": "〜 に違いない",
    "hiragana": "〜 にちがいない",
    "romaji": "ni chigainai",
    "meaning": "Must be / No doubt that...",
    "explanation": "Expresses strong conviction or certainty by the speaker based on circumstantial evidence.",
    "structure": "Plain Form + に違いない (Noun / Na-adj drop だ)",
    "category": "Conjecture / Probability",
    "important": true,
    "exampleJp": "犯人は彼に違いない。",
    "exampleRomaji": "Hannin wa kare ni chigainai.",
    "exampleEn": "The culprit must be him (no doubt).",
    "examples": [
      {
        "jp": "犯人は彼に違いない。",
        "romaji": "Hannin wa kare ni chigainai.",
        "en": "The culprit must be him."
      },
      {
        "jp": "これだけ練習したのだから、絶対に合格するに違いない。",
        "romaji": "Kore dake renshuu shita no da kara, zettai ni goukaku suru ni chigainai.",
        "en": "Since we practiced this much, we will definitely pass without a doubt."
      }
    ],
    "notes": "Drop だ after Nouns and Na-adjectives before に違いない.",
    "similarGrammar": "〜 はずです (hazu desu)",
    "differenceFromSimilar": "に違いない expresses intense subjective conviction; はずです is logical objective expectation.",
    "commonMistakes": "Adding だ before に違いない.",
    "jlptTip": "Strongest expression of certainty in N4."
  },
  {
    "id": "n4g_65",
    "grammarNumber": 65,
    "pattern": "〜 わけがない (wake ga nai)",
    "japanese": "〜 わけがない",
    "hiragana": "〜 わけがない",
    "romaji": "wake ga nai",
    "meaning": "Impossible that... / There is no way that...",
    "explanation": "Expresses strong emphatic denial of a possibility based on reason or logic.",
    "structure": "Plain Form + わけがない (Na-adj + なわけがない | Noun + のわけがない)",
    "category": "Explanation",
    "important": true,
    "exampleJp": "そんな難しい問題が小学生に解けるわけがない。",
    "exampleRomaji": "Sonna muzukashii mondai ga shougakusei ni tokeru wake ga nai.",
    "exampleEn": "There is no way an elementary student can solve such a difficult problem.",
    "examples": [
      {
        "jp": "そんな難しい問題が小学生に解けるわけがない。",
        "romaji": "Sonna muzukashii mondai ga shougakusei ni tokeru wake ga nai.",
        "en": "There is no way an elementary student can solve such a difficult problem."
      },
      {
        "jp": "彼が嘘をつくわけがありません。",
        "romaji": "Kare ga uso o tsuku wake ga arimasen.",
        "en": "There is no possibility that he is lying."
      }
    ],
    "notes": "Polite form: 〜わけがありません.",
    "similarGrammar": "〜 はずがない (hazu ga nai)",
    "differenceFromSimilar": "わけがない and はずがない are practically interchangeable in expressing strong logical impossibility.",
    "commonMistakes": "Using わけがない for simple physical inability (use できない instead).",
    "jlptTip": "Na-adj requires な, Noun requires の before わけがない."
  },
  {
    "id": "n4g_66",
    "grammarNumber": 66,
    "pattern": "〜 わけではない (wake de wa nai)",
    "japanese": "〜 わけではない",
    "hiragana": "〜 わけではない",
    "romaji": "wake de wa nai",
    "meaning": "It does not mean that... / Not necessarily",
    "explanation": "Softly refutes a partial assumption or clarifies that something is not entirely true.",
    "structure": "Plain Form + わけではない (Na-adj + なわけではない | Noun + なわけではない)",
    "category": "Explanation",
    "important": true,
    "exampleJp": "嫌いなわけではないが、あまり食べたくない。",
    "exampleRomaji": "Kirai na wake de wa nai ga, amari tabetakunai.",
    "exampleEn": "It doesn't mean that I dislike it, but I don't really want to eat it.",
    "examples": [
      {
        "jp": "嫌いなわけではないが、あまり食べたくない。",
        "romaji": "Kirai na wake de wa nai ga, amari tabetakunai.",
        "en": "It doesn't mean that I dislike it, but I don't really want to eat it."
      },
      {
        "jp": "日本語が全然話せないわけではありません。",
        "romaji": "Nihongo ga zenzen hanasenai wake de wa arimasen.",
        "en": "It's not that I can't speak Japanese at all."
      }
    ],
    "notes": "Often used with 全然 (zenzen) or 必ずしも (kanarazushimo) to make partial negations.",
    "similarGrammar": "〜 わけがない (wake ga nai)",
    "differenceFromSimilar": "わけがない is 100% total denial ('no way'); わけではない is partial qualification ('not necessarily').",
    "commonMistakes": "Confusing partial denial (わけではない) with complete denial (わけがない).",
    "jlptTip": "Partial negation marker in reading comprehension."
  },
  {
    "id": "n4g_67",
    "grammarNumber": 67,
    "pattern": "お / ご 〜 ください (o / go ~ kudasai)",
    "japanese": "お / ご 〜 ください",
    "hiragana": "お / ご 〜 ください",
    "romaji": "o / go ~ kudasai",
    "meaning": "Please (Polite honorific request)",
    "explanation": "Respectful honorific formula used to ask customers or superiors to perform an action.",
    "structure": "お + Verb Stem + ください / ご + Sino-Japanese Noun + ください",
    "category": "Common N4 conversational grammar",
    "important": true,
    "exampleJp": "少々お待ちください。",
    "exampleRomaji": "Shoushou omachi kudasai.",
    "exampleEn": "Please wait a moment.",
    "examples": [
      {
        "jp": "少々お待ちください。",
        "romaji": "Shoushou omachi kudasai.",
        "en": "Please wait a moment."
      },
      {
        "jp": "こちらの注意書きをご覧ください。",
        "romaji": "Kochira no chuuigaki o goran kudasai.",
        "en": "Please take a look at these instructions."
      }
    ],
    "notes": "Native Japanese verbs take お (お持ちください); Suru/Sino-Japanese nouns take ご (ご注意ください).",
    "similarGrammar": "〜 てください (te kudasai)",
    "differenceFromSimilar": "お/ご...ください is the formal honorific version of 〜てください used in customer service.",
    "commonMistakes": "Adding て before ください in this formula (×お待ちてください).",
    "jlptTip": "Standard customer service phrase in listening test."
  },
  {
    "id": "n4g_68",
    "grammarNumber": 68,
    "pattern": "お / ご 〜 になる (o / go ~ ni naru)",
    "japanese": "お / ご 〜 になる",
    "hiragana": "お / ご 〜 になる",
    "romaji": "o / go ~ ni naru",
    "meaning": "Honorific verb formula (Exalting action)",
    "explanation": "Standard polite method to convert regular verbs into honorific (Sonkeigo) forms.",
    "structure": "お + Verb Stem + になる / ご + Sino-Japanese Noun + になる",
    "category": "Common N4 conversational grammar",
    "important": true,
    "exampleJp": "社長が書類をお読みになります。",
    "exampleRomaji": "Shachou ga shorui o oyomi ni narimasu.",
    "exampleEn": "The company president reads the documents.",
    "examples": [
      {
        "jp": "社長が書類をお読みになります。",
        "romaji": "Shachou ga shorui o oyomi ni narimasu.",
        "en": "The company president reads the documents."
      },
      {
        "jp": "こちらの部屋をお使いになりますか。",
        "romaji": "Kochira no heya o otsukai ni narimasu ka.",
        "en": "Will you use this room?"
      }
    ],
    "notes": "Does not apply to Group 3 or verbs with special Keigo forms (e.g. 食べる -> 召し上がる).",
    "similarGrammar": "尊敬語 (Sonkeigo special verbs)",
    "differenceFromSimilar": "This is the general pattern formula for standard verbs lacking special Keigo forms.",
    "commonMistakes": "Applying this pattern to verbs that have special forms like 見る (use ご覧になる, NOT お見になる).",
    "jlptTip": "Check if special Keigo verb exists before using お...になる."
  },
  {
    "id": "n4g_69",
    "grammarNumber": 69,
    "pattern": "お / ご 〜 する (o / go ~ suru)",
    "japanese": "お / ご 〜 する",
    "hiragana": "お / ご 〜 する",
    "romaji": "o / go ~ suru",
    "meaning": "Humble verb formula (Lowering speaker's action)",
    "explanation": "Standard polite method to convert regular verbs into humble (Kenjougo) forms when performing actions for someone else.",
    "structure": "お + Verb Stem + する / ご + Sino-Japanese Noun + する",
    "category": "Common N4 conversational grammar",
    "important": true,
    "exampleJp": "駅までお送りします。",
    "exampleRomaji": "Eki made ookuri shimasu.",
    "exampleEn": "I will humbly escort you to the station.",
    "examples": [
      {
        "jp": "駅までお送りします。",
        "romaji": "Eki made ookuri shimasu.",
        "en": "I will humbly escort you to the station."
      },
      {
        "jp": "明日ご案内します。",
        "romaji": "Ashita goannai shimasu.",
        "en": "I will guide you tomorrow."
      }
    ],
    "notes": "Native verbs take お (お持ちします); Sino-Japanese nouns take ご (ご案内します).",
    "similarGrammar": "お / ご 〜 になる (Honorific)",
    "differenceFromSimilar": "お...する is humble (MY action for you); お...になる is honorific (YOUR action).",
    "commonMistakes": "Using お...する to describe what the boss is doing for you.",
    "jlptTip": "Core distinction: お...する = I do for superior."
  },
  {
    "id": "n4g_70",
    "grammarNumber": 70,
    "pattern": "丁寧語 / 美化語 (Teineigo / Bikago: お / ご)",
    "japanese": "丁寧語 / 美化語 (お / ご)",
    "hiragana": "ていねいご / びかご",
    "romaji": "Teineigo / Bikago (o/go)",
    "meaning": "Polite Beautified Speech Prefixes",
    "explanation": "Prefixes added to nouns to make speech refined, polite, and cultured.",
    "structure": "お + Native Noun (お金, お茶, お酒) | ご + Sino-Japanese Noun (ご家族, ご意見, ご飯)",
    "category": "Common N4 conversational grammar",
    "important": true,
    "exampleJp": "どうぞ、お茶をお召し上がりください。",
    "exampleRomaji": "Douzo, ocha o omeshagari kudasai.",
    "exampleEn": "Please help yourself to green tea.",
    "examples": [
      {
        "jp": "どうぞ、お茶をお召し上がりください。",
        "romaji": "Douzo, ocha o omeshagari kudasai.",
        "en": "Please help yourself to green tea."
      },
      {
        "jp": "ご家族の皆さんはお元気ですか。",
        "romaji": "Gokazoku no minasan wa ogenki desu ka.",
        "en": "Is everyone in your family well?"
      }
    ],
    "notes": "お is used for native Japanese words (kun-yomi); ご is used for Chinese-origin words (on-yomi).",
    "similarGrammar": "尊敬語 (Sonkeigo)",
    "differenceFromSimilar": "Bikago simply refines vocabulary without altering sentence hierarchy.",
    "commonMistakes": "Attaching お or ご to foreign loanwords (Katakana words).",
    "jlptTip": "Observe prefix matching: お茶, お金, ご家族."
  },
  {
    "id": "n4g_71",
    "grammarNumber": 71,
    "pattern": "〜 たび (tabi)",
    "japanese": "〜 たびに",
    "hiragana": "〜 たびに",
    "romaji": "tabi ni",
    "meaning": "Whenever / Every time that...",
    "explanation": "Expresses that whenever event A occurs, event B repeatedly and inevitably happens too.",
    "structure": "Verb (Dict Form) + たびに / Noun + のたびに",
    "category": "Frequency",
    "important": true,
    "exampleJp": "この写真を見るたびに、故郷を思い出す。",
    "exampleRomaji": "Kono shashin o miru tabi ni, furusato o omoidasu.",
    "exampleEn": "Whenever I look at this photograph, I remember my hometown.",
    "examples": [
      {
        "jp": "この写真を見るたびに、故郷を思い出す。",
        "romaji": "Kono shashin o miru tabi ni, furusato o omoidasu.",
        "en": "Whenever I look at this photograph, I remember my hometown."
      },
      {
        "jp": "旅行のたびに、ご当地のキーホルダーを買います。",
        "romaji": "Ryokou no tabi ni, gotouchi no kiuhorudaa o kaimasu.",
        "en": "Every time I go on a trip, I buy a local keychain."
      }
    ],
    "notes": "Cannot be used for routine daily natural occurrences (use と instead).",
    "similarGrammar": "〜 と (to)",
    "differenceFromSimilar": "たびに emphasizes repeated recurring situations across distinct occasions.",
    "commonMistakes": "Using Ta-form before たびに. Use Dict form or Noun + の!",
    "jlptTip": "Formula: Verb Dict + たびに / Noun + のたびに."
  },
  {
    "id": "n4g_72",
    "grammarNumber": 72,
    "pattern": "〜 すぎる (sugiru)",
    "japanese": "〜 すぎる",
    "hiragana": "〜 すぎる",
    "romaji": "sugiru",
    "meaning": "Too much / Excessive",
    "explanation": "Expresses that an action or quality exceeds acceptable or reasonable bounds.",
    "structure": "Verb Stem + すぎる | I-adj (drop い) + すぎる | Na-adj + すぎる",
    "category": "Degree & Extent",
    "important": true,
    "exampleJp": "昨晩はお酒を飲みすぎました。",
    "exampleRomaji": "Sakuban wa osake o nomisugimashita.",
    "exampleEn": "I drank too much alcohol last night.",
    "examples": [
      {
        "jp": "昨晩はお酒を飲みすぎました。",
        "romaji": "Sakuban wa osake o nomisugimashita.",
        "en": "I drank too much alcohol last night."
      },
      {
        "jp": "この問題は複雑すぎます。",
        "romaji": "Kono mondai wa fukuzatsusugimasu.",
        "en": "This problem is overly complicated."
      }
    ],
    "notes": "Conjugates as a Group 2 verb (すぎます, すぎた, すぎない).",
    "similarGrammar": "〜 あまり (amari)",
    "differenceFromSimilar": "すぎる indicates exceeding physical or qualitative limits.",
    "commonMistakes": "Keeping い on I-adjectives before すぎる (×高いいすぎる -> ○高すぎる).",
    "jlptTip": "Watch for stem dropping: おいしい -> おいしすぎる."
  },
  {
    "id": "n4g_73",
    "grammarNumber": 73,
    "pattern": "〜 くらい / ぐらい (kurai / gurai)",
    "japanese": "〜 くらい / ぐらい",
    "hiragana": "〜 くらい / ぐらい",
    "romaji": "kurai / gurai",
    "meaning": "About / Approximately / To the extent that",
    "explanation": "Expresses an approximate quantity, time duration, or degree of state.",
    "structure": "Number/Quantity + くらい / Verb Plain + くらい",
    "category": "Approximation",
    "important": true,
    "exampleJp": "ここから駅まで15分くらいかかります。",
    "exampleRomaji": "Koko kara eki made juugofun kurai kakarimasu.",
    "exampleEn": "It takes about 15 minutes from here to the station.",
    "examples": [
      {
        "jp": "ここから駅まで15分くらいかかります。",
        "romaji": "Koko kara eki made juugofun kurai kakarimasu.",
        "en": "It takes about 15 minutes from here to the station."
      },
      {
        "jp": "声を枯らすくらい大声で叫びました。",
        "romaji": "Koe o karasu kurai oogoe de sakabimashita.",
        "en": "I shouted so loud to the extent of losing my voice."
      }
    ],
    "notes": "くらい and ぐらい are interchangeable.",
    "similarGrammar": "〜 ごろ (goro)",
    "differenceFromSimilar": "ごろ is used for specific points in time (3時ごろ); くらい is used for durations (3時間くらい).",
    "commonMistakes": "Using ごろ for durations of time.",
    "jlptTip": "Duration = くらい; Point in time = ごろ."
  },
  {
    "id": "n4g_74",
    "grammarNumber": 74,
    "pattern": "〜 ほど (hodo)",
    "japanese": "〜 ほど",
    "hiragana": "〜 ほど",
    "romaji": "hodo",
    "meaning": "To the extent that... / Not as... as...",
    "explanation": "Expresses degree or comparative extent ('not as... as' when paired with negative).",
    "structure": "N1 は N2 ほど + Negative Adjective/Verb",
    "category": "Comparison",
    "important": true,
    "exampleJp": "今日は昨日ほど寒くありません。",
    "exampleRomaji": "Kyou wa kinou hodo samuku arimasen.",
    "exampleEn": "Today is not as cold as yesterday.",
    "examples": [
      {
        "jp": "今日は昨日ほど寒くありません。",
        "romaji": "Kyou wa kinou hodo samuku arimasen.",
        "en": "Today is not as cold as yesterday."
      },
      {
        "jp": "山下さんは田中さんほど背が高くないです。",
        "romaji": "Yamashita-san wa Tanaka-san hodo se ga takakunai desu.",
        "en": "Yamashita-san is not as tall as Tanaka-san."
      }
    ],
    "notes": "Comparative ほど MUST be paired with negative ending.",
    "similarGrammar": "〜 より (yori)",
    "differenceFromSimilar": "N1 は N2 より Adj = N1 is more Adj than N2; N1 は N2 ほど Adj-nai = N1 is not as Adj as N2.",
    "commonMistakes": "Using affirmative ending with comparative ほど.",
    "jlptTip": "Comparative test formula: N2 ほど + NEGATIVE."
  },
  {
    "id": "n4g_75",
    "grammarNumber": 75,
    "pattern": "〜 みたい (mitai)",
    "japanese": "〜 みたいだ / みたいに",
    "hiragana": "〜 みたい",
    "romaji": "mitai",
    "meaning": "Like / Resembling / Seems like (Casual)",
    "explanation": "Expresses similarity, resemblance, or conjecture based on appearance.",
    "structure": "Noun / Plain Form + みたいだ (Noun + みたいに + Verb)",
    "category": "Similarity",
    "important": true,
    "exampleJp": "彼はまるで鳥のように/鳥みたいに自由に飛んだ。",
    "exampleRomaji": "Kare wa marude tori mitai ni jiyuu ni tonda.",
    "exampleEn": "He flew freely just like a bird.",
    "examples": [
      {
        "jp": "彼はまるで鳥みたいに自由に飛んだ。",
        "romaji": "Kare wa marude tori mitai ni jiyuu ni tonda.",
        "en": "He flew freely just like a bird."
      },
      {
        "jp": "外は雨が降っているみたいです。",
        "romaji": "Soto wa ame ga futte iru mitai desu.",
        "en": "It looks like it's raining outside."
      }
    ],
    "notes": "Conjugates like a Na-adjective (みたいだ, みたいに, みたいな).",
    "similarGrammar": "〜 ようだ (you da)",
    "differenceFromSimilar": "みたいだ is casual spoken version of ようだ.",
    "commonMistakes": "Adding の between noun and みたい (e.g. ×鳥のみたい). Attach directly!",
    "jlptTip": "Direct attachment to Nouns: Noun + みたい."
  },
  {
    "id": "n4g_76",
    "grammarNumber": 76,
    "pattern": "〜 に関して / 〜 について (ni kan shite / ni tsuite)",
    "japanese": "〜 に関して / 〜 について",
    "hiragana": "〜 にかんして / 〜 について",
    "romaji": "ni kan shite / ni tsuite",
    "meaning": "Regarding / Concerning / About",
    "explanation": "States the topic or subject matter being discussed, researched, or reported.",
    "structure": "Noun + について / に関して (Noun + についての + Noun)",
    "category": "Noun Grammar",
    "important": true,
    "exampleJp": "日本の歴史について調べています。",
    "exampleRomaji": "Nihon no rekishi ni tsuite shirabete imasu.",
    "exampleEn": "I am researching about Japanese history.",
    "examples": [
      {
        "jp": "日本の歴史について調べています。",
        "romaji": "Nihon no rekishi ni tsuite shirabete imasu.",
        "en": "I am researching about Japanese history."
      },
      {
        "jp": "この問題に関して質問があります。",
        "romaji": "Kono mondai ni kan shite shitsumon ga arimasu.",
        "en": "I have a question regarding this issue."
      }
    ],
    "notes": "に関して is more formal than について.",
    "similarGrammar": "〜 に対して (ni tai shite)",
    "differenceFromSimilar": "について is 'about' a topic; に対して is 'towards/against' a target.",
    "commonMistakes": "Using について without particle の when modifying a noun (use についての).",
    "jlptTip": "Noun + についての + Noun (e.g. 環境問題についての本)."
  },
  {
    "id": "n4g_77",
    "grammarNumber": 77,
    "pattern": "〜 のだ / 〜 んです (noda / ndesu)",
    "japanese": "〜 のだ / 〜 んです",
    "hiragana": "〜 のだ / 〜 んです",
    "romaji": "noda / ndesu",
    "meaning": "The reason is that... / Explaining circumstances",
    "explanation": "Used when providing an explanation, seeking clarification, or giving background context for a situation.",
    "structure": "Plain Form + んです (Na-adj / Noun + なんです)",
    "category": "Explanation",
    "important": true,
    "exampleJp": "どうして遅れたのですか。- バスが来なかったんです。",
    "exampleRomaji": "Doushite okureta no desu ka. - Basu ga konakatta n desu.",
    "exampleEn": "Why were you late? - The reason is that the bus didn't come.",
    "examples": [
      {
        "jp": "どうして遅れたのですか。- バスが来なかったんです。",
        "romaji": "Doushite okureta no desu ka. - Basu ga konakatta n desu.",
        "en": "Why were you late? - The reason is that the bus didn't come."
      },
      {
        "jp": "頭が痛いんです。",
        "romaji": "Atama ga itai n desu.",
        "en": "It's that I have a headache (explaining why I look unwell)."
      }
    ],
    "notes": "Requires な before んです for Nouns and Na-adjectives (雨なんです, 病気なんです).",
    "similarGrammar": "〜 からです (kara desu)",
    "differenceFromSimilar": "んです provides shared contextual explanation; からです is direct factual reason.",
    "commonMistakes": "Omitting な after nouns before んです.",
    "jlptTip": "Essential for question-answer explanation dialogues!"
  }
];
