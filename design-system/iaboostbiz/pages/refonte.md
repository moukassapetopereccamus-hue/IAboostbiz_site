# Refonte — design et animations (remplace accueil.md et MASTER.md)

> PROJECT: IAboostbiz · Skill ui-ux-pro-max, dials variance 6 / motion 5 / density 3.
> Les couleurs proposées par la base (vert #059669 + orange) sont écartées : le logo décide.

## Diagnostic de la version 1 (pourquoi elle fait « générique »)

1. Gabarit standard : héros texte à gauche + visuel à droite, bandes blanches/grises alternées.
2. Le logo n'irrigue rien : coins arrondis partout alors que le « B » est fait d'angles coupés à 45°.
3. Une icône devant chaque ligne : réflexe de site généré.
4. Animation « fondu + glisse vers le haut » : la plus banale, sans cause ni effet (`motion-meaning`).
5. Typographie sage : titres et texte presque de même largeur et de même poids.

## Style retenu

Base « Bauhaus » du skill (géométrique, fonctionnel, marque forte sur mobile), sans ses
couleurs primaires :
- formes géométriques seulement : biseau à 45° (tiré du « B »), cercle (tiré de l'anneau) ;
- rayon 0 partout, sauf les cercles ;
- appui « mécanique » sur les boutons : décalage de 2 px + couleur plus foncée, en moins de 100 ms
  (`press-feedback`, `tap-feedback-speed`, `scale-feedback`) ;
- pas d'ombre floue, pas de verre, pas de dégradé décoratif.

## Couleurs (jetons sémantiques, `color-semantic`)

| Jeton | Hex | Usage | Contraste |
|---|---|---|---|
| `--nuit` | #0B1220 | héros, bandeau final, texte | 18,7 sur blanc |
| `--nuit-2` | #121B2D | surfaces sur fond nuit | — |
| `--filet-nuit` | #24314A | traits sur fond nuit | décoratif |
| `--bleu` | #2E6BFF | boutons, marques | blanc dessus 4,50 ; bouton en 19 px gras (grand texte) |
| `--bleu-clair` | #5B8CFF | texte bleu sur fond nuit | 5,92 sur #0B1220 |
| `--bleu-fonce` | #1A48B5 | appui, petits textes bleus sur blanc | 7,96 sur blanc |
| `--gris` | #4B5565 | texte secondaire sur clair | 7,54 |
| `--gris-clair` | #C7D3EA | texte secondaire sur nuit | 12,4 |
| `--papier` | #F4F6FA | fonds clairs alternés | — |

## Typographie (une seule famille)

Archivo variable (graisse 400–800, largeur 75–100), auto-hébergée, réduite aux caractères
utiles : 49 Ko.
- Titres : largeur 75 %, graisse 800, `text-wrap: balance` (`heading-line-balance`).
- Texte : largeur 100 %, graisse 400, 17–18 px, interligne 1,6 (`readable-font-size`, `line-height`).
- Heures et chiffres : `tabular-nums` (`number-tabular`).

## Mouvement (tokens communs, `motion-consistency`)

| Jeton | Valeur |
|---|---|
| `--duree-appui` | 120 ms |
| `--duree-entree` | 520 ms |
| `--duree-sortie` | 340 ms (≈ 65 % de l'entrée, `exit-faster-than-enter`) |
| `--ressort` | courbe `linear()` élastique (`spring-physics`) |
| `--decel` | cubic-bezier(.2,.8,.2,1) (arrivée = décélération, `easing`) |

Trois animations seulement, chacune avec une cause et un effet (`motion-meaning`,
`excessive-motion` : une animation clé par écran) :

1. **Héros — le lundi qui arrive.** L'heure passe de 07:29 à 07:30, puis les trois messages
   tombent du haut ; chaque nouveau message pousse les précédents vers le bas, comme sur un
   vrai téléphone. Démarre quand le téléphone devient visible.
2. **Services — la semaine.** Une ligne Lun → Dim ; un curseur la parcourt à vitesse
   constante (linéaire : progression réelle, `easing`) et allume chaque rendez-vous.
3. **Règle — la décision.** Les 4 mesures se cochent l'une après l'autre (décalage 120 ms,
   `stagger-sequence`), puis la décision se pose comme un tampon.

Règles techniques :
- `transform` et `opacity` seulement (`transform-performance`, `layout-shift-avoid`) ;
- aucun blocage de l'interaction (`no-blocking-animation`) ;
- `prefers-reduced-motion: reduce` → tout immobile dans l'état final (`reduced-motion`) ;
- `prefers-reduced-data: reduce` → idem (`network-fallback`) ;
- sans JavaScript, tout s'affiche dans l'état final ; le JavaScript (moins de 1 Ko, aucune
  bibliothèque) sert seulement à lancer chaque animation quand elle devient visible.

## Ce qu'on n'ajoute pas

Bouton qui clignote, parallaxe, sections qui glissent toutes seules, carrousel, curseur
personnalisé, particules.

## Vérifications

375, 768, 1280 px, paysage, texte 200 %, animations réduites ; contraste AA ; cibles ≥ 44 px ;
pas de défilement horizontal ; processeur ralenti ×4 + 3G ; vidéo de chaque animation.
