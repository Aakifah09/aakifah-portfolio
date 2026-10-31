# Aakifah Minhaj — Portfolio

Personal portfolio website, with a soft pastel design (warm off-white, lavender/peach/mint blobs, frosted glass cards, Plus Jakarta Sans + Instrument Serif), built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide** icons. It's a static single-page site with no backend.

Features: a floating glass navbar, project cards with detail dialogs, an ongoing-research section, a responsive layout, active-section navigation, a mobile menu, scroll-reveal animations that respect the OS "reduce motion" setting, SEO metadata, and a contact form that opens a pre-filled email.

## Run locally

Requires [Node.js](https://nodejs.org/) 20 or newer.

```bash
cd aakifah-portfolio
npm install        # first time only
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ at http://localhost:4173
```

## Editing content

**All text and links are in [`src/data/portfolio.js`](src/data/portfolio.js).** You shouldn't need to touch the components.

| To change… | Edit |
| --- | --- |
| Name, tagline, email, social links | `profile` |
| About text and interests | `about` |
| Skills | `skills` |
| Projects | `projects` |
| Internships | `experience` |
| Publication | `publications` |
| Resume | replace `public/resume.pdf` (keep the same filename) |

### Project links and status

```js
{
  github: 'https://github.com/Aakifah09/repo-name', // or null
  demo: null,              // set to a URL once deployed
  status: 'completed',     // or 'in-progress'
  image: '/screenshots/disaster.png', // optional; see below
}
```

- A link set to `null` shows a dashed **"… coming soon"** placeholder instead of a broken or fake link.
- `status: 'in-progress'` shows an amber **In development** badge. `completed` shows a green **Completed** badge.
- By default, each card shows a pipeline diagram built from its `pipeline` steps. To use a real screenshot instead, put the image in `public/screenshots/` and add an `image` field. A 16:8 aspect ratio works best.

### Contact form

There is no backend. Submitting the form opens the visitor's email app with the message pre-filled, addressed to your email. To receive submissions directly, create a free [Formspree](https://formspree.io) form and replace the `onSubmit` handler in `src/components/Contact.jsx` with a `fetch` POST to your Formspree endpoint.

## Deploy for free

### Option A: Vercel (recommended, easiest)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Aakifah09/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, then choose **Add New → Project** and import the repo.
3. Vercel detects Vite automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.
4. You get a URL like `https://portfolio-xxxx.vercel.app`. You can rename it under Settings → Domains. Every later `git push` redeploys the site.

Or use the CLI: `npm i -g vercel && vercel`.

### Option B: GitHub Pages

A workflow is already included at `.github/workflows/deploy.yml`.

1. Push the project to GitHub (same commands as above).
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push to `main`, or run the workflow from the **Actions** tab.
4. The site will be live at:
   - `https://aakifah09.github.io/` if the repo is named `Aakifah09.github.io`, or
   - `https://aakifah09.github.io/<repo-name>/` for any other repo name. The workflow sets the base path automatically.

## Project structure

```
aakifah-portfolio/
├── index.html                 # SEO meta tags, fonts
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── data/portfolio.js      # ← all content lives here
│   ├── components/
│   │   ├── Navbar.jsx  Hero.jsx  About.jsx  Skills.jsx  Projects.jsx
│   │   ├── Experience.jsx  Publications.jsx  Education.jsx  Contact.jsx  Footer.jsx
│   │   └── ui/                # Section, Reveal, Button, Tag, icons, shared styles
│   ├── hooks/                 # useActiveSection
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              # Tailwind import + theme tokens
├── .github/workflows/deploy.yml
└── vite.config.js
```
