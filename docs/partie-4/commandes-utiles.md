# Les commandes utiles de NPM

Voici un récapitulatif des commandes que vous utiliserez le plus souvent avec NPM :

## Installations

- `npm install` (ou `npm i`) : Installe **toutes** les dépendances listées dans votre `package.json`. C'est la commande à exécuter quand vous clonez un projet depuis GitHub.
- `npm install <nom_package>` : Installe un package spécifique et l'ajoute aux `dependencies`.
- `npm install -D <nom_package>` (ou `--save-dev`) : Installe un package uniquement pour le développement (ex: un linter, un outil de test, Vite). Le package sera listé dans `devDependencies`.
- `npm install -g <nom_package>` : Installe un package de façon globale sur votre ordinateur. À utiliser avec précaution (souvent pour des outils CLI).

## Mises à jour et suppressions

- `npm update <nom_package>` : Met à jour un package vers la dernière version autorisée par votre `package.json`.
- `npm uninstall <nom_package>` : Supprime un package (et le retire du `package.json`).

## Exécution de scripts

Dans votre `package.json`, vous pouvez définir des scripts personnalisés dans la section `"scripts"`.

```json
"scripts": {
  "start": "node index.js",
  "dev": "vite",
  "build": "vite build"
}
```

Pour exécuter ces scripts :
- Les scripts standards (comme `start` ou `test`) peuvent être lancés par : `npm start`
- Les autres (comme `dev` ou `build`) nécessitent le mot clé `run` : `npm run dev` ou `npm run build`.

## npx (Bonus)

`npx` est un outil fourni avec NPM. Il permet d'exécuter un package sans avoir à l'installer globalement sur votre machine.

Par exemple, pour créer un nouveau projet React avec Vite en une seule commande, sans rien installer au préalable :
```bash
npx create-vite@latest mon-projet --template react
```
