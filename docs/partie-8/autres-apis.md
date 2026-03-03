# Les Autres APIs Web

Nous avons déjà manipulé intensivement la plus importante des APIs fournies par le navigateur : **L'API DOM** avec l'objet global `document` (pour créer des boutons ou cibler des balises HTML) ou l'Asynchronisme et Fetch. Nous connaissons aussi l'API de base du Web Storage.

Mais il existe, dissimulées dans tout navigateur moderne (Chrome, Firefox...), des dizaines et des dizaines d'APIs supplémentaires pour interagir avec le système ou rendre les pages webs magiques. On en compte en 2024 près d'une centaine.

Voici un aperçu de quelques-unes des plus emblématiques.

## 1. Window API

C'est "l'objet père" par excellence. Il incarne globalement toute la "fenêtre de l'onglet" de votre navigateur web.
Le DOM (`document`) ainsi que `localStorage` se situent virtuellement en fait dans window (il s'agit de `window.document` et `window.localStorage`), mais par commodité on n'écrit jamais le `window` précédent.

- `window.innerWidth` & `window.innerHeight` : Donneront la largeur et hauteur exactes de l'espace blanc du navigateur en pixels. Très pratique pour réaliser des choses responsives.
- `window.scrollTo(0, 500)` : Fera automatiquement descendre la page web (l'onglet visuel) du client vers le bas de 500px sans intervention "utilisateur" avec la souris de sa part !

## 2. API Geolocation

Avec la permission de l'utilisateur, un bout de script JavaScript peut récupérer les coordonnées GPS d'un ordinateur si celui-ci a autorisé ce comportement (grâce à son IP ou sa balise réseau local). C'est idéal pour afficher une carte locale Google Maps du restaurant le plus proche, etc...

```javascript
navigator.geolocation.getCurrentPosition(
  function(positionInfos) {
    // Si l'utilisateur clique sur "Autoriser ma localisation" dans le popup.
    console.log("Latitude: " + positionInfos.coords.latitude);
    console.log("Longitude: " + positionInfos.coords.longitude);
  },
  function(erreur) {
    // Si l'utilisateur bloque la popup ou n'a pas internet.
    console.error("Accès à la géolocalisation refusé/impossible", erreur);
  }
);
```

## 3. L'API Notification

Il s'agit des petites bulles pop-up très intrusives qui montent et s'affichent par-dessus votre Bureau ou Menu Démarrer (ou écran d'accueil d'un téléphone mobile) lors de la réception d'un événement, même lorsque la page web est minimisée ou en arrière-plan inactif, sous prétexte d'alerter le propriétaire en cours de lecture d'une vidéo plein-écran YouTube. 
Un développeur frontend peut décider quand envoyer de telles notifications locales si une alerte serveur est détectée comme critique (par le biais d'un appel API périodique Fetch ou de web sockets, par exemple).

> [!NOTE]
> Le reste de ces APIs incroyables sont souvent spécifiques, comme l'API WebRTC pour ouvrir et transmettre les flux vidéos d'une Webcam depuis Chrome à distance à une autre personne en P2P (Peer To Peer Internet), l'API Clipboard pour lire le copier-coller du clavier utilisateur, l'API Media Devices (pour capter le microphone de l'utilisateur, ce qui est très pratique pour WhatsApp Web ou Teams par exemple), etc... Vous avez l'embarras du choix !
