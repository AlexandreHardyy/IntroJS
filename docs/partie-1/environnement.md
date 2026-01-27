# Environnement de Développement

Pour développer des applications Web modernes, écrire du code dans un simple fichier texte ne suffit plus. Nous utilisons un écosystème d'outils puissant qui repose sur **Node.js**.

## 1. Node.js : Le Moteur

### Qu'est-ce que c'est ?
**Node.js** est un environnement d'exécution JavaScript (un *runtime*) construit sur le moteur **V8** de Chrome (celui qui fait tourner JS dans le navigateur).
Simplement dit : il permet d'exécuter du JavaScript **en dehors** du navigateur, directement sur votre ordinateur ou sur un serveur.

### À quoi ça sert ?
C'est la pièce maîtresse du développement moderne. Il a deux utilités principales :
1.  **Côté Serveur (Backend)** : Créer des API, des bases de données, des serveurs Web (comme PHP ou Python).
2.  **Côté Outils (Tooling)** : C'est ce qui nous intéresse le plus ici. Node.js permet de faire tourner tous nos outils de développement (compilateurs, optimiseurs d'images, serveurs de test, etc.). Sans Node.js, pas de React, pas de Vite, pas d'outils modernes.

---

## 2. Les Gestionnaires de Paquets (NPM & Co)

Pour ne pas réinventer la roue, on utilise du code écrit par d'autres (librairies). Ces morceaux de code sont appelés des **paquets** (packages). Un gestionnaire de paquets permet de les télécharger, les mettre à jour et gérer leurs dépendances.

### NPM (Node Package Manager)
C'est l'outil installé par défaut avec Node.js. Il est composé de deux choses :
*   **Le Registre** : Une immense base de données en ligne contenant des millions de paquets open-source.
*   **La Ligne de Commande (CLI)** : L'outil pour interagir avec ce registre.

**Fichiers clés :**
*   `package.json` : La carte d'identité de votre projet. Il liste les paquets nécessaires (ex: "J'ai besoin de React version 18").
*   `package-lock.json` : Une "photo" précise de l'arbre des dépendances installées pour garantir que tout le monde ait exactement les mêmes versions.

**Commandes de base :**
- `npm init -y` : Crée un `package.json` rapide.
- `npm install` (ou `npm i`) : Installe toutes les dépendances listées dans le `package.json`.
- `npm install <nom>` : Ajoute un paquet.

### Les Alternatives Modernes
Bien que NPM soit le standard, d'autres outils existent pour améliorer la vitesse ou la gestion de l'espace disque :

1.  **Yarn** (par Meta/Facebook) : Créé à l'époque pour combler les lenteurs de NPM. Très populaire dans l'écosystème React.
2.  **PNPM** (Performant NPM) :
    *   **Rapidité** : Extrêmement rapide.
    *   **Espace Disque** : Sa grande force. Contrairement à NPM qui copie les fichiers pour chaque projet, PNPM utilise un système de stockage global et des liens. Si vous avez 10 projets utilisant la même version de React, PNPM ne l'écrit qu'une seule fois sur le disque !
3.  **Bun** : Le nouveau venu (2023/2024). C'est à la fois une alternative à Node.js (un runtime) ET un gestionnaire de paquets. Il est écrit en langage Zig et se focalise sur une **vitesse extrême** (parfois 10x à 100x plus rapide que NPM).

---

## 3. Les Bundlers (Vite, Webpack)

Les navigateurs ne comprennent pas nativement tout le JavaScript moderne, ni comment gérer des milliers de fichiers séparés efficacement. C'est là qu'interviennent les **bundlers** (empaqueteurs).

### Pourquoi les utiliser ?
*   **Performance** : Ils regroupent ("bundle") vos centaines de fichiers `.js` et `.css` en quelques fichiers optimisés et minifiés (taille réduite) pour un chargement rapide.
*   **Compatibilité** : Ils transforment (transpilent) le code JS très récent en code compatible avec d'anciens navigateurs.
*   **Modules** : Ils permettent d'utiliser `import` et `export` facilement pour organiser le code.

### Exemples
*   **Webpack** : L'ancien roi, très puissant mais complexe à configurer.
*   **Vite** (celui qu'on utilise) : Moderne, extrêmement rapide, et ne nécessite presque aucune configuration. Il utilise la puissance des modules natifs du navigateur (ESM) pour un démarrage instantané.

## 4. Serveur de Développement

Pourquoi ne peut-on pas simplement ouvrir notre fichier `index.html` en double-cliquant dessus ?

1.  **Sécurité (CORS)** : Les navigateurs bloquent certaines requêtes (comme charger des modules JS ou des fichiers JSON) si elles ne viennent pas d'un serveur HTTP (`http://...` vs `file://...`).
2.  **Hot Module Replacement (HMR)** : Avec un serveur de dev comme celui de Vite, quand vous sauvegardez un fichier, le navigateur se met à jour **instantanément** sans recharger toute la page. On garde l'état de l'application (ex: un formulaire rempli reste rempli).

## Résumé du Workflow Moderne

1.  On installe nos outils via **NPM**.
2.  On code avec un **Serveur de Dev** (par ex. Vite) pour voir le résultat en temps réel.
3.  On "build" pour la production : le **Bundler** crée une version optimisée du site prête à être mise en ligne.

### Installation d'un projet Vite

Pour démarrer un nouveau projet propre :

```bash
npm create vite@latest mon-projet
cd mon-projet
npm install
npm run dev
```
