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
