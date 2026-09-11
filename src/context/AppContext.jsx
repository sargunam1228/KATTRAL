import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeView, setActiveView] = useState('home');
  
  // Active Logged-in User Session (Persisted in localStorage)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('kattral_current_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('kattral_theme') !== 'light';
  });

  // User-isolated state loaders based on currentUser.email
  const userEmail = currentUser?.email ? currentUser.email.toLowerCase().trim() : 'guest';

  const [isN4Unlocked, setIsN4Unlocked] = useState(() => {
    if (!currentUser) return false;
    return localStorage.getItem(`kattral_n4_unlocked_${userEmail}`) === 'true';
  });

  const [n5Progress, setN5Progress] = useState(() => {
    if (!currentUser) return 0;
    const saved = localStorage.getItem(`kattral_n5_progress_${userEmail}`);
    return saved ? parseInt(saved, 10) : 35;
  });

  const [n4Progress, setN4Progress] = useState(() => {
    if (!currentUser) return 0;
    const saved = localStorage.getItem(`kattral_n4_progress_${userEmail}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [bookmarks, setBookmarks] = useState(() => {
    if (!currentUser) return [];
    const saved = localStorage.getItem(`kattral_bookmarks_${userEmail}`);
    return saved ? JSON.parse(saved) : [
      { id: 'v44', category: 'Vocab', japanese: '食べる', romaji: 'Taberu', english: 'To eat' },
      { id: 'k1', category: 'Kanji', japanese: '日', romaji: 'Sun / Day', english: 'Sun / Day' },
      { id: 'g1', category: 'Grammar', japanese: '〜 です', romaji: 'desu', english: 'To be' }
    ];
  });

  const [userProfile, setUserProfile] = useState(() => {
    if (!currentUser) return { username: 'Learner', email: '', level: 'JLPT N5', streak: 0, completedLessons: 0, quizAverage: 0, vocabLearned: 0, kanjiLearned: 0, avatar: '🌸', profilePic: null };
    const saved = localStorage.getItem(`kattral_user_${userEmail}`);
    return saved ? JSON.parse(saved) : {
      username: currentUser.username || userEmail.split('@')[0],
      email: userEmail,
      level: 'JLPT N5',
      streak: 0,
      completedLessons: 18,
      quizAverage: 92,
      vocabLearned: 670,
      kanjiLearned: 14,
      avatar: '🌸',
      profilePic: null
    };
  });

  const [vocabStats, setVocabStats] = useState(() => {
    if (!currentUser) return { wordsViewed: 0, wordsPracticed: 0, testAttempts: 0, bestTestScore: 0 };
    const saved = localStorage.getItem(`kattral_vocab_stats_${userEmail}`);
    return saved ? JSON.parse(saved) : {
      wordsViewed: 142,
      wordsPracticed: 85,
      testAttempts: 4,
      bestTestScore: 95
    };
  });

  const [dailyStats, setDailyStats] = useState(() => {
    if (!currentUser) return {};
    const saved = localStorage.getItem(`kattral_daily_stats_${userEmail}`);
    return saved ? JSON.parse(saved) : {};
  });

  const [completedItemIds, setCompletedItemIds] = useState(() => {
    if (!currentUser) return {};
    const saved = localStorage.getItem(`kattral_completed_item_ids_${userEmail}`);
    return saved ? JSON.parse(saved) : {};
  });

  const [testProgressState, setTestProgressState] = useState(() => {
    if (!currentUser) return null;
    const saved = localStorage.getItem(`kattral_test_progress_${userEmail}`);
    return saved ? JSON.parse(saved) : null;
  });

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      if (testProgressState) {
        localStorage.setItem(`kattral_test_progress_${emailKey}`, JSON.stringify(testProgressState));
      }
    }
  }, [testProgressState, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_completed_item_ids_${emailKey}`, JSON.stringify(completedItemIds));
    }
  }, [completedItemIds, currentUser]);

  // Synchronize state changes to isolated user keys whenever logged in
  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_user_${emailKey}`, JSON.stringify(userProfile));
    }
  }, [userProfile, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_bookmarks_${emailKey}`, JSON.stringify(bookmarks));
    }
  }, [bookmarks, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_n5_progress_${emailKey}`, n5Progress.toString());
    }
  }, [n5Progress, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_n4_progress_${emailKey}`, n4Progress.toString());
    }
  }, [n4Progress, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_n4_unlocked_${emailKey}`, isN4Unlocked.toString());
    }
  }, [isN4Unlocked, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_vocab_stats_${emailKey}`, JSON.stringify(vocabStats));
    }
  }, [vocabStats, currentUser]);

  useEffect(() => {
    if (currentUser?.email) {
      const emailKey = currentUser.email.toLowerCase().trim();
      localStorage.setItem(`kattral_daily_stats_${emailKey}`, JSON.stringify(dailyStats));
    }
  }, [dailyStats, currentUser]);

  // Sync dark mode class with root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kattral_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kattral_theme', 'light');
    }
  }, [darkMode]);

  // Seed/Sync registered accounts registry
  useEffect(() => {
    const savedAccounts = localStorage.getItem('kattral_accounts');
    let accounts = savedAccounts ? JSON.parse(savedAccounts) : {};
    let updated = false;

    // Default accounts for testing if no accounts exist
    if (Object.keys(accounts).length === 0) {
      accounts['usera@example.com'] = { email: 'usera@example.com', password: 'password123', username: 'User A' };
      accounts['userb@example.com'] = { email: 'userb@example.com', password: 'password123', username: 'User B' };
      updated = true;
    }

    // Auto-sync any existing localStorage user keys into accounts
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('kattral_user_')) {
        const email = key.replace('kattral_user_', '');
        if (email && !accounts[email]) {
          try {
            const profile = JSON.parse(localStorage.getItem(key));
            accounts[email] = {
              email: email,
              password: 'password123',
              username: profile?.username || email.split('@')[0]
            };
            updated = true;
          } catch (e) {}
        }
      }
    }

    if (updated || !savedAccounts) {
      localStorage.setItem('kattral_accounts', JSON.stringify(accounts));
    }
  }, []);

  // LOGIN FUNCTION (Real Registered Login Only)
  const loginUser = (emailInput, passwordInput) => {
    const cleanEmail = emailInput.toLowerCase().trim();

    if (!cleanEmail || !passwordInput) {
      return { success: false, error: 'Please enter both email and password.' };
    }
    
    // Check registered accounts in localStorage
    const savedAccounts = localStorage.getItem('kattral_accounts');
    let accounts = {};
    if (savedAccounts) {
      try {
        accounts = JSON.parse(savedAccounts);
      } catch (e) {}
    }

    const account = accounts[cleanEmail];

    // Reject login if account does not exist or password is incorrect
    if (!account || account.password !== passwordInput) {
      return { 
        success: false, 
        error: 'Invalid email or password. Please check your credentials or click "Sign Up Free" to create an account.' 
      };
    }

    const userSession = {
      email: cleanEmail,
      username: account.username || cleanEmail.split('@')[0]
    };

    // Check existing data for this user
    const existingProfile = localStorage.getItem(`kattral_user_${cleanEmail}`);
    const existingBookmarks = localStorage.getItem(`kattral_bookmarks_${cleanEmail}`);
    const existingN5 = localStorage.getItem(`kattral_n5_progress_${cleanEmail}`);
    const existingN4 = localStorage.getItem(`kattral_n4_progress_${cleanEmail}`);
    const existingN4Unlocked = localStorage.getItem(`kattral_n4_unlocked_${cleanEmail}`);
    const existingVocabStats = localStorage.getItem(`kattral_vocab_stats_${cleanEmail}`);
    const existingDailyStats = localStorage.getItem(`kattral_daily_stats_${cleanEmail}`);
    const existingCompletedItems = localStorage.getItem(`kattral_completed_item_ids_${cleanEmail}`);
    const existingTestProgress = localStorage.getItem(`kattral_test_progress_${cleanEmail}`);

    if (existingProfile) {
      // Restore existing user data
      setUserProfile(JSON.parse(existingProfile));
      setBookmarks(existingBookmarks ? JSON.parse(existingBookmarks) : []);
      setN5Progress(existingN5 ? parseInt(existingN5, 10) : 0);
      setN4Progress(existingN4 ? parseInt(existingN4, 10) : 0);
      setIsN4Unlocked(existingN4Unlocked === 'true');
      setVocabStats(existingVocabStats ? JSON.parse(existingVocabStats) : { wordsViewed: 0, wordsPracticed: 0, testAttempts: 0, bestTestScore: 0 });
      setDailyStats(existingDailyStats ? JSON.parse(existingDailyStats) : {});
      setCompletedItemIds(existingCompletedItems ? JSON.parse(existingCompletedItems) : {});
      setTestProgressState(existingTestProgress ? JSON.parse(existingTestProgress) : null);
    } else {
      // Initialize NEW user fresh data isolated to this email
      const newProfile = {
        username: userSession.username,
        email: cleanEmail,
        level: 'JLPT N5',
        streak: 0,
        completedLessons: 0,
        quizAverage: 0,
        vocabLearned: 0,
        kanjiLearned: 0,
        avatar: '🌸'
      };
      setUserProfile(newProfile);
      setBookmarks([]);
      setN5Progress(0);
      setN4Progress(0);
      setIsN4Unlocked(false);
      setVocabStats({ wordsViewed: 0, wordsPracticed: 0, testAttempts: 0, bestTestScore: 0 });
      setDailyStats({});
      setCompletedItemIds({});
      setTestProgressState(null);

      // Save initial keys for new user
      localStorage.setItem(`kattral_user_${cleanEmail}`, JSON.stringify(newProfile));
      localStorage.setItem(`kattral_bookmarks_${cleanEmail}`, JSON.stringify([]));
      localStorage.setItem(`kattral_n5_progress_${cleanEmail}`, '0');
      localStorage.setItem(`kattral_n4_progress_${cleanEmail}`, '0');
      localStorage.setItem(`kattral_n4_unlocked_${cleanEmail}`, 'false');
      localStorage.setItem(`kattral_vocab_stats_${cleanEmail}`, JSON.stringify({ wordsViewed: 0, wordsPracticed: 0, testAttempts: 0, bestTestScore: 0 }));
      localStorage.setItem(`kattral_daily_stats_${cleanEmail}`, JSON.stringify({}));
      localStorage.setItem(`kattral_completed_item_ids_${cleanEmail}`, JSON.stringify({}));
      localStorage.removeItem(`kattral_test_progress_${cleanEmail}`);
    }

    // Save active session
    localStorage.setItem('kattral_current_user', JSON.stringify(userSession));
    setCurrentUser(userSession);
    setIsAuthOpen(false);
    setActiveView('home');

    return { success: true };
  };

  // SIGNUP / REGISTER FUNCTION
  const signupUser = (emailInput, passwordInput, usernameInput) => {
    const cleanEmail = emailInput.toLowerCase().trim();
    if (!cleanEmail || !passwordInput) {
      return { success: false, error: 'Email and password are required to create an account.' };
    }

    const savedAccounts = localStorage.getItem('kattral_accounts');
    let accounts = savedAccounts ? JSON.parse(savedAccounts) : {};

    if (accounts[cleanEmail]) {
      return { success: false, error: 'An account with this email already exists. Please Sign In.' };
    }

    accounts[cleanEmail] = {
      email: cleanEmail,
      password: passwordInput,
      username: usernameInput || cleanEmail.split('@')[0]
    };

    localStorage.setItem('kattral_accounts', JSON.stringify(accounts));

    // Log in newly created account
    return loginUser(cleanEmail, passwordInput);
  };

  // LOGOUT FUNCTION
  const logoutUser = () => {
    // End active session without deleting user learning data
    localStorage.removeItem('kattral_current_user');
    setCurrentUser(null);
    setActiveView('home');
  };

  const formatDateKey = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getTodayKey = () => formatDateKey(new Date());

  const recordActivityAttempt = (section, isCorrect) => {
    const today = getTodayKey();
    setDailyStats((prev) => {
      const todayData = prev[today] || {
        speakingCompleted: 0, speakingAttempts: 0, speakingCorrect: 0, speakingIncorrect: 0,
        writingCompleted: 0, writingAttempts: 0, writingCorrect: 0, writingIncorrect: 0,
        vocabCompleted: 0, vocabAttempts: 0, vocabCorrect: 0, vocabIncorrect: 0,
        listeningCompleted: 0, listeningAttempts: 0, listeningCorrect: 0, listeningIncorrect: 0,
        quizCompleted: 0, quizAttempts: 0, quizCorrect: 0, quizIncorrect: 0
      };

      const attemptsKey = `${section}Attempts`;
      const correctKey = `${section}Correct`;
      const incorrectKey = `${section}Incorrect`;
      const completedKey = `${section}Completed`;

      const updatedToday = {
        ...todayData,
        [attemptsKey]: (todayData[attemptsKey] || 0) + 1,
        [isCorrect ? correctKey : incorrectKey]: (todayData[isCorrect ? correctKey : incorrectKey] || 0) + 1,
        [completedKey]: isCorrect ? (todayData[completedKey] || 0) + 1 : (todayData[completedKey] || 0)
      };

      return {
        ...prev,
        [today]: updatedToday
      };
    });
  };

  const getTodayStats = () => {
    const today = getTodayKey();
    return dailyStats[today] || {
      speakingCompleted: 0, speakingAttempts: 0, speakingCorrect: 0, speakingIncorrect: 0,
      writingCompleted: 0, writingAttempts: 0, writingCorrect: 0, writingIncorrect: 0,
      vocabCompleted: 0, vocabAttempts: 0, vocabCorrect: 0, vocabIncorrect: 0,
      listeningCompleted: 0, listeningAttempts: 0, listeningCorrect: 0, listeningIncorrect: 0,
      quizCompleted: 0, quizAttempts: 0, quizCorrect: 0, quizIncorrect: 0
    };
  };

  const getStatsForDate = (dateStr) => {
    return dailyStats[dateStr] || {
      speakingCompleted: 0, speakingAttempts: 0, speakingCorrect: 0, speakingIncorrect: 0,
      writingCompleted: 0, writingAttempts: 0, writingCorrect: 0, writingIncorrect: 0,
      vocabCompleted: 0, vocabAttempts: 0, vocabCorrect: 0, vocabIncorrect: 0,
      listeningCompleted: 0, listeningAttempts: 0, listeningCorrect: 0, listeningIncorrect: 0,
      quizCompleted: 0, quizAttempts: 0, quizCorrect: 0, quizIncorrect: 0
    };
  };

  const isDayFullyCompleted = (dateStr) => {
    if (!dateStr) return false;
    const stats = getStatsForDate(dateStr);
    const vocabDone = (stats.vocabCompleted || 0) >= 5;
    const speakingDone = (stats.speakingCompleted || 0) >= 2;
    const writingDone = (stats.writingCompleted || 0) >= 2;
    const listeningDone = (stats.listeningCompleted || 0) >= 2;
    const quizDone = (stats.quizCompleted || 0) >= 1;

    return vocabDone && speakingDone && writingDone && listeningDone && quizDone;
  };

  const calculateStreak = () => {
    const today = new Date();
    let current = new Date(today);
    let streakCount = 0;

    const todayStr = formatDateKey(current);
    const isTodayDone = isDayFullyCompleted(todayStr);

    if (!isTodayDone) {
      // If today is not fully completed yet, check yesterday to start counting consecutive streak
      current.setDate(current.getDate() - 1);
    }

    while (true) {
      const dateStr = formatDateKey(current);
      if (isDayFullyCompleted(dateStr)) {
        streakCount++;
        current.setDate(current.getDate() - 1);
      } else {
        break;
      }
    }

    return streakCount;
  };

  // Sync userProfile.streak dynamically with calculated streak from actual dailyStats
  useEffect(() => {
    const currentCalculatedStreak = calculateStreak();
    setUserProfile((prev) => {
      if (prev && prev.streak !== currentCalculatedStreak) {
        return { ...prev, streak: currentCalculatedStreak };
      }
      return prev;
    });
  }, [dailyStats]);

  const getWeekDaysWithStatus = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 is Sun, 1 is Mon, ... 6 is Sat
    const distanceToMon = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(now);
    monday.setDate(now.getDate() + distanceToMon);

    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return dayNames.map((name, index) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + index);
      const dateStr = formatDateKey(d);
      const completed = isDayFullyCompleted(dateStr);
      const stats = getStatsForDate(dateStr);
      return {
        name,
        dateStr,
        completed,
        stats
      };
    });
  };

  const toggleBookmark = (item) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === item.id);
      if (exists) {
        return prev.filter((b) => b.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isBookmarked = (id) => {
    return bookmarks.some((b) => b.id === id);
  };

  const recordWordView = () => {
    setVocabStats((prev) => ({
      ...prev,
      wordsViewed: prev.wordsViewed + 1
    }));
  };

  const recordTestAttempt = (scorePercent) => {
    setVocabStats((prev) => ({
      ...prev,
      testAttempts: prev.testAttempts + 1,
      bestTestScore: Math.max(prev.bestTestScore, scorePercent)
    }));
  };

  const playSpeech = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const markItemCompleted = (categoryKey, itemId) => {
    if (!itemId) return;
    const idStr = String(itemId);
    setCompletedItemIds((prev) => {
      const list = prev[categoryKey] || [];
      if (list.includes(idStr)) return prev;
      return {
        ...prev,
        [categoryKey]: [...list, idStr]
      };
    });
  };

  const getCategoryProgress = (categoryKey, totalItems) => {
    if (!totalItems || totalItems <= 0) return { completed: 0, total: 0, percent: 0, formatted: '0%' };
    const list = completedItemIds[categoryKey] || [];
    const completedCount = Math.min(list.length, totalItems);
    if (completedCount === 0) return { completed: 0, total: totalItems, percent: 0, formatted: '0%' };
    if (completedCount >= totalItems) return { completed: totalItems, total: totalItems, percent: 100, formatted: '100%' };

    const raw = (completedCount / totalItems) * 100;
    const rounded = Math.round(raw * 100) / 100;
    return {
      completed: completedCount,
      total: totalItems,
      percent: rounded,
      formatted: `${rounded}%`
    };
  };

  // Compute overall level percentages dynamically
  const n4TotalOverall = 972;
  const n4CompletedOverall = Math.min(
    n4TotalOverall,
    (completedItemIds.n4Vocab?.length || 0) +
    (completedItemIds.n4Kanji?.length || 0) +
    (completedItemIds.n4Grammar?.length || 0) +
    (completedItemIds.n4MockTests?.length || 0)
  );
  const dynamicN4Progress = n4CompletedOverall === 0 
    ? 0 
    : n4CompletedOverall >= n4TotalOverall 
    ? 100 
    : Math.round(((n4CompletedOverall / n4TotalOverall) * 100) * 100) / 100;

  const n5TotalOverall = 913;
  const n5CompletedOverall = Math.min(
    n5TotalOverall,
    (completedItemIds.n5Hiragana?.length || 0) +
    (completedItemIds.n5Katakana?.length || 0) +
    (completedItemIds.n5Vocab?.length || 0) +
    (completedItemIds.n5Grammar?.length || 0) +
    (completedItemIds.n5Kanji?.length || 0) +
    (completedItemIds.n5Listening?.length || 0)
  );
  const dynamicN5Progress = n5CompletedOverall === 0 
    ? 0 
    : n5CompletedOverall >= n5TotalOverall 
    ? 100 
    : Math.round(((n5CompletedOverall / n5TotalOverall) * 100) * 100) / 100;

  const toggleN4Lock = () => {
    setIsN4Unlocked((prev) => !prev);
  };

  const completeN5 = () => {
    setN5Progress(100);
    setIsN4Unlocked(true);
  };


  return (
    <AppContext.Provider
      value={{
        currentUser,
        loginUser,
        signupUser,
        logoutUser,
        activeView,
        setActiveView,
        darkMode,
        setDarkMode,
        isN4Unlocked,
        setIsN4Unlocked,
        toggleN4Lock,
        n5Progress: dynamicN5Progress,
        setN5Progress,
        n4Progress: dynamicN4Progress,
        setN4Progress,
        n5ProgressFormatted: `${dynamicN5Progress}%`,
        n4ProgressFormatted: `${dynamicN4Progress}%`,
        completedItemIds,
        markItemCompleted,
        getCategoryProgress,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        userProfile,
        setUserProfile,
        vocabStats,
        recordWordView,
        recordTestAttempt,
        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
        isSearchOpen,
        setIsSearchOpen,
        playSpeech,
        completeN5,
        dailyStats,
        getTodayStats,
        getStatsForDate,
        isDayFullyCompleted,
        calculateStreak,
        getWeekDaysWithStatus,
        recordActivityAttempt,
        testProgressState,
        setTestProgressState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
