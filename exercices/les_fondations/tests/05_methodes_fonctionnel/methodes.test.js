import { describe, expect, it } from 'vitest';
import { compterMots, extraireExtension, nettoyerEmail } from '../../05_methodes_fonctionnel/exo1';
import { doublerNombres, nomsUtilisateurs } from '../../05_methodes_fonctionnel/exo2';
import { nombresPairs, produitsPasChers } from '../../05_methodes_fonctionnel/exo3';
import { calculerSomme, trouverUtilisateurParId } from '../../05_methodes_fonctionnel/exo4';

describe('06_methodes_fonctionnel', () => {

    describe('exo1: Chaînes de caractères', () => {
        it('extraireExtension doit retourner l\'extension', () => {
            expect(extraireExtension("vacances.jpg")).toBe("jpg");
            expect(extraireExtension("rapport.pdf")).toBe("pdf");
            // Cas limite : pas d'extension ? On suppose fichier valide pour l'exo intro
        });

        it('nettoyerEmail doit retirer les espaces et mettre en minuscule', () => {
            expect(nettoyerEmail("  Bob@Email.com ")).toBe("bob@email.com");
            expect(nettoyerEmail("ALICE@GMAIL.COM")).toBe("alice@gmail.com");
        });

        it('compterMots doit retourner le nombre de mots', () => {
            expect(compterMots("Bonjour tout le monde")).toBe(4);
            expect(compterMots("JavaScript")).toBe(1);
            expect(compterMots("")).toBe(0); // Cas vide
        });
    });

    describe('exo2: Map', () => {
        it('doublerNombres crée un nouveau tableau doublé', () => {
            const entiers = [1, 2, 3];
            const result = doublerNombres(entiers);
            expect(result).toEqual([2, 4, 6]);
            // Vérifier immutabilité
            expect(entiers).toEqual([1, 2, 3]);
        });
        
        it('nomsUtilisateurs extrait les noms', () => {
            const users = [{ nom: "A", age: 10 }, { nom: "B", age: 20 }];
            expect(nomsUtilisateurs(users)).toEqual(["A", "B"]);
        });
    });

    describe('exo3: Filter', () => {
        it('nombresPairs ne garde que les pairs', () => {
             expect(nombresPairs([1, 2, 3, 4, 5])).toEqual([2, 4]);
        });

        it('produitsPasChers ne garde que les prix < 50', () => {
            const items = [
                { nom: "A", prix: 10 },
                { nom: "B", prix: 50 }, // Strictement inférieur ? "moins de 50" -> < 50
                { nom: "C", prix: 100 }
            ];
            expect(produitsPasChers(items)).toEqual([{ nom: "A", prix: 10 }]);
        });
    });

    describe('exo4: Find & Reduce', () => {
        const users = [
            { id: 1, nom: "Alice" },
            { id: 2, nom: "Bob" }
        ];

        it('trouverUtilisateurParId trouve le bon user', () => {
            expect(trouverUtilisateurParId(users, 2)).toEqual({ id: 2, nom: "Bob" });
        });

        it('trouverUtilisateurParId retourne undefined si inconnu', () => {
             expect(trouverUtilisateurParId(users, 99)).toBeUndefined();
        });

        it('calculerSomme additionne tout', () => {
             expect(calculerSomme([10, 20, 30])).toBe(60);
             expect(calculerSomme([])).toBe(0);
        });
    });

});
