import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, User, Lock, Mail, ArrowRight } from 'lucide-react';

export const AuthModal = ({ isFirstScreen = false }) => {
  const { isAuthOpen, setIsAuthOpen, authMode, setAuthMode, loginUser, signupUser } = useApp();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isFirstScreen && !isAuthOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter email and password.');
      return;
    }
    setErrorMsg('');

    if (authMode === 'login') {
      const res = loginUser(email, password);
      if (res && !res.success) {
        setErrorMsg(res.error || 'Invalid email or password.');
      }
    } else {
      const res = signupUser(email, password, username);
      if (res && !res.success) {
        setErrorMsg(res.error || 'Failed to create account.');
      }
    }
  };

  return (
    <div className={`${isFirstScreen ? 'min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-[#0B0E14] relative z-20 w-full' : 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn'}`}>
      <div className="bg-white dark:bg-[#121824] w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative p-6 sm:p-8 space-y-6 text-slate-900 dark:text-white">
        
        {/* Close Button (only if popup modal, not mandatory login screen) */}
        {!isFirstScreen && (
          <button
            onClick={() => setIsAuthOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="hanko-stamp mx-auto mb-3">勝</div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            {authMode === 'login' ? 'Welcome Back to KATTRAL' : 'Create Free Account'}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {authMode === 'login' ? 'Sign in to access your isolated JLPT N5/N4 learning data' : 'Start your structured Japanese learning journey today'}
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-xs font-bold text-center animate-fadeIn">
            {errorMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. Alex Student"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-red-500"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="learner@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-red-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-red-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center py-3.5 text-base mt-2 font-black shadow-lg shadow-red-600/30"
          >
            <span>{authMode === 'login' ? 'Sign In to Learning Platform' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Switch mode */}
        <div className="text-center text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/60">
          {authMode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button 
                type="button"
                onClick={() => {
                  setAuthMode('signup');
                  setErrorMsg('');
                }} 
                className="text-red-600 dark:text-red-400 font-bold hover:underline"
              >
                Sign Up Free
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button 
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setErrorMsg('');
                }} 
                className="text-red-600 dark:text-red-400 font-bold hover:underline"
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
