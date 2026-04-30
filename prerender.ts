// prerender.ts — SSG pre-rendering script for Delsova
// Run after build: node prerender.js
// This generates static HTML for each route so Googlebot can index them.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const routes = ['/', '/apropos', '/services', '/booking']

const template = fs.readFileSync(
  path.resolve(__dirname, 'dist/index.html'),
  'utf-8'
)

for (const route of routes) {
  const dir =
    route === '/'
      ? path.resolve(__dirname, 'dist')
      : path.resolve(__dirname, `dist${route}`)

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // Inject route-specific meta per page
  let html = template

  if (route === '/apropos') {
    html = html
      .replace(
        /<title>.*?<\/title>/,
        '<title>À propos — Delsova, Agence Digitale IA en Algérie</title>'
      )
      .replace(
        /(<meta name="description" content=")([^"]*)(">)/,
        '$1Découvrez l\'équipe et la mission de Delsova, agence spécialisée en IA et transformation digitale pour les entreprises algériennes.$3'
      )
      .replace(
        /(<link rel="canonical" href=")([^"]*)(">)/,
        '$1https://delsova.dz/apropos$3'
      )
  } else if (route === '/services') {
    html = html
      .replace(
        /<title>.*?<\/title>/,
        '<title>Nos Services — Développement IA, Web & SaaS | Delsova Algérie</title>'
      )
      .replace(
        /(<meta name="description" content=")([^"]*)(">)/,
        '$1Développement web, intelligence artificielle, SaaS et applications mobiles. Découvrez toutes les expertises digitales de Delsova en Algérie.$3'
      )
      .replace(
        /(<link rel="canonical" href=")([^"]*)(">)/,
        '$1https://delsova.dz/services$3'
      )
  } else if (route === '/booking') {
    html = html
      .replace(
        /<title>.*?<\/title>/,
        '<title>Réserver une Consultation | Delsova — Agence Digitale Algérie</title>'
      )
      .replace(
        /(<meta name="description" content=")([^"]*)(">)/,
        '$1Planifiez votre consultation gratuite avec l\'équipe Delsova. Discutons de votre projet digital, IA ou SaaS en Algérie.$3'
      )
      .replace(
        /(<link rel="canonical" href=")([^"]*)(">)/,
        '$1https://delsova.dz/booking$3'
      )
  }

  fs.writeFileSync(path.resolve(dir, 'index.html'), html)
  console.log(`✅ Pre-rendered: ${route}`)
}

console.log('\n🎉 SSG pre-rendering complete!')
