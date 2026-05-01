// prerender.mjs — Static HTML SSG (no jsdom required)
//
// This version writes pre-built HTML content directly into <div id="root">
// for each route, so crawlers (Google, Bing, Facebook, LinkedIn, WhatsApp)
// see real text content instead of an empty div.
//
// React will hydrate this content when JavaScript runs in the browser.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'dist')

// ============================================================
// STATIC CONTENT FOR EACH ROUTE
// ============================================================

const SHARED_NAV = `
<header><nav aria-label="Navigation principale" class="w-full bg-[#f9fcf8] px-4 lg:px-8 py-4 shadow-sm border-b-2 border-b-purple-500">
  <div class="flex justify-between items-center">
    <a href="/" class="flex items-center" aria-label="Delsova - Accueil">
      <img src="/assets/delsova-1.png" alt="" width="40" height="40" class="w-10 h-10 mr-2">
      <span class="text-[#0e1934] text-lg font-bold">Delsova</span>
    </a>
    <ul class="hidden lg:flex items-center gap-8 list-none m-0 p-0">
      <li><a href="/" class="nav-link">Accueil</a></li>
      <li><a href="/services" class="nav-link">Services</a></li>
      <li><a href="/services" class="font-bold text-[#4186d8]">New Solutions</a></li>
      <li><a href="/apropos" class="nav-link">À propos</a></li>
    </ul>
  </div>
</nav></header>
`.trim()

const SHARED_FOOTER = `
<footer role="contentinfo" class="relative w-full overflow-hidden text-gray-900">
  <div class="relative z-20 bg-gradient-to-r from-[#4186d8] to-[#964cb2] px-6 lg:px-16 py-8 lg:py-12">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
      <div class="w-full lg:w-1/4 space-y-4">
        <div class="flex items-center">
          <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3"><span class="text-[#4186d8] font-bold text-lg">D</span></div>
          <span class="text-white text-xl font-bold">Delsova</span>
        </div>
        <p class="text-white text-sm lg:text-base font-medium leading-6 lg:leading-7">Delsova développe des solutions technologiques innovantes incluant applications web et mobiles, modèles d'IA en vision par ordinateur et IA générative.</p>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4">
        <h2 class="text-white text-xl lg:text-2xl font-extrabold m-0">Contactez-nous</h2>
        <a href="mailto:contact@delsova.dz" class="text-white text-base font-medium">contact@delsova.dz</a>
        <a href="tel:+213654992523" class="text-white text-base font-medium">+213 654 992 523</a>
        <a href="https://maps.app.goo.gl/Ve9tXh48DNyFRF6T8" target="_blank" rel="noopener noreferrer" class="text-white text-base font-medium">Bir El Djir, Oran, Algérie</a>
      </div>
      <nav aria-label="Réseaux sociaux" class="w-full lg:w-1/4 flex flex-col items-center lg:items-start space-y-4">
        <h2 class="text-white text-xl lg:text-2xl font-extrabold m-0">Réseaux sociaux</h2>
        <ul class="flex space-x-4 list-none p-0 m-0">
          <li><a href="https://www.facebook.com/delsova" target="_blank" rel="noopener noreferrer" aria-label="Delsova sur Facebook">Facebook</a></li>
          <li><a href="https://www.instagram.com/delsova" target="_blank" rel="noopener noreferrer" aria-label="Delsova sur Instagram">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/delsova" target="_blank" rel="noopener noreferrer" aria-label="Delsova sur LinkedIn">LinkedIn</a></li>
        </ul>
      </nav>
    </div>
    <div class="max-w-7xl mx-auto mt-8 lg:mt-12 pt-6 border-t border-white/30">
      <p class="text-white text-center text-base lg:text-lg font-semibold m-0">© 2026 Delsova Technologies — Tous droits réservés</p>
    </div>
  </div>
</footer>
`.trim()

// ----- Page-specific content (only the <main> part changes per route) -----

const HOME_MAIN = `
<main id="main-content">
  <section aria-labelledby="hero-heading" class="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-16 bg-[#f9fcf8] gap-8 lg:gap-12">
    <div class="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
      <div class="space-y-4">
        <h1 id="hero-heading" class="text-[#0e1934] text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Delsova Technologies
          <span class="block bg-gradient-to-r from-[#4186d8] to-[#964cb2] bg-clip-text text-transparent">Innovation – IA – Digitalisation</span>
        </h1>
        <h2 class="text-[#4186d8] text-xl lg:text-2xl xl:text-3xl font-semibold">Nous accompagnons la transformation des entreprises</h2>
        <p class="text-[#0e1934] text-base lg:text-lg xl:text-xl font-normal leading-7 lg:leading-8 max-w-full lg:max-w-[668px] mt-2">
          Nous sommes des visionnaires. Nous créons des solutions qui font avancer votre entreprise au moyen d'outils numériques performants.
        </p>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
      <picture>
        <source type="image/webp" srcset="/assets/home-mobile.webp 640w, /assets/home.webp 1200w" sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 550px">
        <img src="/assets/home.png" alt="Delsova Technologies — illustration de l'innovation, de l'intelligence artificielle et de la digitalisation" width="1200" height="895" loading="eager" decoding="async">
      </picture>
    </div>
  </section>

  <section aria-labelledby="processus-heading" class="w-full py-16 px-6 lg:px-16 bg-white">
    <h2 id="processus-heading" class="text-3xl lg:text-5xl font-bold text-center text-[#0e1934] mb-8">Notre Processus Client</h2>
    <p class="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">Notre processus en 5 étapes garantit une compréhension complète de vos besoins avant de proposer la solution optimale.</p>
    <ol class="max-w-4xl mx-auto space-y-4">
      <li><strong>1. Analyse de Situation</strong> — Comprendre votre contexte et vos enjeux.</li>
      <li><strong>2. État des Lieux</strong> — Cartographier vos processus existants.</li>
      <li><strong>3. Diagnostic</strong> — Identifier les opportunités d'amélioration.</li>
      <li><strong>4. Analyse de Problème</strong> — Approfondir les points critiques.</li>
      <li><strong>5. Proposition de Solution</strong> — Roadmap claire avec ROI estimé.</li>
    </ol>
  </section>

  <section aria-labelledby="mission-heading" class="w-full py-16 px-6 lg:px-16 bg-[#f9fcf8]">
    <h2 id="mission-heading" class="text-3xl lg:text-5xl font-bold text-center text-[#0e1934] mb-6">Notre Mission</h2>
    <p class="text-center text-lg text-slate-700 max-w-3xl mx-auto">
      Accompagner les entreprises algériennes dans leur transformation digitale grâce à des solutions innovantes en intelligence artificielle, développement web, SaaS et applications mobiles.
    </p>
  </section>

  <section aria-labelledby="tech-heading" class="w-full py-16 px-6 lg:px-16 bg-white">
    <h2 id="tech-heading" class="text-3xl lg:text-5xl font-bold text-center text-[#0e1934] mb-8">Nos Technologies</h2>
    <p class="text-center text-lg text-slate-600 max-w-3xl mx-auto">React, Node.js, Python, TensorFlow, AWS, Docker, et bien d'autres outils modernes pour des solutions performantes et évolutives.</p>
  </section>

  <section id="faq" aria-labelledby="faq-heading" class="w-full py-16 px-6 lg:px-16">
    <h2 id="faq-heading" class="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12">Questions Fréquemment Posées</h2>
    <div class="max-w-4xl mx-auto space-y-6">
      <article><h3 class="text-xl font-bold text-slate-900">Quels services Delsova propose-t-il ?</h3><p class="text-slate-700 mt-2">Delsova offre une gamme complète de services : Intelligence Artificielle (IA), Digitalisation des Entreprises (ERP/CRM), Smart Software sur mesure, et Développement Web & Mobile.</p></article>
      <article><h3 class="text-xl font-bold text-slate-900">Pouvez-vous personnaliser les solutions selon mes besoins ?</h3><p class="text-slate-700 mt-2">Oui, nous créons des solutions sur mesure adaptées à votre contexte. Notre processus client en 5 étapes garantit une compréhension complète de vos besoins.</p></article>
      <article><h3 class="text-xl font-bold text-slate-900">Combien de temps prend une implémentation ?</h3><p class="text-slate-700 mt-2">La durée dépend de la complexité du projet. Nous utilisons des méthodologies agiles. En moyenne, nos projets durent de 2 à 6 mois, avec des livrables réguliers.</p></article>
      <article><h3 class="text-xl font-bold text-slate-900">Comment se déroule votre processus client ?</h3><p class="text-slate-700 mt-2">Notre processus comprend 5 étapes : Analyse de Situation, État des Lieux, Diagnostic, Analyse de Problème, et Proposition de Solution.</p></article>
      <article><h3 class="text-xl font-bold text-slate-900">Quel support recevrai-je après la livraison ?</h3><p class="text-slate-700 mt-2">Nous offrons un support continu incluant maintenance, mises à jour et assistance technique. Votre succès est notre priorité.</p></article>
    </div>
  </section>

  <section id="contact" aria-labelledby="contact-heading" class="w-full py-16 px-6 lg:px-16 bg-gradient-to-r from-[#4186d8] to-[#964cb2]">
    <h2 id="contact-heading" class="text-white text-3xl lg:text-5xl font-bold text-center">Contactez-nous</h2>
    <p class="text-white/90 text-lg lg:text-xl text-center mt-3">Nous sommes prêts à discuter de votre projet</p>
  </section>
</main>
`.trim()

const SERVICES_MAIN = `
<main id="main-content">
  <section aria-labelledby="services-heading" class="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 lg:py-20 px-6 lg:px-12">
    <div class="text-center mb-12">
      <h1 id="services-heading" class="text-4xl lg:text-6xl font-bold text-slate-900 mb-4">
        Solutions Digitales <span class="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Complètes & Innovantes</span>
      </h1>
      <p class="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
        De l'Intelligence Artificielle aux applications web et mobile, nous maîtrisons l'ensemble des technologies pour transformer votre entreprise.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
      <article class="bg-white/40 rounded-3xl p-8 lg:p-10 border-2 border-transparent">
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Intelligence Artificielle</h2>
        <p class="text-slate-600 mb-6">Automatisation intelligente, vision par ordinateur, analyse prédictive.</p>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li>Automatisation intelligente des tâches répétitives</li>
          <li>Vision par ordinateur & analyse d'images avancée</li>
          <li>Analyse prédictive & modèles de machine learning</li>
          <li>Modèles génératifs (GPT, Computer Vision)</li>
          <li>IA spécialisée adaptée à votre secteur</li>
        </ul>
      </article>

      <article class="bg-white/40 rounded-3xl p-8 lg:p-10 border-2 border-transparent">
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Digitalisation des Entreprises</h2>
        <p class="text-slate-600 mb-6">ERP, CRM, GED, automatisation et optimisation des processus.</p>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li>ERP (Enterprise Resource Planning) sur mesure</li>
          <li>CRM (Customer Relationship Management) intelligent</li>
          <li>GED (Gestion Électronique des Documents)</li>
          <li>Automatisation de workflows complexes</li>
          <li>Optimisation des processus internes</li>
        </ul>
      </article>

      <article class="bg-white/40 rounded-3xl p-8 lg:p-10 border-2 border-transparent">
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Smart Software</h2>
        <p class="text-slate-600 mb-6">Solutions adaptées, architecture scalable, sécurité renforcée.</p>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li>Développement de solutions sur mesure</li>
          <li>Architecture scalable et évolutive</li>
          <li>Sécurité renforcée et conformité des données</li>
          <li>Performance optimisée et haute disponibilité</li>
          <li>Maintenance et évolutions continues</li>
        </ul>
      </article>

      <article class="bg-white/40 rounded-3xl p-8 lg:p-10 border-2 border-transparent">
        <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">Développement Web & Mobile</h2>
        <p class="text-slate-600 mb-6">Applications web robustes, apps iOS/Android, UX moderne.</p>
        <ul class="list-disc pl-6 space-y-2 text-slate-700">
          <li>Applications web robustes et performantes</li>
          <li>Apps iOS & Android natives optimisées</li>
          <li>UX/UI moderne et intuitive</li>
          <li>Intégration API & services cloud</li>
          <li>Déploiement cloud sécurisé</li>
        </ul>
      </article>
    </div>
  </section>
</main>
`.trim()

const APROPOS_MAIN = `
<main id="main-content">
  <section aria-labelledby="apropos-heading" class="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#f9fcf8]">
    <div class="text-center mb-12 max-w-5xl mx-auto p-8">
      <h1 id="apropos-heading" class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e1934]">À Propos de Delsova</h1>
      <p class="text-[#4186d8] text-lg sm:text-xl lg:text-2xl font-medium mt-4">Leadership Expérimenté & Expertise Technique</p>
    </div>

    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl lg:text-3xl font-bold text-[#0e1934] mb-4">Notre Siège Social</h2>
      <p class="text-slate-700 text-lg mb-8">
        Notre siège social est situé au cœur de la vibrante ville d'Oran, capitale économique de l'Ouest algérien. Nous opérons depuis Bir El Djir et servons les entreprises d'Oran, Mascara, Tlemcen, Sidi Bel Abbès et toute l'Algérie.
      </p>

      <h2 class="text-2xl lg:text-3xl font-bold text-[#0e1934] mb-6">Pourquoi Delsova</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article>
          <h3 class="text-xl font-bold text-[#0e1934] mb-2">Expertise Reconnue</h3>
          <p class="text-slate-700">Leadership expérimenté avec plus de 60 ans d'expérience cumulée en management stratégique et industrie.</p>
        </article>
        <article>
          <h3 class="text-xl font-bold text-[#0e1934] mb-2">Équipe Technique Qualifiée</h3>
          <p class="text-slate-700">Ingénieurs informatiques avec 6+ ans d'expérience en gestion de projets et innovation digitale.</p>
        </article>
        <article>
          <h3 class="text-xl font-bold text-[#0e1934] mb-2">Solutions Personnalisées</h3>
          <p class="text-slate-700">Recommandations adaptées avec roadmap claire, actions priorisées et ROI estimé pour votre transformation.</p>
        </article>
      </div>
    </div>
  </section>
</main>
`.trim()

const BOOKING_MAIN = `
<main id="main-content">
  <section aria-labelledby="booking-heading" class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h1 id="booking-heading" class="text-4xl font-bold mb-4 text-[#0e1934]">Réserver une réunion</h1>
      <p class="text-lg text-gray-600 mb-8">
        Planifiez votre consultation gratuite avec l'équipe Delsova Technologies. Discutons de votre projet digital, IA, SaaS ou développement web en Algérie.
      </p>
      <p class="text-base text-gray-500">
        Email : <a href="mailto:contact@delsova.dz" class="text-[#4186d8] underline">contact@delsova.dz</a> &nbsp;·&nbsp;
        Téléphone : <a href="tel:+213654992523" class="text-[#4186d8] underline">+213 654 992 523</a>
      </p>
    </div>
  </section>
</main>
`.trim()

// ============================================================
// ROUTES CONFIG
// ============================================================

const routes = [
  {
    path: '/',
    title: 'Delsova — Agence Informatique | Développement Web & SaaS en Algérie',
    description: "Delsova est une agence digitale spécialisée en intelligence artificielle, développement web, SaaS et applications mobiles en Algérie (Oran). Transformez votre entreprise avec nos solutions IA sur mesure.",
    canonical: 'https://delsova.dz/',
    body: HOME_MAIN,
  },
  {
    path: '/apropos',
    title: 'À Propos — Delsova Technologies | Agence Digitale IA Oran Algérie',
    description: "Découvrez l'équipe et la mission de Delsova Technologies. Agence digitale fondée à Oran, spécialisée en intelligence artificielle et transformation digitale des entreprises algériennes.",
    canonical: 'https://delsova.dz/apropos',
    body: APROPOS_MAIN,
  },
  {
    path: '/services',
    title: 'Nos Services — Développement IA, Web & SaaS | Delsova Algérie',
    description: "Développement web, intelligence artificielle, SaaS, applications mobiles et digitalisation d'entreprise. Toutes les expertises de Delsova Technologies en Algérie.",
    canonical: 'https://delsova.dz/services',
    body: SERVICES_MAIN,
  },
  {
    path: '/booking',
    title: 'Réserver une Consultation Gratuite | Delsova Technologies Algérie',
    description: "Planifiez votre consultation gratuite avec l'équipe Delsova Technologies. Discutons de votre projet digital, IA, SaaS ou développement web en Algérie.",
    canonical: 'https://delsova.dz/booking',
    body: BOOKING_MAIN,
  },
]

// ============================================================
// MAIN
// ============================================================

if (!fs.existsSync(distDir)) {
  console.error('❌  dist/ folder not found. Run `vite build` first.')
  process.exit(1)
}

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

for (const route of routes) {
  let html = template

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  )
  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  )
  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${route.canonical}"`
  )
  // OG / Twitter
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${route.canonical}"`
  )
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${route.title}"`
  )
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  )
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${route.canonical}"`
  )
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${route.title}"`
  )
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${route.description}"`
  )

  // Inject pre-rendered HTML content into <div id="root">
  // We replace the entire root div (and its noscript) with prerendered content + noscript fallback.
  const prerenderedRoot = `<div id="root">\n${SHARED_NAV}\n${route.body}\n${SHARED_FOOTER}\n</div>`

  // Find <div id="root"> and its closing </div>, then replace.
  // We use indexOf to be robust against different line endings (CRLF on Windows, LF on Linux).
  const rootStart = html.indexOf('<div id="root">')
  if (rootStart === -1) {
    console.error(`❌  Could not find <div id="root"> in template for ${route.path}`)
    process.exit(1)
  }
  // Find the matching </div> by searching for </div> after <noscript>...</noscript>
  // The original template has: <div id="root"><noscript>...</noscript></div>
  const noscriptEnd = html.indexOf('</noscript>', rootStart)
  if (noscriptEnd === -1) {
    console.error(`❌  Could not find </noscript> after <div id="root"> for ${route.path}`)
    process.exit(1)
  }
  const rootEnd = html.indexOf('</div>', noscriptEnd) + '</div>'.length
  html = html.slice(0, rootStart) + prerenderedRoot + html.slice(rootEnd)

  // Write file
  const outPath = route.path === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, route.path, 'index.html')
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html, 'utf-8')
  const sizeKB = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1)
  console.log(`✅  Pre-rendered: ${route.path.padEnd(12)} -> ${path.relative(__dirname, outPath).padEnd(35)} (${sizeKB} KB)`)
}

console.log('\n🎉  SSG done — dist/ is ready for deployment.')
console.log('    Crawlers (Google, Bing, Facebook, LinkedIn) will now see real content.')
