import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Introduction JavaScript",
  description: "Cours de JavaScript pour la 2ème Année",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Introduction', link: '/partie-1/introduction' },
      { text: 'Ressources', link: '/ressources' }
    ],

    sidebar: [
      {
        text: 'Les Fondations du langage',
        items: [
          { text: 'Introduction', link: '/partie-1/introduction' },
          { text: 'Les Bases Complètes', link: '/partie-1/bases' },
          { text: 'Méthodes & Fonctionnel', link: '/partie-1/methodes-concept-fonctionnel' },
          { text: 'Environnement & Outils', link: '/partie-1/environnement' },
          { text: 'Modules & Import/Export', link: '/partie-1/modules' },
        ]
      },
      {
        text: 'La programmation orientée objet',
        items: [
          { text: 'Introduction', link: '/partie-2/introduction' },
          { text: 'Comprendre les prototypes', link: '/partie-2/prototypes' },
          { text: 'Les Classes', link: '/partie-2/classes' },
          { text: 'Le Constructor', link: '/partie-2/constructor' },
          { text: 'Les Propriétés', link: '/partie-2/proprietes' },
          { text: 'Les Méthodes', link: '/partie-2/methodes' },
          { text: 'Membres Statiques', link: '/partie-2/statique' },
          { text: 'Héritage', link: '/partie-2/heritage' },
          { text: 'Comparaison d\'objets', link: '/partie-2/comparaison' },
          { text: 'Spread Operator', link: '/partie-2/spread' },
        ]
      },
      {
        text: 'Manipulation du DOM',
        items: [
          { text: 'Introduction au DOM', link: '/partie-3/introduction' },
          { text: 'Sélectionner des éléments', link: '/partie-3/selectionner' },
          { text: 'Modifier des éléments', link: '/partie-3/modifier' },
          { text: 'Créer et supprimer', link: '/partie-3/creer-supprimer' },
          { text: 'Les événements', link: '/partie-3/evenements' },
          { text: 'Formulaires', link: '/partie-3/formulaires' },
          { text: 'Traverser le DOM', link: '/partie-3/traverser-dom' },
        ]
      },
      {
        text: 'NPM et Outils de build',
        items: [
          { text: 'Introduction à NPM & Vite', link: '/partie-4/introduction' },
          { text: 'Installer un package', link: '/partie-4/installer-package' },
          { text: 'Les commandes utiles', link: '/partie-4/commandes-utiles' },
          { text: 'Le package.json', link: '/partie-4/package-json' },
        ]
      },
      {
        text: 'Gestion d\'erreur',
        items: [
          { text: 'Introduction', link: '/partie-5/introduction' },
          { text: 'Lancer des erreurs (throw)', link: '/partie-5/throw-custom' },
        ]
      },
      {
        text: 'Asynchronisme',
        items: [
          { text: 'Introduction', link: '/partie-6/introduction' },
          { text: 'setTimeout & setInterval', link: '/partie-6/timers' },
          { text: 'Les Promises', link: '/partie-6/promesses' },
          { text: 'Async / Await', link: '/partie-6/async-await' },
        ]
      },
      {
        text: 'Fetch et Consommation d\'API',
        items: [
          { text: 'Introduction à Fetch', link: '/partie-7/introduction' },
          { text: 'Les Méthodes HTTP', link: '/partie-7/methodes-http' },
          { text: 'Traitement JSON', link: '/partie-7/manipulation-json' },
        ]
      },
      {
        text: 'Les APIs Web',
        items: [
          { text: 'Web Storage', link: '/partie-8/localstorage' },
          { text: 'Autres APIs', link: '/partie-8/autres-apis' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AlexandreHardyy/IntroJS' } 
    ],
    
    footer: {
      message: 'Support de cours pour 2ème Année JS.',
      copyright: 'Copyright © 2026 Alexandre Hardy'
    }
  }
})
