# Page d'accueil — plan de design (remplace MASTER.md pour cette page)

## Ce qui change par rapport à MASTER.md, et pourquoi

Le logo (fond bleu nuit #0B1220, anneau et « B » bleus en dégradé, « IAboost »
blanc + « biz » bleu) décide de la palette. Le design system proposait un vert
#059669 + un orange : **écartés**, ils jurent avec le logo.

- **Couleur principale = bleu dominant du logo, #2E6BFF.** Texte blanc dessus :
  4,50:1, donc AA. Les boutons sont en 19 px gras (« grand texte » WCAG,
  seuil 3:1) pour garder de la marge.
- **Texte foncé = bleu nuit du logo, #0B1220** (18,7:1 sur blanc). Le bandeau
  final reprend ce fond : c'est le fond du logo.
- **Une seule police, auto-hébergée : Public Sans** (400 et 700, 14,6 Ko
  chacune). Atkinson Hyperlegible Next a été essayée d'abord, puis écartée : son
  zéro barré donne aux prix (« 450 000 FCFA ») un air de code informatique.
  Poppins + Open Sans via Google Fonts : refusé (deux polices, réseau lent).
- **Pas d'apparition au défilement.** Une seule animation : à l'ouverture, les
  trois messages d'exemple arrivent dans le téléphone l'un après l'autre.
  Désactivée avec « réduire les animations ».

## Couleurs

| Rôle | Hex | Contraste |
|---|---|---|
| Bleu principal (`--bleu`) | #2E6BFF | blanc dessus : 4,50 |
| Bleu foncé (`--bleu-fonce`) | #1A48B5 | blanc dessus : 7,96 ; survol, petits textes bleus |
| Bleu pâle (`--bleu-pale`) | #EAF0FF | fond des bulles « Exemple » |
| Bleu nuit (`--nuit`) | #0B1220 | texte : 18,7 sur blanc |
| Gris (`--gris`) | #4B5565 | 7,54 sur blanc ; 6,97 sur papier |
| Gris clair (`--gris-clair`) | #C7D3EA | 12,4 sur bleu nuit |
| Papier (`--papier`) | #F4F6FA | sections alternées |
| Filet (`--filet`) | #D9DFEA | traits décoratifs |

## Idée centrale

**« Lundi, 7 h 30 : votre semaine est déjà faite. »** Le site ne montre pas une
« solution », il montre ce que le commerçant reçoit : des messages sur son
téléphone, à un rythme connu. Tout le site est construit comme un **horaire** :
chaque service a son moment (chaque lundi / dès que ça arrive), écrit en gros
dans la marge comme un horaire de bus ou un agenda. C'est concret,
c'est daté, ça ne ressemble pas à une grille de trois cartes.

Pas de cartes ombrées : des filets fins, de la marge, du texte bien posé,
comme une lettre de cabinet.

## Mise en page

Téléphone (375 px) : une colonne, tout empilé, boutons pleine largeur.

```
┌───────────────────────────────┐
│ [■] IAboostbiz   [WhatsApp]   │  en-tête collant, fin
├───────────────────────────────┤
│ H1 Votre business tourne…     │
│ sous-phrase                   │
│ [ Diagnostic gratuit sur WA ] │  pleine largeur, 56 px
│ 15 minutes, sans engagement.  │
│ ┌───────────────────────────┐ │
│ │ Lundi 07:30      EXEMPLE  │ │  « écran » : 3 messages
│ │ ▸ Veille : 2 promos…      │ │  qui arrivent (seule
│ │ ▸ Facture reçue…          │ │  animation du site)
│ │ ▸ Votre semaine : …       │ │
│ └───────────────────────────┘ │
├──── papier ───────────────────┤
│ H2 Ce qui vous coûte du temps │
│ ── situation 1                │
│ ── situation 2                │
│ ── situation 3                │
├───────────────────────────────┤
│ H2 Notre solution (3 lignes)  │
├───────────────────────────────┤
│ H2 Trois services             │
│ CHAQUE LUNDI 7 H  (rythme)    │
│ Veille concurrentielle        │
│ texte                         │
│ [bulle Exemple]               │
│ ─────────                     │
│ DÈS QUE ÇA ARRIVE …           │
│ ─────────                     │
│ CHAQUE LUNDI …                │
│ Sur demande : …               │
│ [ bouton ]                    │
├──── papier ───────────────────┤
│ H2 Comment ça se passe        │
│ 1 ─ 2 ─ 3 (verticale)         │
├───────────────────────────────┤
│ H2 Pourquoi nous faire        │
│ confiance (liste à icônes)    │
├──── bleu nuit ────────────────┤
│ H2 bandeau final  [bouton]    │
├───────────────────────────────┤
│ pied : logo, e-mail, WA, ©    │
└───────────────────────────────┘
```

Ordinateur (1280 px) : colonne de lecture max 1120 px.

```
┌──────────────────────────────────────────────────────────┐
│ [■] IAboostbiz                 [Diagnostic gratuit sur WA]│
├──────────────────────────────────────────────────────────┤
│ H1 Votre business tourne même     │  ┌ écran ─────────┐  │
│ quand vous n'êtes pas disponible. │  │ Lundi 07:30    │  │
│ sous-phrase                       │  │ 3 messages     │  │
│ [ bouton ]  15 min, sans engag.   │  └────────────────┘  │
├──────────────────────────────────────────────────────────┤
│ H2 (marge gauche) │ situation 1 / 2 / 3 séparées par filets│
├──────────────────────────────────────────────────────────┤
│ RYTHME (marge)   │ Service + texte      │ bulle Exemple   │  × 3
├──────────────────────────────────────────────────────────┤
│ 1 ─────────── 2 ─────────── 3   (étapes sur une ligne)   │
└──────────────────────────────────────────────────────────┘
```

## Relecture « est-ce que ça ressemble à n'importe quelle startup ? »

Première version envisagée : héros centré + trois cartes d'icônes + trois cartes
de services. Rejetée : c'est le gabarit générique. Remplacée par : héros
asymétrique avec un écran de messages réels (marqués Exemple), services en
**horaire** (le rythme est le titre visuel, pas une icône), séparations par
filets, aucune ombre portée sauf l'écran du téléphone. Le téléphone est bleu nuit comme le fond du logo : la marque et l'exemple se répondent.
