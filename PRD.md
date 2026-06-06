# PRD: Price List Landing Page — Konsultasi Bazi & Fengshui

## 1. Overview

A single-page React + Vite landing page to display a price list for Bazi (Chinese Astrology) and Fengshui consultation services. The page is deployable to Netlify. Each service package is presented as a card with a WhatsApp CTA button.

## 2. Objectives

- Present 6 service packages in a clean, responsive 3-column grid layout.
- Each card has a "Pilih / Choose" button that opens WhatsApp with a pre-filled message template specific to that package.
- Mobile-friendly (stack to 1 column on small screens).
- Fast, zero-config deploy to Netlify.

## 3. Layout & Structure

### 3.1 Header
- Title: "Price List Konsultasi Bazi & Fengshui"
- Subtitle / tagline (optional)

### 3.2 Category Sections (3 sections, each with its own heading)

| Section | Heading | Packages |
|---------|---------|----------|
| A | Layanan Konsultasi Bazi (Personal Destiny) | Paket Basic, Advanced, Premium |
| B | Layanan Konsultasi Fengshui (Property & Business) | Paket Dasar, Komprehensif |
| C | Paket Bundling | Paket Ultimate Master Blueprint |

### 3.3 Package Cards (3 columns per row)

Each card contains:
- **Package name** (e.g., "Paket Basic")
- **Price** (e.g., "Rp 500.000")
- **Focus** (one-liner)
- **Includes** (bullet list of features)
- **Format** (delivery method)
- **CTA Button** → WhatsApp

### 3.4 Footer
- Important notes (biaya transportasi untuk visit luar kota, dll.)
- Contact info

## 4. WhatsApp Integration

Each card's button opens `wa.me/62<number>` with a pre-filled message:

| Package | Message Template |
|---------|-----------------|
| Paket Basic | "Halo, saya tertarik dengan Paket Basic (Global Reading) — Rp 500.000. Mohon info lebih lanjut." |
| Paket Advanced | "Halo, saya tertarik dengan Paket Advanced (Detailed Blueprint) — Rp 1.500.000. Mohon info lebih lanjut." |
| Paket Premium | "Halo, saya tertarik dengan Paket Premium (Private 1-on-1 Session) — Rp 3.500.000. Mohon info lebih lanjut." |
| Paket Fengshui Dasar | "Halo, saya tertarik dengan Paket Fengshui Dasar (Floor Plan Analysis) — Rp 1.500.000. Mohon info lebih lanjut." |
| Paket Fengshui Komprehensif | "Halo, saya tertarik dengan Paket Fengshui Komprehensif (Business & Wealth Audit) — Rp 5.000.000. Mohon info lebih lanjut." |
| Paket Ultimate Master Blueprint | "Halo, saya tertarik dengan Paket Ultimate Master Blueprint — Rp 7.500.000. Mohon info lebih lanjut." |

**WhatsApp number**: To be configured via env variable `VITE_WHATSAPP_NUMBER` (format: `628xxxxx` without `+` or `-`).

## 5. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18+ |
| Bundler | Vite 5+ |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 3+ |
| Icons | lucide-react (minimal icons) |
| Deploy | Netlify (static SPA) |

## 6. Routes

Single page — no routing needed. Everything renders on `/`.

## 7. Data Model

```js
const packages = [
  {
    id: "basic",
    category: "A",
    name: "Paket Basic (Global Reading)",
    price: "Rp 500.000",
    focus: "Gambaran umum nasib",
    includes: [
      "Analisis elemen dominan dan lucky elements",
      "Gambaran umum potensi karir, kekayaan, dan asmara",
      "Karakter bawaan dan kekuatan/kelemahan diri",
    ],
    format: "Laporan tertulis singkat (PDF) / Tanpa sesi tatap muka",
    waMessage: "Halo, saya tertarik dengan Paket Basic (Global Reading) — Rp 500.000. Mohon info lebih lanjut.",
  },
  // ... 5 more
];
```

## 8. Design & UX

- **Color palette**: Earthy/gold tones (matching Chinese metaphysics theme)
  - Primary: Amber/gold (#D97706 or similar)
  - Background: Warm off-white (#FFFDF5)
  - Cards: White with subtle shadow
  - Accent: Deep red (#991B1B) for CTAs
- **Typography**: Clean sans-serif (Inter or system font)
- **Responsive breakpoints**:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- **States**:
  - **Loading**: Skeleton cards while fonts/assets load
  - **Empty**: N/A (static data, no empty state)
  - **Error**: WhatsApp link failure fallback (show number as text)
  - **Edge case**: Very long package names wrap gracefully

## 9. Netlify Deployment

- `npm run build` → outputs to `dist/`
- `_redirects` file for SPA fallback: `/* /index.html 200`
- `netlify.toml` with build command and publish directory

## 10. Out of Scope (v1)

- No backend / CMS
- No payment gateway
- No booking/calendar system
- No multi-language toggle (Indonesian only for v1)

## 11. Future Considerations

- Add admin panel to update prices
- Add payment link per package
- Add Google Analytics / tracking
- Add FAQ accordion section
