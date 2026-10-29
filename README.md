# Md Abu Hanif — Portfolio

React 19 + Vite + Tailwind CSS 4 + DaisyUI + Framer Motion + GSAP, hosted on Firebase.

## Run locally
```bash
npm install
cp .env.example .env     # then fill in your EmailJS values
npm run dev
```

## Where to edit things
- Projects: `src/components/data/projects.js` (screenshots in `src/assets/Project-img/`)
- Your photo: replace `src/assets/myImg.webp`
- Logo: replace `src/assets/logo.png`; favicon: `public/FavIcon.png`
- Resume: put `Md-Abu-Hanif-Resume.pdf` inside `public/`
- Skills: `src/components/SkillBar.jsx`
- Contact form: EmailJS, values in `.env`

## Deploy (Firebase Hosting)
```bash
npm run build
firebase login
firebase init hosting   # public directory: dist, single-page app: yes
firebase deploy
```
