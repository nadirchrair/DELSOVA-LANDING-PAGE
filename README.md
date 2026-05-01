# Delsova Landing Page — Optimized Version

Site web officiel de Delsova Technologies, construit avec React 19 + Vite + TypeScript + Tailwind CSS.

## 🚀 Démarrage

```bash
npm install
npm run dev      # Développement local (http://localhost:5173)
npm run build    # Production avec prerendering SSG (recommandé)
npm run preview  # Tester le build local
```

## 📦 Scripts

| Script | Description |
|---|---|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Build production + **prerendering SSG** (génère HTML statique pour SEO) |
| `npm run build:no-ssg` | Build production sans prerendering (fallback) |
| `npm run preview` | Aperçu du build production |
| `npm run lint` | Linter ESLint |

## 🎯 Améliorations apportées (vs version originale)

### SEO
- ✅ **Prerendering SSG fonctionnel** (`prerender.mjs`) — chaque route génère un vrai HTML avec contenu pour Google, Bing, Facebook, LinkedIn, WhatsApp
- ✅ **Schemas JSON-LD étendus** : Organization, LocalBusiness, WebSite, FAQPage
- ✅ Meta tags améliorés : `theme-color`, `apple-touch-icon`, `geo.position`, `ICBM`, `og:image:alt`, `hreflang x-default`
- ✅ Robots meta avec `max-image-preview:large`
- ✅ Sitemap avec date correcte
- ✅ Fallback `<noscript>` avec contenu textuel pour les crawlers sans JS
- ✅ Suggestion : créer une version arabe (marché DZ) — voir TODO

### Performance
- ✅ **`home.png` 2.06 MB → 51 KB WebP** (-97 %)
- ✅ **`delsova.jpg` 787 KB → 7 KB WebP** (-99 %)
- ✅ Logo 60 KB → 17 KB
- ✅ Image hero responsive (`<picture>` avec WebP + srcset mobile/desktop)
- ✅ `preload` du hero image avec `fetchpriority="high"`
- ✅ Google Fonts en non-bloquant (`media="print" onload`)
- ✅ Code splitting (vendor chunks dans vite.config)
- ✅ Cache long pour assets (`Cache-Control: max-age=31536000, immutable`)
- ✅ Animations contenues (suppression de `position: fixed` qui drainait la batterie)
- ✅ Respect de `prefers-reduced-motion`

### UX
- ✅ **Formulaire de contact réparé** (envoyait juste `console.log` avant — rien n'arrivait au client)
- ✅ Liens sociaux du footer fonctionnels (étaient des `<div>` non cliquables)
- ✅ Email/téléphone du footer cliquables (`mailto:`, `tel:`)
- ✅ Scroll-to-top automatique au changement de route
- ✅ Bouton hamburger se ferme avec ESC
- ✅ Indication visuelle de la page active dans le menu
- ✅ États de chargement / succès / erreur dans le formulaire

### Accessibilité (a11y)
- ✅ Skip-link "Aller au contenu principal"
- ✅ Landmarks sémantiques (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ✅ ARIA : `aria-label`, `aria-expanded`, `aria-controls`, `aria-current`
- ✅ Outline de focus visible pour navigation clavier
- ✅ Attributs `loading`, `decoding`, `width`, `height` sur images
- ✅ `autocomplete` sur les champs de formulaire

### Sécurité
- ✅ Headers : `Strict-Transport-Security`, `Referrer-Policy`, `Permissions-Policy`
- ✅ X-Frame-Options changé en `SAMEORIGIN` (DENY cassait certains aperçus)

## 📁 Structure

```
.
├── index.html              # Template HTML avec SEO complet + noscript fallback
├── prerender.mjs           # Script SSG (prerendering réel via jsdom)
├── vite.config.ts          # Config Vite + code splitting
├── vercel.json             # Headers sécurité + cache + rewrites
├── public/
│   ├── assets/             # Images optimisées (WebP + PNG)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
└── src/
    ├── main.tsx            # Hydratation (gère prerendering)
    ├── App.tsx             # Routes + ScrollToTop
    ├── Components/
    │   ├── Nav.tsx         # Avec ARIA complet
    │   ├── Footer.tsx      # Liens sociaux fonctionnels
    │   ├── Presentation.tsx # Hero avec <picture> responsive
    │   ├── ContactForm.tsx # ⚡ Réparé - utilise EmailJS
    │   ├── Faq.tsx
    │   ├── NosExpertises.tsx
    │   └── ...
    ├── Screens/
    │   ├── Accueil.tsx
    │   ├── Propo.tsx
    │   ├── CommentCaMarche.tsx
    │   ├── BookingPage.tsx
    │   └── BookingSystem.tsx # EmailJS booking modal
    └── hooks/
        └── useSeoMeta.ts
```

## ⚠️ Action requise après déploiement

1. **Créer le template EmailJS pour le contact form**
   - Aller sur https://dashboard.emailjs.com/
   - Créer un nouveau template avec l'ID `template_contact`
   - Variables : `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`
   - Le template existant `template_i1kgw7v` est utilisé pour les bookings

2. **Tester le SEO après build**
   ```bash
   npm run build
   # Vérifier dist/index.html — le <div id="root"> doit contenir du vrai HTML
   # Vérifier dist/services/index.html, dist/apropos/index.html, dist/booking/index.html
   ```

3. **Soumettre le sitemap à Google Search Console**
   - https://search.google.com/search-console
   - Ajouter https://delsova.dz/sitemap.xml

4. **Tester les rich results**
   - https://search.google.com/test/rich-results?url=https://delsova.dz
   - https://www.linkedin.com/post-inspector/
   - https://developers.facebook.com/tools/debug/

## 📋 Prochaines améliorations recommandées

- [ ] **Version arabe (ar-DZ)** — ajouter routing `/ar/*` avec direction RTL (gros gain SEO en Algérie)
- [ ] Page de blog/articles pour SEO long-tail
- [ ] Google Analytics 4 ou Plausible Analytics
- [ ] Service Worker / PWA pour mode hors-ligne
- [ ] Tests automatisés (Vitest + Playwright)
- [ ] CI/CD (GitHub Actions) pour Lighthouse + tests à chaque PR
