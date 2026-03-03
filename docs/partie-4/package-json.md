# Le package.json et package-lock.json

Ces deux fichiers sont le cœur de la gestion de votre projet Node.js.

## Le package.json

Le fichier `package.json` est le fichier de configuration de votre projet. Il contient :

1. **Les métadonnées du projet** : nom, version, description, auteur, licence.
2. **Les scripts** : des raccourcis de commandes terminal (ex: pour démarrer ou builder le projet).
3. **Les dépendances (dependencies)** : Ce sont les librairies **indispensables** au fonctionnement de votre application en production (ex: `react`, `lodash`, `axios`).
4. **Les dépendances de développement (devDependencies)** : Ce sont les librairies utilisées **uniquement pendant le développement** (ex: outils de test, Vite, TypeScript, Eslint).

**Exemple de structure :**
```json
{
  "name": "mon-super-projet",
  "version": "1.0.0",
  "description": "Un projet génial",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

> [!NOTE]
> Le symbole `^` devant la version (`^4.17.21`) indique que NPM est autorisé à installer des versions mineures ou des patchs plus récents, mais pas de version majeure (qui pourrait casser le code).

## Le package-lock.json

L'écosystème JavaScript évolue très vite. Si vous installez `lodash` aujourd'hui, vous aurez la version `4.17.21`. Si un de vos collègues clone votre projet dans 6 mois et tape `npm install`, il pourrait télécharger la version `4.18.0` en raison du symbole `^`. 

Parfois, même des mises à jour mineures peuvent créer des bugs inattendus. 

C'est là qu'intervient le **`package-lock.json`**.
- Il verrouille **exactement** les versions de chaque dépendance installée (ainsi que les sous-dépendances des librairies elles-mêmes).
- Il garantit que **tous** les développeurs de l'équipe travaillant sur le projet, ainsi que le serveur de production, utiliseront le même arbre exact de dépendances.

> [!IMPORTANT]
> Contrairement à `node_modules/`, les fichiers `package.json` ET `package-lock.json` **doivent** être versionnés et poussés sur Git.
