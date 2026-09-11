# 🎌 KATTRAL — Learn Japanese. Build Your Future.

> **JLPT N5 & N4 · Hiragana · Katakana · Kanji · Vocabulary · Grammar · Listening · Speaking · Writing**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/kattral)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/kattral/deploys)

---

## 🌟 What is KATTRAL?

**KATTRAL** is a free, dedicated Japanese language learning web app focused exclusively on **JLPT N5 and N4** certification preparation. It explains everything in both **English and Tamil**, making it uniquely accessible.

### ✨ Features

| Feature | Description |
|---|---|
| 📖 **N5 Module** | Hiragana, Katakana, Kanji, Vocabulary (500+ words), Grammar |
| 📗 **N4 Module** | Advanced Kanji, Vocabulary, Grammar (unlockable) |
| 🃏 **Flashcard Deck** | Spaced-repetition style flashcards |
| 🧠 **Quiz Engine** | JLPT-style multiple choice exam (500+ questions) |
| 🎧 **Listening Practice** | Audio-based comprehension exercises |
| 🗣️ **Speaking Practice** | Pronunciation & shadowing exercises |
| ✍️ **Writing Practice** | Canvas-based stroke order practice |
| 🔍 **Smart Search** | Real-time Japanese word/kanji search (Ctrl+K) |
| 📊 **Progress Tracking** | XP, streaks, level, completion rates |
| 🔖 **Bookmarks** | Save words and grammar points |
| 🌙 **Dark Mode** | Full dark/light theme toggle |
| 📱 **Mobile First** | Bottom nav, safe-area support, PWA installable |

---

## 🚀 Tech Stack

- **React 19** + **Vite 8** — blazing fast SPA
- **TailwindCSS v4** — utility-first styling
- **Lucide React** — icon system
- **Canvas Confetti** — celebration animations
- **Tesseract.js** — OCR for writing recognition
- **Playwright** — E2E testing

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/kattral.git
cd kattral

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub (see Git Commands below)
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Vite — click **Deploy**
4. Done! 🎉 Your app is live with HTTPS + CDN

Or use Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → **New Site** → Connect repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**

> Both `vercel.json` and `netlify.toml` are pre-configured with SPA routing, security headers, and cache rules.

---

## 🔒 Security

The following security headers are configured in both `vercel.json` and `netlify.toml`:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Restricts camera, mic, geolocation, payment |
| `Content-Security-Policy` | Allows self + Google Fonts + TailwindCSS CDN |

---

## 🔍 SEO

- ✅ Full Open Graph tags (Facebook, WhatsApp, LinkedIn)
- ✅ Twitter/X Card (summary_large_image)
- ✅ JSON-LD Structured Data (WebApplication schema)
- ✅ Canonical URL
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ PWA manifest.json (installable)
- ✅ theme-color meta tag
- ✅ apple-touch-icon

---

## 🎭 Testing with Playwright

### Install browsers (first time only)
```bash
npx playwright install chromium firefox
```

### Run all tests
```bash
npm test
```

### Run with interactive UI
```bash
npm run test:ui
```

### Run in headed mode (watch the browser)
```bash
npm run test:headed
```

### View HTML report
```bash
npm run test:report
```

### Test matrix

| Device | Viewport | Tests |
|---|---|---|
| Desktop Chrome | 1280×720 | All |
| Desktop Firefox | 1280×720 | All |
| iPad | 768×1024 | All |
| iPhone 12 | 390×844 | All |
| iPhone SE | 375×667 | All |

### Test coverage

- 🔍 **SEO** — title, meta, OG, Twitter, canonical, JSON-LD, robots, sitemap
- 🔐 **Auth** — login modal, localStorage injection, logout
- 🗺️ **Navigation** — all 7 views (Home, N5, N4, Test, Practice, Progress, Bookmarks, About)
- 🌙 **Dark Mode** — toggle, persistence
- 🔍 **Search** — open via button, Ctrl+K, close via Escape
- 📱 **Mobile** — overflow check, bottom nav, desktop nav hidden, touch targets
- ⚡ **Performance** — load time < 5s, no console errors
- ♿ **Accessibility** — lang attr, single h1, focus visibility, button labels

---

## 📁 Project Structure

```
kattral/
├── public/
│   ├── favicon.svg
│   ├── kattral_logo.jpg
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO crawlers
│   ├── sitemap.xml         # SEO sitemap
│   └── _headers            # Netlify security headers
├── src/
│   ├── components/         # Reusable UI components (17)
│   ├── views/              # Page views (12)
│   ├── context/            # AppContext (global state)
│   ├── data/               # Japanese language data files
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Design system + Tailwind
├── tests/
│   └── e2e/
│       └── app.spec.js     # Playwright E2E tests
├── index.html              # Full SEO meta tags
├── vite.config.js          # Build + security headers
├── vercel.json             # Vercel deployment config
├── netlify.toml            # Netlify deployment config
└── playwright.config.js    # Test configuration
```

---

## 🐙 Git Commands

### First-time setup

```bash
# 1. Initialize git repository
git init

# 2. Set branch name to 'main'
git branch -M main

# 3. Add your GitHub remote (replace with YOUR repo URL)
git remote add origin https://github.com/YOUR_USERNAME/kattral.git

# 4. Stage all files
git add .

# 5. Create first commit
git commit -m "feat: 🎌 initial commit — KATTRAL Japanese Learning Platform

- React 19 + Vite 8 + TailwindCSS v4
- JLPT N5 & N4 modules with Hiragana, Katakana, Kanji, Vocab, Grammar
- Flashcards, Quiz Engine, Listening, Speaking, Writing practice
- Smart search (Ctrl+K), Progress tracking, Bookmarks, Dark mode
- Full SEO: Open Graph, Twitter Cards, JSON-LD, PWA manifest
- Security headers: CSP, HSTS, X-Frame-Options
- Playwright E2E tests (5 device profiles)
- Vercel + Netlify deployment configs"

# 6. Push to GitHub
git push -u origin main
```

### Subsequent updates

```bash
git add .
git commit -m "feat: your change description"
git push
```

### Useful commands

```bash
git status          # See what changed
git log --oneline   # Commit history
git diff            # See unstaged changes
```

---

## 📜 License

MIT — free for personal and educational use.

---

## 🙏 Credits

Built with ❤️ for Japanese language learners — especially those using English and Tamil as base languages.

**KATTRAL** (கற்றல்) means **"Learning"** in Tamil. 🌸
"# KATTRAL" 
