// prerender.mjs — Post-build SSG script
// Usage: node prerender.mjs
// Generates dist/apropos/index.html, dist/services/index.html, dist/booking/index.html
// with correct title/meta per page so Googlebot indexes each route.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, 'dist')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

const routes = [
  {
    path: '/apropos',
    title: 'À Propos — Delsova Technologies | Agence Digitale IA Oran Algérie',
    description: 'Découvrez l\'équipe et la mission de Delsova Technologies. Agence digitale fondée à Oran, spécialisée en intelligence artificielle et transformation digitale des entreprises algériennes.',
    canonical: 'https://delsova.dz/apropos',
  },
  {
    path: '/services',
    title: 'Nos Services — Développement IA, Web & SaaS | Delsova Algérie',
    description: 'Développement web, intelligence artificielle, SaaS, applications mobiles et digitalisation d\'entreprise. Toutes les expertises de Delsova Technologies en Algérie.',
    canonical: 'https://delsova.dz/services',
  },
  {
    path: '/booking',
    title: 'Réserver une Consultation Gratuite | Delsova Technologies Algérie',
    description: 'Planifiez votre consultation gratuite avec l\'équipe Delsova Technologies. Discutons de votre projet digital, IA, SaaS ou développement web en Algérie.',
    canonical: 'https://delsova.dz/booking',
  },
]

for (const route of routes) {
  let html = template

  // Update <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  )

  // Update meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  )

  // Update canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${route.canonical}"`
  )

  // Update OG url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${route.canonical}"`
  )

  // Update OG title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${route.title}"`
  )

  // Update OG description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  )

  // Update twitter title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${route.title}"`
  )

  // Update twitter description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${route.description}"`
  )

  // Write to dist/[route]/index.html
  const dir = path.join(distDir, route.path)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf-8')
  console.log(`✅  Pre-rendered: ${route.path}`)
}

console.log('\n🎉  SSG done — dist/ is ready for deployment.')
