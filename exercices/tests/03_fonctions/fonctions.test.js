import { describe, expect, it } from 'vitest';
import { convertirCelsiusFahrenheit } from '../../03_fonctions/exo1';
import { estPalindrome } from '../../03_fonctions/exo2';
import { trouverMax } from '../../03_fonctions/exo3';
import { calculerRemise } from '../../03_fonctions/exo4';
import { estPremier } from '../../03_fonctions/exo5';
import { fibonacci } from '../../03_fonctions/exo6';

describe('03_fonctions', () => {
    describe('exo1: convertirCelsiusFahrenheit', () => {
        it('doit convertir 0°C en 32°F', () => {
            expect(convertirCelsiusFahrenheit(0)).toBe(32);
        });
        it('doit convertir 100°C en 212°F', () => {
            expect(convertirCelsiusFahrenheit(100)).toBe(212);
        });
    });

    describe('exo2: estPalindrome', () => {
        it('doit reconnaitre un palindrome simple', () => {
            expect(estPalindrome('radar')).toBe(true);
        });
        it('doit ignorer la casse', () => {
            expect(estPalindrome('Radar')).toBe(true);
        });
        it('doit retourner false pour un non-palindrome', () => {
            expect(estPalindrome('bonjour')).toBe(false);
        });
    });

    describe('exo3: trouverMax', () => {
        it('doit trouver le max', () => {
            expect(trouverMax(1, 5, 2)).toBe(5);
            expect(trouverMax(10, 3, 2)).toBe(10);
            expect(trouverMax(1, 2, 7)).toBe(7);
        });
    });

    describe('exo4: calculerRemise', () => {
        it('doit calculer le prix remisé', () => {
            expect(calculerRemise(100, 20)).toBe(80);
            expect(calculerRemise(50, 50)).toBe(25);
        });
    });

    describe('exo5: estPremier', () => {
        it('doit reconnaitre les nombres premiers', () => {
            expect(estPremier(2)).toBe(true);
            expect(estPremier(7)).toBe(true);
            expect(estPremier(13)).toBe(true);
        });
        it('doit rejeter les nombres non premiers', () => {
            expect(estPremier(1)).toBe(false);
            expect(estPremier(4)).toBe(false);
            expect(estPremier(15)).toBe(false);
        });
    });

     describe('exo6: fibonacci', () => {
        it('doit calculer la suite de fibonacci', () => {
            expect(fibonacci(0)).toBe(0);
            expect(fibonacci(1)).toBe(1);
            expect(fibonacci(2)).toBe(1); // 1+0
            expect(fibonacci(5)).toBe(5); // 0,1,1,2,3,5
            expect(fibonacci(10)).toBe(55);
        });
    });
});
