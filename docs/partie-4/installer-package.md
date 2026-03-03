# Initialiser et installer un package

Pour pouvoir utiliser NPM dans un projet, il faut d'abord l'initialiser. Cette étape permet de créer la configuration de base de votre projet.

## Initialiser un projet avec NPM

Ouvrez votre terminal, placez-vous dans le dossier de votre projet, et tapez :

```bash
npm init
```

NPM va vous poser plusieurs questions (nom du projet, version, description, point d'entrée, auteur, etc.). 
Si vous voulez passer cette étape et tout accepter par défaut, vous pouvez utiliser :

```bash
npm init -y
```

Cela va générer un fichier `package.json` dans votre dossier.

## Installer un premier package

Une fois le projet initialisé, vous pouvez installer des librairies externes.
La commande générale est `npm install <nom_du_package>`.

Par exemple, pour installer la librairie `lodash` (très populaire pour la manipulation de données) :

```bash
npm install lodash
```

### Que se passe-t-il lors de l'installation ?

1. NPM télécharge le code de `lodash` et le place dans un nouveau dossier appelé `node_modules/`.
2. Il met à jour votre fichier `package.json` pour ajouter `lodash` dans la liste de vos dépendances (`dependencies`).
3. Il crée ou met à jour le fichier `package-lock.json`.

> [!WARNING]
> Le dossier `node_modules` peut devenir **très** lourd. Il **ne doit jamais** être versionné (poussé sur GitHub). Pensez toujours à créer un fichier `.gitignore` contenant `node_modules/`.
