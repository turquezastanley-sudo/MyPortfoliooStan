# Stanley - Web Designer Portfolio

This repository contains a personal portfolio site built with plain HTML, Tailwind CSS, and a small Express server for contact form handling.

How to run locally:

```bash
npm install
npm start
# then open http://localhost:3000
```

Files of interest:

- `index.html` — main site entry point
- `script.js` — frontend JS and contact form handler
- `api/contact.js` — Vercel serverless API route for contact form submissions
- `server.js` — local Express server for development and fallback routing
- `vercel.json` — Vercel routing configuration

Deployment:

- Push this repository to GitHub.
- Connect the repo to Vercel.
- Vercel will serve the root `index.html` and route `/api/contact` to the serverless function.

License: MIT
