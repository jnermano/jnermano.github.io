# Portfolio - Ermano Nicolas Joseph

Portfolio bilingue publié avec GitHub Pages:

https://jnermano.github.io/

## Architecture

Le site est volontairement statique:

- `index.html`: contenu et structure;
- `styles.css`: mise en page responsive;
- `app.js`: langue, navigation et animations;
- `img/`: portrait et preuves visuelles des projets.

Aucune compilation ni dépendance locale n'est nécessaire.

## Développement local

Le fichier `index.html` peut être ouvert directement. Pour tester avec un serveur local:

```bash
python3 -m http.server 8080
```

Puis ouvrir:

```text
http://127.0.0.1:8080/
```

## Mise à jour

Les textes français et anglais utilisent les attributs `data-fr` et `data-en`.

Pour ajouter un projet:

1. ajouter les images sous `img/projects/`;
2. dupliquer un bloc `article` dans la section `#work`;
3. renseigner les deux langues;
4. vérifier le rendu mobile et desktop.

## Confidentialité

Le site ne contient aucun formulaire, outil de suivi, pixel publicitaire ou script d'analytique. Le contact utilise un lien `mailto:`.
