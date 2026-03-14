# 🦀 CRAB. — Ron Andre C. Bulagao Portfolio

A bold, dark-themed developer portfolio built with **React** and **Tailwind CSS**, inspired by Rick Waalders' design aesthetic.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Opens at `http://localhost:3000`

---

## ✏️ How to Edit Your Content

**All your personal data is in one file:**
```
src/data.js
```

You can edit:
- `personal` — name, email, phone, GitHub, LinkedIn, bio
- `honors` — academic achievements shown as badges
- `stats` — the 4 stat cards in the About section
- `experience` — work history
- `education` — school info
- `skills` — skill name, category, and level (0–100)
- `projects` — title, tags, description, color, and live link

To add a project, just add a new object to the `projects` array in `data.js`.

---

## 📁 Project Structure

```
src/
├── App.jsx              # Root layout
├── index.js             # Entry point
├── index.css            # Global styles + Tailwind
├── data.js              # ✏️ ALL YOUR CONTENT LIVES HERE
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Experience.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Contact.jsx
    └── Footer.jsx
```

---

## 🌐 Deploying to GitHub Pages (Free)

### Step 1 — Create a GitHub repo
1. Go to [github.com](https://github.com) and create a new repo named `portfolio` (or anything you want)
2. Copy the repo URL

### Step 2 — Push your code
```bash
git init
git add .
git commit -m "initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Add your repo URL to package.json
Open `package.json` and add this line at the top level:
```json
"homepage": "https://YOUR_USERNAME.github.io/portfolio"
```

### Step 4 — Deploy
```bash
npm run deploy
```

This builds the app and pushes it to a `gh-pages` branch automatically.

### Step 5 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Settings → Pages
3. Set source to `gh-pages` branch
4. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## ⚡ Deploying to Vercel (Even Easier)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your portfolio repo
4. Leave all settings as default — Vercel auto-detects React
5. Click **Deploy**

Your site will be live at a URL like `https://portfolio-ron.vercel.app`

You can also connect a custom domain (e.g. `racbulagao.dev`) for free on Vercel.

---

## 🎨 Customization Tips

- **Change accent color:** Find and replace `#D85A30` with any hex color you like
- **Change fonts:** Edit the Google Fonts import in `src/index.css` and update `tailwind.config.js`
- **Add a photo:** Replace the 🦀 emoji in `Hero.jsx` with an `<img>` tag pointing to your photo
- **Wire up the contact form:** Use [Formspree](https://formspree.io) (free) — replace the form's `onSubmit` in `Contact.jsx` with a fetch to your Formspree endpoint

---

Built with ❤️ + 🦀
