# Modifier le site soi-même

Ce guide explique les 10 changements les plus probables. Pour chacun : le
fichier à ouvrir, le texte EXACT à chercher, combien de fois il apparaît, et
quoi mettre à la place.


## Avant de commencer : la méthode

1. Sur GitHub, ouvrez le dépôt IAboostbiz_site, cliquez sur le fichier
   (par exemple index.html), puis sur le petit crayon « Edit this file ».
2. Pour chercher un texte dans le fichier : cliquez dans le texte, puis
   appuyez sur Ctrl + F (Cmd + F sur Mac). Tapez le texte à chercher.
3. Changez le texte. Changez TOUTES les fois où il apparaît (le nombre est
   donné ci-dessous) : si vous en oubliez une, le site sera incohérent.
4. En bas, cliquez sur « Commit changes ». Le site se met à jour tout seul
   en une à deux minutes.

Trois règles pour ne rien casser :

- Ne touchez qu'au texte. Ne supprimez jamais les signes < > " = / qui
  entourent le texte.
- Ce que vous voyez écrit &nbsp; est une espace qui ne se coupe pas en fin de
  ligne (par exemple avant « : » ou entre « 15 » et « minutes »). Vous pouvez
  la garder ou la remplacer par une espace normale : les deux marchent.
- Les lignes entre <!-- et --> sont des commentaires : ils ne s'affichent pas
  sur le site. Ils indiquent ce que contient chaque bloc.

Si quelque chose ne va pas après une modification : sur GitHub, ouvrez
l'onglet « Commits », cliquez sur votre dernière modification et choisissez
« Revert » pour revenir en arrière.


## 1. Changer la grande phrase d'accroche

Fichier : index.html

Texte à chercher : n'êtes pas disponible

Il apparaît 5 fois dans index.html : la grande phrase affichée en haut de la
page, et 4 fois dans les lignes du haut du fichier qui servent à l'aperçu
WhatsApp et Facebook.

Quoi faire : remplacez la phrase complète « Votre business tourne même quand
vous n'êtes pas disponible. » par la nouvelle, aux 5 endroits. Dans les lignes
du haut, la phrase commence parfois par une minuscule (« votre business... ») :
gardez ce style.

Attention : l'image d'aperçu WhatsApp (assets/partage.png) contient aussi
l'ancienne phrase. Voir le changement n° 10.


## 2. Changer le numéro WhatsApp

Fichier : index.html

Texte à chercher : 242069153296

Il apparaît 6 fois : les 4 boutons, le lien WhatsApp du pied de page, et la
fiche pour Google (où il est écrit +242069153296).

Quoi mettre à la place : le nouveau numéro, au format international, SANS le
signe +, SANS espaces et SANS le 0 qui suit parfois l'indicatif. Exemple :
le 06 123 45 67 au Congo s'écrit 242061234567.

Puis cherchez aussi : +242 06 915 32 96

Il apparaît 1 fois : c'est le numéro affiché en bas de la page. Remplacez-le
par le nouveau numéro, écrit comme vous voulez qu'il s'affiche.


## 3. Changer le message déjà écrit dans WhatsApp

Quand un visiteur clique sur un bouton, WhatsApp s'ouvre avec ce message déjà
écrit : « Bonjour, je souhaite un diagnostic gratuit pour mon activité. »

Fichier : index.html

Texte à chercher :
Bonjour%2C%20je%20souhaite%20un%20diagnostic%20gratuit%20pour%20mon%20activit%C3%A9.

Il apparaît 4 fois (un par bouton).

Quoi mettre à la place : votre nouveau message, écrit dans le « code des
liens ». Le plus simple : allez sur un site gratuit de « URL encode » (par
exemple urlencoder.org), collez votre phrase, copiez le résultat et collez-le
aux 4 endroits. À la main, les règles principales sont :

- une espace devient %20
- une virgule devient %2C
- é devient %C3%A9, è devient %C3%A8, à devient %C3%A0, ç devient %C3%A7
- un point d'interrogation devient %3F

Exemple : « Bonjour, je veux un devis » devient
Bonjour%2C%20je%20veux%20un%20devis


## 4. Changer l'adresse e-mail

Fichier : index.html

Texte à chercher : contact@iaboostbiz.online

Il apparaît 3 fois : le lien e-mail du pied de page (2 fois sur la même ligne :
le lien et le texte affiché) et la fiche pour Google.

Quoi mettre à la place : la nouvelle adresse, aux 3 endroits.


## 5. Changer le texte d'un service

Fichier : index.html

Chaque service est précédé d'un commentaire. Cherchez :

- Service 1 : Veille concurrentielle
- Service 2 : Alertes importantes
- Service 3 : Rapport de la semaine

Chaque commentaire apparaît 1 fois. Juste en dessous, vous trouvez dans l'ordre :

- le rythme (par exemple « Chaque lundi matin »), après le dessin de l'icône ;
- le nom du service, entre <h3> et </h3> ;
- la description, entre <p> et </p> ;
- l'exemple de message, après « Exemple de message » ;
- l'heure de l'exemple, entre <time> et </time>.

Exemple : pour changer la description de la veille, cherchez
Nous suivons les publications
(1 fois) et réécrivez la phrase entre <p> et </p>.

Gardez toujours la mention « Exemple de message » au-dessus d'un exemple : ce
n'est pas un vrai message de client.


## 6. Ajouter un service

Fichier : index.html

Texte à chercher : <!-- Service 3 : Rapport de la semaine -->

Il apparaît 1 fois.

Quoi faire :

1. Sélectionnez depuis cette ligne de commentaire jusqu'à la ligne
   </article> qui suit (incluse). Copiez.
2. Collez juste après ce </article>, sur une nouvelle ligne.
3. Dans la copie, changez le commentaire (Service 4 : ...), le rythme, le nom,
   la description, l'exemple et l'heure.
4. Pour l'icône du rythme, gardez #i-calendrier (pour un rythme fixe) ou
   #i-cloche (pour « dès que ça arrive »).

Rappel : n'ajoutez un service que si vous savez déjà le livrer. Et pensez à
retirer cette prestation de la ligne « Sur demande » si elle y figure
(cherchez : Sur demande).


## 7. Changer la couleur principale

Fichier : style.css

Texte à chercher : --bleu: #2E6BFF;

Il apparaît 1 fois, tout en haut du fichier.

Quoi mettre à la place : le nouveau code couleur, par exemple
--bleu: #1F5BEB;

Toute la page suit. Attention : le texte blanc des boutons doit rester bien
lisible. Avant de valider, testez la couleur sur un site de « contrast
checker » (par exemple webaim.org/resources/contrastchecker) avec le blanc
#FFFFFF : le résultat doit être au moins 4.5:1.

Le même code #2E6BFF apparaît aussi 1 fois dans favicon.svg, 1 fois dans
assets/logo.svg et 2 fois dans outils/partage.html. Ce sont le logo et les
icônes : ne les changez que si le logo lui-même change de couleur.


## 8. Ajouter un vrai témoignage

Seulement avec un vrai client, avec son accord écrit, et ses mots exacts.

Fichier : index.html

Texte à chercher : TÉMOIGNAGE CACHÉ

Il apparaît 2 fois : une ligne qui finit par DÉBUT et une ligne qui finit
par FIN. Entre les deux se trouve un bloc témoignage prêt à l'emploi.

Quoi faire :

1. Entre les deux lignes, remplacez « Texte exact du client, mot pour mot. »
   par la phrase du client.
2. Remplacez « Prénom Nom, métier, quartier » par son nom et son activité
   (par exemple : Grâce M., pharmacie, Poto-Poto).
3. Supprimez entièrement les 2 lignes qui contiennent TÉMOIGNAGE CACHÉ.
   Le témoignage apparaît alors sur le site, juste avant le bandeau final.

Pour en ajouter un deuxième : copiez le bloc qui va de <figure
class="temoignage"> à </figure> et collez-le juste en dessous.


## 9. Changer l'année

Fichier : index.html

Texte à chercher : © 2026

Il apparaît 1 fois, en bas de la page.

Quoi mettre à la place : © 2027 (ou l'année en cours). À faire chaque
1er janvier.


## 10. Changer l'image d'aperçu (WhatsApp, Facebook)

C'est l'image qui s'affiche quand quelqu'un partage le lien du site.

Fichier : assets/partage.png

Elle est utilisée 3 fois dans index.html (cherchez : partage.png).

Le plus simple : préparez une nouvelle image de 1200 pixels de large sur
630 pixels de haut (par exemple avec Canva, format « Publication Facebook »
puis dimensions personnalisées), enregistrez-la en PNG sous le nom exact
partage.png, puis sur GitHub ouvrez le dossier assets, cliquez sur
« Add file », puis « Upload files » et déposez-la : elle remplace l'ancienne.
Ne changez pas le nom du fichier.

L'image actuelle a été fabriquée à partir de outils/partage.html (voir
README.md) : un développeur peut la regénérer en une commande.

WhatsApp garde l'ancienne image en mémoire pendant quelques jours : c'est
normal si le changement ne se voit pas tout de suite.
