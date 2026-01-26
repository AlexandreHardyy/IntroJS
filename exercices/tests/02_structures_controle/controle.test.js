import { describe, expect, it } from 'vitest';
import { estPair } from '../../02_structures_controle/exo1';
import { categorieAge } from '../../02_structures_controle/exo2';
import { sommeJusqua } from '../../02_structures_controle/exo3';
import { compterVoyelles } from '../../02_structures_controle/exo4';

describe('02_structures_controle', () => {
    describe('exo1: estPair', () => {
        it('doit retourner vrai pour les nombres pairs', () => {
            expect(estPair(2)).toBe(true);
            expect(estPair(0)).toBe(true);
            expect(estPair(-4)).toBe(true);
        });
        it('doit retourner faux pour les nombres impairs', () => {
            expect(estPair(1)).toBe(false);
            expect(estPair(3)).toBe(false);
            expect(estPair(-5)).toBe(false);
        });
    });

    describe('exo2: categorieAge', () => {
        it('doit identifier les enfants', () => {
            expect(categorieAge(5)).toBe('Enfant');
            expect(categorieAge(11)).toBe('Enfant');
        });
        it('doit identifier les adolescents', () => {
            expect(categorieAge(12)).toBe('Adolescent');
            expect(categorieAge(17)).toBe('Adolescent');
        });
        it('doit identifier les adultes', () => {
            expect(categorieAge(18)).toBe('Adulte');
            expect(categorieAge(50)).toBe('Adulte');
        });
    });

    describe('exo3: sommeJusqua', () => {
        it('doit calculer la somme jusqu a n', () => {
            expect(sommeJusqua(3)).toBe(6);
            expect(sommeJusqua(5)).toBe(15);
        });
        it('doit retourner 0 pour 0', () => {
             expect(sommeJusqua(0)).toBe(0);
        });
    });

    describe('exo4: compterVoyelles', () => {
        it('doit compter les voyelles', () => {
            expect(compterVoyelles('bonjour')).toBe(3); // o, o, u
            expect(compterVoyelles('chat')).toBe(1);
        });
        it('doit gérer les majuscules', () => {
            expect(compterVoyelles('HELLO')).toBe(2);
        });
        it('doit gérer les chaines sans voyelles', () => {
            expect(compterVoyelles('rhythm')).toBe(1); // y est une voyelle en français souvent considérée. Consigne "a, e, i, o, u, y"
            expect(compterVoyelles('bcdfghjklmnpqrstvwxz')).toBe(0);
        });
    });
});
