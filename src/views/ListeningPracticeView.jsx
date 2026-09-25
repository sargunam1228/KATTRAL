import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Headphones, ArrowRight, BookOpen, Video } from 'lucide-react';

const n5VideosData = [
  { id: 'n5-01', videoId: 'FfvaZiPoDhU', title: 'N5 Listening 01', embedUrl: 'https://www.youtube.com/embed/FfvaZiPoDhU', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-02', videoId: 'u3f1xLJ-bTw', title: 'N5 Listening 02', embedUrl: 'https://www.youtube.com/embed/u3f1xLJ-bTw', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-03', videoId: 'yAmS-S51VZk', title: 'N5 Listening 03', embedUrl: 'https://www.youtube.com/embed/yAmS-S51VZk', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-04', videoId: 'XkSlgMyJWCA', title: 'N5 Listening 04', embedUrl: 'https://www.youtube.com/embed/XkSlgMyJWCA', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-05', videoId: 'kEcicvPMT2A', title: 'N5 Listening 05', embedUrl: 'https://www.youtube.com/embed/kEcicvPMT2A', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-06', videoId: 'i1MEgFlo1fw', title: 'N5 Listening 06', embedUrl: 'https://www.youtube.com/embed/i1MEgFlo1fw', defaultChannel: 'RP N Listening 言葉' },
  { id: 'n5-07', videoId: 'f9xIi2z5RVk', title: 'N5 Listening 07', embedUrl: 'https://www.youtube.com/embed/f9xIi2z5RVk', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-08', videoId: '728Aed4Las8', title: 'N5 Listening 08', embedUrl: 'https://www.youtube.com/embed/728Aed4Las8', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-09', videoId: '3xZC63pZgm8', title: 'N5 Listening 09', embedUrl: 'https://www.youtube.com/embed/3xZC63pZgm8', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-10', videoId: 'btp8J4GdjRE', title: 'N5 Listening 10', embedUrl: 'https://www.youtube.com/embed/btp8J4GdjRE', defaultChannel: 'Japanese Easy Learning' },
  { id: 'n5-11', videoId: '41qsPK814RA', title: 'N5 Listening 11', embedUrl: 'https://www.youtube.com/embed/41qsPK814RA', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-12', videoId: 'eQihXnnQchI', title: 'N5 Listening 12', embedUrl: 'https://www.youtube.com/embed/eQihXnnQchI', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-13', videoId: 'S3tFBqyr-xU', title: 'N5 Listening 13', embedUrl: 'https://www.youtube.com/embed/S3tFBqyr-xU', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-14', videoId: 'CypTptYQYAU', title: 'N5 Listening 14', embedUrl: 'https://www.youtube.com/embed/CypTptYQYAU', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-15', videoId: 'Wem4SxV7MG4', title: 'N5 Listening 15', embedUrl: 'https://www.youtube.com/embed/Wem4SxV7MG4', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-16', videoId: 'NMED5muUhvA', title: 'N5 Listening 16', embedUrl: 'https://www.youtube.com/embed/NMED5muUhvA', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-17', videoId: 'dLIa3UaOOis', title: 'N5 Listening 17', embedUrl: 'https://www.youtube.com/embed/dLIa3UaOOis', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-18', videoId: 'dLIa3UaOOis', title: 'N5 Listening 18', embedUrl: 'https://www.youtube.com/embed/dLIa3UaOOis', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-19', videoId: 'jCW2oH08IuQ', title: 'N5 Listening 19', embedUrl: 'https://www.youtube.com/embed/jCW2oH08IuQ', defaultChannel: 'The Nihongo Nook' },
  { id: 'n5-20', videoId: '5wLzw3DINbc', title: 'N5 Listening 20', embedUrl: 'https://www.youtube.com/embed/5wLzw3DINbc', defaultChannel: 'The Nihongo Nook' }
];

const n4VideosData = [
  { id: 'n4-01', videoId: '2Qk4Hq1WqUA', title: 'N4 Listening 01', embedUrl: 'https://www.youtube.com/embed/2Qk4Hq1WqUA', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-02', videoId: '7vv2YNmlROc', title: 'N4 Listening 02', embedUrl: 'https://www.youtube.com/embed/7vv2YNmlROc', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-03', videoId: 'v38qUhLDFTM', title: 'N4 Listening 03', embedUrl: 'https://www.youtube.com/embed/v38qUhLDFTM', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-04', videoId: 'rXA0osbfcn4', title: 'N4 Listening 04', embedUrl: 'https://www.youtube.com/embed/rXA0osbfcn4', defaultChannel: 'YouTube Channel' },
  { id: 'n4-05', videoId: 'mrzhud1WQzY', title: 'N4 Listening 05', embedUrl: 'https://www.youtube.com/embed/mrzhud1WQzY', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-06', videoId: '7cDxxYs6wKg', title: 'N4 Listening 06', embedUrl: 'https://www.youtube.com/embed/7cDxxYs6wKg', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-07', videoId: 'bOV-cBBFy3o', title: 'N4 Listening 07', embedUrl: 'https://www.youtube.com/embed/bOV-cBBFy3o', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-08', videoId: 'zvoZffTF_cE', title: 'N4 Listening 08', embedUrl: 'https://www.youtube.com/embed/zvoZffTF_cE', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-09', videoId: 'R1Oy-PqXhz4', title: 'N4 Listening 09', embedUrl: 'https://www.youtube.com/embed/R1Oy-PqXhz4', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-10', videoId: 'KGvhfsQxNCE', title: 'N4 Listening 10', embedUrl: 'https://www.youtube.com/embed/KGvhfsQxNCE', defaultChannel: 'The Nihongo Nook' },
  { id: 'n4-11', videoId: 'mmxCPix4_-E', title: 'N4 Listening 11', embedUrl: 'https://www.youtube.com/embed/mmxCPix4_-E', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-12', videoId: 'UwivT0GaW08', title: 'N4 Listening 12', embedUrl: 'https://www.youtube.com/embed/UwivT0GaW08', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-13', videoId: 'DMuvFyn4MwI', title: 'N4 Listening 13', embedUrl: 'https://www.youtube.com/embed/DMuvFyn4MwI', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-14', videoId: 'qNLkKC-mxzU', title: 'N4 Listening 14', embedUrl: 'https://www.youtube.com/embed/qNLkKC-mxzU', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-15', videoId: '7KQIoT6PdOE', title: 'N4 Listening 15', embedUrl: 'https://www.youtube.com/embed/7KQIoT6PdOE', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-16', videoId: 'hQ2eZhV8zNU', title: 'N4 Listening 16', embedUrl: 'https://www.youtube.com/embed/hQ2eZhV8zNU', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-17', videoId: '28qRgd5_fuM', title: 'N4 Listening 17', embedUrl: 'https://www.youtube.com/embed/28qRgd5_fuM', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-18', videoId: '46tW01J6_qQ', title: 'N4 Listening 18', embedUrl: 'https://www.youtube.com/embed/46tW01J6_qQ', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-19', videoId: 'SFyBI5Ntrd0', title: 'N4 Listening 19', embedUrl: 'https://www.youtube.com/embed/SFyBI5Ntrd0', defaultChannel: 'JLPT Test 🇯🇵' },
  { id: 'n4-20', videoId: 'WAJX9j0Aw3g', title: 'N4 Listening 20', embedUrl: 'https://www.youtube.com/embed/WAJX9j0Aw3g', defaultChannel: 'JLPT Test 🇯🇵' }
];

export const ListeningPracticeView = () => {
  const { setActiveView, navigateBack, recordActivityAttempt } = useApp();
  
  // Level state: null (selection screen) | 'n5' | 'n4'
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [channelNames, setChannelNames] = useState({});
  const playersRef = useRef({});

  // Sync back navigation between selected level and level list
  useEffect(() => {
    const handlePop = (e) => {
      if (selectedLevel && (!e.state || !e.state.level)) {
        pauseAllPlayers();
        setSelectedLevel(null);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, [selectedLevel]);

  // Pause all playing videos
  const pauseAllPlayers = () => {
    // 1. Pause YT API player instances
    Object.values(playersRef.current).forEach((player) => {
      try {
        if (player && typeof player.pauseVideo === 'function') {
          player.pauseVideo();
        }
      } catch (e) {}
    });

    // 2. Fallback postMessage to all iframe elements
    document.querySelectorAll('iframe').forEach((iframe) => {
      try {
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
          '*'
        );
      } catch (e) {}
    });
  };

  const handleSelectLevel = (level) => {
    pauseAllPlayers();
    setSelectedLevel(level);
    if (level && recordActivityAttempt) {
      recordActivityAttempt('listening', true);
    }
    if (level && typeof window !== 'undefined' && window.history?.pushState) {
      window.history.pushState({ view: 'listening', level }, '', `#listening-${level}`);
    }
  };

  // Fetch YouTube oEmbed channel metadata for all videos
  useEffect(() => {
    const allVideos = [...n5VideosData, ...n4VideosData];
    allVideos.forEach((video) => {
      if (!channelNames[video.videoId]) {
        fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.videoId}&format=json`)
          .then((res) => res.json())
          .then((data) => {
            if (data && data.author_name) {
              setChannelNames((prev) => ({
                ...prev,
                [video.videoId]: data.author_name
              }));
            }
          })
          .catch(() => {
            // Fallback to defaultChannel if oEmbed fetch fails
          });
      }
    });
  }, []);

  // Listen for YouTube postMessage playing state and pause all other players
  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (
          (data?.event === 'infoDelivery' && data?.info?.playerState === 1) ||
          (data?.event === 'onStateChange' && data?.info === 1)
        ) {
          const activeIframe = Array.from(document.querySelectorAll('iframe')).find(
            (iframe) => iframe.contentWindow === event.source
          );
          
          if (activeIframe) {
            document.querySelectorAll('iframe').forEach((iframe) => {
              if (iframe !== activeIframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(
                  JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
                  '*'
                );
              }
            });
          }
        }
      } catch (e) {
        // ignore JSON parse errors from other message events
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Initialize YT Players when level changes
  const activeVideos = selectedLevel === 'n5' ? n5VideosData : n4VideosData;

  useEffect(() => {
    if (!selectedLevel) return;

    const initPlayers = () => {
      if (!window.YT || !window.YT.Player) return;

      activeVideos.forEach((video) => {
        const elementId = `yt-player-${video.id}`;
        const elem = document.getElementById(elementId);
        if (elem && !playersRef.current[video.id]) {
          try {
            playersRef.current[video.id] = new window.YT.Player(elementId, {
              events: {
                onStateChange: (event) => {
                  if (event.data === 1) { // 1 = PLAYING
                    Object.keys(playersRef.current).forEach((otherId) => {
                      if (otherId !== video.id) {
                        const p = playersRef.current[otherId];
                        if (p && typeof p.pauseVideo === 'function') {
                          try {
                            p.pauseVideo();
                          } catch (err) {}
                        }
                      }
                    });
                  }
                }
              }
            });
          } catch (e) {
            // postMessage fallback handles this
          }
        }
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayers;
    } else {
      initPlayers();
    }

    return () => {
      pauseAllPlayers();
      Object.values(playersRef.current).forEach((player) => {
        try {
          if (player && typeof player.destroy === 'function') {
            player.destroy();
          }
        } catch (e) {}
      });
      playersRef.current = {};
    };
  }, [selectedLevel]);

  // 1. LEVEL SELECTION SCREEN
  if (!selectedLevel) {
    return (
      <div className="py-12 container-custom max-w-4xl space-y-8 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateBack('practice')}
            className="btn-secondary py-2 px-4 text-xs font-bold"
          >
            ← Back to Practice Hub
          </button>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Headphones className="w-4 h-4 text-red-500" />
            <span>JLPT Listening Center</span>
          </div>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-2xl border border-slate-800 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-red-600/30 text-red-400 border border-red-500/30">
            AUTHENTIC LISTENING PRACTICE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Japanese Listening Practice
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Select your JLPT level to watch authentic listening videos, dialogue practice, and comprehension exercises.
          </p>
        </div>

        {/* Level Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* N5 LISTENING CARD */}
          <div 
            onClick={() => handleSelectLevel('n5')}
            className="kattral-card p-8 space-y-6 cursor-pointer group hover:border-red-500 dark:hover:border-red-500 transition-all hover:scale-[1.02] shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                BEGINNER LEVEL
              </span>
              <BookOpen className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <span>N5 Listening</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500 text-white font-bold">
                  20 Videos
                </span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                JLPT N5 authentic listening practice videos including Task Completion, Key Details, and Verbal Expressions.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
              <span>Open N5 Listening Videos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* N4 LISTENING CARD */}
          <div 
            onClick={() => handleSelectLevel('n4')}
            className="kattral-card p-8 space-y-6 cursor-pointer group hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:scale-[1.02] shadow-xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                ELEMENTARY LEVEL
              </span>
              <Headphones className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                <span>N4 Listening</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-blue-600 text-white font-bold">
                  20 Videos
                </span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                JLPT N4 elementary listening practice videos with authentic dialogue drills and test questions.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>Open N4 Listening Videos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const levelTitle = selectedLevel === 'n5' ? 'JLPT N5 Listening Practice' : 'JLPT N4 Listening Practice';
  const levelBadgeColor = selectedLevel === 'n5' 
    ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' 
    : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
  const headerGradient = selectedLevel === 'n5'
    ? 'from-slate-900 via-rose-950 to-slate-900'
    : 'from-slate-900 via-indigo-950 to-slate-900';

  return (
    <div className="py-10 container-custom max-w-5xl space-y-8 animate-fadeIn">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => {
            if (typeof window !== 'undefined' && window.location.hash.includes('listening-')) {
              window.history.back();
            } else {
              handleSelectLevel(null);
            }
          }}
          className="btn-secondary py-2 px-4 text-xs font-bold"
        >
          ← Change Level (N5 / N4)
        </button>

        <div className="flex items-center gap-2">
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${levelBadgeColor}`}>
            {selectedLevel === 'n5' ? 'N5 LISTENING PRACTICE' : 'N4 LISTENING PRACTICE'}
          </span>
          <button
            onClick={() => handleSelectLevel(selectedLevel === 'n5' ? 'n4' : 'n5')}
            className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors"
          >
            Switch to {selectedLevel === 'n5' ? 'N4' : 'N5'}
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className={`bg-gradient-to-r ${headerGradient} text-white p-6 sm:p-8 rounded-3xl shadow-2xl space-y-2 border border-slate-800 relative overflow-hidden`}>
        <div className="flex items-center gap-2">
          <Video className="w-5 h-5 text-red-400" />
          <span className="text-xs font-black uppercase tracking-widest text-slate-300">
            AUTHENTIC VIDEO DRILLS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold">{levelTitle}</h2>
        <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
          Watch all 20 {selectedLevel.toUpperCase()} listening videos below for authentic JLPT practice.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeVideos.map((video, index) => {
          const channelName = channelNames[video.videoId] || video.defaultChannel || "YouTube Channel";
          return (
            <div key={video.id} className="kattral-card p-5 sm:p-6 space-y-4 shadow-xl border border-slate-200 dark:border-slate-800 rounded-3xl">
              <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2 max-w-full">
                    <Video className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="break-words">{video.title}</span>
                  </h3>
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                    {String(index + 1).padStart(2, '0')} / 20
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-slate-400 dark:text-slate-500 font-semibold">Channel:</span>
                  <span className="text-red-600 dark:text-red-400 font-extrabold break-words">{channelName}</span>
                </div>
              </div>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-slate-200 dark:border-slate-800 shadow-md">
                <iframe
                  id={`yt-player-${video.id}`}
                  src={`${video.embedUrl}?enablejsapi=1`}
                  title={`${video.title} - ${channelName}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full absolute inset-0 rounded-2xl"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



