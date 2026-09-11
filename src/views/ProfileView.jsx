import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { achievementsData } from '../data/achievementsData';
import { User, Award, Flame, BookOpen, Brain, Star, Sparkles, Settings, Check, LogOut, Mail, Camera, Upload, Trash2 } from 'lucide-react';

export const ProfileView = () => {
  const { userProfile, setUserProfile, n5Progress, logoutUser, currentUser } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.username);
  const [avatarInput, setAvatarInput] = useState(userProfile.avatar);
  const fileInputRef = useRef(null);

  const avatars = ['🌸', '🎌', '⛩️', '🏯', '🍡', '🍵', '🎏', '🦊'];

  const handleSaveProfile = () => {
    setUserProfile((prev) => ({
      ...prev,
      username: nameInput || 'Learner',
      avatar: avatarInput
    }));
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        setUserProfile((prev) => ({
          ...prev,
          profilePic: dataUrl
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setUserProfile((prev) => ({
      ...prev,
      profilePic: null
    }));
  };

  return (
    <div className="py-10 container-custom max-w-4xl space-y-10">
      
      {/* Profile Banner */}
      <div className="kattral-card bg-white dark:bg-[#121824] text-slate-900 dark:text-white p-6 sm:p-8 rounded-3xl space-y-6 relative overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 z-10 relative">
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Circular Profile Picture / Avatar Frame */}
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-28 h-28 rounded-full border-4 border-red-500/80 dark:border-red-500 shadow-2xl overflow-hidden relative group cursor-pointer shrink-0 bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform hover:scale-105"
              title="Click to upload or change profile picture"
            >
              {userProfile.profilePic ? (
                <img 
                  src={userProfile.profilePic} 
                  alt="Profile Avatar" 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-5xl select-none">{userProfile.avatar}</span>
              )}

              {/* Hover Overlay with Camera Icon */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-bold gap-1">
                <Camera className="w-5 h-5 text-white" />
                <span>{userProfile.profilePic ? 'Change' : 'Upload'}</span>
              </div>
            </div>

            {/* Hidden File Input */}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />

            <div className="text-center sm:text-left space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white">{userProfile.username}</h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors border border-slate-200 dark:border-slate-700"
                  title="Edit Profile Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>{currentUser?.email || userProfile.email || 'learner@example.com'}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                <span className="text-xs font-extrabold text-red-600 dark:text-red-400 uppercase tracking-widest">
                  {userProfile.level} Student • {userProfile.streak} Day Streak
                </span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 pl-1"
                >
                  <Upload className="w-3 h-3" />
                  <span>{userProfile.profilePic ? 'Change Photo' : 'Upload Photo'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Logout Action Button */}
          <button
            onClick={logoutUser}
            className="btn-secondary py-2.5 px-6 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/60 flex items-center gap-2 shrink-0 shadow-sm"
          >
            <LogOut className="w-4 h-4 text-red-500 dark:text-red-400" />
            <span>Log Out Session</span>
          </button>
        </div>

        {/* Edit Form Drawer */}
        {isEditing && (
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 space-y-4 border border-slate-200 dark:border-slate-700/80 shadow-inner">
            <h4 className="text-xs font-extrabold uppercase text-slate-700 dark:text-slate-300 tracking-wider">Customize Student Profile</h4>
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1 w-full md:w-auto flex-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Display Name</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-semibold border border-slate-300 dark:border-slate-700 outline-none focus:border-red-500"
                  placeholder="Student Name"
                />
              </div>

              {/* Profile Photo Controls */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Profile Photo</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-slate-700 hover:border-red-500 flex items-center gap-1.5 shadow-sm"
                  >
                    <Upload className="w-3.5 h-3.5 text-red-500" />
                    <span>Select File</span>
                  </button>

                  {userProfile.profilePic && (
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="px-3.5 py-2 rounded-xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-900 hover:bg-red-200 flex items-center gap-1.5"
                      title="Remove uploaded picture and reset to emoji avatar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Emoji Fallback Avatar Selector */}
            <div className="space-y-1 pt-1">
              <label className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Default Emoji Avatar</label>
              <div className="flex flex-wrap items-center gap-2">
                {avatars.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAvatarInput(a)}
                    className={`w-9 h-9 rounded-xl text-xl flex items-center justify-center transition-transform ${
                      avatarInput === a ? 'bg-red-600 text-white scale-110 shadow-md' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleSaveProfile}
                className="btn-primary py-2 px-6 text-xs bg-red-600 hover:bg-red-500 shadow-md"
              >
                <Check className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="kattral-card p-5 space-y-2 text-center">
          <BookOpen className="w-6 h-6 text-blue-500 mx-auto" />
          <div className="text-2xl font-black text-slate-900 dark:text-white">{userProfile.completedLessons}</div>
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Lessons Completed</div>
        </div>

        <div className="kattral-card p-5 space-y-2 text-center">
          <Brain className="w-6 h-6 text-purple-500 mx-auto" />
          <div className="text-2xl font-black text-slate-900 dark:text-white">{userProfile.vocabLearned}</div>
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Words Learned</div>
        </div>

        <div className="kattral-card p-5 space-y-2 text-center">
          <Sparkles className="w-6 h-6 text-amber-500 mx-auto" />
          <div className="text-2xl font-black text-slate-900 dark:text-white">{userProfile.kanjiLearned}</div>
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Kanji Learned</div>
        </div>

        <div className="kattral-card p-5 space-y-2 text-center">
          <Star className="w-6 h-6 text-emerald-500 mx-auto" />
          <div className="text-2xl font-black text-slate-900 dark:text-white">{userProfile.quizAverage}%</div>
          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">Quiz Average</div>
        </div>
      </div>

      {/* Achievements Showcase */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-red-500" />
          <span>Achievement Badges</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievementsData.map((badge) => (
            <div
              key={badge.id}
              className={`kattral-card p-5 flex items-center gap-4 transition-all ${
                badge.unlocked ? 'badge-unlocked' : 'badge-locked'
              }`}
            >
              <div className="text-4xl">{badge.icon}</div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  {badge.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight mt-0.5">
                  {badge.description}
                </p>
                <div className="text-[10px] font-bold text-red-600 dark:text-red-400 mt-1">
                  {badge.unlocked ? '✓ Unlocked' : `${badge.progress}% Progress`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
