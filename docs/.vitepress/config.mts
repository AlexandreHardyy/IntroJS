import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Introduction JavaScript",
  description: "Cours de JavaScript pour la 2ème Année",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Introduction', link: '/seance-1/' },
      { text: 'Ressources', link: '/ressources' }
    ],

    sidebar: [
      {
        text: 'Partie 1 : Les Fondations',
        items: [
          { text: 'Séance 1 : Les Bases Complètes', link: '/seance-1/' }
        ]
      },
      {
        text: 'Partie 2 : Le Web Interactif',
        items: [
          { text: 'Séance 4 : Le DOM', link: '/seance-4/' },
          { text: 'Séance 5 : Événements', link: '/seance-5/' }
        ]
      },
      {
        text: 'Partie 3 : Asynchronisme & Application',
        items: [
          { text: 'Séance 6 : Asynchronisme', link: '/seance-6/' },
          { text: 'Séance 7 : JS Moderne & Stockage', link: '/seance-7/' },
          { text: 'Séance 8 : Projet Final', link: '/seance-8/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' } 
    ],
    
    footer: {
      message: 'Support de cours pour 2ème Année.',
      copyright: 'Copyright © 2024 Alexandre Hardy'
    }
  }
})
