# ThirdEye: Landing Website

A static marketing site for the ThirdEye app. No build step, no dependencies: plain HTML, CSS, and vanilla JS. Design direction was checked with the UI UX Pro Max skill and adapted to the project's design rules (see below).

## Structure

```
website/
├── index.html      # Landing page
├── privacy.html    # Privacy Policy (draft, needs real details + lawyer review)
├── terms.html      # Terms and Conditions (draft, needs real details + lawyer review)
├── 404.html        # Not-found page
├── styles.css      # Styles (light "road sign" theme)
├── script.js       # Icon sprite loader, nav state, opacity-only reveals, FAQ markers
├── assets/
│   ├── logo.png             # App logo
│   ├── favicon.svg          # Eye mark favicon
│   ├── favicon-16.png       # 16x16 favicon
│   ├── favicon-32.png       # 32x32 favicon
│   ├── apple-touch-icon.png # 180x180 apple touch icon
│   ├── icons.svg            # Lucide-style SVG icon sprite (no emoji)
│   ├── hazards/             # The app's own hazard icons (128x128 PNG)
│   ├── screenshots/         # Real device screenshots (app-map, app-route, app-alerts)
│   └── og-image.svg         # Open Graph card
└── README.md
```

## Preview locally

```bash
# from the website/ folder
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Hosting

Fully static. Set the publish/root directory to `website` on Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc. No build command needed. Most of these hosts serve `404.html` automatically for not-found routes.

## Design rules applied

- Light "road sign" theme: warm paper background (`#F6F4EF`), near-black ink (`#14161A`), road-sign yellow (`#F2B705`) as the only accent. Yellow is always a fill behind dark text, never yellow text on light backgrounds.
- No purple, no gradient backgrounds. The dashed lane-marking divider is a repeating pattern, not a colour gradient.
- Hazard icons are the app's own icons (`assets/hazards/`, copied from `assets/incident-icons/`). UI icons are inline SVG from one Lucide-style family (`assets/icons.svg`). No emoji.
- The hazard list matches the categories in `src/constants/incidentTypes.ts`.
- No em dashes. No fake reviews, metrics, logos or testimonials.
- Motion is an opacity-only reveal. `prefers-reduced-motion` turns it off.
- No custom cursor. Hover changes colour or border only, nothing moves or resizes. Images have fixed width/height to avoid layout shift.
- Typography: Inter for everything, Roboto Mono for small labels.

## Screenshots

`assets/screenshots/` holds real captures from the Android app on a device
(738x1600, compressed to JPEG). `app-map.jpg` is the hero image; the other two
appear in the "Screens" section. To refresh them, capture on device and
re-compress with `sips -s format jpeg -s formatOptions 82`.

Note: `app-map.jpg` shows the satellite basemap. A capture of the default
dark or light basemap would show the hazard pins and route line better.

## Before launch (open items)

These are deliberately left as TODO rather than guessed:

2. **Pro plan copy.** The FAQ mentions an optional Pro plan (the app has a `PremiumScreen` with ₹149/mo and ₹999/yr). Confirm pricing and features, then replace the TODO.
3. **Legal pages.** `privacy.html` and `terms.html` are drafts built from the app's known behaviour. Replace every `[TODO: ...]` with your real business details (entity name, address, contact email, grievance officer, jurisdiction, retention periods) and have a lawyer review them.
4. **Store links.** The Google Play / App Store badges link to `#`. Add the real listing URLs once live.
5. **Open Graph image.** `og-image.svg` is used for sharing. Some crawlers (Facebook, X) do not render SVG; export a 1200x630 PNG version (`og-image.png`) and update the `og:image` meta tag.
6. **Custom domain + HTTPS.** Connect your domain and confirm HTTPS at your host. This cannot be done from the codebase.
7. **Logo weight.** `logo.png` is large (~1 MB). Consider compressing a web-optimized copy for faster loads.
