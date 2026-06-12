# Ironwood Group LLC Website

Static HTML/CSS/JS site for Ironwood Group LLC (property sales, rentals, and management).

## Deployment

- GitHub Pages deploys automatically via `.github/workflows/deploy-pages.yml` on every push to `main`.
- **Always push directly to `main`** for this repository — no feature branches or PRs needed. Every push goes live within ~30-60 seconds.

## Structure

- `index.html`, `properties.html`, `contact.html`, `legal.html` — pages
- `css/styles.css` — shared stylesheet (tropical green theme)
- `js/main.js` — mobile nav, property filters, contact form validation
- `assets/` — images and icons (property photos go in `assets/properties/`)
