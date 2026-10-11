# Clavier Magique

Une application web en français pour apprendre à taper au clavier AZERTY,
pensée pour les enfants à partir de 7 ans.

## Fonctionnalités

- Cinq niveaux et quinze exercices : repères F/J, rangée du milieu, rangée
  du haut, rangée du bas et phrases complètes.
- Clavier interactif avec contours colorés par doigt, chiffres et accents.
- Mains dessinées en SVG avec indication du doigt à utiliser.
- Mode exercice sans les distractions de l'accueil.
- Consignes vocales avec choix parmi les voix françaises locales disponibles.
- Effets sonores activables indépendamment de la voix.
- Chronomètre, précision, série de réussites et vitesse en mots par minute.
- Bilan de fin d'exercice et étoiles sauvegardées dans le navigateur.
- Boutons précédent, recommencer, suivant et retour aux niveaux.
- Mise en page adaptative et prise en compte des préférences de mouvement réduit.

## Lancer l'application

Aucun framework ni installation de dépendances JavaScript n'est nécessaire.
Avec Python 3 installé, depuis le dossier du projet :

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Ouvrir <http://127.0.0.1:4173>. Arrêter le serveur avec `Ctrl+C`.

L'application peut également être servie par n'importe quel serveur de fichiers
statiques. Il est préférable de passer par HTTP plutôt que d'ouvrir directement
le fichier HTML pour conserver un comportement cohérent du stockage local.

## Utilisation

Choisir un niveau, puis taper sur le clavier physique ou cliquer sur les touches
affichées. Les erreurs ne font pas avancer l'exercice. Les lettres majuscules et
minuscules sont acceptées indifféremment. Les chiffres de la première rangée sont
des repères visuels : aucun exercice numérique n'est actuellement proposé.

Le chronomètre démarre à la première tentative de frappe, erreurs comprises,
et s'arrête à la dernière lettre correcte. Les pauses pendant l'exercice sont
incluses. La vitesse est calculée à partir des caractères corrects, espaces
compris : cinq caractères représentent un mot. Elle reste à zéro pendant la
première seconde, puis s'affiche en mots par minute arrondis.

Les boutons précédent et suivant parcourent en boucle les exercices du niveau
en cours. La continuation après une réussite passe automatiquement au niveau
suivant à la fin des trois exercices. Changer ou recommencer un exercice
réinitialise la tentative, le temps et la vitesse.

## Voix, connexion et données

La voix doit être activée par un clic. L'application utilise l'API de synthèse
vocale du navigateur et uniquement les voix françaises signalées comme locales.
Microsoft Julie est privilégiée lorsqu'elle est disponible et qu'aucun choix
précédent n'est enregistré. Le résultat dépend des voix installées sur l'appareil.
Sans voix française locale, un message invite à en installer une. Aucun fichier
de voix Microsoft n'est inclus ni redistribué.

Les étoiles par niveau et le choix de voix sont enregistrés dans `localStorage`.
Il n'y a ni compte, ni serveur applicatif, ni outil d'analyse. Effacer les données
du site dans le navigateur réinitialise ces préférences.

Les polices sont chargées depuis Google Fonts : cette requête externe nécessite
une connexion et transmet les métadonnées habituelles d'une requête HTTP au
service. Sans connexion, les polices de secours du navigateur sont utilisées.
Les sons sont générés localement avec Web Audio ; les illustrations sont dessinées
en CSS/SVG. Les emojis sont affichés par les polices du système.

## Structure

- [index.html](index.html) : interface.
- [styles.css](styles.css) : styles et mise en page.
- [app.js](app.js) : exercices, guidage, voix, statistiques et sauvegarde.
- [LICENSE](LICENSE) : licence MIT du code.
- [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) : ressources tierces et licences.

## Validation

Avec Node.js installé, vérifier la syntaxe :

```powershell
node --check .\app.js
```

Pour un contrôle fonctionnel : vérifier le choix d'un niveau, une erreur de
frappe, la couleur du doigt et de la touche, les boutons précédent/suivant,
le démarrage et l'arrêt des compteurs, le bilan, les commandes vocales et
l'affichage sur écran étroit. Aucun outil de tests automatisés n'est inclus.

## Licence

Le code et les illustrations propres au projet sont distribués sous
[licence MIT](LICENSE). Les polices tierces conservent leur licence SIL OFL 1.1,
distincte de MIT : voir les [mentions tierces](THIRD_PARTY_NOTICES.md).
