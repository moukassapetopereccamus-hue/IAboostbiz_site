# Modifier le site soi-même

Tous les textes du site sont rangés dans UN SEUL fichier, sans code :

    _data/textes.yml

Vous n'avez jamais besoin d'ouvrir index.html (c'est le gabarit, il ne
contient aucun texte) ni style.css (sauf pour la couleur, changement n° 7).


## La méthode, toujours la même

1. Sur GitHub, ouvrez le dépôt IAboostbiz_site, puis le dossier _data, puis le
   fichier textes.yml.
2. Cliquez sur le petit crayon « Edit this file ».
3. Pour trouver un texte : cliquez dans le fichier, appuyez sur Ctrl + F
   (Cmd + F sur Mac) et tapez quelques mots du texte.
4. Modifiez le texte.
5. En bas (ou en haut à droite), cliquez sur « Commit changes ». Le site se
   met à jour tout seul en une à deux minutes.

Le fichier est rangé dans l'ordre de la page, de haut en bas. Chaque partie
commence par un titre entre deux lignes de tirets, par exemple :

    #  1. ACCROCHE (le haut de la page)

Chaque texte se trouve SOUS une étiquette qui finit par >- . Exemple :

    accroche:
      titre: >-
        Votre business tourne même quand vous n'êtes pas disponible.

Vous changez seulement la ligne du texte (la troisième ici). Vous ne touchez
pas aux étiquettes (accroche:, titre:).


## Les 4 règles pour ne rien casser

1. Gardez le même décalage : le nouveau texte doit commencer exactement sous
   le début de l'ancien (mêmes espaces au début de la ligne). Utilisez la
   barre d'espace, jamais la touche Tab.
2. Écrivez normalement : accents, apostrophes, deux-points, guillemets « »,
   tout est permis. Le site ajoute tout seul les espaces correctes avant
   « : » et « ? ».
3. Un texte long peut tenir sur plusieurs lignes, toujours avec le même
   décalage : le site le remet sur une seule ligne.
4. Les lignes qui commencent par # sont des explications pour vous : elles
   ne s'affichent pas sur le site.

Si vous faites une erreur de décalage, GitHub ne publie pas la modification :
l'ancien site reste en ligne, rien ne casse, et vous recevez un e-mail de
GitHub « Page build failure ». Le message indique le numéro de la ligne en
cause (par exemple « line 76 ») : sur GitHub, les numéros de ligne sont à
gauche du texte. Corrigez le décalage de cette ligne, puis « Commit changes ». Pour
revenir en arrière : onglet « Commits », votre dernière modification,
bouton « Revert ».


## 1. Changer la grande phrase d'accroche

Partie : 1. ACCROCHE

Cherchez : n'êtes pas disponible

Ce texte apparaît 1 fois dans textes.yml (sous accroche: puis titre:).
Remplacez la phrase. Elle change automatiquement partout : sur la page, dans
l'onglet et dans l'aperçu WhatsApp.

Seule exception : l'image d'aperçu WhatsApp (assets/partage.png) contient la
phrase écrite dans l'image. Voir le changement n° 10.

Juste en dessous, sous_titre: est la phrase plus petite qui suit.


## 2. Changer le numéro WhatsApp

Partie : COORDONNÉES

Cherchez : whatsapp_numero

Il apparaît 1 fois. Mettez le nouveau numéro sous cette étiquette, en
chiffres seulement : sans +, sans espaces. Au Congo-Brazzaville, on garde
le 0 après 242 : le +242 06 915 32 96 s'écrit 242069153296.

Puis cherchez : whatsapp_affiche

Il apparaît 1 fois. C'est le numéro tel qu'il s'affiche en bas de la page :
écrivez-le avec des espaces, par exemple +242 06 915 32 96.

Les 4 boutons et le bas de page se mettent à jour tout seuls.

Pour vérifier un numéro : sur votre téléphone, ouvrez l'adresse
https://wa.me/ suivie du numéro (par exemple https://wa.me/242069153296).
WhatsApp doit ouvrir une conversation avec le bon contact.


## 3. Changer le message déjà écrit dans WhatsApp

Partie : COORDONNÉES

Cherchez : whatsapp_message

Il apparaît 1 fois. Écrivez le nouveau message normalement, avec accents et
espaces. Le site le transforme tout seul pour le lien WhatsApp.


## 4. Changer l'adresse e-mail

Partie : COORDONNÉES

Cherchez : email:

Il apparaît 1 fois. Mettez la nouvelle adresse sous cette étiquette. Pour
l'instant, c'est votre adresse personnelle. Le jour où
contact@iaboostbiz.online fonctionne de nouveau, remplacez-la ici : le bas de
page et la fiche Google suivent.


## 5. Changer le texte d'un service

Partie : 4. LES SERVICES

Chaque service est un bloc qui commence par « - rythme: ». Dans chaque bloc :

- rythme : le moment (par exemple « Chaque lundi matin ») ;
- icone : le petit dessin, « calendrier » ou « cloche » ;
- nom : le nom du service ;
- description : la phrase d'explication ;
- exemple : le message d'exemple (toujours un exemple, jamais un vrai
  message de client) ;
- exemple_heure : l'heure affichée sous l'exemple.

Exemple : pour changer la description de la veille, cherchez
« Nous suivons les publications » (1 fois) et réécrivez la phrase.

Évitez les montants en FCFA dans les exemples : le visiteur pourrait les
prendre pour vos prix.


## 6. Ajouter un service

Partie : 4. LES SERVICES

1. Sélectionnez un bloc complet de service, depuis la ligne
   « - rythme: >- » jusqu'à la ligne de son exemple_heure et son texte
   (inclus). Copiez.
2. Collez-le juste après le dernier service (après la ligne qui suit
   « exemple_heure: >- » du troisième service), avec le même décalage.
3. Changez les textes de la copie.

Le nouveau service apparaît sur le site, à la suite des autres. Rappel :
n'ajoutez que ce que vous savez déjà livrer, et retirez-le de la ligne
« Sur demande » s'il y figure (cherchez : sur_demande).


## 7. Changer la couleur principale

C'est le seul changement qui se fait dans un autre fichier.

Fichier : style.css (à la racine du dépôt)

Cherchez : --bleu: #2E6BFF;

Il apparaît 1 fois, tout en haut du fichier. Remplacez #2E6BFF par le
nouveau code couleur, par exemple #1F5BEB. Toute la page suit.

Attention : le texte blanc des boutons doit rester lisible. Vérifiez la
couleur sur webaim.org/resources/contrastchecker avec le blanc #FFFFFF : le
résultat doit être d'au moins 4.5:1.

Le logo et les icônes (assets/logo.svg, favicon.svg) gardent le bleu du logo :
ne les changez que si le logo lui-même change.


## 8. Ajouter un vrai témoignage

Seulement avec un vrai client, avec son accord écrit, et ses mots exacts.

Partie : 7. TÉMOIGNAGES

Cherchez : liste: []

Il apparaît 1 fois. Tant que la liste est vide, la section n'apparaît pas sur
le site. Remplacez cette ligne par (même décalage que « liste: [] ») :

    liste:
      - texte: >-
          Les mots exacts du client.
        auteur: >-
          Grâce M., pharmacie, Poto-Poto

Le modèle est aussi écrit juste au-dessus dans le fichier, en explication.
Pour un deuxième témoignage, recopiez le bloc qui commence par « - texte: »
juste en dessous du premier.


## 9. L'année en bas de page

Rien à faire : l'année se met à jour toute seule.

Si vous voulez changer « Brazzaville, République du Congo » à côté de
l'année : partie 9. PIED DE PAGE, cherchez « lieu: » (1 fois).


## 10. Changer l'image d'aperçu (WhatsApp, Facebook)

C'est l'image qui s'affiche quand quelqu'un partage le lien du site. Comme
c'est une image, son texte ne se change pas dans textes.yml.

Fichier : assets/partage.png

Le plus simple : préparez une image de 1200 pixels de large sur 630 pixels de
haut (par exemple avec Canva, dimensions personnalisées), enregistrez-la en
PNG sous le nom exact partage.png, puis sur GitHub ouvrez le dossier assets,
cliquez sur « Add file », puis « Upload files », et déposez-la : elle
remplace l'ancienne. Ne changez pas le nom du fichier.

L'image actuelle a été fabriquée à partir de outils/partage.html (voir
README.md) : un développeur peut la regénérer en une commande.

WhatsApp garde l'ancienne image en mémoire quelques jours : c'est normal si
le changement ne se voit pas tout de suite.
