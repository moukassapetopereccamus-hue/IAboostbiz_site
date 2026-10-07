# Site IAboostbiz : iaboostbiz.online

Site vitrine d'une seule page pour IAboostbiz (Brazzaville). Pas de framework :
du HTML, du CSS et une police hébergée ici. Aucun JavaScript. Poids de la page
environ 60 Ko.

TOUS LES TEXTES sont dans _data/textes.yml, séparés du code. Pour modifier un
texte, un numéro ou l'e-mail : lisez MODIFIER.md.


## Rôle de chaque fichier

_data/textes.yml
TOUS les textes du site, les coordonnées (WhatsApp, e-mail) et le message
WhatsApp. C'est le seul fichier à modifier pour changer un texte.

index.html
Le gabarit de la page : la structure, sans aucun texte. Il va chercher les
textes dans _data/textes.yml. GitHub Pages assemble les deux automatiquement
(avec l'outil Jekyll, intégré à GitHub Pages) à chaque modification.

_includes/t.html
Petit outil du gabarit : ajoute les espaces correctes avant « : », « ? », « ! »
et protège les textes. Ne pas modifier.

style.css
L'apparence : couleurs, tailles, mise en page. Les couleurs et la police sont
des variables tout en haut du fichier.

fonts/
La police Public Sans (normale et grasse) et sa licence libre (OFL). Elle est
hébergée ici plutôt que chez Google : plus rapide sur une connexion lente.

assets/logo.svg
Le logo (rond et « B »), redessiné en format vectoriel à partir de l'image du
logo : net à toutes les tailles et très léger.

assets/logo-512.png
Le logo en image carrée, utilisé par Google.

assets/partage.png
L'image d'aperçu (1200 × 630) affichée quand on partage le lien sur WhatsApp,
Facebook ou X.

favicon.svg, favicon-32.png, apple-touch-icon.png
Les petites icônes de l'onglet du navigateur et de l'écran d'accueil du
téléphone.

CNAME
Contient seulement iaboostbiz.online. Indique à GitHub Pages le nom de domaine.
Ne pas modifier.

robots.txt et sitemap.xml
Indiquent à Google ce qu'il peut lire et où se trouve la page.

_config.yml
Réglage de GitHub Pages : empêche la publication de README.md, MODIFIER.md,
design-system/ et outils/ sur le site.

MODIFIER.md
Le guide pour faire les changements courants soi-même.

design-system/
Les choix de design (couleurs, police, mise en page) et leurs raisons.
MASTER.md est la proposition de départ ; pages/accueil.md contient les choix
finalement retenus pour cette page (c'est lui qui fait foi).

outils/
Pour un développeur, pas nécessaire au site. partage.html est le modèle de
l'image d'aperçu ; generer-images.mjs regénère partage.png, logo-512.png et
les icônes (commande : npm install playwright, puis
node outils/generer-images.mjs). Pour voir le site sur un ordinateur avant de
publier : installer Jekyll 3.10 puis lancer « jekyll serve » dans le dossier.
captures/ contient les captures d'écran de vérification (375, 768 et 1280 px, paysage, texte à 200 %, sans animation) et une courte vidéo de l'animation sur téléphone.


## Mettre le site en ligne

### Étape 1 : publier avec GitHub Pages

1. Fusionnez la pull request dans la branche main.
2. Sur GitHub, dans le dépôt IAboostbiz_site : Settings, puis Pages
   (menu de gauche).
3. Dans « Build and deployment », Source : choisissez « Deploy from a branch »
   (c'est ce réglage qui assemble les textes et le gabarit).
   Branch : choisissez « main » et le dossier « / (root) ». Cliquez sur Save.
4. Dans « Custom domain », vérifiez que iaboostbiz.online est écrit (le fichier
   CNAME le remplit tout seul). Sinon, tapez-le et cliquez sur Save.
5. Attendez une à deux minutes : le site est visible à l'adresse
   https://moukassapetopereccamus-hue.github.io/IAboostbiz_site/ (en attendant
   le domaine).

### Étape 2 : relier le domaine chez Namecheap

1. Connectez-vous à Namecheap, puis Domain List, puis « Manage » à côté de
   iaboostbiz.online.
2. Ouvrez l'onglet « Advanced DNS ».
3. Dans « Host Records », ajoutez 4 enregistrements de type « A Record »,
   tous avec Host = @ et TTL = Automatic :
   - Value : 185.199.108.153
   - Value : 185.199.109.153
   - Value : 185.199.110.153
   - Value : 185.199.111.153
4. Ajoutez 1 enregistrement de type « CNAME Record » :
   Host = www, Value = moukassapetopereccamus-hue.github.io.
   (avec le point final), TTL = Automatic.
5. S'il existe déjà un enregistrement pour @ ou pour www de type
   « URL Redirect Record » ou un CNAME vers une page de parking Namecheap,
   supprimez-le : il empêcherait le site de s'afficher.

TRÈS IMPORTANT : NE TOUCHEZ PAS aux enregistrements de type MX et TXT (ni dans
« Host Records », ni dans la partie « Mail Settings »). Ce sont eux qui font
marcher votre e-mail contact@iaboostbiz.online. Ne les modifiez pas, ne les
supprimez pas, même s'ils vous semblent inutiles.

### Étape 3 : activer le cadenas (HTTPS)

1. Attendez que le domaine fonctionne (de quelques minutes à 24 heures).
2. Revenez dans Settings, puis Pages, sur GitHub. Quand le message indique que
   la vérification DNS est réussie, cochez « Enforce HTTPS ».
3. Le site est alors en ligne à l'adresse https://iaboostbiz.online/

### Étape 4 : vérifier

- Ouvrez https://iaboostbiz.online/ sur votre téléphone et cliquez sur un
  bouton : WhatsApp doit s'ouvrir avec le message déjà écrit.
- Envoyez le lien du site dans une conversation WhatsApp : l'aperçu avec le
  logo et la phrase doit s'afficher.
- Envoyez-vous un e-mail à contact@iaboostbiz.online pour vérifier que l'e-mail
  marche toujours.
