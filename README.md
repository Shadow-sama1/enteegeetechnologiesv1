# Enteegee Technologies

A responsive, single-page marketing site built with Next.js App Router, TypeScript, and Tailwind CSS. WhatsApp is the primary contact path; no database or separate backend is required.

## Requirements

- Node.js 18.17 or newer
- npm

## Local setup

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your WhatsApp number in international format, without `+`, spaces, or punctuation (for example, `2348012345678`).
4. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL, without a trailing slash.
5. Start the development server: `npm run dev`

Useful checks: `npm run typecheck`, `npm run lint`, and `npm run build`.

## Replacing the brand and project assets

- Replace `public/logo.png` with the final logo. The header uses the image when it loads and falls back to a branded “E” mark if the file is missing.
- Replace `public/og-image.png` with a branded 1200 × 630 social sharing image. It is used by Open Graph and Twitter metadata.
- Replace the three placeholder SVGs in `public/images/` with project screenshots. Update the title, category, image path, and descriptive alt text in `data/projects.ts`.
- The desktop and phone illustration is `public/images/hero-devices.svg`; replace it or adjust the hero component if you want a different visual.
- `public/apple-touch-icon.png` and `public/favicon.ico` are starter icons; replace them with your final favicon set as needed.

Project cards open a WhatsApp conversation on click/tap and on a 600 ms hover intent. The section-level hover intent is also enabled. Each card and the section can open only once per session; most browsers block tabs launched from delayed hover events, so the visible card action and keyboard-accessible click remain the reliable alternatives.

## Deploying to Vercel

1. Import this project into Vercel.
2. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables for Production (and Preview if needed).
3. Deploy. Vercel detects Next.js automatically; no custom server or database is required.

The `app/robots.ts`, `app/sitemap.ts`, and `app/manifest.ts` files generate the corresponding metadata routes. Update `lib/constants.ts` if you want to change the contact email or country label.

## Configuration notes

The sample WhatsApp number (`2348000000000`), email address, domain, and project designs are placeholders. Configure the number and domain through the environment variables before launch, and update the email and project content before publishing.
