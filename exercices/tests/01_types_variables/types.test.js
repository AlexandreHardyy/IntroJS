import { describe, expect, it } from 'vitest';
import { somme } from '../../01_types_variables/exo1';
import { saluer } from '../../01_types_variables/exo2';
import { estMajeur } from '../../01_types_variables/exo3';
import { ajouterDix } from '../../01_types_variables/exo4';

describe('01_types_variables', () => {
    describe('exo1: somme', () => {
        it('doit retourner la somme de deux nombres positifs', () => {
            expect(somme(2, 3)).toBe(5);
        });
        it('doit fonctionner avec des nombres négatifs', () => {
            expect(somme(-1, 5)).toBe(4);
        });
    });

    describe('exo2: saluer', () => {
        it('doit saluer correctement', () => {
            expect(saluer('Alice')).toBe('Bonjour, Alice !');
            expect(saluer('Bob')).toBe('Bonjour, Bob !');
        });
    });

    describe('exo3: estMajeur', () => {
        it('doit retourner true pour 18 ans et plus', () => {
            expect(estMajeur(18)).toBe(true);
            expect(estMajeur(25)).toBe(true);
        });
        it('doit retourner false pour moins de 18 ans', () => {
            expect(estMajeur(17)).toBe(false);
            expect(estMajeur(10)).toBe(false);
        });
    });

    describe('exo4: ajouterDix', () => {
        it('doit convertir la chaîne et ajouter 10', () => {
            expect(ajouterDix('5')).toBe(15);
            expect(ajouterDix('10')).toBe(20);
        });
         it('doit gérer les nombres décimaux ou entiers dans la chaîne', () => {
             // Si on suppose parseInt, ce sera entier. Si Number() ce sera decimal. Consigne dit "nombre entier".
             // On s'attend à ce que l'utilisateur utilise parseInt ou Number. Soyons souple ou strict? Consigne: "nombre entier".
             expect(ajouterDix('0')).toBe(10);
         });
    });
});
