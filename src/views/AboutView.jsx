import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Mail, MessageSquare, Send, CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

export const AboutView = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const validateEmail = (emailStr) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanEmail) {
      setErrorMsg('Email address is required.');
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!cleanMessage) {
      setErrorMsg('Message is required.');
      return;
    }

    setIsSending(true);

    try {
      const recipientEmail = "bithu122812@gmail.com";
      
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: cleanName || "KATTRAL User",
          email: cleanEmail,
          message: cleanMessage,
          _subject: "KATTRAL Support: New Contact Message from " + (cleanName || cleanEmail),
          _autoresponse: "Thank you for your response.",
          _template: "table"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      // Secondary endpoint fallback to ensure delivery
      try {
        const fallbackRes = await fetch("https://formsubmit.co/ajax/bithu122812@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: cleanName || "KATTRAL User",
            email: cleanEmail,
            message: cleanMessage,
            _subject: "KATTRAL Support Message",
            _autoresponse: "Thank you for your response."
          })
        });
        if (fallbackRes.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      } catch (fErr) {}

      setErrorMsg('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="py-10 container-custom max-w-4xl space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT KATTRAL</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Learn Japanese. Build Your Future.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-jp">
          日本語を楽しく学ぼう — Let’s learn Japanese happily.
        </p>
      </div>

      {/* Mission & Scope Card */}
      <div className="kattral-card p-8 space-y-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Our Educational Focus
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          KATTRAL is a dedicated Japanese EdTech platform focused strictly on <strong>JLPT N5</strong> and <strong>JLPT N4</strong>. By intentionally specializing in foundational Japanese, we help complete beginners progress smoothly from learning basic Hiragana to achieving real fluency in elementary Japanese.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 space-y-2">
            <h3 className="text-lg font-bold text-red-600 dark:text-red-400 font-jp">JLPT N5 (Beginner)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Hiragana, Katakana, basic vocabulary, introductory Kanji, and simple sentence structures.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 space-y-2">
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 font-jp">JLPT N4 (Elementary)</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Advanced elementary Kanji, daily conversation, situational vocabulary, and complex grammar rules.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="kattral-card p-8 space-y-6" id="contact">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Contact Us & Support
        </h2>
        <p className="text-xs text-slate-500">
          Have questions regarding KATTRAL Japanese curriculum? Send us a message below.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 text-center space-y-2 animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600 dark:text-emerald-400" />
            <h4 className="text-lg font-bold">Message Sent Successfully!</h4>
            <p className="text-xs">
              Thank you for reaching out to KATTRAL support. An automatic reply (<em>"Thank you for your response."</em>) has been sent to your email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 btn-secondary py-2 px-5 text-xs font-bold"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-xs text-red-700 dark:text-red-300 flex items-center gap-2 font-semibold animate-fadeIn">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-red-500"
              />
              <input
                type="email"
                required
                placeholder="Your Email *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-red-500"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Your Message... *"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold outline-none focus:border-red-500"
            />
            <button
              type="submit"
              disabled={isSending}
              className="btn-primary py-3 px-8 text-sm disabled:opacity-60 flex items-center gap-2"
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
