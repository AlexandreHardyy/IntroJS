import { createInterface } from 'readline';

/**
 * Utilitaire de saisie console.
 * 
 * Cette fonction vous permet de poser une question à l'utilisateur dans la console
 * et de récupérer sa réponse sous forme de Promise (string).
 * 
 * Usage :
 *   import { input } from './input.js';
 *   const reponse = await input('Quel est votre nom ? ');
 *   console.log(`Bonjour ${reponse} !`);
 * 
 * @param {string} question - Le texte affiché avant la saisie
 * @returns {Promise<string>} La réponse de l'utilisateur
 */
export function input(question) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}
