import React, { useState, useEffect, useRef } from 'react';

export const IntroVideo = () => {
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [videoSrc, setVideoSrc] = useState('/video/desktop.mp4');
  const videoRef = useRef(null);

  useEffect(() => {
    // Detect screen width to pick desktop.mp4 or mobileview.mp4
    const isMobileScreen = window.innerWidth < 768;
    const initialSrc = isMobileScreen ? '/video/mobileview.mp4' : '/video/desktop.mp4';
    setVideoSrc(initialSrc);

    // Auto-play trigger fallback safety
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn('Autoplay exception handled:', err);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    setIsIntroActive(false);
  };

  const handleVideoError = () => {
    console.warn('Intro video failed to load, bypassing intro.');
    setIsIntroActive(false);
  };

  if (!isIntroActive) {
    return null;
  }

  return (
    <div 
      className="fixed top-0 left-0 w-screen h-screen z-[99999] bg-black flex items-center justify-center overflow-hidden select-none pointer-events-auto"
      style={{ width: '100vw', height: '100vh' }}
      aria-label="Intro Video Splash Screen"
    >
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnded}
        onError={handleVideoError}
        className="w-full h-full object-cover object-center"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
  );
};
