# Price List — Konsultasi Bazi & Fengshui

A premium landing page for displaying consultation service packages for **Bazi (Chinese Astrology)** and **Fengshui**. Built with React + Vite + Tailwind CSS, deployable to Netlify.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Deploy | Netlify (static SPA) |

## Features

- **6 service packages** across 3 categories (Bazi, Fengshui, Bundling)
- **Dark mode** with glassmorphism cards and gold accents
- **Responsive grid** — 3 columns desktop, 2 tablet, 1 mobile
- **WhatsApp CTA** — each card opens `wa.me` with a pre-filled message for that package
- **Featured badges** on popular packages with glow effects
- **Netlify-ready** — includes `netlify.toml` and `_redirects`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_WHATSAPP_NUMBER=6281269105377
```

This sets the WhatsApp number for all CTA buttons. Format: country code + number without `+` or `-`.

## Project Structure

```
├── index.html                 # Entry HTML
├── vite.config.js             # Vite + React + Tailwind config
├── netlify.toml               # Netlify deploy settings
├── public/
│   └── _redirects             # SPA fallback
└── src/
    ├── main.jsx               # React entry
    ├── index.css              # Tailwind + glassmorphism utilities
    ├── App.jsx                # Main layout (Hero → Sections → Footer)
    ├── data/
    │   └── packages.js        # All 6 packages with WhatsApp templates
    └── components/
        ├── PriceCard.jsx      # Glassmorphism card component
        └── SectionHeader.jsx  # Section title component
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Set `VITE_WHATSAPP_NUMBER` as an environment variable in Netlify dashboard
4. Deploy — build command and publish directory are pre-configured in `netlify.toml`

Or drag-and-drop the `dist/` folder after running `npm run build`.

## WhatsApp Messages

Each package has a pre-defined WhatsApp message template:

| Package | Message |
|---------|---------|
| Paket Basic | "Halo, saya tertarik dengan Paket Basic (Global Reading) — Rp 500.000. Mohon info lebih lanjut." |
| Paket Advanced | "Halo, saya tertarik dengan Paket Advanced (Detailed Blueprint) — Rp 1.500.000. Mohon info lebih lanjut." |
| Paket Premium | "Halo, saya tertarik dengan Paket Premium (Private 1-on-1 Session) — Rp 3.500.000. Mohon info lebih lanjut." |
| Paket Fengshui Dasar | "Halo, saya tertarik dengan Paket Fengshui Dasar (Floor Plan Analysis) — Rp 1.500.000. Mohon info lebih lanjut." |
| Paket Fengshui Komprehensif | "Halo, saya tertarik dengan Paket Fengshui Komprehensif (Business & Wealth Audit) — Rp 5.000.000. Mohon info lebih lanjut." |
| Paket Ultimate Master Blueprint | "Halo, saya tertarik dengan Paket Ultimate Master Blueprint — Rp 7.500.000. Mohon info lebih lanjut." |

## License

MIT
