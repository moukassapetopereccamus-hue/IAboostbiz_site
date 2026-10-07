// Regénère les images du site à partir de outils/partage.html, favicon.svg et assets/logo.svg.
// Usage (développeur) : node outils/generer-images.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { readFileSync } from 'node:fs';
const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const url = (f) => 'file://' + path.join(racine, f);
const navigateur = await chromium.launch();
async function capture(html, largeur, hauteur, sortie, attente = 300) {
  const page = await navigateur.newPage({ viewport: { width: largeur, height: hauteur } });
  if (html.startsWith('<')) await page.setContent(html); else await page.goto(url(html));
  await page.waitForTimeout(attente);
  await page.screenshot({ path: path.join(racine, sortie) });
  await page.close();
}
// Les SVG sont intégrés directement (une page vierge ne peut pas lire un fichier local).
const svg = (f) => 'data:image/svg+xml;base64,' + readFileSync(path.join(racine, f)).toString('base64');
const image = (f, taille, fond = 'transparent') =>
  `<body style="margin:0;background:${fond}"><img src="${svg(f)}" style="width:${taille}px;height:${taille}px;display:block"></body>`;
await capture('outils/partage.html', 1200, 630, 'assets/partage.png', 800);
await capture(image('favicon.svg', 32), 32, 32, 'favicon-32.png');
await capture(image('favicon.svg', 180), 180, 180, 'apple-touch-icon.png');
await capture(`<body style="margin:0;background:#0B1220;display:grid;place-items:center;width:512px;height:512px"><img src="${svg('assets/logo.svg')}" style="width:420px;height:420px"></body>`, 512, 512, 'assets/logo-512.png');
await navigateur.close();
console.log('Images regénérées.');
