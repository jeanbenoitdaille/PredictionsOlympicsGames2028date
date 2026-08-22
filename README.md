# PredictionsOlympicsGames2028date

Exercice JavaScript sur la manipulation de dates et le calcul d’un écart en jours.

## Objectif pédagogique

Manipuler :

- l’objet `Date` ;
- `getFullYear()`, `getMonth()` et `getDate()` ;
- `getTime()` ;
- `toLocaleString()` avec la locale `fr-FR` ;
- la conversion de millisecondes en jours.

## Fonctionnement

Le script crée une date de début fixée au 21 juillet 2028, calcule une date de fin 16 jours plus tard, affiche ces dates en français, récupère la date courante puis calcule l’écart entre cette date et la date de début.

## Limites historiques

Malgré le nom du dépôt, le script ne réalise aucune prédiction sportive. Les dates sont codées en dur et le résultat en jours est un nombre décimal non arrondi.

L’exercice ne vérifie pas si les dates codées correspondent au calendrier officiel d’un événement réel ; il illustre uniquement les opérations sur les dates JavaScript.

## Fichier principal

`index.js`

## Exécution

```bash
node index.js
```

## Statut

Exercice d’apprentissage historique.

## Consolidation prévue

Candidat à une future fusion dans `learning-javascript/dates-and-calendar/date-differences/`.
